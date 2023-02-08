import React,{useState,useContext,useEffect} from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import {Link, BrowserRouter as Router,useHistory} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import TextField from '@material-ui/core/TextField';
import toast, { Toaster } from 'react-hot-toast';

export default function DetailClient(props) {
    const global=useContext(UserContext);
    const [data, setData] = useState({
        id:'', name:"", description:''
    });
    const [editing,setEditing]=useState(false);
    const [openModalConfirm, setOpenModalConfirm]=useState(false);
    const { match: { params } } = props;
    let history=useHistory();
    
    useEffect(() => {
        if(!global.state.role?.id==8) history.push('/projects');
        getDetailClient();
    }, []);

    const getDetailClient=()=>{
        const url = `${process.env.MIX_BACK_END_BASE_URL}clients/${params.id}`;
        const toast_loading = toast.loading(<b>Loading...</b>);
        axios.get(url)
            .then((result) => {
                setData(result.data);
                toast.dismiss(toast_loading);
            }).catch(error => toast.dismiss(toast_loading));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const url =`${process.env.MIX_BACK_END_BASE_URL}clients/${params.id}`;
        const toast_loading = toast.loading(<b>Updating...</b>);
        axios.patch(url,data)
            .then((result) => {
                setData(result.data);
                setEditing(false)
                toast.dismiss(toast_loading);
                toast.success(<b>Successfully updated</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
    }
    
    const handleDelete=()=>{
        const url = `${process.env.MIX_BACK_END_BASE_URL}clients/${params.id}`;
        const toast_loading = toast.loading(<b>Loading...</b>);
        axios.delete(url)
            .then((result) => {
                toast.dismiss(toast_loading);
                toast.success(<b>Successfully deleted</b>)
                history.push('/clients')
            }).catch((error)=> toast.dismiss(toast_loading));
    }

    const handleCancle=(e)=>{
        e.preventDefault();
        setEditing(false);
    }
    const handleInstitutionOnChange=(e) => setData({...data, institution:e.target.value})
    const handleCityOnChange=(e) => setData({...data,city:e.target.value})
    const handleDescriptionOnChange=(e) => setData({ ...data, description: e.target.value })
    const handleEditOpen=()=>setEditing(true);
    const handleConfirmClose=()=>setOpenModalConfirm(false);
    const handleConfirmOpen=()=>setOpenModalConfirm(true);

    return (
        <Paper style={{ padding: '1em',width:'100%' }}>
            <Grid container component="form" spacing={1}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Router>
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="projects">
                            <Button component={Link}  color="primary"  to="/projects">  Projects </Button>
                            <Button component={Link}  color="primary" to="/clients"> Clients </Button>
                            <Typography color="textPrimary">{data.institution}</Typography>
                        </Breadcrumbs>
                    </Router>
                </Grid>
                <Grid item xl={6} lg={6} md={12} sm={12}>
                    {(editing)?( <TextField variant="standard" label="Institution" value={data.institution} onChange={handleInstitutionOnChange} placeholder={"Institution"} fullWidth required/>):
                    (<Typography variant="body1" component="div"><b>Institution</b> : {data.institution}</Typography>)}
                </Grid>
                <Grid item xl={6} lg={6} md={12} sm={12}>
                    {(editing)?( <TextField variant="standard" label="City : " onChange={handleCityOnChange} placeholder={"City"} value={data.city} fullWidth required />):
                    (<Typography variant="body1" component="div"><b>City</b> : {data.city}</Typography>)}
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} >
                    {(editing)?( <TextField variant="standard" label="Description : " defaultValue={data.description} fullWidth onChange={handleDescriptionOnChange} multiline fullWidth rows={4}/>      ):(
                        <>
                            <Typography variant="body1" component="div"><b>Description : </b></Typography>
                            <Typography variant="body1" component="div">
                                {data.description}
                            </Typography>
                        </>
                    )}
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} >
                    {(editing)?(
                        <>
                            <Button type="button" style={{marginRight:'1em'}} onClick={handleCancle}>Cancel</Button>
                            <Button variant="contained" color="primary"  onClick={handleSubmit}style={{marginRight:'1em'}}>Save</Button>
                            <Button variant="contained" color="secondary" 
                                onClick={handleConfirmOpen}>Delete</Button>
                            <ModalConfirm 
                                open={openModalConfirm} 
                                handleConfirm={handleDelete}
                                handleClose={handleConfirmClose}
                            />
                        </>
                    ):( <Button variant="contained" color="primary" type="submit" onClick={handleEditOpen}>Edit</Button> )}
                </Grid>
            </Grid>
        </Paper>
    );
}

const ModalConfirm = (props) => {
    const open = props.open;
    const handleClose = props.handleClose;
    const handleConfirm = props.handleConfirm;

    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
                <DialogContentText>This action will be deleted permanently</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={()=>{handleConfirm();handleClose();}} variant='contained' color="primary"> Confirm </Button>
            </DialogActions>
        </Dialog>
    );
}