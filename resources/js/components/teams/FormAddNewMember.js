import React,{useState,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import UserContext from '../../context/UserContext';
import withStyles from '@material-ui/styles/withStyles';
import { Dialog, IconButton, Typography, } from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import UserSearchBar from '../widgets/UserSearchBar';

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

const FormAddNewMember=({teamId,open,closeModal,onCreate})=>{
    const global=useContext(UserContext);
    const [users,setUsers]=useState([]);

    const formCreateOnSubmit=()=>{
        const body = { teamId:teamId, users: users }
        const url = process.env.MIX_BACK_END_BASE_URL + `teams/${teamId}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.post(url, body),
            {
                loading: 'Creating a new member',
                success: (result)=>{
                    onCreate(result.data);
                    return <b>A new member successfuly created</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    return(
        <Dialog aria-labelledby="Create a member" open={open} fullWidth={true} maxWidth="xs">
            <DialogTitle onClose={
                () => {
                    closeModal();
                }} > Add new member </DialogTitle>
            <DialogContent dividers>
                <Toaster/>
                <form onSubmit={(e)=>{
                        e.preventDefault();
                        formCreateOnSubmit();
                    }}>
                    <Grid  container spacing={2}>
                        <Grid lg={12} md={12} sm={12} xs={12} item>
                            <UserSearchBar 
                                exceptedUsers={[]} 
                                onChange={(values)=> setUsers(values.map((value)=>value.id))}
                                userOnly={true}
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

export default FormAddNewMember;