import axios from 'axios';
import moment from 'moment';
import React, { useContext,useState,useEffect } from 'react';
import UserContext from '../../context/UserContext';
import SendIcon from '@material-ui/icons/Send';
import withStyles from '@material-ui/styles/withStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import toast, { Toaster } from 'react-hot-toast';
import { parseISO } from 'date-fns'; 

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

export default function ModalExtendDeadline({open,handleClose,task,detailProject,minDate,maxDate}) {
    const global=useContext(UserContext);
    const [newDeadline,setNewDeadline]=useState(null);
    const [description,setDescription]=useState("");
    if(task){
        if(task.parent_task){
            minDate=task.parent_task?task.parent_task?.start:task.start;
            minDate=parseISO(moment(minDate).format('YYYY-MM-DD HH:mm:ss'));
        }
    }else{
        minDate=parseISO(moment(detailProject.start).format('YYYY-MM-DD HH:mm:ss'));
    }
    useEffect(()=>{
        console.log(minDate,maxDate)
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();     
        var body=null;
        var url=null; 

        if(task){    
            body={ projects_id:detailProject.id, users_id:global.state.id, 
                old_deadline:task.end,  new_deadline:newDeadline, description:description
            }
            url = `${process.env.MIX_BACK_END_BASE_URL}tasks/${task.id}/extend-deadline`;
        }else{
            body={ projects_id:detailProject.id, users_id:global.state.id, 
                old_deadline:detailProject.end,  new_deadline:newDeadline, description:description
            }
            url = `${process.env.MIX_BACK_END_BASE_URL}projects/${detailProject.id}/extend-deadline`;
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.post(url, body),
            {
                loading: 'Sending request',
                success: (result)=>{
                    handleClose();
                    return <b>Request sent successfully</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });       
    }

    return (
        <Dialog aria-labelledby="Extend deadline" open={open}>
            <DialogTitle onClose={
                () => {
                    handleClose();
                }} > Extend deadline </DialogTitle>
            <DialogContent dividers>
                 
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Typography>Current deadline {task?moment(task.end).format('DD MMMM YYYY'):moment(detailProject.end).format('DD MMMM YYYY')}</Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <MobileDatePicker 
                                    label="New deadline"
                                    value={null}
                                    minDate={minDate}
                                    maxDate={parseISO(maxDate)}
                                    onChange={(value)=> setNewDeadline(parseISO(moment(value).format('YYYY-MM-DD HH:mm:ss')))}
                                    renderInput={(params)=><TextField {...params} variant="standard" style={{width:'100%'}}/>}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                label="Description : "
                                multiline
                                rows={4}
                                variant="standard"
                                value={description}
                                onChange={(event)=>setDescription(event.target.value)}
                                style={{width:'100%'}}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Button variant="contained" color="primary" type="submit">Send request<span style={{paddingLeft:'0.5em'}}><SendIcon/></span></Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    );
}
