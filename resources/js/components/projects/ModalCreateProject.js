import React, { useEffect, useContext,useState } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/core/Alert';
import AlertTitle from '@material-ui/core/AlertTitle';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
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


function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
};
}

export default function ModalCreateProject(props) {
    const classes = useStyles();
    var open = props.open;
    var closeModal = props.closeModal;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [dateRange, setDateRange] = useState([null,null]);
    const [members, setMembers] = useState([]);
    const [projectClients, setProjectClients] = useState([]);
    const [teams, setTeams] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [choosenTeams, setChoosenTeams] = useState([]);
    const [showImportErrors,setShowImportErrors]=useState(false);
   
    const [importErrors, setImportErrors] = useState([]);
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleChange = (event, newValue) =>  setTabIndex(newValue)
    const handleShowMoreErrors=(e)=>{
        e.preventDefault();
        setShowImportErrors(!showImportErrors);
    }
    const global = useContext(UserContext);
    
    const getTeams = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + `teams`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setTeams(result.data);
            }).catch((error) => {
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
        members.forEach((user)=>{
            body.append("members[]", user.id);
        });

        if(selectedFile){
            var fileBlob= new Blob(selectedFile);
            body.append("file", fileBlob);
        }
        
        if (!window.navigator.onLine) {
            toast.error(`You are currently offline`);
        } else {
            var url = process.env.MIX_BACK_END_BASE_URL + 'projects';
            const toast_loading = toast.loading('Loading...');
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post(url,body)
                .then((result) => {
                    if(!result.data?.error){
                        global.dispatch({ type: 'create-new-project', payload: result.data })
                        setTitle('');
                        setDescription('');
                        closeModal();
                        toast.dismiss(toast_loading);
                    }else{
                        if(result.data.error==true && result.data.messages.length>0){
                            setImportErrors(result.data.messages);
                            toast.dismiss(toast_loading);
                            return 'Failed to import excel file';
                        }
                    }
                }).catch(console.log);
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
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Form" {...a11yProps(0)} />
                                        <Tab label="Import" {...a11yProps(1)} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={tabIndex} index={0}>
                                    <Grid container>
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
                                                inputLabel={"Members"}
                                                onChange={(values)=> setMembers(values)}/>
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
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={tabIndex} index={1}>
                                    <Grid container>
                                        <Grid item lg={12} md={12} sm={12} xs={12} >
                                            <a href={`${process.env.MIX_FRONT_END_BASE_URL}api/import-format`}>Download format import</a>
                                        </Grid>
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
                                            <UserSearchBar required={true} userOnly={true}
                                                inputLabel={"Members"}
                                                onChange={(values)=> setMembers(values)}/>
                                        </Grid>
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <UserSearchBar required={true} clientOnly={true}
                                                inputLabel={"Clients"}
                                                onChange={(values)=>setProjectClients(values)}/>
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
                                                onChange={(event, options)=>setChoosenTeams(options)}
                                                renderTags={(value, getTagProps) =>
                                                    value.map((option, index) => (
                                                        <Chip variant="outlined" label={option.name} {...getTagProps({ index })} />
                                                    ))}
                                            />
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
                                        <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                                            {importErrors.length?
                                            <Alert severity="error">
                                                <AlertTitle>Error</AlertTitle>
                                                {(showImportErrors)?<ul>
                                                    {importErrors.map(error=><li>Row {error.row} : {error.title}</li>)}
                                                </ul>:null}
                                                {(showImportErrors)?
                                                    <a onClick={handleShowMoreErrors}>Hide...</a>:
                                                    <a onClick={handleShowMoreErrors}>Show more...</a>}
                                            </Alert>:null}
                                            <input 
                                                accept=".csv, .xls, .xlsx, text/csv, application/csv, text/comma-separated-values, application/csv, application/excel, application/vnd.msexcel, text/anytext, application/vnd. ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                type="file"
                                                onChange={(e)=>setSelectedFile(e.target.files)}
                                            />
                                        </Grid>
                                    </Grid>
                                </TabPanel>
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


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  