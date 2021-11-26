import React,{useState,useEffect,useContext} from 'react';
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
        setRows(rows.filter((row)=>{
            if(row.id!=member.id) return row;
        }));
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
                        <ListItem alignItems="flex-start" style={{cursor:'pointer'}} onClick={()=>{
                            handleModalOpen(member, true) 
                        }}>
                            {(member.profile_picture_path && member.name)?(
                            <ListItemAvatar>
                                    <Avatar alt={"Photo profile " + member.name} src={`${process.env.MIX_BACK_END_BASE_URL}/${member.profilePicturePath}`}/>:
                                    <Avatar alt={"Photo profile " + member.name} className={classes.photoProfileBg}>{member.name?.charAt(0).toUpperCase()}</Avatar>
                            </ListItemAvatar>):<></>}
                            <ListItemText
                                primary={member.name} 
                                secondary={
                                    <React.Fragment>
                                        {member.occupation?(
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            > {member.occupation.name}  </Typography>
                                        ):<></>}
                                        {member.role?member.role.name:null}
                                    </React.Fragment>
                                }
                            />
                            {[1,2,4].includes(global.state.occupation?.id)?(
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
