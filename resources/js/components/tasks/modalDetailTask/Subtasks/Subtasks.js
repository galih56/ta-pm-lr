import React, { useState, useEffect, useContext,useCallback } from 'react';
import {useLocation} from 'react-router-dom';
import makeStyles from '@material-ui/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import ModalCreateSubtask from './ModalCreateSubtask';
import FormCreateNewTask from '../../FormCreateNewTask';
import UserContext from '../../../../context/UserContext';
import toast from 'react-hot-toast';
import ModalDetailTask from './../ModalDetailTask';
import moment from 'moment';
import StatusChip from './../../../widgets/StatusChip';
import axios from 'axios';
import UpdateProgressButtons from '../../../widgets/UpdateProgressButtons';
import DeleteButton from './DeleteButton';

const useStyles = makeStyles((theme) => ({
    root: { width: '100%', backgroundColor: theme.palette.background.paper, },
}));
const Subtasks = ({detailProject,setDetailTask,detailTask,onTaskUpdate,onTaskDelete,isEdit}) => {
    const global = useContext(UserContext);
    var isEditing = isEdit;
    const classes = useStyles();
    const parent_task_id = detailTask.id;
    
    var clickedTaskInitialState={
        id: '', projects_id: '', lists_id: null, list:null,
        title: '', description: '', label: '', complete: false, progress: 0,
        start:null,end:null,actual_start:null,actual_end:null, start_label:'',end_label:'',
        list: null, tags: [], members: [], parent_task_id:parent_task_id,
        cards: [], logs: [], comments: [], attachments: [],creator:null,is_subtask:false
    }

    var initialStateNewTask= {
        id: '', title: '', description: '', projects_id:detailProject.id,
        label: '', progress: 0, start: null, end: null, 
        actualStart: null, actualEnd: null, creator:null,
        tags: [], users_id: global.state.id,
        is_subtask:true, parent_task_id:parent_task_id
    }

    const [detailTaskOpen, setDetailTaskOpen] = useState(false);
    const [clickedTask, setClickedTask] = useState(clickedTaskInitialState);
    const [data, setData] = useState([]);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [showCreateSubtaskForm, setShowCreateSubtaskForm] = useState(false);
    const [newTask,setNewTask]=useState(initialStateNewTask);   
    
    useEffect(() => {
        setData(detailTask.cards);
    }, [detailTask]);

    /*
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const paramTaskId = query.get('subtasks_id');
        console.log(paramTaskId);
        if (paramTaskId) handleDetailTaskOpen({ task:{...clickedTask, id: paramTaskId}, open: true });
    }, []);
    */
   
    const handleAddNewTask=()=>{
        const url = process.env.MIX_BACK_END_BASE_URL + `tasks`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        toast.promise(
            axios.post(url, newTask),
            {
                loading: 'Creating a new subtask',
                success: (result)=>{
                    setShowCreateSubtaskForm(false);
                    var newData=[...data,result.data];
                    var newDetailTask={...detailTask,cards:newData}
                    setData(newData);
                    setDetailTask(newDetailTask);
                    global.dispatch({ type: 'create-new-subtask', payload: result.data })
                    if(onTaskUpdate)onTaskUpdate(newDetailTask);
                    return <b>A new subtask successfuly created</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    const handleRemoveSubtask = (subtask) => {
        const url = process.env.MIX_BACK_END_BASE_URL + `tasks/${subtask.id}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        
        toast.promise(
            axios.delete(url),
            {
                loading: 'Deleting...',
                success: (result)=>{
                    var newSubtasks = data.filter((item) => {
                        if (item.id != subtask.id) return item
                    });
                    setData(newSubtasks)
                    setDetailTask({...detailTask,cards:newSubtasks});
                    if(onTaskDelete)onTaskDelete(subtask);
                    global.dispatch({ type: 'remove-subtask', payload: subtask })
                    return <b>Successfully deleted</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    const buttonShowCreateSubtask = (isEdit) => {
        if (isEdit) {
            return (
                <Grid xl={12} md={12} sm={12} xs={12} item>
                    {[1,2,4,5].includes(global.state.role.id)?(
                        <>
                        <Button onClick={()=> setShowCreateSubtaskForm(true)} color="primary">Create</Button>
                        {showCreateSubtaskForm?(
                            <ModalCreateSubtask  open={showCreateSubtaskForm}  handleClose={()=> setShowCreateSubtaskForm(false)}>
                                <FormCreateNewTask classes={classes}  newTask={newTask}  setNewTask={setNewTask} handleAddNewTask={handleAddNewTask}
                                    detailProject={detailProject} is_subtask={true} minDate={detailTask.start} maxDate={detailTask.end}/>
                            </ModalCreateSubtask>
                        ):null}
                        </>
                    ):null}
                </Grid>
            );
        }
    }

    const handleDetailTaskOpen = (taskInfo) => {
        const {task, open } = taskInfo;
        setDetailTaskOpen(open);
        setClickedTask({ ...task });
    };

    const showModalDetailTask = useCallback(() => {
        if (clickedTask?.id && detailTaskOpen == true) {
            return (
                <ModalDetailTask
                    open={detailTaskOpen}
                    closeModalDetailTask={() =>handleDetailTaskOpen({task :clickedTaskInitialState,open:false})}
                    projects_id={detailProject.id}
                    detailProject={detailProject}
                    initialState={clickedTask} 
                    onTaskUpdate={onTaskUpdate}
                    onTaskDelete={onTaskDelete}
                />
            )
        }
    }, [clickedTask]);

    const showActionButton = (isEdit, subtask) => {
        if (isEdit) {
            return (
                <React.Fragment>
                    {!subtask.cards?.length || subtask.parent_task ?(
                        <UpdateProgressButtons data={subtask} alwaysShow={true} 
                            onUpdate={(result)=>{
                                var newSubtasks=data.map(item=>{
                                    if(item.id==result.id) item=result;
                                    return item
                                })
                                var newDetailTask={...detailTask,cards:newSubtasks}
                                if(result.parent_task) {
                                    detailTask.progress=result.parent_task;
                                    detailTask.actual_start=result.parent_task?.actual_start;
                                    detailTask.actual_end=result.parent_task?.actual_end;
                                }
                                setData(newSubtasks);
                                setDetailTask(newDetailTask);
                                if(onTaskUpdate)onTaskUpdate(newDetailTask);             
                            }}/>
                    ):null}
                    <DeleteButton onClick={() => setDeleteConfirmOpen(true)}/>
                    <DeleteConfirmDialog
                        open={deleteConfirmOpen}
                        handleClose={() => setDeleteConfirmOpen(false)}
                        handleConfirm={() => {handleRemoveSubtask(subtask);setDeleteConfirmOpen(false)}}></DeleteConfirmDialog>
                </React.Fragment>
            );
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
                                    style={{cursor:'pointer'}} onClick={()=> handleDetailTaskOpen({task:item,open:true})} 
                                >        
                                    {/* <Checkbox checked={item.complete} onChange={(event)=>handleCompleteTask(item,event)}/> */}
                                    <span> 
                                        {item.title}
                                        <br/>
                                        <span>{item.start ? moment(item.start).format('DD MMMM YYYY') : ''} - {item.end ? moment(item.end).format('DD MMMM YYYY') : ''}</span>
                                        <br/>
                                        <span><StatusChip status={item.start_label}/> - <StatusChip status={item.end_label}/></span>
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
            {showModalDetailTask()}
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