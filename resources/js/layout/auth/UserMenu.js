import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import UserContext from '../../context/UserContext';
import PersonIcon from '@material-ui/icons/Person';
import LogoutConfirmDialog from './LogoutConfirmDialog';
import ModalDetailUser from './../../components/users/ModalDetailUser/ModalDetailUser';
import uuid from 'uuid';

const StyledMenu = withStyles({
    paper: { border: '1px solid #d3d4d5' },
})(props => <Menu elevation={0} getcontentanchorel={null} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }} {...props}/>);

const UserMenu = ({classes}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
    const handleMenuOpen = (event) => { setAnchorEl(event.currentTarget); };
    const handleMenuClose = () => { setAnchorEl(null); };
    const handleLogoutDialogClose = () => { setOpenLogoutDialog(false); };
    const [modalProfileOpen, setModalProfileOpen] = useState(false);
    const global = useContext(UserContext);
    let history = useHistory();

    const handleHistory = (dest) => history.push(dest);
    const handleModalProfileOpen=()=>setModalProfileOpen(!modalProfileOpen);

    useEffect(() => {
        global.dispatch({ type: 'check-authentication', payload: { history: history } });
    }, []);

    const {id,email,name,role,username,verified}=global.state;
    return (
        <>
            <Typography component="h2" variant="h6" color="inherit" noWrap style={{fontSize:'1rem'}}>{global.state.name}</Typography>
            <IconButton color="inherit" onClick={handleMenuOpen}>
                <Badge color="secondary"> <PersonIcon /> </Badge>
            </IconButton>
            <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {(global.state.authenticated)?(
                   [ <MenuItem onClick={()=>{
                            handleMenuClose();
                            handleModalProfileOpen();
                        }} key={uuid()}>
                        <ListItemText>
                            {global.state.name}
                            <br />
                            {global.state.email}
                            {(global.state.role)?(
                                <>
                                    <br />
                                    {global.state.role.name}
                                </>
                            ):<></>}
                        </ListItemText>
                    </MenuItem>]
                ):<></>}
             {(global.state.authenticated)?(
                    [<MenuItem onClick={() => { setOpenLogoutDialog(true); }} key={uuid()}>
                        <ListItemText primary="Logout" />
                    </MenuItem>]
             ):(
                [<MenuItem key={uuid()}>
                    <Link to='/auth' >
                        <ListItemText primary="Login/Register" />
                    </Link>
                </MenuItem>]
             )}  
             
                <ModalDetailUser
                    open={modalProfileOpen} id={id} 
                    initialState={{id:id,email:email,name:name,username:username,verified:verified,role:role}}
                    closeModal={handleModalProfileOpen}
                    onUpdate={(data)=>global.dispatch({type:'store-user-information',payload:data})}
                    asProfile={true}
                />
                <LogoutConfirmDialog open={openLogoutDialog} handleDialogClose={handleLogoutDialogClose} handleHistory={handleHistory} />

            </StyledMenu>
            
        </>
    );
}
export default UserMenu;