
import React, { useEffect, useContext, useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import UserContext from '../../../../context/UserContext';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import toast from 'react-hot-toast';
import moment from 'moment';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    photoProfileBg: { backgroundColor: '#616161' }
}));

const OpenEditForm = ({ isEdit, data, setData}) => {
    const classes = useStyles();
    const global = useContext(UserContext);    
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