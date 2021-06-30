import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, List, ListItem, ListItemSecondaryAction,
    IconButton, Typography, Button, Checkbox,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core';
import ModalCreateSubtask from '../../ModalCreateSubtask';
import FormCreateNewTask from '../../FormCreateNewTask';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import axios from 'axios';
import UserContext from '../../../../context/UserContext';
import { useSnackbar } from 'notistack';
import moment from 'moment';
import ModalDetailSubtask from './ModalDetailSubtask';

const useStyles = makeStyles((theme) => ({
    root: { width: '100%', backgroundColor: theme.palette.background.paper, },
}));

const Subtasks = (props) => {
    var isEditing = props.isEdit;
    const classes = useStyles();
    const parentTask = props.detailTask.id;
    const {detailProject,setDetailTask,detailTask,onTaskUpdate,onTaskDelete}=props;
    
    const { listId } = props.detailTask;
    const global = useContext(UserContext);
    var initialStateNewTask= {
        id: '', title: '', description: '', projectId:detailProject.id,
        label: '', progress: 0, start: null, end: null, 
        actualStart: null, actualEnd: null, creator:null,
        tags: [],  creator: global.state.id,
        isSubtask:true, parentTask:parentTask
    }
    const [data, setData] = useState([]);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [showCreateSubtaskForm, setShowCreateSubtaskForm] = useState(false);
    const [newTask,setNewTask]=useState(initialStateNewTask);   
    
    const { enqueueSnackbar } = useSnackbar();
    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });
    
    useEffect(() => {
        setData(props.detailTask.cards);
    }, [props.detailTask]);

    const handleAddNewTask=()=>{
        const config = { mode: 'no-cors', crossdomain: true }
        const url = process.env.REACT_APP_BACK_END_BASE_URL + `task`;
        axios.defaults.headers.common['Authorization'] = global.state.token;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post(url, newTask, config)
            .then((result) => {
                setShowCreateSubtaskForm(false);
                var newData=[...data,result.data];
                var newDetailTask={...detailTask,cards:newData}
                setData(newData);
                setDetailTask(newDetailTask);
                global.dispatch({ type: 'create-new-subtask', payload: result.data })
                if(onTaskUpdate)onTaskUpdate(newDetailTask);
            }) .catch((error) => {
                const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }

    const handleCompleteTask = (id,event) => {
        var newSubtasks=data.map(item=>{
            if(item.id==id) item.complete=event.target.checked;
            return item
        })
        var newDetailTask={...detailTask,cards:newSubtasks}
        setData(newSubtasks);
        setDetailTask(newDetailTask);
        if(onTaskUpdate)onTaskUpdate(newDetailTask);

        const body = { id: id, complete: event.target.checked };
        const config = { mode: 'no-cors', crossdomain: true }
        const url = process.env.REACT_APP_BACK_END_BASE_URL + `task/${id}`;
        axios.defaults.headers.common['Authorization'] = global.state.token;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.patch(url, body, config)
            .then((result) => {
                handleSnackbar(`Data has been updated`, 'success');
            }).catch((error) => {
                const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }
    const handleRemoveSubtask = (subtask) => {
        const config = { mode: 'no-cors', crossdomain: true }
        const url = process.env.REACT_APP_BACK_END_BASE_URL + `task/${subtask.id}`;

        if (window.navigator.onLine) {
            axios.defaults.headers.common['Authorization'] = global.state.token;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.delete(url, {}, config)
                .then((result) => {
                    var newSubtasks = data.filter((item) => {
                        if (item.id != subtask.id) return item
                    });
                    setData(newSubtasks)
                    setDetailTask({...detailTask,cards:newSubtasks});
                    if(onTaskDelete)onTaskDelete(subtask);
                    global.dispatch({ type: 'remove-subtask', payload: subtask })
                }).catch((error) => {
                    error = { ...error };
                    const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
                    global.dispatch({ type: 'handle-fetch-error', payload: payload });
                });
        } 
    }

    const buttonShowCreateSubtask = (isEdit) => {
        if (isEdit) {
            return (
                <Grid xl={12} md={12} sm={12} xs={12} item>
                    <Button onClick={()=>{
                        setShowCreateSubtaskForm(true);
                    }} color="primary">Create</Button>
                    {(()=>{
                        if(showCreateSubtaskForm){
                            return (
                                <ModalCreateSubtask 
                                open={showCreateSubtaskForm} 
                                handleClose={()=>{
                                    setShowCreateSubtaskForm(false);
                                }}>
                                    <FormCreateNewTask
                                        classes={classes} 
                                        newTask={newTask} 
                                        setNewTask={setNewTask}
                                        handleAddNewTask={handleAddNewTask}
                                        detailProject={detailProject}
                                        isSubtask={true}
                                    />
                                </ModalCreateSubtask>
                            )
                        }
                    })()}
                </Grid>
            );
        }
    }

    const showActionButton = (isEdit, subtask) => {
        if (isEdit) {
            return (
                <React.Fragment>
                    <IconButton aria-label="Delete" onClick={() => setDeleteConfirmOpen(true)}>
                        <CancelRoundedIcon fontSize="small" />
                    </IconButton>
                    <DeleteConfirmDialog
                        open={deleteConfirmOpen}
                        handleClose={() => setDeleteConfirmOpen(false)}
                        handleConfirm={() => {handleRemoveSubtask(subtask);setDeleteConfirmOpen(false)}}></DeleteConfirmDialog>
                </React.Fragment>
            )
        }
    }


    return (
        <React.Fragment>
            <Grid container>
                <Typography>Subtasks : </Typography>
                {buttonShowCreateSubtask(isEditing)}
            </Grid>
            <List className={classes.root} dense={true}>
                {data.map((item) => {
                    return (
                        <ListItem size="small" key={Number(item.id)} dense={true}
                        >
                            <Grid container>
                                <Grid item xl={12} md={12} sm={12} xs={12} 
                                    style={{cursor:'pointer'}}
                                >
                                                    
                                    <Checkbox
                                        onChange={(event)=>{
                                            handleCompleteTask(item.id,event)
                                        }}
                                        checked={item.complete}
                                    />
                                    <span  > 
                                        {item.title} {item.end ? moment(item.end).format('DD MMMM YYYY') : ''} - {item.end ? moment(item.end).format('DD MMMM YYYY') : ''}
                                    </span>
                                </Grid>
                                <Grid item xl={6} md={6} sm={12} xs={12}>
                                    <ListItemSecondaryAction>
                                        {showActionButton(isEditing, item)}
                                    </ListItemSecondaryAction>
                                </Grid>
                            </Grid>
                        </ListItem>
                    )
                })}
            </List >
        </React.Fragment>
    );
}

const DeleteConfirmDialog = (props) => {
    const open = props.open;
    const handleClose = props.handleClose;
    const handleConfirm = props.handleConfirm;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle style={{ cursor: 'move' }}>Are you sure you want to delete this?</DialogTitle>
            <DialogContent>
                <DialogContentText>Data will be deleted permanently</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleConfirm} color="primary"> Confirm </Button>
            </DialogActions>
        </Dialog>
    );
}
export default Subtasks;