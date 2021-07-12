import React,{useContext} from 'react';
import UserContext from './../../context/UserContext';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { useSnackbar } from 'notistack';


export default function LogoutConfirmDialog(props) {
    const open = props.open;
    const handleClose = props.handleDialogClose;
    const global = useContext(UserContext);
    const history=useHistory();
    const { enqueueSnackbar } = useSnackbar();
    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });

    const handleConfirm = () => {
        global.dispatch({ type: 'logout' });
        history.push('/auth');
        return;
        axios.defaults.withCredentials = true
        axios.post(process.env.MIX_BACK_END_BASE_URL + 'logout', {}, {
            headers: { 
                'X-Authorization':`Bearer ${global.state.token}`, 
                'Content-Type': 'application/json' 
            }
         })
            .then((result) => {
                handleClose();
                global.dispatch({ type: 'logout' });
                history.push('/auth');
            }).catch((error) => console.log(error));
    }

    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>Cancel</Button>
                <Button onClick={handleConfirm} variant="contained" color="primary"> Confirm </Button>
            </DialogActions>
        </Dialog>
    );
}