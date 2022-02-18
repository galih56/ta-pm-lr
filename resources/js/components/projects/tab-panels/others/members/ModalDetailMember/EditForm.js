import React, { useEffect, useContext, useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import UserContext from '../../../../../../context/UserContext';
import { Grid, Typography, Avatar } from '@material-ui/core/';
import SelectRole from '../../../../../widgets/SelectRole';
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
    const global = useContext(UserContext);

    return (
        <Grid container spacing={2} style={{ paddingLeft: 3, paddingRight: 3 }} >
            <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                <Avatar alt={"Photo profile " + data.name} className={classes.photoProfileBg}>{data.name?.charAt(0).toUpperCase()}</Avatar>
                <Typography variant="h6">{data.name}</Typography>
                <Typography variant="body2">{data.email}</Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                {data.role ? <Typography variant="body2">{data.role.name}</Typography> : <></>}
                    <Typography variant="body2">Last login : {data.last_login ? moment(data.last_login).format('DD MMM YYYY') : ''}</Typography>
            </Grid>
        </Grid>
    )
}
export default OpenEditForm;