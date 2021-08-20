
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

const OpenEditForm = ({ isEdit, data, setData,asProfile }) => {
    const classes = useStyles();
    let global = useContext(UserContext);
    const [occupations, setOccupations] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const handleChange = () => setExpanded(!expanded);
    const [passwordConfirmAlert, setPasswordConfirmAlert] = useState(false);
    const [changePasswordInputsEmpty, setChangePasswordInputsEmpty] = useState(false);
    const [newPassword,setNewPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    const getOccupations = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'occupations';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                var data=result.data;
                if(!global.state.occupation?.name?.toLowerCase().includes('administrator')){
                   data=data.filter(occupation=>!(occupation.name.toLowerCase().includes('administrator')))
                }
                setOccupations(data);
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    const sendNewPassword=(e)=>{
        e.preventDefault();
        const body={
            new_password: newPassword,
            confirm_password:confirmPassword,
        }
        console.log(newPassword,confirmPassword,newPassword.trim(),confirmPassword.trim(),newPassword,confirmPassword)
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
        const url=`${process.env.MIX_BACK_END_BASE_URL}users/${data.id}/changepassword`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.patch(url, body),
            {
                loading: `Changing ${data.name}'s password`,
                success: (result)=>{ 
                    setNewPassword('');
                    setConfirmPassword('');
                    setChangePasswordInputsEmpty(false);
                    setPasswordConfirmAlert(false);
                    handleChange()
                    return <b>Successfully updated</b>
                },
                error: (error)=>{
                    console.log(error)
                    if (error.response.status==401) return <b>Unauthenticated</b>;
                    if (error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    useEffect(() => {
        getOccupations();
    }, [])
    
    if (isEdit) {
        return (
            <Grid container spacing={2} style={{ paddingLeft: 4, paddingRight: 4 }} >
                 
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <TextField
                        defaultValue={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <TextField
                        defaultValue={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        className={classes.textfield}
                        variant="standard"
                    />
                </Grid>
                {(asProfile)?(
                    <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                        {data.occupation ? <Typography variant="body2">{data.occupation.name}</Typography> : <></>}
                    </Grid>
                ):(
                    <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                        <FormControl className={classes.textfield} >
                            <InputLabel>Occupations</InputLabel>
                            <Select 
                            variant="standard"
                            onChange={e => {
                                var choosenId= e.target.value
                                var choosenData= occupations.filter(item=>item.id==choosenId)
                                if(choosenData.length>0){
                                    setData({ ...data, occupation:choosenData[0],occupations_id:choosenData[0].id });
                                }
                            }}
                            
                                defaultValue={data.occupation.id}>
                                {
                                    occupations.map((occupation, index) => (<MenuItem value={occupation.id} key={occupation.id}>{occupation.name}</MenuItem>))
                                } 
                            </Select>
                        </FormControl>
                    </Grid>
                )}
                {global.state.id==data.id  || global.state.occupation.name.toLowerCase().includes('administrator')?(
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
                                        <TextField
                                            label="New Password"
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className={classes.textfield}
                                            fullWidth
                                            type="password"
                                            variant="standard"
                                        />
                                        <TextField
                                                label="Confirm Password"
                                                className={classes.textfield}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                fullWidth
                                                type="password"
                                                variant="standard"
                                            />
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
                    {data.occupation ? <Typography variant="body2">{data.occupation?.name}</Typography> : <></>}
                </Grid>
            </Grid>
        )
    }
}

export default OpenEditForm;