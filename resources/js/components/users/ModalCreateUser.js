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

const ModalCreateUser = (props) => {
    const open = props.open;
    const closeModal = props.closeModal;
    const [occupations, setOccupations] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [occupationsId, setOccupationsId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [inputRequireAlert, setInputRequireAlert] = useState(false);
    const [passwordConfirmAlert, setPasswordConfirmAlert] = useState(false);
    const [offlineAlert, setOfflineAlert] = useState(false);
    let [userExists, setUserExists] = useState(false);
    let [signUpSuccess, setSignUpSuccess] = useState(false);
    let global = useContext(UserContext);
    const getOccupations = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'occupations';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                var data=result.data.filter((item)=>{
                    if(!(item.name.toLowerCase().includes('system administrator') 
                    || item.name.toLowerCase().includes('system administrator')
                    || item.name.toLowerCase().includes('ceo'))) {
                        return item;
                    }
                })
                setOccupations(data);
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    useEffect(() => {
        getOccupations();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            name: username,
            password: password,
            occupations_id: occupationsId,
            confirmation: confirmPassword,
            phone_number: phoneNumber,
            email: email
        }
        if (username.trim() === '' || password.trim() === '' || phoneNumber.trim() === '' || email.trim() === '') {
            setInputRequireAlert(true);
            return;
        } else {
            setInputRequireAlert(false);
        }
        if (password === confirmPassword) {
            setPasswordConfirmAlert(false);
        } else {
            setPasswordConfirmAlert(true);
            return;
        }

        if (!window.navigator.onLine) setOfflineAlert(true);
        else setOfflineAlert(false);
        
        const config = { mode: 'no-cors', crossdomain: true, headers: { 'Content-Type': 'application/json' } };
        toast.promise(
            axios.post(process.env.MIX_BACK_END_BASE_URL+'users', body, config),
            {
                loading: 'Creating a new user',
                success: (result)=>{ 
                    setSignUpSuccess(true);
                    setUserExists(false);
                    setUsername('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    setPhoneNumber('');
                    props.onCreate(result.data,'create');
                    return <b>A new user successfuly created</b>
                },
                error: (error)=>{
                    setSignUpSuccess(false);
                    if (error.response.status===409) setUserExists(true);
                    if (error.response.status==401) return <b>Unauthenticated</b>;
                    if (error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }
    return (
        <Dialog onClose={closeModal} 
            aria-labelledby="Modal Create user" open={open} style={{ zIndex: '750' }}
            maxWidth={'lg'} fullwidth={"true"}>
            <DialogTitle onClose={closeModal}>User information</DialogTitle>
            <DialogContent dividers>
                <Container component="main" >
                    <Toaster/>
                    <CssBaseline />
                    { passwordConfirmAlert ? <Alert severity="error" > Password and confirm password does not match</Alert> : null}
                    { inputRequireAlert ? <Alert severity="error" >Please complete the form</Alert> : null}
                    { userExists ? <Alert severity="warning" >Email : <strong>{email} </strong>already in use</Alert> : null}
                    { signUpSuccess ? <Alert severity="success" ><strong>Success</strong><br />New user is now registered</Alert> : null}
                    { offlineAlert ? <Alert severity="warning" >You're currently offline. Please check your internet connection</Alert> : null}
                    <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            label="Name"
                            name="name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value) }
                        />
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            label="Email"
                            name="email"
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value) }
                        />
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            label="Phone Number"
                            name="phoneNumber"
                            value={phoneNumber}
                            type="tel"
                            onChange={(e) => setPhoneNumber(e.target.value) }
                        />
                        <Select 
                            variant="standard"
                            onChange={e => {
                                setOccupationsId(e.target.value);
                            }}
                            value={occupationsId}
                            fullWidth
                            placeholder="Occupation"
                        >
                                <MenuItem>Choose occupation</MenuItem>
                                {
                                    occupations.map((occupation, index) =>(<MenuItem value={occupation.id} key={occupation.id}>{occupation.name}</MenuItem>))
                                } 
                            </Select>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value) }
                            autoComplete="current-password"
                        />
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            name="confirm-password"
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value) }
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        > Create </Button>
                    </form>
                    
                </Container>
            </DialogContent>
        </Dialog>
    );
}
export default ModalCreateUser;