import 'fontsource-roboto';
import axios from 'axios';
import React, { useEffect, useContext, useState, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from '../../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import DialogActionButtons from './DialogActionButtons';
import TaskProgress from './TaskProgress';
import EditForm from './EditForm';
import Chip from '@material-ui/core/Chip';
import DialogContentText from '@material-ui/core/DialogContentText';
import moment from 'moment';
import DialogConfirm from './DialogConfirm';
import toast, { Toaster } from 'react-hot-toast';
import CircularProgress from '@material-ui/core/CircularProgress';

// https://stackoverflow.com/questions/35352638/react-how-to-get-parameter-value-from-query-string
const styles = (theme) => ({
    root: { margin: 0, padding: theme.spacing(2), },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other} component="div">
            <span>{children}</span>
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
    root: { padding: theme.spacing(2), },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: { margin: 0, padding: theme.spacing(1), },
}))(MuiDialogActions);

const removeTaskIdQueryString=(history)=>{
    const queryParams = new URLSearchParams(history.location.search)
    if (queryParams.has('tasks_id')) {
        queryParams.delete('tasks_id');
        history.replace({
            search: queryParams.toString(),
        })
    }
}

export default function ModalDetailTask(props) {
    const { id } = props.initialState;
    const {open,closeModalDetailTask,onTaskUpdate,onTaskDelete} = props;
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [startConfirmOpen, setStartConfirmOpen] = useState(false);
    const global = useContext(UserContext);
    const history = useHistory();
    const [data, setData] = useState({
        id: id, projects_id: '', lists_id: null, list:null,
        title: '', description: '', label: '', complete: false, progress: 0,
        start:null,end:null,actual_start:null, actual_end:null, start_label:'',end_label:'',
        tags: [], members: [], parent_task_id:'',parent_task:null, cards: [], logs: [], cost:'',
        cost:'', actual_cost:'',
        comments: [], attachments: [],creator:null,is_subtask:false
    });
    const [detailProject,setDetailProject]=useState({
        id:'',title:'',members:[],clients:[],columns:[]
    })
    const [isEditing, setIsEditing] = useState(false);
    const handleEditingMode = (bool = false) => setIsEditing(bool);

    const getDetailTask = () => {
        var body={projects_id:detailProject.id,users_id:global.state.id}
        const url = process.env.MIX_BACK_END_BASE_URL + 'tasks/' + id;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url,body)
            .then((result) => {
                setData({ ...data, ...result.data });
                const payload = { projects_id: data.projects_id, lists_id: data.lists_id, ...result.data };
                if(data.is_subtask) global.dispatch({ type: 'store-detail-subtask', payload: payload })
                else global.dispatch({ type: 'store-detail-task', payload: payload })
            }).catch((error) => {
                console.error(error);
                switch(error.response?.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    useEffect(() => {
        getDetailTask()
    }, [id,props.initialState.id]);

    useEffect(()=>{
        if(props.detailProject?.id)setDetailProject(props.detailProject)
        else {
            var body={projects_id:detailProject.id,users_id:global.state.id}
                var url =`${process.env.MIX_BACK_END_BASE_URL}projects/`;
            if(data.list){
                 url+= data.list.project;
            }else if(data.is_subtask){
                url+=data.parent_task.list.project;
            }
            const toast_loading = toast.loading('Loading...');
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.get(url,body)
                .then((result) => {
                    var newDP=result.data
                    setDetailProject({id:newDP.id,members:newDP.members,clients:newDP.clients})
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
    },[props.detailproject])

    useEffect(()=>{
        getProgress();
    },[]);

    const getProgress=()=>{
        if(!data.is_subtask){
            if(data.cards.length>0){
                var valuePerSubtask=100/data.cards.length;
                var completeSubtaskCounter=0;
                for (let i = 0; i < data.cards.length; i++) {
                    const subtask = data.cards[i];
                    if(subtask.complete)completeSubtaskCounter++;
                }
                var finalValue=completeSubtaskCounter*valuePerSubtask;
                setData({...data,progress:finalValue});
            }else{
                if(data.complete) setData({...data,progress:100});
                else setData({...data,progress:0});
            }
        }
    }
    
    const handleStartTask = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + `tasks/${data.id}/start`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.patch(url),
            {
                loading: 'Updating...',
                success: (result)=>{
                    var result=result.data;
                    setData(result);
                    if(data.is_subtask) global.dispatch({ type: 'store-detail-subtask', payload: result });
                    else global.dispatch({ type: 'store-detail-task', payload: result });
                    return <b>Successfully updated</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    const handleCompleteTask = (check) => {
        const body = { complete: check };
        const url = process.env.MIX_BACK_END_BASE_URL + `tasks/${data.id}/complete`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.patch(url, body),
            {
                loading: 'Updating...',
                success: (result)=>{
                    var result=result.data;
                    setData(result);
                    if(data.is_subtask) global.dispatch({ type: 'store-detail-subtask', payload: result });
                    else global.dispatch({ type: 'store-detail-task', payload: result });
                    return <b>Successfully updated</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    const saveChanges = (body) => {
        if(!body) body= {
            id:data.id,complete:data.complete, title:data.title, 
            is_subtask:data.is_subtask,  progress: data.progress, parent_task_id:data.parent_task_id, tags:data.tags,
            projects_id:props.detailProject.id, users_id:global.state.id
        }
        if([1,8].includes(global.state.occupation?.id)){
            body.start=data.start;
            body.end=data.end;
            body.actual_start=data.actual_start;
            body.actual_end=data.actual_end;
        }
        if(global.state.occupation?.id==9){
            body.cost=data.cost;
            body.actual_end=data.actual_end;
        }
        if(data.cards.length<=0 && data.complete==true) body.progress=100 ;
        else if(data.cards.length<=0 && data.complete==false)body.progress=0 ;

        const url = process.env.MIX_BACK_END_BASE_URL + `tasks/${data.id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.patch(url, body),
            {
                loading: 'Updating...',
                success: (result)=>{
                    var result=result.data;
                    setData(result);
                    if(data.is_subtask) global.dispatch({ type: 'store-detail-subtask', payload: result });
                    else global.dispatch({ type: 'store-detail-task', payload: result });
                    return <b>Successfully updated</b>
                },
                error: (error)=>{
<<<<<<< HEAD
<<<<<<< HEAD
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
=======
                    if(error.response?.status==401) return <b>Unauthenticated</b>;
                    if(error.response?.status==422) return <b>Some required inputs are empty</b>;
>>>>>>> 553d6033c97fa34d14364136d49cd6b632f825c1
=======
                    if(error.response?.status==401) return <b>Unauthenticated</b>;
                    if(error.response?.status==422) return <b>Some required inputs are empty</b>;
>>>>>>> 553d6033c97fa34d14364136d49cd6b632f825c1
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    const deleteTask = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + `tasks/${id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.delete(url),
            {
                loading: 'Deleting...',
                success: (result)=>{
                    if(data.is_subtask) global.dispatch({ type: 'remove-subtask', payload: data });
                    else  global.dispatch({ type: 'remove-task', payload: data });
                    removeTaskIdQueryString(history)
                    if(props.onDelete)props.onDelete(data.list,id)
                    if(onTaskDelete)onTaskDelete(data)
                    return <b>Successfully deleted</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }
    
    return (
        <>
            <Dialog  aria-labelledby="Modal Task Detail" open={open} style={{ zIndex: '750' }}
                maxWidth={'lg'} fullwidth={"true"}>
                <DialogTitle onClose={() => {
                    removeTaskIdQueryString(history)
                    closeModalDetailTask();
                }}>
                    {data.title} {data.label ? `(${data.label})` : ''}
                    <br/>
                    {data.creator?<span style={{fontSize:'0.7em'}}>Created by : {data.creator.name}</span>:null}
                    <br />      
                    <FormControlLabel
                        control={<Checkbox onChange={(event) => {
                            var progress=data.progress         
                            if(data.cards.length<=0 && data.complete==true) progress=100 ;
                            else if(data.cards.length<=0 && data.complete==false)progress=0 ;
                            setData({...data,complete:event.target.checked,progress:progress});
                            handleCompleteTask(event.target.checked);
                        }} fontSize="small" checked={data.complete} />}
                        label={`Complete`}/>
                    {(data.cards || !data.is_subtask)?<TaskProgress value={data.progress}></TaskProgress>:<></>}
                    {data.extended?(
                            <Chip
                                variant="outlined"
                                size="small"
                                label={`Deadline extended (${moment(data.old_deadline).format('DD MMMM YYYY')} >>> ${moment(data.end).format('DD MMMM YYYY')})`}
                                color="secondary"
                            /> 
                    ):<></>}
                </DialogTitle>
                <DialogContent dividers>  
                    <EditForm
                        isEdit={isEditing}
                        data={data}
                        setData={setData}
                        detailProject={detailProject}
                        getProgress={getProgress}
                        onTaskUpdate={onTaskUpdate}
                        onTaskDelete={onTaskDelete}
                        setStartConfirmOpen={setStartConfirmOpen}
                    /> 
                    <br/>
                </DialogContent>
                {
                    ([1,2,5,8,9].includes(global.state.occupation?.id) || [1,2].includes(global.state.current_project_member_role?.id))?(                    
                            <DialogActions>
                                <DialogActionButtons
                                    isEdit={isEditing}
                                    saveChanges={saveChanges}
                                    setEditMode={handleEditingMode}
                                    deleteTask={deleteTask}
                                    deleteConfirmOpen={deleteConfirmOpen}
                                    setDeleteConfirmOpen={setDeleteConfirmOpen}
                                    closeModal={closeModalDetailTask}
                                > </DialogActionButtons>
                            </DialogActions>
                    ):<></>
                }
            </Dialog>
            <DialogConfirm
                open={startConfirmOpen}
                handleConfirm={() => { handleStartTask(); setStartConfirmOpen(false); }}
                handleClose={() => { setStartConfirmOpen(false);}}  
                title={"Are you sure?"}>
                <DialogContentText>Data will be changed permanently</DialogContentText>
            </DialogConfirm>
        </>
    );
}