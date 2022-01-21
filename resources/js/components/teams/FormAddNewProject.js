import React,{useState,useContext, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import toast, { Toaster } from 'react-hot-toast';
import UserContext from '../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import { Dialog, IconButton, Typography, } from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = (theme) => ({
    root: { margin: 0, padding: theme.spacing(2) },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={onClose}
                size="large">
                <CloseIcon />
            </IconButton>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: { padding: theme.spacing(2) },
}))(MuiDialogContent);

const FormAddNewProject=({teams_id,open,closeModal,onCreate})=>{
    const global=useContext(UserContext);
    const [team,setTeam]=useState();
    const [project,setProject]=useState();
    const [projects, setProjects] = useState([]);

    const getProjects = () => {
        let url =''
        if([1,2].includes(global.state.role?.id)) url = `${process.env.MIX_BACK_END_BASE_URL}users/${global.state.id}/projects`;
        else url = `${process.env.MIX_BACK_END_BASE_URL}projects`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setProjects(result.data)
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
    
    useEffect(()=>{
        getProjects();
    },[])

    const formCreateOnSubmit=()=>{
        const body = {
            team:teams_id,
            project:project 
        }
        const url = process.env.MIX_BACK_END_BASE_URL + 'team-members';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.post(url, body),
            {
                loading: 'Successfully added',
                success: (result)=>{
                    onCreate(result.data);
                    return <b>Successfuly added</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    return(
        <Dialog aria-labelledby="Add new project to the team" open={open}>
            <DialogTitle onClose={
                () => {
                    closeModal();
                }} > Add a project to the team</DialogTitle>
            <DialogContent dividers>
                <form onSubmit={(e)=>{
                        e.preventDefault();
                        formCreateOnSubmit();
                    }}>
                    <Grid  container spacing={2}>
                        <Grid lg={12} md={12} sm={12} xs={12} item>
                            <Select
                                onChange={(value)=>{
                                    setProject(value)
                                }} style={{width:'100%'}}
                                >
                                    {projects.map(function(item){
                                        return(<MenuItem value={item.id} key={item.id}>{item.title}</MenuItem>)
                                    })}
                                </Select>
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={12} lg={12} item>
                            <Button type="submit" variant="contained" color="primary">Add</Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default FormAddNewProject;