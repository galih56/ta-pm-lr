import React,{useState,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import UserContext from './../../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import UserSearchBar from '../../widgets/UserSearchBar';
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

const FormAddClient=({open,handleClose,onCreate,detailProject})=>{
    const global=useContext(UserContext);
    const [newClients,setNewClients]=useState('');

    const formCreateOnSubmit=()=>{
        const body = {
            projects_id: detailProject.id,
            clients: newClients,
        }
        
        const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${detailProject.id}/clients`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.post(url, body),
            {
                loading: 'Creating a new client',
                success: (result)=>{
                    onCreate(result.data);
                    handleClose();
                    global.dispatch({type:'add-clients-to-project',payload:{projects_id:detailProject.id,clients:result.data}});
                    return <b>A new client successfuly created</b>
                },
                error: (error)=>{
                    console.log(error);
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    return(
        <Dialog aria-labelledby="Create a client" maxWidth={'lg'} fullwidth={"true"} open={open} >
            <DialogTitle 
                style={{ minWidth: "400px" }} 
                onClose={handleClose} > Add a new client </DialogTitle>
            <DialogContent dividers>
                 
                <form onSubmit={(e)=>{
                        e.preventDefault();
                        formCreateOnSubmit();
                    }}>
                    <Grid container spacing={2}>
                        <Grid lg={12} md={12} sm={12} xs={12} item>
                            <UserSearchBar 
                                detailProject={detailProject}
                                exceptedClients={detailProject.clients} 
                                onChange={(clients)=> setNewClients(clients)}
                                clientOnly={true}
                                inputLabel="Search clients"
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

export default FormAddClient;