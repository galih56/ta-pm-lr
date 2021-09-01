import 'fontsource-roboto';
import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import { Dialog, IconButton, Typography } from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import DialogActionButtons from './DialogActionButtons';
import EditForm from './EditForm';
import toast, { Toaster } from 'react-hot-toast';

// https://stackoverflow.com/questions/35352638/react-how-to-get-parameter-value-from-query-string
const styles = (theme) => ({
    root: { margin: 0, padding: theme.spacing(2), },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <Typography  variant="h6">{children}</Typography>
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
    root: { margin: 0, padding: theme.spacing(1) }
}))(MuiDialogActions);

export default function ModalDetailMeeting(props) {
    const {open,closeModal,detailProject,initialState} = props;
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const global = useContext(UserContext);
    const [data, setData] = useState(initialState);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditingMode = (bool = false) => setIsEditing(bool);
    
    const getDetailMeeting = () => {
        const toast_loading = toast.loading('Loading...');
        const url = process.env.MIX_BACK_END_BASE_URL + 'meetings/' + initialState.id;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                const data = result.data;
                global.dispatch({ type: 'store-detail-meeting', payload: data })
                setData(data);
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
    
    useEffect(() => {
        getDetailMeeting()
    }, [initialState]);

    const saveChanges = (body) => {
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + `meetings/${initialState.id}`;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            toast.promise(
                axios.patch(url, body),
                {
                    loading: 'Updating...',
                    success: (result)=>{
                        setData(result.data);
                        return <b>Successfully updated</b>
                    },
                    error: (error)=>{
                        if(error.response.status==401) return <b>Unauthenticated</b>;
                        if(error.response.status==422) return <b>Some required inputs are empty</b>;
                        return <b>{error.response.statusText}</b>;
                    },
                });
        }
    }

    const deleteMeeting = () => {
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + `meetings/${data.id}`;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            toast.promise(
                axios.delete(url),
                {
                    loading: 'Deleting...',
                    success: (result)=>{
                        return <b>Successfully deleted</b>
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
        <Dialog open={open} maxWidth={'lg'} fullwidth={"true"}>
             
            <DialogTitle onClose={closeModal}>Meeting information</DialogTitle>
            <DialogContent dividers>
                <EditForm 
                    isEdit={isEditing} 
                    data={data} 
                    setData={setData} 
                    detailProject={detailProject} 
                    saveChanges={saveChanges}/>
            </DialogContent>
            <DialogActions>
                <DialogActionButtons
                    isEdit={isEditing}
                    saveChanges={()=>saveChanges(data)}
                    setEditMode={handleEditingMode}
                    deleteMeeting={deleteMeeting}
                    deleteConfirmOpen={deleteConfirmOpen}
                    setDeleteConfirmOpen={setDeleteConfirmOpen}
                    closeModal={closeModal}
                />
            </DialogActions>
        </Dialog>
    );
}
