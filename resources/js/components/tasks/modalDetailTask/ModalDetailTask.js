import axios from 'axios';
import React, { useEffect, useContext, useState, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from '../../../context/UserContext';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
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
import 'fontsource-roboto';
import { useSnackbar } from 'notistack';

// https://stackoverflow.com/questions/35352638/react-how-to-get-parameter-value-from-query-string
const styles = (theme) => ({
    root: { margin: 0, padding: theme.spacing(2), },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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
    if (queryParams.has('task_id')) {
        queryParams.delete('task_id');
        history.replace({
            search: queryParams.toString(),
        })
    }
}

export default function ModalDetailTask(props) {
    const { taskId } = props.initialState;
    const {open,closeModalDetailTask,onTaskUpdate,onTaskDelete} = props;
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const global = useContext(UserContext);
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    const [data, setData] = useState({
        id: taskId, projectId: '', listId: null, list:null,
        title: '', description: '', label: '', complete: false, progress: 0,
        start:null,end:null,actualStart:null,actualEnd:null, startLabel:'',endLabel:'',
        list: null, tags: [], members: [], parentTask:'',
        cards: [], logs: [], comments: [], attachments: [],creator:null,isSubtask:false
    });
    const [detailProject,setDetailProject]=useState({
        id:'',title:'',members:[],columns:[]
    })
    const [isEditing, setIsEditing] = useState(false);
    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });
    const handleEditingMode = (bool = false) => setIsEditing(bool);

    const getDetailTask = useCallback(() => {
        if (window.navigator.onLine) {
            const config = { mode: 'no-cors', crossdomain: true, }
            const url = process.env.REACT_APP_BACK_END_BASE_URL + 'task/' + taskId;
            axios.defaults.headers.common['Authorization'] = global.state.token;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.get(url, {}, config)
                .then((result) => {
                    setData({ ...data, ...result.data });
                    const payload = { projectId: data.projectId, listId: data.listId, ...result.data };
                    if(data.isSubtask) global.dispatch({ type: 'store-detail-subtask', payload: payload })
                    else global.dispatch({ type: 'store-detail-task', payload: payload })
                }).catch((error) => {
                    const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
                    global.dispatch({ type: 'handle-fetch-error', payload: payload });
                });
        } else handleSnackbar(`You are currently offline. Couldn't retrieve related data from local storage`, 'warning');
    }, [taskId,props.initialState.id]);

    useEffect(() => {
        getDetailTask()
    }, [taskId,props.initialState.id]);

    useEffect(()=>{
        if(props.detailProject.id)setDetailProject(props.detailProject)
        else {
            if(data.list){
                const config = { mode: 'no-cors', crossdomain: true }
                const url = process.env.REACT_APP_BACK_END_BASE_URL + 'project/' + data.list.project;
                axios.defaults.headers.post['Content-Type'] = 'application/json';
                axios.get(url, {}, config)
                    .then((result) => {
                        var newDP=result.data
                        setDetailProject({id:newDP.id,members:newDP.members})
                    }).catch((error) => {
                        const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
                        global.dispatch({ type: 'handle-fetch-error', payload: payload });
                    });
            }
        }
    },[props.detailproject])

    const getProgress=()=>{
        if(!data.isSubtask && data.cards){
            var valuePerSubtask=100/data.cards.length;
            var completeSubtaskCounter=0;
            for (let i = 0; i < data.cards.length; i++) {
                const subtask = data.cards[i];
                if(subtask.complete)completeSubtaskCounter++;
            }
            var finalValue=completeSubtaskCounter*valuePerSubtask;
            setData({...data,progress:finalValue});
        }
    }

    const saveChanges = (body) => {
        if(!body) body= {
            id:data.id,actualStart:data.actualStart, actualEnd:data.actualEnd,
            complete:data.complete, title:data.title, isSubtask:data.isSubtask, 
            progress: data.progress, parentTask:data.parentTask
        }
        
        if(data.cards.length<=0 && data.complete==true) body.progress=100 ;
        else if(data.cards.length<=0 && data.complete==false)body.progress=0 ;

        const config = { mode: 'no-cors', crossdomain: true }
        const url = process.env.REACT_APP_BACK_END_BASE_URL + `task/${data.id}`;
        axios.defaults.headers.common['Authorization'] = global.state.token;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.patch(url, body, config)
            .then((result) => {
                var result=result.data;
                setData(result);
                if(data.isSubtask) global.dispatch({ type: 'store-detail-subtask', payload: result });
                else  global.dispatch({ type: 'store-detail-task', payload: result });
                handleSnackbar(`Data has been updated`, 'success');
                if(onTaskUpdate) onTaskUpdate(result);
            }).catch((error) => {
                const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: history }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }

    const deleteTask = () => {
        const config = { mode: 'no-cors', crossdomain: true }
        const url = process.env.REACT_APP_BACK_END_BASE_URL + `task/${taskId}`;
        axios.defaults.headers.common['Authorization'] = global.state.token;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.delete(url, {}, config).then((result) => {
                if(data.isSubtask) global.dispatch({ type: 'remove-subtask', payload: data });
                else  global.dispatch({ type: 'remove-task', payload: data });
                handleSnackbar(`Data has been deleted`, 'success');
                removeTaskIdQueryString(history)
                if(props.onDelete)props.onDelete(data.list,taskId)
                if(onTaskDelete)onTaskDelete(data)
            }).catch((error) => {
                const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: history }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }
    
    return (
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
                        saveChanges({
                            id:data.id, actualStart:data.actualStart, actualEnd:data.actualEnd,
                            complete:event.target.checked, title:data.title, isSubtask:data.isSubtask,
                            progress:progress
                        });
                    }} fontSize="small" checked={data.complete} />}
                    label={`Complete`}
                />
                <TaskProgress value={data.progress}></TaskProgress>
            </DialogTitle>
            <DialogContent dividers>    
                <EditForm
                    isEdit={isEditing}
                    data={data}
                    setData={setData}
                    detailProject={detailProject}
                    getProgress={()=>getProgress()}
                    onTaskUpdate={onTaskUpdate}
                    onTaskDelete={onTaskDelete}
                />
                <br/>
            </DialogContent>
            {
                (global.state.occupation.name=='Manager' ||global.state.occupation.name=='Project Manager' )?(                    
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
    );
}