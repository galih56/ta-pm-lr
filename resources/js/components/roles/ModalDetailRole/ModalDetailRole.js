import 'fontsource-roboto';
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
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose} size="large">
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
        const url = process.env.MIX_BACK_END_BASE_URL + `roles/${props.initialState.id}`;
        const toast_loading = toast.loading('Creating a new role'); 
        axios.patch(url, body)
            .then((result) => {  
                props.onUpdate(result.data);
                toast.dismiss(toast_loading)
                toast.success(<b>Successfully updated</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
    }

    const deleteRole = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}roles/${data.id}`;
        const toast_loading = toast.loading('Deleting...'); 
        axios.delete(url,data)
            .then((result) => {  
                props.onDelete(data);
                toast.dismiss(toast_loading)
                toast.success(<b>Successfully deleted</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
    }

    return (
        <Dialog onClose={closeModal} open={open} maxWidth={'sm'} fullWidth>
            <DialogTitle onClose={closeModal}>Role</DialogTitle>
            <DialogContent dividers>
                <EditForm isEdit={isEditing} data={data} setData={setData}> </EditForm>
            </DialogContent>
            <DialogActions>
                {/* SysAdmin, Project Owner, Manager, Project Manager, Programmer, Senior Programmer, Analyst Surveyor */}
                <DialogActionButtons isEdit={isEditing} deletable={!([1, 2, 3, 4, 5, 7, 8, 9, 10, 11].includes(data.id))} saveChanges={saveChanges}
                    setEditMode={handleEditingMode} deleteRole={deleteRole} deleteConfirmOpen={deleteConfirmOpen}
                    setDeleteConfirmOpen={setDeleteConfirmOpen} closeModal={closeModal}/>
            </DialogActions>
        </Dialog>
    );
}
