import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from '../../../../../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { Dialog, IconButton, Typography } from '@material-ui/core/';
import TaskList from '../../../../../tasks/TaskList';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import toast, { Toaster } from 'react-hot-toast';
import DialogActionButtons from './DialogActionButtons';
import EditForm from './EditForm';
import axios from 'axios';

const styles = (theme) => ({
    root: { margin: 0, padding: theme.spacing(2), },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <Typography>{children}</Typography>
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

export default function ModalDetailMember(props) {
    const open = props.open;
    const closeModal = props.closeModal;
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const handleDetailTaskOpen = props.handleDetailTaskOpen;
    const global = useContext(UserContext);

    const [data, setData] = useState({
        id: null, name: '', email: '',  last_login: '', role: null, profile_picture_path: '' ,
        project_members_id:null, role:{ id:null, name:'' }, tasks:[]
    });
    const [tasks,setTasks]=useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditingMode = (bool = false) => setIsEditing(bool);

    useEffect(() => {
        setData(props.initialState);
        getTasks(props.initialState.tasks)
    }, [props.initialState.id]);

    const getTasks = (id) => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}project-members/${props.initialState.id}/tasks`;
        axios.get(url)
            .then((result) => {
                setTasks(result.data);
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }
    
    const saveChanges = () => {
        let body = data;
        const url = process.env.MIX_BACK_END_BASE_URL + `project-members/${props.initialState.project_members_id}`;
        const toast_loading = toast.loading('Updating...'); 
        axios.patch(url, body)
            .then((result) => {  
                setData(result.data);
                props.onUpdate(result.data);
                toast.dismiss(toast_loading)
                toast.success(<b>Successfully updated</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
    }

    const deleteMember = () => {
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + `project-members/${data.project_members_id}`;
            
        const toast_loading = toast.loading('Deleting...'); 
        axios.delete(url, body)
            .then((result) => {  
                props.onDelete(data);
                toast.dismiss(toast_loading)
                toast.success(<b>Successfully deleted</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
        }
    }

    return (
        <Dialog aria-labelledby="Modal Member Detail" style={{ zIndex: '750',width:'75% !important' }} open={open}>
            <DialogTitle onClose={closeModal}>Member information</DialogTitle>
            <DialogContent dividers>
                <EditForm isEdit={isEditing} data={data} setData={setData} />
                <Grid style={{marginTop:'1em',marginBottom:'1em'}}>
                    <TaskList data={tasks} handleDetailTaskOpen={handleDetailTaskOpen} />    
                </Grid>
            </DialogContent>
            <DialogActions>
                <DialogActionButtons
                    isEdit={isEditing}
                    saveChanges={saveChanges}
                    setEditMode={handleEditingMode}
                    deleteMember={deleteMember}
                    deleteConfirmOpen={deleteConfirmOpen}
                    setDeleteConfirmOpen={setDeleteConfirmOpen}
                    closeModal={closeModal}
                />
            </DialogActions>
                     
        </Dialog>
    );
}
