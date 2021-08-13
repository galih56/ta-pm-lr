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
    const history = useHistory();
    const [data, setData] = useState({
        id: null, name: '', email: '', phone_number: '', last_login: '', occupation: null, occupations_id:'',profilePicture: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [deletable, setDeletable] = useState(false);
    const handleEditingMode = (bool = false) => setIsEditing(bool);

    const { enqueueSnackbar } = useSnackbar();
    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });

    useEffect(() => {
        setData(props.initialState);
        
        if(!global.state.occupation?.name?.toLowerCase().includes('administrator')
            ||global.state.id==props.initialState.id){
            setDeletable(false);
        }else{
            setDeletable(true);
        }
    }, [props.initialState.id]);

    const saveChanges = () => {
        let body = {
            id: data.id, name: data.name, email: data.email, 
            phone_number: data.phone_number,
            occupations_id: data.occupations_id, profile_picture_path: ''
        };
        console.log(body)
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + `users/${props.initialState.id}`;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.patch(url, body)
                .then(result => {
                    setData(result.data);
                    props.onUpdate(result.data, 'update');
                    handleSnackbar(`Data has been updated`, 'success');
                }).catch((error) => {
                    const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: history }
                    global.dispatch({ type: 'handle-fetch-error', payload: payload });
                });
        }
    }

    const deleteUser = () => {
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + `users/${data.id}`;
            try {
                axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
                axios.defaults.headers.post['Content-Type'] = 'application/json';
                axios.delete(url)
                    .then((result) => {
                        props.onUpdate(data, 'delete');
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
        <Dialog onClose={closeModal} aria-labelledby="Modal User Detail" open={open} style={{ zIndex: '750' }}
            maxWidth={'lg'} fullwidth={"true"}>
            <DialogTitle onClose={closeModal}>User information</DialogTitle>
            <DialogContent dividers>
                <EditForm isEdit={isEditing} data={data} setData={setData} asProfile={asProfile}/>
            </DialogContent>
            <DialogActions>
                <DialogActionButtons
                    isEdit={isEditing}
                    deletable={deletable}
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
