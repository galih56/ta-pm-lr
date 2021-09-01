import 'fontsource-roboto';
import React, { useEffect, useContext, useState, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from '../../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import toast, { Toaster } from 'react-hot-toast';
import DialogActionButtons from './DialogActionButtons';
import EditForm from './EditForm';
import axios from 'axios';

// https://stackoverflow.com/questions/35352638/react-how-to-get-parameter-value-from-query-string
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

export default function ModalDetailUser(props) {
    const {open,closeModal,asProfile}=props;
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const global = useContext(UserContext);
    const [data, setData] = useState({
        id: null, name: '', email: '', last_login: '', occupation: null, occupations_id:'',profilePicture: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const handleEditingMode = (bool = false) => setIsEditing(bool);

    useEffect(() => {
        setData(props.initialState);
    }, [props.initialState.id]);

    const saveChanges = () => {
        let body = {
            id: data.id, name: data.name, email: data.email, 
            occupations_id: data.occupations_id, profile_picture_path: ''
        };
        
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + `users/${props.initialState.id}`;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            toast.promise(
                axios.patch(url, body),
                {
                    loading: 'Updating...',
                    success: (result)=>{
                        setData(result.data);
                        props.onUpdate(result.data, 'update');
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

    const deleteUser = () => {
        if (window.navigator.onLine) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            const url = process.env.MIX_BACK_END_BASE_URL + `users/${data.id}`;
            toast.promise(
                axios.delete(url),
                {
                    loading: 'Deleting...',
                    success: (result)=>{
                        props.onUpdate(data, 'delete');
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
        <Dialog onClose={closeModal} aria-labelledby="Modal User Detail" open={open} style={{ zIndex: '750' }}
            maxWidth={'lg'} fullwidth={"true"}>
            <DialogTitle onClose={closeModal}>User information</DialogTitle>
            <DialogContent dividers>
                <EditForm open={open} isEdit={isEditing} data={data} setData={setData} asProfile={asProfile}/>
            </DialogContent>
            <DialogActions>
                <DialogActionButtons
                    isEdit={isEditing}
                    deletable={!([1,8].includes(data.occupation?.id) || global.state.id==props.initialState.id)}
                    saveChanges={saveChanges}
                    setEditMode={handleEditingMode}
                    deleteUser={deleteUser}
                    deleteConfirmOpen={deleteConfirmOpen}
                    setDeleteConfirmOpen={setDeleteConfirmOpen}
                    closeModal={closeModal}
                > </DialogActionButtons>
            </DialogActions>
        </Dialog>
    );
}
