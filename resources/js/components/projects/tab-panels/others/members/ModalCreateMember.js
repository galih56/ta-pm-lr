import React, {  useContext, useState } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import UserContext from '../../../../../context/UserContext';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/core/Alert';
import toast from 'react-hot-toast';
import UserSearchBar from '../../../../widgets/UserSearchBar';
import axios from 'axios';

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

export default function ModalCreateMember(props) {
    var { open, projects_id, exceptedUsers,onCreate,refreshProject } = props;
    var closeModal = props.handleClose;
    const [newMembers, setNewMembers] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const global = useContext(UserContext);


    const submitData = () => {
        if (newMembers.length <= 0) setShowAlert(true);
        else setShowAlert(false);
        
        if (!showAlert) {
            const body = { projects_id: projects_id, members: newMembers }
            const url = process.env.MIX_BACK_END_BASE_URL + 'project-members/';
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';

            toast.promise(
                axios.post(url, body),
                {
                    loading: 'Loading...',
                    success: (result)=>{ 
                        onCreate(result.data)
                        setNewMembers([]);
                        closeModal();
                        refreshProject();
                        return <b>A new member successfully created</b>
                    },
                    error: (error)=>{
                        if(error.response.status==401) return <b>Unauthenticated</b>;
                        if(error.response.status==422) return <b>Some required inputs are empty</b>;
                        return <b>{error.response.statusText}</b>;
                    },
                });
        }
        
    }

    const showValidation = () => {
        if ((newMembers.length <= 0) && showAlert) {
            return (
                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <Alert severity="warning" >Please fill all the required inputs</Alert>
                </Grid>
            )
        }
    }

    return (
        <Dialog aria-labelledby="Add a new member" open={open} fullWidth={true} maxWidth={'md'}>
            <DialogTitle onClose={
                () => {
                    closeModal(false);
                }} > Add a new member </DialogTitle>
            {(global.state.authenticated === true)?(
                <>
                     
                    <DialogContent dividers>
                        <Grid container spacing={2} style={{ paddingLeft: 3, paddingRight: 3 }} >
                            {showValidation()}
                            <Grid item lg={12} md={12} sm={12} xs={12} >
                                <UserSearchBar 
                                    onChange={(value) => setNewMembers(value)} 
                                    exceptedUsers={[
                                        ...exceptedUsers,
                                        {
                                            id:global.state.id,
                                            name:global.state.name,
                                            email:global.state.email
                                        }
                                    ]}
                                    userOnly={true}
                                    />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={submitData} color="primary">Add</Button>
                    </DialogActions>
                </>
            ): (
                <DialogContent dividers>
                    <Alert severity="warning">Your action requires authentication. Please sign in.</Alert>
                </DialogContent>
            )}
        </Dialog>
    );
}
