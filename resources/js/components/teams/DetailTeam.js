import axios from 'axios';
import React,{useState,useContext,useEffect} from 'react';
import {Link, BrowserRouter as Router, useHistory,withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import MemberList from './members/MemberList';
import ProjectList from './ProjectList';
import UserContext from './../../context/UserContext';
import toast from 'react-hot-toast';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';

const ModalDeleteConfirm = (props) => {
    const open = props.open;
    const handleClose = props.handleClose;
    const handleDelete = props.handleDelete;

    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
                <DialogContentText>Data will be deleted permanently.</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleDelete} variant='contained' color="primary"> Confirm </Button>
            </DialogActions>
        </Dialog>
    );
}

function DetailTeam(props) {
    let history=useHistory();
    const global=useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState({
        id:'', name:"", description:'',
        members:[], users:[],projects:[]
    });
    const { match: { params } } = props;
    const [deleteConfirmOpen,setDeleteConfirmOpen]=useState(false);
    const handleEditingMode = () => setIsEditing(!isEditing);

    const getDetailTeam=()=>{
        const toast_loading = toast.loading('Loading...');
        const url = process.env.MIX_BACK_END_BASE_URL + 'teams/'+params.id;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setData(result.data);
                toast.dismiss(toast_loading);
            }).catch((error) => {
                toast.dismiss(toast_loading);
                switch(error.response.status){
                    case 404 : {
                        toast.error(<b>Not Found</b>);
                        history.push('/teams')
                        break;
                    }
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    const saveChanges = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + `teams/${params.id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.patch(url, { id:data.id, name:data.name }),
            {
                loading: 'Updating...',
                success: (result)=>{
                    return <b>Successfully updated</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    }

    const deleteTeam = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}teams/${params.id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.delete(url),
            {
                loading: 'Deleting',
                success: (result)=>{
                        props.onDelete(data);
                        history.push('/teams');
                        return <b>Successfully deleted</b>
                    },
                    error: (error)=>{
                        if(error.response.status==401) return <b>Unauthenticated</b>;
                        if(error.response.status==422) return <b>Some required inputs are empty</b>;
                        return <b>{error.response.statusText}</b>;
                    },
                });
    }

    useEffect(()=>{
        getDetailTeam();
    },[]);

    return (
    
        <React.Fragment>
            <Paper style={{ margin:'1em', padding: '1em',width:'100%' }}>
                <Grid container spacing={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <Router>
                            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="teams">
                                <Button component={Link}  color="primary"
                                    to="/teams">
                                    Teams
                                </Button>
                                <Typography color="textPrimary">{data.name}</Typography>
                            </Breadcrumbs>
                        </Router>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        {isEditing?(
                                <TextField variant="standard"
                                    label="Name : "
                                    onChange={(e) => setData({...data,name:e.target.value})}
                                    style={{ width: '100%' }}
                                    required
                                    defaultValue={data.name}
                                />
                            ):(<Typography variant="h5">{data.name}</Typography>)}
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} style={{marginTop:'0.5em'}}>
                        {[1,2,4].includes(global.state.occupation?.id)?(
                            <>
                                {(isEditing)?(
                                    <>
                                        <Button onClick={handleEditingMode}>Cancel</Button>
                                        <Button variant="contained" color="primary" onClick={saveChanges} style={{marginLeft:'1em',marginRight:'1em'}}>Save</Button>
                                        <Button variant="contained" color="secondary" onClick={()=>setDeleteConfirmOpen(true)}>Delete</Button>
                                    </>
                                ):<Button onClick={handleEditingMode}>Edit</Button>}
                            </>
                        ):null}
                    </Grid>
                </Grid>
                <ModalDeleteConfirm
                    open={deleteConfirmOpen}
                    handleDelete={() => { deleteTeam(); setDeleteConfirmOpen(false); }}
                    handleClose={() => { setDeleteConfirmOpen(false);}}
                />
            </Paper>
            <Paper style={{ margin:'1em', padding: '1em',width:'100%' }}>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <ProjectList teamId={params.id} data={data.projects}/>
                    </Grid>
                </Grid>
            </Paper>
            <Paper style={{ margin:'1em', padding: '1em',width:'100%' }}>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <MemberList teamId={params.id} data={data.members}/>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}

export default withRouter(DetailTeam);