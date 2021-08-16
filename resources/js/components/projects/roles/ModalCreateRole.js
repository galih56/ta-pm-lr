import 'fontsource-roboto';
import Alert from '@material-ui/core/Alert';
import React, { useState, useContext } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { Grid, Button, Dialog, IconButton, TextField } from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import UserContext from './../../../context/UserContext';
import CloseIcon from '@material-ui/icons/Close';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const styles = (theme) => ({
    root: { margin: 0, padding: theme.spacing(2) },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <span style={{ marginRight: '2em' }}>{children}</span>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                    size="large">
                    <CloseIcon />
                </IconButton>
            ) : null
            }
        </MuiDialogTitle >
    );
});

const DialogContent = withStyles((theme) => ({
    root: { padding: theme.spacing(1) },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: { margin: 0, padding: theme.spacing(1) },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
    root: { display: 'flex', flexWrap: 'wrap' },
    margin: { margin: theme.spacing(1) },
}));

export default function ModalCreateRole(props) {
    const classes = useStyles();
    var open = props.open;
    var closeModal = props.closeModal;

    const [name, setName] = useState('');
    const [children, setChildren] = useState('');
    const global = useContext(UserContext);

    const submitData = () => {
        const body = { name: name, children: children }
        const url = process.env.MIX_BACK_END_BASE_URL + 'member-roles';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        toast.promise(
            axios.post(url, body),
            {
                loading: 'Creating a new role',
                success: (result)=>{
                    setName('');
                    closeModal();
                    props.onCreate(result.data);
                    return <b>A new role successfuly created</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }
    
    return (
        <Dialog aria-labelledby="Create a role" open={open} className={classes.dialog}
            maxWidth={'lg'} fullwidth={"true"}>
            <DialogTitle onClose={() => closeModal()}>Create a role</DialogTitle>
            { (global.state.authenticated === true)?(
                <React.Fragment>
                    <DialogContent dividers>
                        <Grid container spacing={2} style={{ paddingLeft: 3, paddingRight: 3 }} >
                            <Grid item lg={12} md={12} sm={12} xs={12} >
                                <TextField
                                    variant="standard"
                                    label="Name : "
                                    placeholder="example : Administration System, CEO"
                                    className={classes.textfield}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ width: '100%' }}
                                />
                                 </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={submitData} color="primary">Create</Button>
                    </DialogActions>
                    <Toaster/>
                </React.Fragment>
            ):(
                <DialogContent dividers>
                    <Alert severity="warning">Your action requires authentication. Please sign in.</Alert>
                </DialogContent>
            )}
            <Toaster/>
        </Dialog>
    );
}
