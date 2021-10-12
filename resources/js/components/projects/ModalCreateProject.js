import React, { useEffect, useContext,useState } from 'react';
import 'fontsource-roboto';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/core/Alert';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import InputLabel from '@material-ui/core/InputLabel';
import UserContext from '../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import CloseIcon from '@material-ui/icons/Close';
import toast from 'react-hot-toast';
import moment from 'moment';
import UserSearchBar from './../widgets/UserSearchBar';
import Autocomplete from '@material-ui/core/Autocomplete';
import Chip from '@material-ui/core/Chip';

const styles = (theme) => {
    return({
    root: { margin: 0, padding: theme.spacing(2) },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
})};

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                    size="large">
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: { padding: theme.spacing(2) },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: { margin: 0, padding: theme.spacing(1) },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => {
    return({
        root: { display: 'flex', flexWrap: 'wrap' },
        margin: { margin: theme.spacing(1) },
    })
});

export default function ModalCreateProject(props) {
    const classes = useStyles();
    var open = props.open;
    var closeModal = props.closeModal;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [dateRange, setDateRange] = useState([null,null]);
    const [projectOwners, setProjectOwners] = useState([]);
    const [projectManagers, setProjectManagers] = useState([]);
    const [projectClients, setProjectClients] = useState([]);
    const [teams, setTeams] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [choosenTeams, setChoosenTeams] = useState([]);
    const global = useContext(UserContext);
    
    const getTeams = () => {
        const toast_loading = toast.loading('Loading...');
        const url = process.env.MIX_BACK_END_BASE_URL + `teams`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setTeams(result.data);
                toast.dismiss(toast_loading);
            }).catch((error) => {
                toast.dismiss(toast_loading);
                console.error(error.response);
                switch(error.response?.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    useEffect(() => {
        if (end === '') setEnd(null);
        if (start === '') setStart(null);
        getTeams();
    }, [end,start]);


    const submitData = () => {
        let body = new FormData();
        
        body.append("title", title);
        body.append("description", description);
        body.append("start", start);
        body.append("end", end);
        body.append("users_id", global.state.id);

        projectClients.forEach((client)=>{
            body.append("clients[]", client.id);
        });
        choosenTeams.forEach((team)=>{
            body.append("teams[]", team.id);
        });
        projectOwners.forEach((user)=>{
            body.append("project_owners[]", user.id);
        });
        projectManagers.forEach((user)=>{
            body.append("project_managers[]", user.id);
        });

        if(selectedFile){
            var fileBlob= new Blob(selectedFile);
            body.append("file", fileBlob);
        }
        
        if (!window.navigator.onLine) {
            toast.error(`You are currently offline`);
        } else {
            var url = process.env.MIX_BACK_END_BASE_URL + 'projects';

            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            toast.promise(
                axios.post(url, body),
                {
                    loading: 'Creating a new project',
                    success: (result)=>{
                        global.dispatch({ type: 'create-new-project', payload: result.data })
                        setTitle('');
                        setDescription('');
                        closeModal();
                        return <b>A new project successfuly created</b>
                    },
                    error: (error)=>{
                        if(error.response.status==401) return <b>Unauthenticated</b>;
                        if(error.response.status==422) return <b>Some required inputs are empty</b>;
                        return <b>{error.response.statusText}</b>;
                    },
                });
        }
    }
    
    return (
        <Dialog aria-labelledby="Create a project" open={open}>
            <DialogTitle onClose={
                () => { closeModal(); }}>Create a Project</DialogTitle>
            {(global.state.authenticated === true)?(
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    submitData()
                }}>
                    <DialogContent dividers>
                        <Grid container spacing={2} style={{ paddingLeft: 3, paddingRight: 3 }} >
                            <Grid item lg={12} md={12} sm={12} xs={12} >
                                <TextField variant="standard"
                                    label="Title : "
                                    placeholder="example : Project A"
                                    className={classes.textfield}
                                    onChange={(e) => setTitle(e.target.value) }
                                    style={{ width: '100%' }}
                                    required
                                />
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <MobileDateRangePicker
                                        required
                                        startText="Start : "
                                        endText="End : "
                                        value={dateRange}
                                        onChange={(newValue) => {
                                            if(newValue[0]){
                                                setStart(moment(newValue[0]).format('YYYY-MM-DD HH:mm:ss'))
                                            }
                                            if(newValue[1]){ 
                                                setEnd(moment(newValue[1]).format('YYYY-MM-DD HH:mm:ss'))
                                            }
                                            setDateRange([newValue[0],newValue[1]]);
                                        }}
                                        renderInput={(startProps, endProps) => (
                                        <>
                                            <TextField {...startProps} variant="standard" required />
                                            <Box sx={{ mx: 2 }}> to </Box>
                                            <TextField {...endProps}  variant="standard"  required/>
                                        </>
                                        )}
                                    />
                                </LocalizationProvider> 
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Autocomplete
                                    multiple freeSolo options={teams}
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        label="Teams"
                                    />)}
                                    onChange={(event, options)=> {
                                        console.log(options)
                                        setChoosenTeams(options)
                                    }}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip variant="outlined" label={option.name} {...getTagProps({ index })} />
                                        ))}
                                />
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <UserSearchBar required={true} userOnly={true}
                                    inputLabel={"Project Owner"}
                                    onChange={(values)=>{
                                        console.log(values);
                                        setProjectOwners(values)
                                    }}/>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <UserSearchBar required={true} userOnly={true}
                                    inputLabel={"Project Manager"}
                                    onChange={(values)=>setProjectManagers(values)}/>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <UserSearchBar required={true} clientOnly={true}
                                    inputLabel={"Clients"}
                                    onChange={(values)=>setProjectClients(values)}/>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <TextField variant="standard"
                                    label="Description : "
                                    placeholder="Example : Project A is a cool project"
                                    className={classes.textfield}
                                    onChange={(e) => setDescription(e.target.value) }
                                    multiline
                                    style={{ width: '100%' }}
                                    rows={4}
                                />
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <input 
                                    accept=".csv, .xls, .xlsx, text/csv, application/csv, text/comma-separated-values, application/csv, application/excel, application/vnd.msexcel, text/anytext, application/vnd. ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                    type="file"
                                    onChange={(e)=>setSelectedFile(e.target.files)}
                                    />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" color="primary">Create</Button>
                    </DialogActions>
                </form>
            ):(
                <DialogContent dividers>
                    <Alert severity="warning">Your action requires authentication. Please sign in.</Alert>
                </DialogContent>
            )}
             
        </Dialog>
    );
}
