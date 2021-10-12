
import 'fontsource-roboto';
import React, { useEffect, useContext, useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import UserContext from '../../../../context/UserContext';
import { Grid, Typography, Avatar } from '@material-ui/core/';
import SelectRole from '../../../widgets/SelectRole';
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    textfield: { marginTop: theme.spacing(1), width: '100%' },
    textField: { marginLeft: theme.spacing(1), marginRight: theme.spacing(1) },
    photoProfileBg: { backgroundColor: '#616161' }
}));

const OpenEditForm = ({ isEdit, data, setData}) => {
    const classes = useStyles();
    const [roles,setRoles]=useState([]);
    const global = useContext(UserContext);

    const getRoles = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'member-roles';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setRoles(result.data);
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    useEffect(()=>{
        getRoles();
    },[]);
    
    if (isEdit) {
        return (
            <Grid container spacing={2} style={{ paddingLeft: 3, paddingRight: 3 }} >
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <Avatar alt={"Photo profile " + data.name} className={classes.photoProfileBg}>{data.name?.charAt(0).toUpperCase()}</Avatar>
                    <Typography variant="h6">{data.name}</Typography>
                    <Typography variant="body2">{data.email}</Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    {data.occupation ? <Typography variant="body2">{data.occupation.name}</Typography> : <></>}
                        <Typography variant="body2">Last login : {data.last_login ? moment(data.last_login).format('DD MMM YYYY') : ''}</Typography>

                        <SelectRole data={roles} onChange={
                            (value)=>{
                                var selectedRole=roles.filter(function(role){
                                    if(value==role.id) return role;
                                })
                                if(selectedRole.length){
                                    setData({...data,role:selectedRole[0]})
                                }
                            }
                        } defaultValue={data.role}/>
                     
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid container spacing={2} style={{ paddingLeft: 4, paddingRight: 4 }} >
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <Avatar alt={`Photo profile ${data.name}`} className={classes.photoProfileBg}>{data.name?.charAt(0).toUpperCase()}</Avatar>
                    <Typography variant="h6">{data.name}</Typography>
                    <Typography variant="body2">{data.email}</Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    {data.occupation ? <Typography variant="body2">{data.occupation.name}</Typography> : <></>}
                    <Typography variant="body2">Last login : {data.last_login ? moment(data.last_login).format('DD MMM YYYY') : ''}</Typography>
                    {data.role ? <Typography variant="body2">Role : {data.role.name}</Typography> : <></>}
               </Grid>
            </Grid>
        )
    }
}
export default OpenEditForm;