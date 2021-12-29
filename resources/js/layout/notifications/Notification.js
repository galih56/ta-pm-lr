import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import UserContext from '../../context/UserContext';
import NotificationsIcon from '@material-ui/icons/Notifications'; 
import axios from 'axios';
import Echo from 'laravel-echo'

window.Pusher = require('pusher-js');

const Notification = (props) => {
    const global = useContext(UserContext);
    let history = useHistory();

    useEffect(() => {
        global.dispatch({ type: 'check-authentication', payload: { history: history } });
    }, []);

    useEffect(() => {
                
        window.Echo = new Echo({
            broadcaster: 'pusher',
            key: process.env.MIX_PUSHER_APP_KEY,
            cluster: process.env.MIX_PUSHER_APP_CLUSTER,
            forceTLS: true
        });

        const channel_name=`notifications`;
        const channel = window.Echo.channel(channel_name);
        channel.listen('NotificationEvent', function(data) {
            if([1,2,4,5].includes(global.state.role?.id)){
                
            }
        });
        
        return ()=>{
            window.Echo.leave(channel_name);
        }
    }, [global.state.id]);
    
      return (
        <>
            <IconButton color="inherit" component={Link} to="/notifications">
                <Badge badgeContent={100}  color="secondary"> <NotificationsIcon /> </Badge>
            </IconButton>
        </>
    );
}
export default Notification;