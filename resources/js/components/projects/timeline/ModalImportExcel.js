import axios from 'axios';
import React, { useContext,useState } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import FilledInput from '@material-ui/core/FilledInput';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import UserContext from '../../../context/UserContext';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/core/Alert'; 
import toast from 'react-hot-toast';

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

const DialogActions = withStyles((theme) => ({
    root: { margin: 0, padding: theme.spacing(1) },
}))(MuiDialogActions);

export default function ModalImportExcel(props) {
    const {open,closeModal,projects_id}=props;
    const global = useContext(UserContext);
    const [selectedFile, setSelectedFile]=useState();

    const submitData = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${projects_id}/import`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        let body = new FormData();        
        var fileBlob= new Blob(selectedFile);
        body.append("file", fileBlob);
        toast.promise(
            axios.post(url, body),
            {
                loading: 'Importing',
                success: (result)=>{
                    closeModal();
                    console.log(result.data);
                    console.log(global.state);
                    global.dispatch({ type: 'store-detail-project', payload: result.data });
                    return <b>Imported</b>
                },
                error: (error)=>{
                    switch(error.response?.status){
                        case 401 : toast.error(<b>Unauthenticated</b>); break;
                        case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                        default : toast.error(<b>{error.response.statusText}</b>); break
                    }
                },
            });
    }

    return (
        <Dialog aria-labelledby="Import Excel" open={open}>
            <DialogTitle onClose={() => closeModal(false)} > Import Excel </DialogTitle>
            {(global.state.authenticated===true)?(
                <React.Fragment>
                    <DialogContent dividers>
                        <Grid container spacing={2} style={{ paddingLeft: 3, paddingRight: 3 }} >
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <input type="file" onChange={e=> setSelectedFile(e.target.files)}/>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={submitData} color="primary">Import</Button>
                    </DialogActions>
                </React.Fragment>
            ):(
                <DialogContent dividers>
                    <Alert severity="warning">Your action requires authentication. Please sign in.</Alert>
                </DialogContent>
            )}
        </Dialog>
    );
}
