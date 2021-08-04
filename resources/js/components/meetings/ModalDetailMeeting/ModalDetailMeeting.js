import 'fontsource-roboto';
import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from '../../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import { Dialog, IconButton, Typography } from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import DialogActionButtons from './DialogActionButtons';
import EditForm from './EditForm';

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
    const history = useHistory();
    const [data, setData] = useState(initialState);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditingMode = (bool = false) => setIsEditing(bool);

    const { enqueueSnackbar } = useSnackbar();
    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });

    const getDetailMeeting = () => {
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + 'meetings/' + initialState.id;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.get(url)
                .then((result) => {
                    const data = result.data;
                    global.dispatch({ type: 'store-detail-meeting', payload: data })
                    setData(data);
                }).catch((error) => {
                    const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
                    global.dispatch({ type: 'handle-fetch-error', payload: payload });
                });
        } else {
            handleSnackbar(`You're currently offline. Please check your internet connection.`, 'warning');
        }
    }
    
    useEffect(() => {
        getDetailMeeting()
    }, [initialState]);

    const saveChanges = (body) => {
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + `meetings/${initialState.id}`;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            try {
                axios.patch(url, body)
                    .then((result) => {
                        setData(result.data);
                        handleSnackbar(`Data has been updated`, 'success');
                    }).catch((error) => {
                        const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: history }
                        global.dispatch({ type: 'handle-fetch-error', payload: payload });
                    });
            } catch (error) {
                handleSnackbar('Failed to send request', 'error');
            }
        }
    }

    const deleteMeeting = () => {
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + `meetings/${data.id}`;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            try {
                axios.delete(url, {}, config)
                    .then((result) => {
                        handleSnackbar(`Data has been deleted`, 'success');
                    }).catch((error) => {
                        const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: history }
                        global.dispatch({ type: 'handle-fetch-error', payload: payload });
                    });
            } catch (error) {
                handleSnackbar('Failed to send request', 'error')
            }
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
