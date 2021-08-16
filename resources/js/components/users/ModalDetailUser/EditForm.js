
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
// import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    textfield: { marginTop: theme.spacing(1), width: '100%' },
    textField: { marginLeft: theme.spacing(1), marginRight: theme.spacing(1) },
    photoProfileBg: { backgroundColor: '#616161' }
}));

const OpenEditForm = ({ isEdit, data, setData,asProfile }) => {
    const classes = useStyles();
    const [occupations, setOccupations] = useState([]);
    let global = useContext(UserContext);

    const getOccupations = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'occupations';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setOccupations(result.data);
            }).catch((error) => {
                const payload = { error: error, snackbar: null, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
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
                        style={{ width: '100%' }}
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
                            disabled={(data.occupation?.name?.toLowerCase().includes('system administrator') 
                                        || data.occupation?.name?.toLowerCase().includes('sistem administrator'))?true:false}
                            onChange={e => {
                                setData({ ...data, occupation:e.target.value,occupations_id: e.target.value.id });
                            }}
                                defaultValue={data.occupation?.id}>
                                {
                                    occupations.map((occupation, index) => (<MenuItem value={occupation} key={occupation.id}>{occupation.name}</MenuItem>))
                                } 
                            </Select>
                        </FormControl>
                    </Grid>
                )}
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
                    {data.occupation ? <Typography variant="body2">{data.occupation.name}</Typography> : <></>}
                </Grid>
            </Grid>
        )
    }
}
export default OpenEditForm;