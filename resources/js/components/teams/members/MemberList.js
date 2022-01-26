import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import makeStyles from '@material-ui/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/core/Alert';
import FormAddNewMember from '../FormAddNewMember';
import ModalDetailMember from './ModalDetailMember/ModalDetailMember';
import CancelIcon from '@material-ui/icons/Cancel';
import UserContext from '../../../context/UserContext';
import toast from 'react-hot-toast';

const useStyles = makeStyles((theme) => ({
    root: { width: '100%', backgroundColor: theme.palette.background.paper, },
    inline: { display: 'inline', },
}));

let initStateUser = { id: null, name: '', email: '', role: { id: null, name: '' },team_members_id:null }
const MemberList = ({teamId,data}) => {
    const classes = useStyles();
    let global=useContext(UserContext);
    const [openFormCreate,setOpenFormCreate]=useState(false);
    const [rows,setRows]=useState([]); 
    const [clickedUser, setClickedUser] = useState(initStateUser);
    const [modalOpen, setModalOpen] = useState(false);
    
    const handleModalOpen = (user, open) => {
        setModalOpen(open);
        setClickedUser(user);
    }

    const removeMember=(member)=>{
        const url = `${process.env.MIX_BACK_END_BASE_URL}team-members/${member.team_members_id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(axios.delete(url),
        {
            loading: 'Deleting...',
            success: (result)=>{                        
                setRows(rows.filter((row)=>{
                    if(row.id!=member.id) return row;
                }));
                return <b>Successfully deleted</b>
            },
            error: (error)=>{
                if(error.response.status==401) return <b>Unauthenticated</b>;
                if(error.response.status==422) return <b>Some required inputs are empty</b>;
                return <b>{error.response.statusText}</b>;
            },
        });
    }
    
    useEffect(()=> {
        setRows(data)
    },[data]);

    return (
        <React.Fragment>
            <Typography variant="h6">Members</Typography>
            <Button onClick={()=>setOpenFormCreate(true)}>Add a new member</Button>
            <FormAddNewMember open={openFormCreate} 
                teamId={teamId}
                closeModal={()=>setOpenFormCreate(false)}
                onCreate={(members)=>{
                    setRows(members)
                }}/>
            <List className={classes.root}>
                {rows.length?rows.map(function(member){
                    return <>
                        <ListItem alignItems="flex-start" 
                            key={member.id}
                            style={{cursor:'pointer'}} 
                            // onClick={()=> handleModalOpen(member, true)}
                            >
                            {(member.profile_picture_path && member.name)?(
                            <ListItemAvatar>
                                    <Avatar alt={"Photo profile " + member.name} src={`${process.env.MIX_BACK_END_BASE_URL}/${member.profilePicturePath}`}/>:
                                    <Avatar alt={"Photo profile " + member.name} className={classes.photoProfileBg}>{member.name?.charAt(0).toUpperCase()}</Avatar>
                            </ListItemAvatar>):<></>}
                            <ListItemText
                                primary={member.name} 
                                secondary={
                                    <React.Fragment>
                                        {member.role?(
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            > {member.role.name}  </Typography>
                                        ):<></>}
                                        {member.role?member.role.name:null}
                                    </React.Fragment>
                                }
                            />
                            {[1,2,4].includes(global.state.role?.id)?(
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        aria-label="Remove"
                                        onClick={()=>removeMember(member)}
                                        size="large">
                                        <CancelIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            ):null}
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </>;
                }):(<Alert severity="info">Please add new member.</Alert>)}
            </List>
           {(clickedUser.id && modalOpen == true)?(
                <ModalDetailMember
                    open={modalOpen}
                    closeModal={() => handleModalOpen(initStateUser, false) }
                    initialState={clickedUser} 
                    onUpdate={(newValue)=>{
                        setRows(rows.map(function(row){
                            if(row.id==newValue.id) return newValue;
                            else return row;
                        }));
                    }}
                    onDelete={removeMember}
                    />
            ):null}
        </React.Fragment>
    );
}

export default MemberList;
