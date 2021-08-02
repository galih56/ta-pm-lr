import React, { useEffect, useContext, useState } from 'react';
import 'fontsource-roboto';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import { useSnackbar } from 'notistack';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import moment from 'moment'

const styles = (theme) => ({
    root: { margin: 0, padding: theme.spacing(2) },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: { padding: theme.spacing(2) },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: { margin: 0, padding: theme.spacing(1) },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
    root: { display: 'flex', flexWrap: 'wrap' },
    margin: { margin: theme.spacing(1) },
    formControl: { minWidth: 120, },
    selectEmpty: { marginTop: theme.spacing(2), },
}));


export default function ModalCreateList(props) {
    const classes = useStyles();
    var open = props.open;
    var projects_id = props.projects_id;
    var closeModal = props.handleClose;
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [dateRange, setDateRange] = useState([null, null]);
    const { enqueueSnackbar } = useSnackbar();
    const global = useContext(UserContext);

    const snackbar = (message, variant) =>  enqueueSnackbar(message, { variant });

    const submitData = () => {
        const body = {
            title: title,
            start: start,
            end: end,
            projects_id: projects_id,
            cards: []
        }
        
        const url = process.env.MIX_BACK_END_BASE_URL + 'lists/';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post(url, body)
            .then((result) => {
                setTitle('');
                closeModal();
                global.dispatch({ type: 'create-new-list', payload: result.data });
                snackbar(`A new list successfully created`, 'success');
            }).catch((error) => {
                const payload = { error: error, snackbar: snackbar, dispatch: global.dispatch, history: history }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }

    const checkIfAuthenticated = () => {
        if (global.state.authenticated === true) {
            return (
                <React.Fragment>
                    <DialogContent dividers>
                        <Grid container spacing={2} style={{ paddingLeft: 3, paddingRight: 3 }} >
                            <Grid item lg={12} md={12} sm={12} xs={12} >
                                <TextField variant="standard"
                                    label="Title : "
                                    placeholder="example : List A"
                                    className={classes.textfield}
                                    onChange={(e) => setTitle(e.target.value)}
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12} container>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <MobileDateRangePicker
                                        required
                                        startText="Planned to start at : "
                                        endText="Planned to finish at : "
                                        value={dateRange}
                                        onChange={(newValue) => {
                                            var start= newValue[0];
                                            var end= newValue[1];
                                            setDateRange(newValue)
                                            if(start){
                                                start=moment(newValue[0]).format('YYYY-MM-DD HH:mm:ss'); 
                                                setStart(start)
                                            }
                                            if(end){ 
                                                end=moment(newValue[1]).format('YYYY-MM-DD HH:mm:ss');
                                                setEnd(end)
                                            }
                                        }}
                                        renderInput={(startProps, endProps) => (
                                        <>
                                            <TextField {...startProps} variant="standard" required />
                                            <Box sx={{ mx: 2 }}> to </Box>
                                            <TextField {...endProps}  variant="standard"  required/>
                                        </>
                                        )}
                                    />
                                </LocalizationProvider>  
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={submitData} color="primary">Create</Button>
                    </DialogActions>
                </React.Fragment>
            )
        } else {
            return (
                <DialogContent dividers>
                    <Alert severity="warning">Your action requires authentication. Please sign in.</Alert>
                </DialogContent>
            )
        }
    }
    return (
        <Dialog aria-labelledby="Create a list" open={open}>
            <DialogTitle onClose={
                () => {
                    closeModal(false);
                }} > Create a new list </DialogTitle>
            {
                checkIfAuthenticated()
            }
        </Dialog>
    );
}
