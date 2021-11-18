import React,{useContext} from 'react';
import UserContext from './../../context/UserContext';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function LogoutConfirmDialog(props) {
    const open = props.open;
    const handleClose = props.handleDialogClose;
    const global = useContext(UserContext);
    const history=useHistory();

    const handleConfirm = () => {
        toast.promise(
            axios.post(process.env.MIX_BACK_END_BASE_URL + 'logout', {}, {
                headers: { 
                    'Authorization':`Bearer ${global.state.token}`, 
                    'Content-Type': 'application/json' 
                }
             }),
            {
                loading: 'Logging Out',
                success: (result)=>{
                    handleClose();
                    global.dispatch({ type: 'logout' });
                    history.push('/auth');
                    return <b>Logged Out</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                }
            });
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