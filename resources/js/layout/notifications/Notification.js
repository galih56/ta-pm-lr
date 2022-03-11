import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import UserContext from '../../context/UserContext';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Popover from './../../components/widgets/Popover';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

const Notification = (props) => {
    const global = useContext(UserContext);
    let history = useHistory();
    const [notifications, setNotifications] = useState([
        {id:1,name:'galih',project:{id:1,title:'SPBE'}}
    ]);
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) =>  {
        setAnchorEl(event.currentTarget);
    }

    const handlePopoverClose = () => {
        setAnchorEl(null);
    }
    
    useEffect(() => {
        global.dispatch({ type: 'check-authentication', payload: { history: history } });
    }, []);
    
    const getNotifications = () => {
        let url =''
        
        if([1,2,3,4].includes(global.state.role?.id)){
            url = `${process.env.MIX_BACK_END_BASE_URL}notifications`;
        }else{
            url = `${process.env.MIX_BACK_END_BASE_URL}users/${global.state.id}/notifications`;
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url).then((result) => setNotifications(result.data)).catch(console.log);    
    }

    useEffect(()=>{
        // getNotifications()
        const interval = setInterval(() => {
            // getNotifications();
        }, 1000*60*15);
        return () => clearInterval(interval);
    },[]);

      return (
        <>
            <IconButton color="inherit" onClick={handlePopoverOpen}>
                <Badge badgeContent={100}  color="secondary"> <NotificationsIcon /> </Badge>
            </IconButton>
            <Popover  anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handlePopoverClose}>
                <Menu>
                    {notifications.map((item)=><MenuItem component={Link} to={`/notifications/${item.id}`} >{item.title} - {item.project.title}</MenuItem>)}
                </Menu>
            </Popover>
        </>

    );
}
export default Notification;