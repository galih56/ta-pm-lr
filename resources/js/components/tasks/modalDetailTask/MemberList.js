import React,{useState,useContext,useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import UserContext from '../../../context/UserContext';
import makeStyles from '@material-ui/styles/makeStyles';
import UserSearchBar from '../../widgets/UserSearchBar';
import axios from 'axios';
import toast from 'react-hot-toast';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%', maxWidth: '36ch', backgroundColor: theme.palette.background.paper,
    },
    photoProfileBg: { backgroundColor: '#616161' }
}));
const MemberList=({isEdit,data,setData,detailProject,exceptedData})=>{
    const global = useContext(UserContext);
    const [members,setMembers]=useState([]);
    const [newMembers,setNewMembers]=useState([])
    const classes = useStyles();
    
    useEffect(()=>{
        setMembers(data.members?data.members:[]);
    },[data.members])

    const addMembers = (body) => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}task-members`;
        const toast_loading = toast.loading('Adding a new member...'); 
        axios.post(url, body)
            .then((result) => {                      
                const newDetailTask={...data,members:result.data};
                setData(newDetailTask);
                if(data.parent_task) global.dispatch({ type: 'store-detail-subtask', payload: newDetailTask })
                else global.dispatch({ type: 'store-detail-task', payload: newDetailTask })
                toast.dismiss(toast_loading)
                toast.success(<b>Successfuly updated</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
    }
    
    const removeMember = (user) => {
        const url = process.env.MIX_BACK_END_BASE_URL + `task-members/${user.task_members_id}`;
        const toast_loading = toast.loading('Adding a new member...'); 
        axios.delete(url, body)
            .then((result) => {                      
                var newMemberList=members.filter(function(member){
                    if(member.task_members_id!=user.task_members_id) return member;
                });
                setMembers(newMemberList);
                const newDetailTask={...data,members:newMemberList};
                setData(newDetailTask);
                if(data.parent_task) global.dispatch({ type: 'store-detail-subtask', payload: newDetailTask })
                else global.dispatch({ type: 'store-detail-task', payload: newDetailTask })
                toast.dismiss(toast_loading)
                toast.success(<b>Successfully deleted</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
    }

    const handleUserbarOnChange=(users)=> setNewMembers(users);
    const handleButtonAddOnClick=()=>addMembers( { tasks_id: data.id, users:newMembers });
    return(
        <>
        <Grid container>
         {isEdit?(
             <>
                 <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'0.5em'}}>
                    <Typography>Assigned to : </Typography>
                 </Grid>
                 <Grid item lg={12} md={12} sm={12} xs={12}>
                     <UserSearchBar detailProject={detailProject} exceptedData={exceptedData}  onChange={handleUserbarOnChange} userOnly={true}/>
                    </Grid>
                 {[1,2,4,5].includes(global.state.role.id)?(
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Button style={{float:'right',marginTop:'0.5em'}} onClick={handleButtonAddOnClick}  variant="contained" color="secondary">Invite</Button>
                    </Grid>
                 ):null}
            </>):(
                 <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography>Assigned to : </Typography>
                 </Grid>
                 )}
             </Grid>
            <List>
                {members.map(member=> <CustomListItem key={member.id} classes={classes} isEdit={isEdit} member={member} onClick={()=>removeMember(member)} logged_in_user_role={global.state.role}/>)}
            </List>

        </>
    )
}

const CustomListItem=({classes,isEdit,member,onClick,logged_in_user_role})=>{
    return <React.Fragment key={member.id}>
        <ListItem alignItems="flex-start" >
            <ListItemAvatar>
                {member.profile_picture_path?
                <Avatar alt={"Photo profile " + (member.is_user?member.name:member.institution)} src={`${process.env.MIX_BACK_END_BASE_URL}/${member.profilePicturePath}`}/>:
                <Avatar alt={"Photo profile " + (member.is_user?member.name:member.institution)} className={classes.photoProfileBg}>{(member.is_user?member.name:member.institution)?.charAt(0).toUpperCase()}</Avatar>}
            </ListItemAvatar>
            <ListItemText primary={member.is_client?`${member.institution} (Client)`:(member.name)} secondary={<Typography component="span" variant="body2" className={classes.inline} color="textPrimary">{member.is_user?member.role?.name:member.institution}</Typography>}/>
            {isEdit && [1,2,4].includes(logged_in_user_role?.id)?(
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Remove" onClick={onClick} size="large">
                    <CancelIcon />
                </IconButton>
            </ListItemSecondaryAction>):<></>}
        </ListItem>
        <Divider variant="inset" component="li" />
    </React.Fragment>;
}
export default MemberList;