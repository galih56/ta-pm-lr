import 'fontsource-roboto';
import axios from 'axios';
import React, { useState, useContext } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import UserContext from '../../context/UserContext';
import CloseIcon from '@material-ui/icons/Close';
// import roleSearchBar from './../widgets/roleSearchBar';
import Alert from '@material-ui/lab/Alert';
import toast, { Toaster } from 'react-hot-toast';

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
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose} size="large">
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
        if (!window.navigator.onLine) toast.error(`You are currently offline`);
        else {
            const url = `${process.env.MIX_BACK_END_BASE_URL}roles`;
                
            const toast_loading = toast.loading('Creating a new role'); 
            axios.post(url, body)
                .then((result) => {  
                    setName('');
                    setChildren([]);
                    props.onCreate(result.data);
                    closeModal();
                    toast.dismiss(toast_loading)
                    toast.success( <b>A new role successfully created</b>)
                }).catch((error)=> toast.dismiss(toast_loading));
        }
    }

    return (
        <>
        <Dialog aria-labelledby="Create a role" open={open} className={classes.dialog}
            maxWidth={'md'} fullWidth>
            <DialogTitle onClose={() => closeModal()}>Create a role</DialogTitle>
                {(global.state.authenticated===true)?(
                    <>
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
                                {/* <roleSearchBar label={"Search lower roles"} onChange={value => setChildren(value)} exceptedData={[]} defaultValue={[]} /> */}
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={submitData} color="primary">Create</Button>
                    </DialogActions>
                </>
                ):(
                    <DialogContent dividers>
                        <Alert severity="warning">Your action requires authentication. Please sign in.</Alert>
                    </DialogContent>
                )}
        </Dialog>
         
        </>
    );
}
