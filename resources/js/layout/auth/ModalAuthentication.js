import React, { useState, useEffect,useContext } from 'react';
import UserContext from './../../context/UserContext';
import { useHistory, useLocation } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import Login from './Login';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import mainLogo from'./../../assets/images/logo_white.png';

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1, backgroundColor: theme.palette.background.paper, },
    paper: { marginTop: theme.spacing(8), display: 'flex', flexDirection: 'column', alignItems: 'center', },
    avatar: { margin: theme.spacing(1), marginTop: '1em', backgroundColor: theme.palette.secondary.main, },
    form: { width: '100%', /* Fix IE 11 issue.*/  marginTop: theme.spacing(1), },
    submit: { margin: theme.spacing(3, 0, 2), },
    container: { padding: theme.spacing(3) }
}));

const AuthPage = (props) => {
    const classes = useStyles();
    let history = useHistory();
    let location = useLocation();
    let global = useContext(UserContext);

    useEffect(() => {
        if (global.state.authenticated === true) {
            if (location.state) {
                if (location.state.previous) history.push(location.state.previous);
                else history.push('/');
            } else {
                history.push('/');
            }
        }
    }, [])

    return (
            <Dialog
                fullScreen
                open={true}
                aria-labelledby="Login Dialog"
            >
                <DialogTitle>{"Sign In"}</DialogTitle>
                <DialogContent>
                    <Container component="main" className={classes.container} >
                        <CssBaseline />
                        <div className={classes.paper}>
                            <img alt="LOGIN PAGE LOGO (PT. TATACIPTA TEKNOLOGI INDONESIA)" 
                                src={mainLogo} style={{height:'100%',width:'25%'}}/>
                            <Login classes={classes}></Login>
                        </div>
                    </Container>
                </DialogContent>
            </Dialog>
    );
}
export default AuthPage;