import React,{useState,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { useSnackbar } from 'notistack';
import UserContext from './../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import { Dialog, IconButton, Typography } from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';

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
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [city,setCity]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [institution,setInstitution]=useState('');
    const { enqueueSnackbar } = useSnackbar();
    const snackbar = (message, variant) =>  enqueueSnackbar(message, { variant });

    const formCreateOnSubmit=()=>{
        const body = {
            name: name,
            description: description,
            city: city,
            institution: institution,
            phone_number:phoneNumber,
        }
        
        const url = process.env.MIX_BACK_END_BASE_URL + 'clients';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post(url, body)
            .then((result) => {
                onCreate(result.data);
                handleClose();
                snackbar(`A new client successfully created`, 'success');
            }).catch((error) => {
                const payload = { error: error, snackbar: snackbar, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }

    return(
        <Dialog aria-labelledby="Create a client" open={open}>
            <DialogTitle onClose={
                () => {
                    handleClose();
                }} > Create a new client </DialogTitle>
            <DialogContent dividers>
                <form onSubmit={(e)=>{
                        e.preventDefault();
                        formCreateOnSubmit();
                    }}>
                    <Grid container spacing={2}>
                        <Grid lg={12} md={12} sm={12} xs={12} item>
                            <TextField variant="standard"
                                label="Name : "
                                onChange={(e) => setName(e.target.value)}
                                placeholder={"PIC's name"}
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
                            <TextField 
                                variant="standard"
                                label="Institution : "
                                onChange={(e) => setInstitution(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid lg={12} md={12} sm={12} xs={12} item>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                label="Phone Number"
                                name="phoneNumber"
                                value={phoneNumber}
                                type="tel"
                                onChange={(e) => setPhoneNumber(e.target.value) }
                            />
                        </Grid>
                        <Grid lg={12} md={12} sm={12} xs={12} item>
                            <TextField variant="standard"
                                label="Description : "
                                onChange={(e) => setDescription(e.target.value) }
                                multiline
                                fullWidth
                                rows={4}
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