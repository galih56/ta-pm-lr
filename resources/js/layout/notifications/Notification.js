import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import UserContext from '../../context/UserContext';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import Popover from '@material-ui/core/Popover'

const StyledMenu = withStyles({
    paper: { border: '1px solid #d3d4d5' },
})(props => <Menu elevation={0} getcontentanchorel={null} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }} {...props}/>);

const Notification = (props) => {
    const global = useContext(UserContext);
    let history = useHistory();
    const [notifications, setNotifications] = useState({data:[],count:0});
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) =>  {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
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
        axios.get(url).then((result) => setNotifications(result.data)).catch(console.log);    
    }

    useEffect(()=>{
        if(global.state.token){
            getNotifications()
            const interval = setInterval(() => {
                getNotifications();
            }, 1000*60*15);
            return () => clearInterval(interval);
        }
    },[global.state.token]);


    return (
        <>
            <IconButton color="inherit" onClick={handleOpen}>
                <Badge badgeContent={notifications.count}  color="secondary"> <NotificationsIcon /> </Badge>
            </IconButton>
            <Popover anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {
                    notifications.data.map(item=>
                        <Link to={item.route}>
                            <Typography variant="overline" display="block" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom style={{color:'grey'}}>
                                {item.message}
                            </Typography>
                        </Link>)
                }
            </Popover>
            {/* <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {notifications.data.map((item)=><NotifItem item={item}/>)}
            </StyledMenu> */}
        </>
    );
}

const NotifItem=({item})=>{
    return <MenuItem component={Link} to={item.route}>
                <Typography variant="overline" display="block" gutterBottom>
                    {item.title}
                </Typography>
                <br/>
                <Typography variant="caption" display="block" gutterBottom style={{color:'grey'}}>
                    {item.message}
                </Typography>
            </MenuItem>

}
export default Notification;