import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import DialogActionButtons from './DialogActionButtons';
import EditForm from './EditForm';
import axios from 'axios';
import toast from 'react-hot-toast';

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

export default function ModalDetailRole(props) {
    const open = props.open;
    const closeModal = props.closeModal;
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const global = useContext(UserContext);
    const [data, setData] = useState({ id: null, name: '', color: '', bgColor: '', parents: [], children: [], root: false, isHighlight: false });
    const [isEditing, setIsEditing] = useState(false);
    const handleEditingMode = (bool = false) => setIsEditing(bool);

    useEffect(() => {
        setData(props.initialState);
    }, [props.initialState]);

    const saveChanges = () => {
        let body = data;
        if (window.navigator.onLine) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            const url = process.env.MIX_BACK_END_BASE_URL + `roles/${props.initialState.id}`;
            
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
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            const url = process.env.MIX_BACK_END_BASE_URL + `roles/${data.id}`;
            toast.promise(
                axios.delete(url,data),
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
        <Dialog onClose={closeModal} open={open} maxWidth={'lg'} fullWidth>
            <DialogTitle onClose={closeModal}>Role</DialogTitle>
            <DialogContent dividers>
                <EditForm isEdit={isEditing} data={data} setData={setData}> </EditForm>
            </DialogContent>
            <DialogActions>
                <DialogActionButtons isEdit={isEditing} deletable={!([1, 2,3,4,5,6].includes(data.id))}
                    saveChanges={saveChanges}
                    setEditMode={handleEditingMode}
                    deleteRole={deleteRole}
                    deleteConfirmOpen={deleteConfirmOpen}
                    setDeleteConfirmOpen={setDeleteConfirmOpen}
                    closeModal={closeModal}

                > </DialogActionButtons>
            </DialogActions>
        </Dialog>
    );
}
