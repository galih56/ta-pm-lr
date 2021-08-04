import React, { useState, useEffect, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Button  from '@material-ui/core/Button';
import TextField  from '@material-ui/core/TextField';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import Alert from '@material-ui/lab/Alert';
import {useSnackbar} from 'notistack';

const SignIn = (props) => {
    const classes = props.classes;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputRequireAlert, setInputRequireAlert] = useState(false);
    const [wrongCredentialAlert, setWrongCredentialAlert] = useState(false);
    const [offlineAlert, setOfflineAlert] = useState(false);
    const global = useContext(UserContext);
    let history = useHistory();
    const {enqueueSnackbar}=useSnackbar();
    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });
    
    useEffect(() => {
        global.dispatch({ type: 'remember-authentication' });
        if (global.state.authenticated === true) history.push('/');
        if (!window.navigator.onLine) setOfflineAlert(true)
        else setOfflineAlert(false);

    }, [global.state.authenticated]);

    const sendLoginRequest = ( body) => {
        if (global.state.authenticated && global.state.authenticated == false) {
            global.dispatch({ type: 'remember-authentication' });
        } else {
            axios.post(process.env.MIX_BACK_END_BASE_URL + 'login', body, { headers: { 'Content-Type': 'application/json' } })
                .then((result) => {
                    global.dispatch({
                        type: 'authenticate',
                        payload: result.data
                    });
                }).catch((error) => {
                    if (error.response) {
                        // Request made and server responded
                        switch (error.response.status) {
                            case 401:
                                setWrongCredentialAlert(true);
                                handleSnackbar(`Wrong Credentials`, 'warning');
                                break;
                            default:
                                handleSnackbar(`Server Error : ${error.response.statusText} (${error.response.status})`, 'error');
                                break;
                        }
                    } else if (error.request) {
                        handleSnackbar(`Server is not responding`, 'error');
                    } else {
                        handleSnackbar(`Client Error : ${error.message}`, 'error');
                    }
                });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { password: password, email: email }
        if (email.trim() == '' || password.trim() == '') setInputRequireAlert(true);
        else setInputRequireAlert(false);
        sendLoginRequest(body);
    }

    return (
        <React.Fragment>
            { wrongCredentialAlert ? <Alert severity="error" > Email/Password is incorrect</Alert> : null}
            { inputRequireAlert ? <Alert severity="error" >Please complete the form</Alert> : null}
            { offlineAlert ? <Alert severity="warning" >You're currently offline. Please check your internet connection</Alert> : null}
            <form className={classes.form} style={{ textAlign: 'center' }} onSubmit={handleSubmit} >
                <TextField
                    variant="outlined"
                    margin="normal"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    fullWidth
                    autoFocus
                    required
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    autoComplete="current-password"
                    fullWidth
                    required
                />
                {/* 
                <FormControlLabel
                    control={<Checkbox name="remember" color="primary" />}
                    label="Remember me" style={{ textAlign: 'left' }}
                /> 
                */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSubmit}
                    fullWidth
                > Sign In  </Button>
                {/* 
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">  Forgot password? </Link>
                    </Grid> 
                </Grid>
                */}
            </form >
        </React.Fragment>
    );
}


export default withRouter(SignIn);
