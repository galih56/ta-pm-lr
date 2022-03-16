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
import toast, { Toaster } from 'react-hot-toast';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%', maxWidth: '36ch', backgroundColor: theme.palette.background.paper,
    },
    photoProfileBg: { backgroundColor: '#616161' }
}));
const MemberList=({isEdit,data,setData,exceptedData,detailProject})=>{
    const global = useContext(UserContext);
    const [members,setMembers]=useState([]);
    const [newMembers,setNewMembers]=useState([])
    const classes = useStyles();
    
    useEffect(()=>{
        setMembers(data.members?data.members:[]);
    },[data.members])

    const addMembers = (body) => {
        if(newMembers.length==0){
            toast.error("Please select new participants")
        }

        const url = `${process.env.MIX_BACK_END_BASE_URL}meetings/add-meeting-members`;
        const toast_loading = toast.loading('Adding a new member...');
        axios.patch(url,body)
            .then((result) => {  
                const data = result.data;
                var meeting=data.meeting;
                if(data.member){
                    meeting.member=data.member;
                }
                toast.dismiss(toast_loading)
                global.dispatch({ type: 'store-detail-meeting', payload: meeting })
                setData(meeting);
                toast.success( <b>Successfuly updated</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
    }
    
    const removeMember = (user) => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}meetings/remove-meeting-members`;
        const toast_loading = toast.loading('Removing a member...');
        axios.patch(url, {id:data.id,members:[user],users_id:global.state.id})
            .then((result) => {  
                var newMemberList=members.filter(function(member){
                    if(member.id!=user.id) return member;
                });
                setMembers(newMemberList);
                setData({...data,members:newMemberList});
                toast.dismiss(toast_loading)
                toast.success( <b>Successfuly updated</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
    }

    return(
        <>
        <Grid container>
         {isEdit?(
             <>  
                 <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'0.5em'}}>
                    <Typography>Participants : </Typography>
                 </Grid>
                 {(data.creator?.id==global.state.id)?( 
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <UserSearchBar 
                            detailProject={detailProject}
                            exceptedData={[...exceptedData]} 
                            onChange={(users)=>{
                                setNewMembers(users);
                            }}
                            userOnly={true}
                            withAdmin={true}
                        />
                    </Grid>  
                 ):null}
                 <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Button style={{float:'right'}} onClick={()=>{
                        addMembers( { id: data.id, members:newMembers,users_id:global.state.id });
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
                        <CustomListItem key={member.id} classes={classes} 
                            meeting={{id:data.id,member:data.member,creator:data.creator}}
                            isEdit={isEdit} member={member} onClick={()=>removeMember(member)}/>
                    )
                })}
            </List>

        </>
    )
}

const CustomListItem=({classes,isEdit,meeting,member,onClick})=>{
    const global = useContext(UserContext);
    return <React.Fragment key={member.id}>
        <ListItem alignItems="flex-start" >
            <ListItemAvatar>
                {member.profile_picture_path?
                <Avatar alt={"Photo profile " + (member.is_user?member.name:member.institution)} src={`${process.env.MIX_BACK_END_BASE_URL}/${member.profilePicturePath}`}/>:
                <Avatar alt={"Photo profile " + (member.is_user?member.name:member.institution)} className={classes.photoProfileBg}>{(member.is_user?member.name:member.institution)?.charAt(0).toUpperCase()}</Avatar>}
            </ListItemAvatar>
            <ListItemText
                primary={member.name}
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
            {/* Jika dalam mode edit & member ini adalah user yg login button delete ditampilkan */}
            {(isEdit && (member?.id!=global.state?.id && meeting.member?.id!=member.id))?(
                <ListItemSecondaryAction>
                    <IconButton
                        edge="end"
                        aria-label="Remove"
                        onClick={onClick}
                        size="large">
                        <CancelIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            ):<></>}
        </ListItem>
        <Divider variant="inset" component="li" />
    </React.Fragment>;
}
export default MemberList;