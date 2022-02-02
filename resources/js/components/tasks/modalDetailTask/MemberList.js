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
       const url = process.env.MIX_BACK_END_BASE_URL + `task-members`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.post(url, body),
            {
                loading: 'Adding a new member',
                success: (result)=>{
                    const newDetailTask={...data,members:result.data};
                    setData(newDetailTask);
                    if(data.parent_task) global.dispatch({ type: 'store-detail-subtask', payload: newDetailTask })
                    else global.dispatch({ type: 'store-detail-task', payload: newDetailTask })
                    return <b>Successfuly updated</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }
    
    const removeMember = (user) => {
        const url = process.env.MIX_BACK_END_BASE_URL + `task-members/${user.task_members_id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.delete(url, {id:user.task_members_id}),
            {
                loading: 'Deleting...',
                success: (result)=>{
                    var newMemberList=members.filter(function(member){
                        if(member.task_members_id!=user.task_members_id) return member;
                    });
                    console.log(user,newMemberList);
                    setMembers(newMemberList);
                    const newDetailTask={...data,members:newMemberList};
                    setData(newDetailTask);
                    if(data.parent_task) global.dispatch({ type: 'store-detail-subtask', payload: newDetailTask })
                    else global.dispatch({ type: 'store-detail-task', payload: newDetailTask })
                    return <b>Successfully deleted</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    return(
        <>
        <Grid container>
         {isEdit?(
             <>
                 <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'0.5em'}}>
                    <Typography>Assigned to : </Typography>
                 </Grid>
                 <Grid item lg={12} md={12} sm={12} xs={12}>
                    <UserSearchBar  detailProject={detailProject} exceptedData={[...exceptedData,data.creator]}  onChange={(users)=> setNewMembers(users)} userOnly={true}/>
                 </Grid>
                 {[1,2,4,5].includes(global.state.role.id)?(
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Button style={{float:'right',marginTop:'0.5em'}} onClick={()=>addMembers( { tasks_id: data.id, users:newMembers })}  variant="contained" color="secondary">Invite</Button>
                    </Grid>
                 ):null}
            </>):(
                 <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography>Assigned to : </Typography>
                 </Grid>
                 )}
             </Grid>
            <List>
                {members.map((member)=>{
                    return(
                        <CustomListItem key={member.id} classes={classes} isEdit={isEdit} member={member} onClick={()=>removeMember(member)} logged_in_user_role={global.state.role}/>
                    )
                })}
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
            <ListItemText
                primary={member.is_client?`${member.institution} (Client)`:(member.name)}
                secondary={
                    <>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {member.is_user?member.role?.name:member.institution}
                        </Typography>
                    </>
                }

            />
            {isEdit && [1,2,4].includes(logged_in_user_role?.id)?(<ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    aria-label="Remove"
                    onClick={onClick}
                    size="large">
                    <CancelIcon />
                </IconButton>
            </ListItemSecondaryAction>):<></>}
        </ListItem>
        <Divider variant="inset" component="li" />
    </React.Fragment>;
}
export default MemberList;