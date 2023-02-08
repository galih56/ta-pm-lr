import React, { useState, useEffect, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Button  from '@material-ui/core/Button';
import TextField  from '@material-ui/core/TextField';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import Alert from '@material-ui/lab/Alert';
import toast, { Toaster } from 'react-hot-toast';

const SignIn = (props) => {
    const classes = props.classes;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputRequireAlert, setInputRequireAlert] = useState(false);
    const [wrongCredentialAlert, setWrongCredentialAlert] = useState(false);
    const [offlineAlert, setOfflineAlert] = useState(false);
    const global = useContext(UserContext);
    let history = useHistory();

    useEffect(() => {
        global.dispatch({ type: 'remember-authentication' });
        if (global.state.authenticated === true) history.push('/');
        if (!window.navigator.onLine) setOfflineAlert(true)
        else setOfflineAlert(false);

    }, [global.state.authenticated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        global.dispatch({ type: 'remember-authentication' });
        const body = { password: password, email: email }
        if (email.trim() == '' || password.trim() == '') setInputRequireAlert(true);
        else{ 
            setInputRequireAlert(false);
            const url=`${process.env.MIX_BACK_END_BASE_URL}login`;
            
            const toast_loading = toast.loading(`Logging in...`); 
            axios.post(url, body)
                .then((result) => {      
                    global.dispatch({ type: 'authenticate', payload: result.data});
                    toast.dismiss(toast_loading);
                    toast.success(<b>Authenticated!</b>)
                }).catch(error=> {
                    setWrongCredentialAlert(true);
                    toast.dismiss(toast_loading)
                });
        }
    }

    return (
        <>
             
            { wrongCredentialAlert ? <Alert severity="error" style={{marginTop:'1em'}}> Email/Password is incorrect</Alert> : null}
            { inputRequireAlert ? <Alert severity="error"  style={{marginTop:'1em'}}>Please complete the form</Alert> : null}
            { offlineAlert ? <Alert severity="warning"  style={{marginTop:'1em'}}>You're currently offline. Please check your internet connection</Alert> : null}
            <form className={classes.form} style={{ textAlign: 'center' }} onSubmit={handleSubmit} >
                <TextField variant="outlined" margin="normal" label="Email Address" name="email"
                    autoComplete="email" value={email} onChange={(e) => { setEmail(e.target.value) }} fullWidth
                    autoFocus required
                />
                <TextField variant="outlined" margin="normal" name="password" label="Password"
                    type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} autoComplete="current-password"
                    fullWidth required
                />
                <Button type="submit" variant="contained" color="primary"
                    className={classes.submit} onClick={handleSubmit} fullWidth
                > Sign In  </Button>
            </form >
        </>
    );
}


export default withRouter(SignIn);
