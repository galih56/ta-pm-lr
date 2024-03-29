
import React, { useEffect, useContext, useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import UserContext from '../../../context/UserContext';
import moment from 'moment';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import toast, { Toaster } from 'react-hot-toast';
// import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    textfield: { marginTop: theme.spacing(1), width: '100%' },
    textField: { marginLeft: theme.spacing(1), marginRight: theme.spacing(1) },
    photoProfileBg: { backgroundColor: '#616161' }
}));

const OpenEditForm = ({ isEdit, data, setData,asProfile,open }) => {
    const classes = useStyles();
    let global = useContext(UserContext);
    const [roles, setRoles] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const handleChange = () => setExpanded(!expanded);
    const [passwordConfirmAlert, setPasswordConfirmAlert] = useState(false);
    const [changePasswordInputsEmpty, setChangePasswordInputsEmpty] = useState(false);
    const [newPassword,setNewPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    const getRoles = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}roles`;
        axios.get(url)
            .then((result) => {
                var data=result.data;
                data=data.filter(role=>(![1,2].includes(role.id)))
                setRoles(data);
            });
    }

    const sendNewPassword=(e)=>{
        e.preventDefault();
        const body={ new_password: newPassword, confirm_password:confirmPassword }
        if (newPassword.trim() === '' || confirmPassword.trim()==='') {
            setChangePasswordInputsEmpty(true);
        }else{
            setChangePasswordInputsEmpty(false);
        }
        if (newPassword === confirmPassword) {
            setPasswordConfirmAlert(false);
        } else {
            setPasswordConfirmAlert(true);
        }

        if(!changePasswordInputsEmpty){
            const url=`${process.env.MIX_BACK_END_BASE_URL}users/${data.id}/changepassword`;
            const toast_loading = toast.loading(`Changing ${data.name}'s password`); 
            axios.patch(url, body)
                .then((result) => {   
                    setNewPassword('');
                    setConfirmPassword('');
                    setChangePasswordInputsEmpty(false);
                    setPasswordConfirmAlert(false);
                    handleChange();
                    toast.dismiss(toast_loading);
                    toast.success(<b>Successfully updated</b>)
                }).catch(error=> toast.dismiss(toast_loading));
        }
    }

    useEffect(() => {
        if(open===true)
        getRoles();
    }, [open])
    
    const handleNameOnChange=(e) => setData({ ...data, name: e.target.value });
    const handleEmailOnChange=(e) => setData({ ...data, email: e.target.value });
    const handleRolesOnChange=e => {
        var choosenId= e.target.value;
        var choosenData= roles.filter(item=>item.id==choosenId)
        if(choosenData.length>0){
            setData({ ...data, role:choosenData[0],roles_id:choosenData[0].id });
        }
    }
    const handleNewPasswordOnChange=(e) => setNewPassword(e.target.value);
    const handleConfirmPasswordOnChange=(e) => setConfirmPassword(e.target.value);
    
    if (isEdit) {
        return (
            <Grid container spacing={2} style={{ paddingLeft: 4, paddingRight: 4 }} >
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <TextField defaultValue={data.name} onChange={handleNameOnChange} fullWidth variant="standard"/>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <TextField defaultValue={data.email} onChange={handleEmailOnChange} className={classes.textfield} variant="standard"/>
                </Grid>
                {(asProfile)?(
                    <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                        {data.role ? <Typography variant="body2">{data.role.name}</Typography> : <></>}
                    </Grid>
                ):(
                    <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                        {([1,2,4].includes(global.state.role?.id))?(
                                <FormControl className={classes.textfield} >
                                    <InputLabel>Roles</InputLabel>
                                    <Select variant="standard" onChange={handleRolesOnChange} value={data.role?.id}>
                                        {
                                            roles.map((role, index) => (<MenuItem value={role.id} key={role.id}>{role.name}</MenuItem>))
                                        } 
                                    </Select>
                                </FormControl>
                                ):(
                            <>
                                {data.role ? <Typography variant="body2">{data.role.name}</Typography> : <></>}
                            </>
                        )}
                    </Grid>
                )}
                {global.state.id==data.id  || [1,2].includes(global.state.role.id)?(
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Accordion expanded={expanded} onChange={handleChange}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                Change password
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container component="form" onSubmit={sendNewPassword}>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        { passwordConfirmAlert ? <Alert severity="warning" > Password confirmation does not match</Alert> : null}
                                        { changePasswordInputsEmpty ? <Alert severity="warning" > Some fields are empty</Alert> : null}
                                        <TextField label="New Password" onChange={handleNewPasswordOnChange} className={classes.textfield} fullWidth type="password" variant="standard"/>
                                        <TextField label="Confirm Password" className={classes.textfield} onChange={handleConfirmPasswordOnChange} fullWidth type="password" variant="standard"/>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'0.5em'}}>
                                        <Button type="submit" variant="contained" color="primary" >Change Password</Button>
                                    </Grid>
                                </Grid>
                                
                            </AccordionDetails>
                        </Accordion> 
                    </Grid>
                    ):<></>}
            </Grid>
        )
    } else {
        return (
            <Grid container spacing={2} style={{ paddingLeft: 4, paddingRight: 4 }} >
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    {data.profilePicturePath?
                        <Avatar alt={"Photo profile " + data.name} src={`${process.env.MIX_BACK_END_BASE_URL}/${data.profilePicturePath}`}/>:
                        <Avatar alt={"Photo profile " + data.name} className={classes.photoProfileBg}>{data.name?.charAt(0).toUpperCase()}</Avatar>}
                    <Typography variant="h6">{data.name}</Typography>
                    <Typography variant="body2">{data.email}</Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <Typography variant="body2">Last login : {data.last_login ? moment(data.last_login).format('DD MMM YYYY') : ''}</Typography>
                    {data.role ? <Typography variant="body2">{data.role?.name}</Typography> : <></>}
                </Grid>
            </Grid>
        )
    }
}

export default OpenEditForm;