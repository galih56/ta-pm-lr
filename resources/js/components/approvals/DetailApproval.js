import React,{useState,useContext,useEffect} from 'react';
import UserContext from './../../context/UserContext';
import axios from 'axios';
import {Link, BrowserRouter as Router,useHistory} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import MenuItem from '@material-ui/core/MenuItem';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ApprovalStatus from './../widgets/ApprovalStatus';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';

export default function DetailApproval(props) {
    const global=useContext(UserContext);
    const [data, setData] = useState({
        id:'', title:"", description:'', status:'', old_deadline:'', new_deadline:'',
        project:{ id:'', title:'' }, task:{ id:'', title:'' }, list:{ id:'', title:'' }, 
        created_at:'', updated_at:''
    });
    const [openModalConfirm, setOpenModalConfirm]=useState(false);
    const { match: { params } } = props;
    let history=useHistory();
    
    useEffect(() => {
        if(!([1,2,4,5].includes(global.state.role?.id) && global.state.current_project_id)) {
            history.push('/projects');
        }else{        
            getDetailApproval();
        }
    }, []);

    const getDetailApproval=()=>{
        const url = `${process.env.MIX_BACK_END_BASE_URL}approvals/${params.id}`;
        const toast_loading = toast.loading(<b>Loading...</b>);
        axios.get(url).then((result) => {                
                setData(result.data);
                toast.dismiss(toast_loading);
            }).catch(error=> toast.dismiss(toast_loading));      
    }

    const handleSubmit=(e)=>{
        const body={ id:params.id, status:data.status }
        const url = `${process.env.MIX_BACK_END_BASE_URL}approvals/${params.id}`;
        const toast_loading = toast.loading(<b>Updating...</b>);
        axios.patch(url,body)
            .then((result) => {                    
                setData(result.data);
                toast.dismiss(toast_loading);
                toast.success(<b>Successfully updated</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
    }
    var url=``;
    if(data.task){
        url=(data.parent_task_id)?
        `/projects/${data.project.id}/timeline?tasks_id=${data.parent_task_id}`:
        `/projects/${data.project.id}/timeline?tasks_id=${data.tasks_id}`;
    }else{
        url=`/projects/${data.project.id}/timeline`
    }
    return (
        <Paper style={{ padding: '1em',width:'100%' }}>
             
            <Grid container>
                <Grid xl={12}item lg={12} md={12} sm={12} xs={12}>
                    <Router>
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="projects">
                            <Button component={Link}  color="primary" to="/projects"> Projects </Button>
                            <Button component={Link}  color="primary" to="/approvals">
                                Approvals
                            </Button>
                            <Typography color="textPrimary">{data.id}</Typography>
                        </Breadcrumbs>
                    </Router>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                    <Typography variant="h6" component="div"><b>{data.title}</b> </Typography>
                    <Typography variant="caption" component="div">
                        Deadline extended ({moment(data.old_deadline).format('DD MMMM YYYY')} {`>>>`} {moment(data.new_deadline).format('DD MMMM YYYY')})
                        <br/>
                        {data.created_at?(<span>Created at : {moment(data.created_at).format('DD MMMM YYYY')}</span>):<></>}
                        {(data.updated_at && data.updated_at!=data.created_at)?(<span style={{marginLeft:'0.5em'}}>Updated at : {moment(data.updated_at).format('DD MMMM YYYY')}</span>):<></>}
                        <span style={{padding:'0.5em'}}><ApprovalStatus status={data.status}/></span>
                    </Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                    <Typography variant="h6" component="div">Description : </Typography>
                    <Typography variant="body2" component="div">
                        {data.description}
                    </Typography>
                </Grid>
                {(data.project && data.task)?(
                    <Grid item xl={12} lg={12} md={12} sm={12}>
                        <Typography variant="body2" component="div">
                            <br/>
                            Project : <Link target={"_blank"} 
                                        to={url}>{data.project.title}</Link>
                            <br/>
                            Task : {data.task.title}
                        </Typography>
                    </Grid>
                ):<></>}
                
                <Grid display="flex" justifyContent="flex-end"  
                    item xl={12} lg={12} md={12} sm={12} style={{marginTop:'1em'}}
                    component="form"  
                    onSubmit={(e)=>{
                        e.preventDefault();
                        setOpenModalConfirm(true)
                    }}>
                    <Typography variant="body">Confirm : </Typography>
                    {(data.created_at!=data.updated_at)?(
                         <Select required value={data.status} onChange={(event)=>setData({...data, status:event.target.value})}    
                            style={{ minWidth: 150,marginRight:'1em'}} placeholder="Confirm" variant="standard" disabled 
                        >
                            <MenuItem value={"accepted"}>Accept</MenuItem>
                            <MenuItem value={"declined"}>Decline</MenuItem>
                        </Select>
                    ):(
                        <Select required value={data.status} onChange={(event)=>setData({...data, status:event.target.value})}                       
                            style={{ minWidth: 150,marginRight:'1em'}} placeholder="Confirm" variant="standard">                            
                            <MenuItem value={"accepted"}>Accept</MenuItem>
                            <MenuItem value={"declined"}>Decline</MenuItem>
                        </Select>
                    )}
                    <Button variant="contained" color="primary" type="submit">Save</Button>
                    <ModalConfirm  open={openModalConfirm}  handleConfirm={handleSubmit} handleClose={()=>setOpenModalConfirm(false)}/>
                </Grid>
            </Grid>
        </Paper>
    );
}
// &subtasks_id=${data.task.id}


const ModalConfirm = (props) => {
    const open = props.open;
    const handleClose = props.handleClose;
    const handleConfirm = props.handleConfirm;

    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
                <DialogContentText>The data will be saved permanently</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={()=>{handleConfirm();handleClose();}} variant='contained' color="primary"> Confirm </Button>
            </DialogActions>
        </Dialog>
    );
}