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
import {useSnackbar} from 'notistack'

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
    const { enqueueSnackbar } = useSnackbar();
    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });
    const classes = useStyles();
    
    useEffect(()=>{
        console.log('memberlist',data.members);
        setMembers(data.members?data.members:[]);
    },[data.members])

    const addMembers = (body) => {
       const url = process.env.MIX_BACK_END_BASE_URL + `task-members`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post(url, body)
            .then((result) => {
                const payload = { tasks_id:data.id, data: data };
                setData({...data,members:[...data.members,...result.data]});
                if(data.is_subtask) global.dispatch({ type: 'store-detail-subtask', payload: payload })
                else global.dispatch({ type: 'store-detail-task', payload: payload })
                handleSnackbar(`Data has been updated`, 'success');
            }).catch((error) => {
                const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }
    
    const removeMember = (user) => {
        const url = process.env.MIX_BACK_END_BASE_URL + `task-members/${user.task_members_id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.delete(url, {id:user.task_members_id})
            .then((result) => {
                var newMemberList=members.filter(function(member){
                    if(member.task_members_id!=user.task_members_id) return member;
                });
                setMembers(newMemberList);
                setData({...data,members:newMemberList});
                const payload = { tasks_id:data.id, data: data };
                if(data.is_subtask) global.dispatch({ type: 'store-detail-subtask', payload: payload })
                else global.dispatch({ type: 'store-detail-task', payload: payload })
                handleSnackbar(`Data has been updated`, 'success');
            }).catch((error) => {
                const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
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
                    <UserSearchBar 
                        detailProject={detailProject}
                        exceptedData={[...exceptedData,data.creator]} 
                        onChange={(users)=>{
                            setNewMembers(users);
                        }}
                        userOnly={true}
                    />
                 </Grid>
                 <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Button style={{float:'right'}} onClick={()=>{
                        addMembers( { tasks_id: data.id, users:newMembers });
                        }} color="primary" >Invite</Button>
                 </Grid>
            </>):(
                 <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography>Assigned to : </Typography>
                 </Grid>
                 )}
             </Grid>
            <List>
                {members.map((member)=>{
                    return(
                        <CustomListItem key={member.id} classes={classes} isEdit={isEdit} member={member} onClick={()=>removeMember(member)}/>
                    )
                })}
            </List>

        </>
    )
}

const CustomListItem=({classes,isEdit,member,onClick})=>{
    return <React.Fragment key={member.id}>
        <ListItem alignItems="flex-start" >
            <ListItemAvatar>
                {member.profile_picture_path?
                <Avatar alt={"Photo profile " + member.name} src={`${process.env.MIX_BACK_END_BASE_URL}/${member.profilePicturePath}`}/>:
                <Avatar alt={"Photo profile " + member.name} className={classes.photoProfileBg}>{member.name?.charAt(0).toUpperCase()}</Avatar>}
            </ListItemAvatar>
            <ListItemText
                primary={member.is_client?`${member.name} (Client)`:member.name}
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
                        <br/>
                        {member.email?member.email:member.phone_number}
                    </>
                }

            />
            {isEdit?(<ListItemSecondaryAction>
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