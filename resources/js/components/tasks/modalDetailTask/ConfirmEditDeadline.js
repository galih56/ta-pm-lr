import React,{useContext,useState} from 'react';
import UserContext from './../../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import { Dialog, IconButton, Typography, } from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const styles = (theme) => ({
    root: { margin: 0, padding: theme.spacing(2) },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={onClose}
                size="large">
                <CloseIcon />
            </IconButton>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: { padding: theme.spacing(2) },
}))(MuiDialogContent);

export default function ModalConfirmEditDeadline({open,handleClose,data,setData}) {
    const global=useContext(UserContext);
    const submitApproval=()=>{
        const url = process.env.MIX_BACK_END_BASE_URL + `tasks/${data.id}/extend-deadline`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.patch(url, body)
            .then((result) => {
                var result=result.data;
                setData(result);
                if(data.parent_task) global.dispatch({ type: 'store-detail-subtask', payload: result });
                else  global.dispatch({ type: 'store-detail-task', payload: result });
                if(onTaskUpdate) onTaskUpdate(result);
                handleSnackbar(`Data has been updated`, 'success');
            }).catch((error) => {
                const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: history }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });

    }
    return (
        <Dialog aria-labelledby="Edit deadline" open={open}>
            <DialogTitle onClose={
                () => {
                    handleClose();
                }} >Edit deadline </DialogTitle>
            <DialogContent dividers>
                <form onSubmit={(e)=> submitApproval()}>
                   
                </form>
                 
            </DialogContent>
        </Dialog>
    );
}
