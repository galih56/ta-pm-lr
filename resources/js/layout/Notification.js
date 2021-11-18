import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Menu, MenuItem, IconButton, Badge } from '@material-ui/core/';
import { withStyles } from '@material-ui/styles';
import UserContext from '../context/UserContext';
import NotificationsIcon from '@material-ui/icons/Notifications'; 

const Notification = (props) => {
    const global = useContext(UserContext);
    let history = useHistory();

    useEffect(() => {
        global.dispatch({ type: 'check-authentication', payload: { history: history } });
    }, []);

    return (
        <>
            <IconButton color="inherit" component={Link} to="/notifications">
                <Badge color="secondary"> <NotificationsIcon /> </Badge>
            </IconButton>
        </>
    );
}
export default Notification;