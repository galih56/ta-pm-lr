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
        id: null, name: '', email: '', last_login: '', role: null, roles_id:'',profilePicture: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    let history=useHistory();

    const handleEditingMode = (bool = false) => {
        const params = new URLSearchParams(history.location.search)
        if(bool==true) {
            params.append('edit', 1)
            history.replace({ search: params.toString() })
        }else{
            params.delete('edit')
            history.replace({ search: params.toString() })
        }
        setIsEditing(bool);
    }

    useEffect(() => {
        setData(props.initialState);
        getDetailUser()
        const params = new URLSearchParams(history.location.search)
        if(params.has('edit')){
            const paramsEdit = params.get('edit');
            if(paramsEdit==1) setIsEditing(true);
        }
    }, [props.initialState.id]);

    const getDetailUser = () => {
        if(props.initialState.id){
            const url = `${process.env.MIX_BACK_END_BASE_URL}users/${props.initialState.id}`;
            axios.get(url)
            .then((result) => {
                setData(result.data);
                props.onUpdate(result.data, 'update');
            }).catch(console.log);
        }
    }

    const saveChanges = () => {
        let body = { id: data.id, name: data.name, email: data.email,  roles_id: data.roles_id, profile_picture_path: ''};
        const url = process.env.MIX_BACK_END_BASE_URL + `users/${props.initialState.id}`;
        const toast_loading = toast.loading(`Updating`); 
        axios.patch(url, body)
            .then((result) => {
                setData(result.data);
                props.onUpdate(result.data, 'update');
                toast.dismiss(toast_loading);
                toast.success(<b>Successfully updated</b>)
            }).catch(error=> toast.dismiss(toast_loading));
    }

    const deleteUser = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + `users/${data.id}`;
        const toast_loading = toast.loading(`Deleting...`); 
        axios.delete(url)
            .then((result) => {
                props.onUpdate(data, 'delete');
                toast.dismiss(toast_loading);
                toast.success(<b>Successfully deleted</b>)
            }).catch(error=> toast.dismiss(toast_loading));
    }

    return (
        <Dialog onClose={closeModal} aria-labelledby="Modal User Detail" open={open} style={{ zIndex: '750' }}
            maxWidth={'md'} fullWidth>
            <DialogTitle onClose={closeModal}>User information</DialogTitle>
            <DialogContent dividers>
                <EditForm open={open} isEdit={isEditing} data={data} setData={setData} asProfile={asProfile}/>
            </DialogContent>
            <DialogActions>
                <DialogActionButtons isEdit={isEditing} deletable={!([1,2].includes(data.role?.id) || global.state.id==props.initialState.id)} 
                    saveChanges={saveChanges} setEditMode={handleEditingMode} deleteUser={deleteUser} 
                    deleteConfirmOpen={deleteConfirmOpen} setDeleteConfirmOpen={setDeleteConfirmOpen} closeModal={closeModal}/>
            </DialogActions>
        </Dialog>
    );
}
