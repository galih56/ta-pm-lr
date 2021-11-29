import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Menu, MenuItem, IconButton, Badge, ListItemText } from '@material-ui/core/';
import { withStyles } from '@material-ui/styles';
import UserContext from '../../context/UserContext';
import PersonIcon from '@material-ui/icons/Person';
import LogoutConfirmDialog from './LogoutConfirmDialog';
import ModalDetailUser from './../../components/users/ModalDetailUser/ModalDetailUser';


const StyledMenu = withStyles({
    paper: { border: '1px solid #d3d4d5' },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        {...props}
    />
));

const UserMenu = (props) => {
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

    const {id,email,name,occupation,username,verified}=global.state;
    return (
        <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
                <Badge color="secondary"> <PersonIcon /> </Badge>
            </IconButton>
            <StyledMenu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {(global.state.authenticated)?(
                    <MenuItem onClick={()=>{
                            handleMenuClose();
                            handleModalProfileOpen();
                        }}>
                        <ListItemText>
                            {global.state.name}
                            <br />
                            {global.state.email}
                            {(global.state.occupation)?(
                                <>
                                    <br />
                                    {global.state.occupation.name}
                                </>
                            ):<></>}
                        </ListItemText>
                    </MenuItem>
                ):<></>}
             {(global.state.authenticated)?(
                    <MenuItem onClick={() => { setOpenLogoutDialog(true); }}>
                        <ListItemText primary="Logout" />
                    </MenuItem>
             ):(
                <MenuItem>
                    <Link to='/auth' >
                        <ListItemText primary="Login/Register" />
                    </Link>
                </MenuItem>
             )}  
            </StyledMenu>
            
            <ModalDetailUser
                open={modalProfileOpen} id={id} 
                initialState={{id:id,email:email,name:name,username:username,verified:verified,occupation:occupation}}
                closeModal={handleModalProfileOpen}
                onUpdate={(data)=>global.dispatch({type:'store-user-information',payload:data})}
                asProfile={true}
            />
            <LogoutConfirmDialog open={openLogoutDialog} handleDialogClose={handleLogoutDialogClose} handleHistory={handleHistory} />

        </>
    );
}
export default UserMenu;