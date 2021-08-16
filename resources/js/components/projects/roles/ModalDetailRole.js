import 'fontsource-roboto';
import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import UserContext from '../../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import toast, { Toaster } from 'react-hot-toast';

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

export default function ModalDetailRole(props) {
    const open = props.open;
    const closeModal = props.closeModal;
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const global = useContext(UserContext);
    const [data, setData] = useState({ id: null, name: '', color: '', bgColor: ''});
    const [isEditing, setIsEditing] = useState(false);
    const handleEditingMode = (bool = false) => setIsEditing(bool);

    useEffect(() => {
        setData(props.initialState);
    }, [props.initialState]);

    const saveChanges = () => {
        let body = data;
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + `member-roles/${props.initialState.id}`;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            toast.promise(
                axios.patch(url, body),
                {
                    loading: 'Updating...',
                    success: (result)=>{
                        props.onUpdate(result.data);
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

    const deleteRole = () => {
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + `memberrole/${data.id}`;
            axios.defaults.headers.common['Authorization'] = global.state.token;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            toast.promise(
                axios.delete(url),
                {
                    loading: 'Deleting...',
                    success: (result)=>{
                        props.onDelete(data);
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
        <Dialog onClose={closeModal} open={open} maxWidth={'lg'} fullwidth={"true"}>
            <DialogTitle onClose={closeModal}>Role</DialogTitle>
            <DialogContent dividers>
                <EditForm isEdit={isEditing} data={data} setData={setData}> </EditForm>
            </DialogContent>
            <DialogActions>
                <DialogActionButtons
                    isEdit={isEditing}
                    saveChanges={saveChanges}
                    setEditMode={handleEditingMode}
                    deleteRole={deleteRole}
                    deleteConfirmOpen={deleteConfirmOpen}
                    setDeleteConfirmOpen={setDeleteConfirmOpen}
                    closeModal={closeModal}
                > </DialogActionButtons>
            </DialogActions>
            <Toaster/>
        </Dialog>
    );
}


const EditForm = ({ isEdit, data, setData }) => {
    if (isEdit) {
        return (
            <Grid container spacing={2} style={{ paddingLeft: 4, paddingRight: 4 }} >
                <TextField
                    defaultValue={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    style={{ width: '100%' }}
                    variant={'standard'}
                />
            </Grid>
        )
    } else {
        return (
            <Grid container spacing={2} style={{ paddingLeft: 4, paddingRight: 4 }} >
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <Typography variant="body2">{data.name}</Typography>
                </Grid>
            </Grid>
        )
    }
}

const ModalDeleteConfirm = (props) => {
    const open = props.open;
    const handleClose = props.handleClose;
    const handleDelete = props.handleDelete;

    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
                <DialogContentText>Data will be deleted permanently.</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleDelete} variant='contained' color="primary"> Confirm </Button>
            </DialogActions>
        </Dialog>
    );
}

const DialogActionButtons = ({ isEdit, saveChanges, setEditMode, deleteRole, deleteConfirmOpen, setDeleteConfirmOpen, closeModal }) => {
    if (isEdit) {
        return (
            <React.Fragment>
                <Button onClick={() => setEditMode(false)} color="primary"> Cancel </Button>
                <Button onClick={
                    () => { saveChanges(); setEditMode(false); }
                } variant="contained" color="primary"> Save</Button>
                <Button onClick={
                    () => { setDeleteConfirmOpen(true); }
                } variant="contained" color="secondary">Delete</Button>
                <ModalDeleteConfirm
                    open={deleteConfirmOpen}
                    handleDelete={() => { deleteRole(); setDeleteConfirmOpen(false); closeModal(); }}
                    handleClose={() => { setDeleteConfirmOpen(false); closeModal(); }}>
                </ModalDeleteConfirm>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <Button onClick={() => setEditMode(true)} color="primary">Edit</Button>
            </React.Fragment>
        )
    }
}