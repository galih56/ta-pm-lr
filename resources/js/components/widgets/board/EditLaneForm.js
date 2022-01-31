import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/styles/withStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import UserContext from '../../../context/UserContext';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/core/Alert';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import FormCreateNewTask from './../../tasks/FormCreateNewTask';

const styles = (theme) => ({
    root: { margin: 0, padding: theme.spacing(2) },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} {...other} >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

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

const useStyles = makeStyles((theme) => ({
    root: { display: 'flex', flexWrap: 'wrap' },
    margin: { margin: theme.spacing(1) },
    formControl: { minWidth: 120, },
    selectEmpty: { marginTop: theme.spacing(2), },
}));


const EditLaneForm = (props) => {
    const classes = useStyles();
    const { laneId, onAdd, onCancel,detailProject } = props;
    const [modalOpen, setModalOpen] = useState(true);
    const initLaneState = {  id: null, title: '',  project: null };
    const initCardState = {
        id: null, title: '', description: '', 
        label: '', progress: 0, start: null, end: null, cost:'',
        tags: [], lists_id: laneId,creator:null ,members:[]
    };
    const [laneDetail, setLaneDetail] = useState(initLaneState);
    const [newCard, setNewCard] = useState(initCardState);
    const [isDeletingLane, setIsDeletingLane] = useState(false);
    const [tabState, setTabState] = useState(0);
    const global = useContext(UserContext);
    const handleTabChanges = (event, newValue) => setTabState(newValue);
    const handleAddCard = () => onAdd(newCard);

    useEffect(() => {
        if(laneId){
            const detailList = getListDetail(laneId);
            if (detailList) setLaneDetail(detailList);
        }
    }, [props.laneId])

    useEffect(()=>{
        if('open' in props)setModalOpen(props.open);
    },[props.open])

    const getListDetail = () => {
        const projects = global.state.projects;
        var list=null;
        if(projects){
            for (let j = 0; j < projects.length; j++) {
                const columns = projects[j].columns;
                for (let i = 0; i < columns.length; i++) {
                    if (columns[i].id == laneId) {
                        const column = columns[i];
                        list= column;
                    }
                }
            }
            list= null;
        }
        if(list){
            setLaneDetail(list);
        }else{
            const url = `${process.env.MIX_BACK_END_BASE_URL}lists/${laneId}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.get(url)
                .then((result) => {
                    setLaneDetail(result.data)
                }).catch((error) => {
                    switch(error.response.status){
                        case 401 : toast.error(<b>Unauthenticated</b>); break;
                        case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                        default : toast.error(<b>{error.response.statusText}</b>); break
                    }
                });
        }
    }

    const updateLane = () => {
        const body = { id: laneDetail.id, title: laneDetail.title, project: laneDetail.project }
        const url = process.env.MIX_BACK_END_BASE_URL+'lists/' + laneDetail.id;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.patch(url, body),
            {
                loading: 'Updating...',
                success: (result)=>{
                    global.dispatch({ type: 'update-list', payload: body });
                    return <b>Successfully updated</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    const deleteList = () => {
        const url = process.env.MIX_BACK_END_BASE_URL+'lists/' + laneDetail.id;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.delete(url, { id: laneDetail.id }),
            {
                loading: 'Deleting...',
                success: (result)=>{
                    setModalOpen(false);
                    onCancel();
                    global.dispatch({ type: 'remove-list', payload: {projects_id:detailProject.id,id:laneId} });        
                    return <b>Successfully deleted</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    const checkIfAuthenticated = () => {
        if (global.state.authenticated === true) {
            return (
                <DialogContent dividers>
                    <Tabs value={tabState} onChange={handleTabChanges} >
                        <Tab label="Edit lane" />
                        <Tab label="Add new task" />
                    </Tabs>
                    <TabPanel value={tabState} index={0}>
                        <Grid container spacing={2} 
                            style={{ paddingLeft: "1em", paddingRight: "1em",paddingTop:"1em" }} 
                            component="form" 
                                onSubmit={(e) => { 
                                    e.preventDefault();
                                    updateLane() 
                                }}>
                            <Grid item lg={12} md={12} sm={12} xs={12} >
                                <TextField
                                    label="Title : "
                                    placeholder="example : List A"
                                    value={laneDetail.title}
                                    onChange={(e) => setLaneDetail({ ...laneDetail, title: e.target.value })}
                                    style={{ width: '100%' }}
                                    variant="standard" 
                                />
                            </Grid>
                            {(isDeletingLane)?(
                                    <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: '1em' }}>
                                        <Typography variant="body2">Data will be permanently deleted. Are you sure?</Typography>
                                        <br />
                                        <Button onClick={() => setIsDeletingLane(false)}>Cancel</Button>
                                        <Button onClick={(e)=>{e.preventDefault();deleteList();}} variant="contained" color="secondary">Delete</Button>
                                    </Grid>
                                ):(
                                    <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: '1em' }}>
                                        <Button onClick={() => setIsDeletingLane(true)} variant="contained" color="secondary" style={{ marginRight: '1.5em' }}>Delete</Button>
                                        <Button variant="contained" color="primary" type="submit">Save</Button>
                                    </Grid>
                                )}
                        </Grid>
                    </TabPanel>
                    <TabPanel value={tabState} index={1}>
                        <FormCreateNewTask 
                            classes={classes} 
                            newTask={newCard} 
                            setNewTask={setNewCard}
                            handleAddNewTask={handleAddCard}
                            detailProject={detailProject}
                            is_subtask={false}
                            minDate={laneDetail.start}
                            maxDate={laneDetail.end}
                        />
                    </TabPanel>
                </DialogContent >
            )
        } else {
            return (
                <DialogContent dividers>
                    <Alert severity="warning">Your action requires authentication. Please sign in.</Alert>
                </DialogContent>
            )
        }
    }
    return (
        <React.Fragment>
            <Dialog aria-labelledby="Create a project" open={modalOpen}>
                <DialogTitle onClose={
                    () => {
                        onCancel();
                        setModalOpen(false);
                    }}>Edit Lane</DialogTitle>
                { checkIfAuthenticated(global, classes) }
            </Dialog>
        </React.Fragment>
    )
}
export default EditLaneForm;