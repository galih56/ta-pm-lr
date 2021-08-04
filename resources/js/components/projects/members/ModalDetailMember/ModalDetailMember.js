import 'fontsource-roboto';
import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from '../../../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { Dialog, IconButton, Typography } from '@material-ui/core/';
import TaskList from '../../../tasks/TaskList';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import DialogActionButtons from './DialogActionButtons';
import EditForm from './EditForm';

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

const useStyles = makeStyles(() => ({
  paper: { minWidth: "80% !important" },
}));


export default function ModalDetailMember(props) {
    const classes = useStyles();
    const open = props.open;
    const closeModal = props.closeModal;
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const handleDetailTaskOpen = props.handleDetailTaskOpen;
    const global = useContext(UserContext);
    const history = useHistory();
    const [data, setData] = useState({
        id: null, 
        name: '', email: '', phone_number: '',  last_login: '', occupation: null, profilePicture: '' ,
        project_members_id:null,
        role:{ id:null, name:'' },
        tasks:[]
    });
    const [tasks,setTasks]=useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditingMode = (bool = false) => setIsEditing(bool);

    const { enqueueSnackbar } = useSnackbar();
    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });

    useEffect(() => {
        setData(props.initialState);
        getTasks(props.initialState.tasks)
    }, [props.initialState.id]);

    const getTasks = (id) => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}project-members/${props.initialState.id}/tasks`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setTasks(result.data);
            }).catch((error) => {
                const payload = { error: error, snackbar: null, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }
    
    const saveChanges = () => {
        let body = data;
        const url = process.env.MIX_BACK_END_BASE_URL + `project-members/${props.initialState.project_members_id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.patch(url, body)
            .then(result => {
                setData(result.data);
                props.onUpdate(result.data);
                handleSnackbar(`Data has been updated`, 'success');
            }).catch((error) => {
                const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: history }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }

    const deleteMember = () => {
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + `project-members/${data.project_members_id}`;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.delete(url)
                .then((result) => {
                    props.onDelete(data);
                    handleSnackbar(`Data has been deleted`, 'success');
                }).catch((error) => {
                    const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: history }
                    global.dispatch({ type: 'handle-fetch-error', payload: payload });
                });
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
                > </DialogActionButtons>
            </DialogActions>
        </Dialog>
    );
}
