import React,{useState,useEffect,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import UserContext from '../../context/UserContext';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CancelIcon from '@material-ui/icons/Cancel';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/core/Autocomplete';
import PeopleIcon from '@material-ui/icons/People';
import TextField from '@material-ui/core/TextField';

export default function TeamList(props) {
    const [teams,setTeams]=useState([]);
    const [options,setOptions]=useState([]);
    const [newTeams,setNewTeams]=useState([])
    const global = useContext(UserContext);

    const getTeams = () => {
        const toast_loading = toast.loading('Loading...');
        const url = process.env.MIX_BACK_END_BASE_URL + `projects/${props.projects_id}/teams`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setTeams(result.data);
                toast.dismiss(toast_loading);
            }).catch((error) => {
                toast.dismiss(toast_loading);
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    const getAllTeams = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + `teams`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url, {})
            .then((result) => {
                setOptions(result.data);
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }


    const deleteTeam = (selected_team_id) => {
        const url = process.env.MIX_BACK_END_BASE_URL + `projects/${props.projects_id}/teams/${selected_team_id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.delete(url),
            {
                loading: 'Deleting...',
                success: (result)=>{
                    return <b>Successfully deleted</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    
        var newTeams=teams.filter((team)=>{
            if(team.id!=selectedTeam.id) return team;
        })
        setTeams(newTeams);
    }

    const addNewTeams = (selectedTeams) => {
        const url = process.env.MIX_BACK_END_BASE_URL + `projects/${props.projects_id}/teams`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
            toast.promise(
                axios.post(url, { projects_id:props.projects_id,teams:selectedTeams}),
                {
                    loading: 'Creating a new team',
                    success: (result)=>{
                        setTeams([...teams,...result.data]);
                        return <b>A new team successfuly created</b>
                    },
                    error: (error)=>{
                        if(error.response.status==401) return <b>Unauthenticated</b>;
                        if(error.response.status==422) return <b>Some required inputs are empty</b>;
                        return <b>{error.response.statusText}</b>;
                    },
                });
    
    }
    
    useEffect(()=>{
        getAllTeams();
        if(props.projects_id)getTeams()
    },[props.projects_id])    
    
    return (
        <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h6">Teams </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    addNewTeams(newTeams);
                }}>
                    <Autocomplete
                        multiple
                        freeSolo
                        options={options}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Search by team names"
                        />)}
                        onChange={(event, options)=> setNewTeams(options)}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="outlined" label={option.name} {...getTagProps({ index })} />
                            ))}
                    />
                    <Button type="submit"variant="contained" color="primary" style={{marginTop:'0.3em'}}>Add </Button>
                </form>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <List component="nav" aria-label="teams">
                    {teams.map((team)=>{
                        return(
                            <CustomListItem key={team.id} team={team} deleteTeam={deleteTeam}/>
                        )
                    })}   
                </List>
            </Grid>
        </Grid>
    );
}


const CustomListItem=React.memo(({team,deleteTeam})=>{
    const [open,setOpen]=useState(false)
    return <React.Fragment>
        <ListItem style={{backgroundColor:'#e3e3e3'}}>
            <ListItemText primary={`${team.name}`} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="members" onClick={()=>setOpen(!open)} size="large">
                    <PeopleIcon />
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={()=>deleteTeam(team.teams_id)}
                    size="large">
                    <CancelIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {team.members.map((member)=>(
                    <ListItem style={{paddingLeft:'0.5em'}} key={member.id}>
                        <ListItemText primary={member.name}/>
                    </ListItem>
                ))}
            </List>
        </Collapse>
    </React.Fragment>;
})