import React,{useState,useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSnackbar } from 'notistack';
import UserContext from '../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import makeStyles from '@material-ui/styles/makeStyles';
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

const FormAddNewProject=({teamId,open,closeModal,onCreate})=>{
    const global=useContext(UserContext);
    const [team,setTeam]=useState();
    const [project,setProject]=useState();
    const [projects, setProjects] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    const snackbar = (message, variant) =>  enqueueSnackbar(message, { variant });

    const getProjects = () => {
        let url =''
        if(global.state.occupation?.name.toLowerCase()=='system administrator' || global.state.occupation?.name.toLowerCase()=='ceo') url = process.env.MIX_BACK_END_BASE_URL + 'users/' + global.state.id + '/projects';
        else url = process.env.MIX_BACK_END_BASE_URL + 'projects';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url, {}, {})
            .then((result) => {
                setProjects(result.data)
            }).catch((error) => {
                const payload = { error: error, snackbar: null, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }
    
    useEffect(()=>{
        getProjects();
    },[])

    const formCreateOnSubmit=()=>{
        const body = {
            team:teamId,
            project:project 
        }
        const url = process.env.MIX_BACK_END_BASE_URL + 'team-members';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post(url, body)
            .then((result) => {
                onCreate(result.data);
                snackbar(`A new list successfully created`, 'success');
            }).catch((error) => {
                const payload = { error: error, snackbar: snackbar, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
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