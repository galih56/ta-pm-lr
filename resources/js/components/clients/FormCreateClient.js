import React,{useState,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import UserContext from './../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import { Dialog, IconButton, Typography } from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
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

const FormCreateClient=({open,handleClose,onCreate})=>{
    const global=useContext(UserContext);
    const [description,setDescription]=useState('');
    const [city,setCity]=useState('');
    const [institution,setInstitution]=useState('');

    const formCreateOnSubmit=()=>{
        const body = { city: city, institution: institution, description: description }
        
        const url = process.env.MIX_BACK_END_BASE_URL + 'clients';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.post(url, body),
            {
                loading: 'Creating a new client',
                success: (result)=>{
                    onCreate(result.data);
                    handleClose();
                    return <b>A new client successfully created</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    return(
        <Dialog aria-labelledby="Create a client" open={open}>
             
            <DialogTitle onClose={() => handleClose() } > Create a new client </DialogTitle>
            <DialogContent dividers>
                <form onSubmit={(e)=>{
                        e.preventDefault();
                        formCreateOnSubmit();
                    }}>
                    <Grid container spacing={2}>  
                        <Grid lg={12} md={12} sm={12} xs={12} item>
                            <TextField 
                                variant="standard"
                                label="Institution : "
                                onChange={(e) => setInstitution(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid lg={12} md={12} sm={12} xs={12} item>
                            <TextField variant="standard"
                                label="City : "
                                onChange={(e) => setCity(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid lg={12} md={12} sm={12} xs={12} item>
                            <TextField variant="standard"
                                label="Description : "
                                onChange={(e) => setDescription(e.target.value) }
                                multiline
                                fullWidth
                                rows={4}
                                required
                            />
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={12} lg={12} item>
                            <Button type="submit" variant="contained" color="primary">Add</Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default FormCreateClient;