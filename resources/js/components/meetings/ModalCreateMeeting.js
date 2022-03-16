import axios from 'axios';
import React, { useContext, useState } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { Grid, Button, Dialog, IconButton, Typography, TextField, } from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import UserContext from '../../context/UserContext';
import CloseIcon from '@material-ui/icons/Close';
import UserSearchbar from './../widgets/UserSearchBar';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TimePicker from '@material-ui/lab/TimePicker';
import DatePicker from '@material-ui/lab/DatePicker';
import Alert from '@material-ui/core/Alert';
import { parseISO } from 'date-fns'; 
import moment from 'moment';
import toast from 'react-hot-toast';

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

const DialogActions = withStyles((theme) => ({
    root: { margin: 0, padding: theme.spacing(1) },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
    root: { display: 'flex', flexWrap: 'wrap' },
    margin: { margin: theme.spacing(1) },
    formControl: { minWidth: 120, },
    selectEmpty: { marginTop: theme.spacing(2), },
}));


export default function ModalCreateMeeting(props) {
    const classes = useStyles();
    var {open,projects_id,detailProject} = props;
    var closeModal = props.handleClose;
    const [title, setTitle] = useState('');
    const [date,setDate]=useState('');
    const [start, setStart] = useState(null);
    const [end,setEnd] = useState(null);
    const [timeRangeWarning,setTimeRangeWarning]=useState(false);
    const [members, setMembers] = useState([]);
    const global = useContext(UserContext);

    const clearState=()=>{
        setTitle('');
        setStart('');
        setEnd('');
        setTimeRangeWarning(false);
        setMembers([]);
        closeModal();
    }

    const submitData = () => {
        if(!moment(start,'HH:mm:ss').isBefore(moment(end,'HH:mm:ss'))) {setTimeRangeWarning(true); return;}
        else setTimeRangeWarning(false);
        
        var datetime_start=moment(date).format('YYYY-MM-DD')+' '+moment(start).format('HH:mm:ss');
        var datetime_end=moment(date).format('YYYY-MM-DD')+' '+moment(end).format('HH:mm:ss');
        const body = {
            title: title,  start:datetime_start,  end:datetime_end,  projects_id: projects_id,  
            members: members,  users_id: global.state.id, google_calendar_info:null
        }
        
        const url = `${process.env.MIX_BACK_END_BASE_URL}meetings`;
        const toast_loading = toast.loading('Creating a new meeting schedule...');
        axios.post(url,body)
            .then((result) => {  
                clearState();
                toast.dismiss(toast_loading)
                global.dispatch({ type: 'create-new-meeting', payload: result.data });
                toast.success(<b>A new meeting successfuly created</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
    }

    return (
        <Dialog aria-labelledby="Create a meeting" open={open}>
            <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    submitData();
                }}>
             
            <DialogTitle onClose={
                () => {
                    closeModal(false);
                }} > Create a new meeting </DialogTitle>
                {timeRangeWarning? <Alert severity="warning">Invalid date range</Alert>:null}
                <DialogContent dividers>
                    <Grid container spacing={2} style={{ paddingLeft: 3, paddingRight: 3 }} >
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <TextField variant="standard"
                                label="Title : "
                                placeholder="example : Meeting X"
                                className={classes.textfield}
                                onChange={(e) => setTitle(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item container spacing={2} lg={12} md={12} sm={12} xs={12} >
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Grid item lg={6} md={6} sm={12} xs={12} >
                                    <DatePicker
                                        onChange={(value)=>{setDate(value)}}
                                        fullWidth
                                        label="Date"
                                        variant="standard"
                                        minDate={parseISO(detailProject.start)}
                                        maxDate={parseISO(detailProject.end)}
                                        value={date}
                                        required
                                        renderInput={(props)=><TextField {...props} variant="standard"/>}
                                    />
                                </Grid> 
                                <Grid item container spacing={2}  lg={6} md={6} sm={12} xs={12} >
                                    <Grid item lg={6} md={6} sm={6} xs={6} >
                                        <TimePicker
                                            onChange={value=> setStart(value)} 
                                            value={start}
                                            label="Start"
                                            variant="standard"
                                            InputLabelProps={{ shrink: true }}
                                            inputProps={{  step: 300 }}
                                            renderInput={(params) => <TextField {...params}  variant={'standard'}/>}
                                            ampm={false}
                                            required
                                        />
                                    </Grid> 
                                    <Grid item lg={6} md={6} sm={6} xs={6} >
                                        <TimePicker
                                            value={end}
                                            label="End"
                                            variant="standard"
                                            onChange={value=>setEnd(value)}
                                            InputLabelProps={{ shrink: true }}
                                            inputProps={{  step: 300 }}
                                            renderInput={(params) => <TextField {...params}  variant={'standard'}/>}
                                            ampm={false}
                                            required
                                        />
                                    </Grid> 
                                </Grid>
                            </LocalizationProvider>
                        </Grid> 
                        <Grid item  lg={12} md={12} sm={12} xs={12} >
                            <UserSearchbar 
                                detailProject={detailProject} 
                                onChange={(value) => setMembers(value)} 
                                exceptedUsers={[{
                                    id:global.state.id,
                                    email:global.state.email,
                                    name:global.state.name
                                }]} 
                                userOnly={true}    
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button type={'submit'} color="primary">Create</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
