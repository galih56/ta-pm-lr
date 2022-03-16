import React, { useState, useContext,useEffect } from 'react';
import UserContext from '../../context/UserContext';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import withStyles from '@material-ui/styles/withStyles';

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
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose} size="large">
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: { padding: theme.spacing(2), },
}))(MuiDialogContent);

const ModalCreateUser = ({open, closeModal, onCreate}) => {
    const [roles, setRoles] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [rolesId, setRolesId] = useState('');
    const [inputsEmpty, setInputsEmpty] = useState(false);
    const [emailTaken, setEmailTaken] = useState(false);
    const [passwordConfirmAlert, setPasswordConfirmAlert] = useState(false);
    const [offlineAlert, setOfflineAlert] = useState(false);
    const [userExists, setUserExists] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const global = useContext(UserContext);

    const getRoles = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}roles`;
        axios.get(url)
            .then((result) => {
                var data=result.data.filter((item)=>{
                    if(!(item.id==2 || item.id==1)) {
                        return item;
                    }
                })
                setRoles(data);
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are invalid</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    useEffect(() => {
        getRoles();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.trim() === '' || confirmPassword.trim()==='') {
            setInputsEmpty(true);
        }else{
            setInputsEmpty(false);
        }
        if (password === confirmPassword) {
            setPasswordConfirmAlert(false);
        } else {
            setPasswordConfirmAlert(true);
        }

        if (!window.navigator.onLine) setOfflineAlert(true);
        else setOfflineAlert(false);
        
        const body = { name: username, password: password, roles_id: rolesId, password_confirmation: confirmPassword, email: email}
        if(!inputsEmpty){
            const url=`${process.env.MIX_BACK_END_BASE_URL}users`        
            const toast_loading = toast.loading('Creating a new user'); 
            axios.post(url, body)
                .then((result) => {   
                    setSignUpSuccess(true);
                    setUserExists(false);
                    setEmailTaken(false);
                    setUsername('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    onCreate(result.data,'create');
                    toast.dismiss(toast_loading)
                    toast.success(<b>A new user successfuly created</b>)
                }).catch((error)=> {
                    toast.dismiss(toast_loading)
                    setSignUpSuccess(false);
                    if (error.response.status===409) setUserExists(true);
                    if (error.response.status==422){ 
                        if(error.response?.data?.errors?.email) setEmailTaken(true);
                        if(error.response?.data?.errors?.password) setPasswordConfirmAlert(true);
                    };
                });
        }
    }

    const handleUsernameOnChange=(e) => setUsername(e.target.value);
    const handleEmailOnChange=(e) => setEmail(e.target.value);
    const handleRolesIdOnChange= (e) => setRolesId(e.target.value);
    const handlePasswordOnChange=(e) => setPassword(e.target.value); 
    const handleConfirmPasswordOnChange=(e) => setConfirmPassword(e.target.value)
    return (
        <Dialog onClose={closeModal} aria-labelledby="Modal Create user" open={open} style={{ zIndex: '750' }} maxWidth={'lg'} fullWidth>
            <DialogTitle onClose={closeModal}>Create new user</DialogTitle>
            <DialogContent dividers>
                <Container component="main" >
                    <CssBaseline />
                    { emailTaken ? <Alert severity="error" > The email has already been taken</Alert> : null}
                    { passwordConfirmAlert ? <Alert severity="error" > Password confirmation doesn't match</Alert> : null}
                    { inputsEmpty ? <Alert severity="error" >Some fields are empty</Alert> : null}
                    { userExists ? <Alert severity="warning" >Email : <strong>{email} </strong>already in use</Alert> : null}
                    { signUpSuccess ? <Alert severity="success" ><strong>Success</strong><br />New user is now registered</Alert> : null}
                    { offlineAlert ? <Alert severity="warning" >You're currently offline. Please check your internet connection</Alert> : null}
                    <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
                        <TextField variant="standard" margin="normal" required fullWidth label="Name" name="name" value={username} onChange={handleUsernameOnChange}/>
                        <TextField variant="standard" margin="normal" required fullWidth label="Email" name="email" value={email} type="email" onChange={handleEmailOnChange}/>
                        <Select  variant="standard" onChange={handleRolesIdOnChange} value={rolesId} fullWidth placeholder="Role">
                            {roles.map((role, index) =>(<MenuItem value={role?.id} key={role?.id}>{role?.name}</MenuItem>))} 
                        </Select>
                        <TextField variant="standard" margin="normal" required fullWidth name="password" label="Password" type="password" value={password} onChange={handlePasswordOnChange} autoComplete="current-password"/>
                        <TextField variant="standard" margin="normal" required fullWidth name="confirm-password" label="Confirm Password" type="password" value={confirmPassword} onChange={handleConfirmPasswordOnChange} autoComplete="current-password"/>
                        <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleSubmit}> Create </Button>
                    </form>
                    
                </Container>
            </DialogContent>
        </Dialog>
    );
}
export default ModalCreateUser;