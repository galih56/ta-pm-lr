import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import { Dialog, IconButton, Typography } from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import toast from 'react-hot-toast';
import EditForm from './EditForm';
import axios from 'axios';

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

export default function ModalDetailMember(props) {
    const { open, closeModal,onUpdate,onDelete } = props;
    const global = useContext(UserContext);

    const [data, setData] = useState({
        id: null, name: '', email: '',  last_login: '',  profile_picture_path: '' ,
         role:{ id:null, name:'' }, team_members_id:null
    });
    
    useEffect(() => {
        setData(props.initialState);
    }, [props.initialState.id]);

    const saveChanges = () => {
        let body = {  id: data.team_members_id, roles_id: data.role?.id };
        const url = process.env.MIX_BACK_END_BASE_URL + `team-members/${data.team_members_id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.patch(url, body),
            {
                loading: 'Updating...',
                success: (result)=>{
                    onUpdate(data)
                    return <b>Successfully updated</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    const deleteMember = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}team-members/${data.team_members_id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.delete(url),
            {
                loading: 'Deleting',
                success: (result)=>{
                        onDelete(data)
                        return <b>Successfully deleted</b>
                    },
                    error: (error)=>{
                        if(error.response.status==401) return <b>Unauthenticated</b>;
                        if(error.response.status==422) return <b>Some required inputs are empty</b>;
                        return <b>{error.response.statusText}</b>;
                    },
                });
    }

    return (
        <Dialog aria-labelledby="Modal Member Detail" style={{ zIndex: '750',width:'75% !important' }} open={open}>
            <DialogTitle onClose={closeModal}>Member information</DialogTitle>
            <DialogContent dividers>
                <EditForm isEdit={isEditing} data={data} setData={setData} />
            </DialogContent>
        </Dialog>
    );
}
