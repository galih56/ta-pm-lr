import React, { useEffect, useContext, useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import { useHistory,withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import UserContext from '../../../../context/UserContext';
import toast from 'react-hot-toast';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import ExtendDeadlineForm from '../../../widgets/ExtendDeadlineForm';

const ProjectInfo = (props) => {
    const global = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);
    const [detailProject, setDetailProject] = useState({ 
        id: null, title: '', description: '', columns: [], 
        createdAt: '', updatedAt: '', start:null, end:null,
        actual_start: null,actual_end: null 
    });
    const [estimationDateRange,setEstimationDateRange]=useState([null,null]);
    const [realizationDateRange,setRealizationDateRange]=useState([null,null]);
    const [showExtendDeadlineForm,setShowExtendDeadlineForm]=useState(false);    
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    let history = useHistory();

    function getDateRangeFromTask(start,end){
        if(start) start=moment(start).format('YYYY-MM-DD HH:mm:ss');
        if(end) end=moment(end).format('YYYY-MM-DD HH:mm:ss');
        return [start,end];
    }

    useEffect(() => {
        setDetailProject(props.detailProject);
    }, [props.detailProject])

    useEffect(()=>{
        setEstimationDateRange(getDateRangeFromTask(detailProject.start,detailProject.end));
        setRealizationDateRange(getDateRangeFromTask(detailProject.actual_start,detailProject.actual_end));
    },[detailProject])

    const saveChanges = () => {        
        const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${detailProject.id}`;
        const toast_loading = toast.loading('Updating...'); 
        axios.patch(url, detailProject)
            .then((result) => {                          
                setIsEditing(false)
                global.dispatch({ type: 'store-detail-project', payload: result.data });;       
                toast.dismiss(toast_loading)
                toast.success(<b>Successfully updated</b>)
            }).catch((error)=> toast.dismiss(toast_loading));

        if (!window.navigator.onLine) {
            toast.error(`You are currently offline`);
        }
    }

    const handleRemoveProject = () => {      
        const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${detailProject.id}`;
        const toast_loading = toast.loading('Updating...'); 
        axios.delete(url)
            .then((result) => {                  
                toast.dismiss(toast_loading)
                toast.success(<b>Successfully deleted</b>)              
                global.dispatch({ type: 'remove-project', payload: detailProject.id });
                window.location.replace(window.location.origin)  
                setDeleteConfirmOpen(false);
            }).catch((error)=> toast.dismiss(toast_loading));
    }
    
    return (
        <>
            <Grid container>
                {(isEditing)?(
                <React.Fragment>
                    <Grid item xl={6} md={6} sm={12} xs={12} style={{ padding: '1em' }}>
                        <TextField label="Title : " value={detailProject.title}
                            style={{ width: '90%' }} variant="standard" 
                            onChange={(e) => setDetailProject({ ...detailProject, title: e.target.value })}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}  style={{ padding: '1em' }}>
                        <Typography style={{ whiteSpace: 'noWrap'}} component="div">
                            Estimation start/end at : {detailProject.start ? moment(detailProject.start).format('DD MMMM YYYY') : ''} - {detailProject.end ? moment(detailProject.end).format('DD MMMM YYYY') : ''}
                            {(![1,2,4].includes(global.state.role?.id))?(
                                <Button variant="contained" color="primary" onClick={()=>setShowExtendDeadlineForm(true)} style={{ margin: '1em' }}>Extend deadline</Button>
                            ):null}        
                        </Typography> 
                        <Typography style={{ whiteSpace: 'noWrap'}} component="div">
                            Realization start/end at : {detailProject.actual_start ? moment(detailProject.actual_start).format('DD MMMM YYYY') : ''} - {detailProject.actual_end ? moment(detailProject.actual_end).format('DD MMMM YYYY') : ''}
                        </Typography> 
                    </Grid>
                    {([1,2,4].includes(global.state.role?.id))?(
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{padding:'1em'}}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <MobileDateRangePicker
                                    required
                                    startText="Start : "
                                    endText="End : "
                                    value={estimationDateRange}
                                    onChange={(newValue) => {
                                        if(newValue[0]){
                                            setDetailProject({ ...detailProject, start: moment(newValue[0]).format('YYYY-MM-DD HH:mm:ss') })
                                        }
                                        if(newValue[1]){ 
                                            setDetailProject({ ...detailProject, end: moment(newValue[1]).format('YYYY-MM-DD HH:mm:ss') })
                                        }
                                        setEstimationDateRange([newValue[0],newValue[1]]);
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
                    ):null}
                    <Grid item lg={12} md={12} sm={12} xs={12} style={{padding:'1em'}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDateRangePicker
                                required
                                startText="Actual Start : "
                                endText="Actual End : "
                                value={realizationDateRange}
                                onChange={(newValue) => {
                                    if(newValue[0]){
                                        setDetailProject({ ...detailProject, actual_start: moment(newValue[0]).format('YYYY-MM-DD HH:mm:ss') })
                                    }
                                    if(newValue[1]){ 
                                        setDetailProject({ ...detailProject, actual_end: moment(newValue[1]).format('YYYY-MM-DD HH:mm:ss') })
                                    }
                                    setRealizationDateRange([newValue[0],newValue[1]]);
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
                    <Grid item xl={12} md={12} sm={12} xs={12} style={{ padding: '1em' }}>
                        <Typography>Description : </Typography>
                        <TextField variant="standard" multiline rows={4}
                            style={{ width: '90%' }}
                            defaultValue={detailProject.description}
                            onChange={(e) => {
                                setDetailProject({ ...detailProject, description: e.target.value })
                            }} />
                    </Grid>
                    <Grid item container xl={8} md={8} sm={8} xs={8} style={{ padding: '1em' }}
                        justifyContent="flex-start"
                        alignItems="baseline"
                    >
                        <Button onClick={() => { setIsEditing(false) }} style={{ marginRight: '1.5em' }}>Cancel</Button>
                        <Button variant="contained" color="primary" onClick={saveChanges} style={{ marginRight: '3em' }}> Save </Button>
                    </Grid>
                    {([1,2,4].includes(global.state.role?.id))?(
                        <>
                            <Grid item container xl={4} md={4} sm={4} xs={4} style={{ padding: '1em' }}
                                justifyContent="flex-end"
                                alignItems="baseline"
                            >
                                <Button variant="contained" color="secondary" onClick={() => setDeleteConfirmOpen(true)} > Delete </Button>
                            </Grid>
                            <DeleteConfirmDialog open={deleteConfirmOpen} handleClose={() => { setDeleteConfirmOpen(false); }} handleConfirm={handleRemoveProject}></DeleteConfirmDialog>
                        </>
                    ):null}
                    <ExtendDeadlineForm  open={showExtendDeadlineForm}  handleClose={()=>setShowExtendDeadlineForm(false)} detailProject={detailProject} />
                </React.Fragment>
            ):(
                <React.Fragment>
                    <Grid item xl={6} md={6} sm={6} xs={12} style={{ padding: '1em' }}>
                        <Typography variant="h5">{detailProject.title}  ({Math.round(detailProject.progress)}%)</Typography>
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} xs={12} style={{ padding: '1em' }}>
                        {detailProject.start ? <Typography variant="body1" >Start : {moment(detailProject.start).format('DD MMMM YYYY') }</Typography>: null} 
                        {detailProject.end ? <Typography variant="body1" >End : {moment(detailProject.end).format('DD MMMM YYYY') }</Typography>: null} 
                        {detailProject.actual_start ?<Typography variant="body1" >Actual Start : {moment(detailProject.actual_start).format('DD MMMM YYYY') }</Typography>: null}
                        {detailProject.actual_end ?<Typography variant="body1" >Actual End : {moment(detailProject.actual_end).format('DD MMMM YYYY') }</Typography>:null}
                    </Grid>
                    <Grid item xl={12} md={12} sm={12} xs={12} style={{ padding: '1em' }}>
                        <Typography variant="body1" >{detailProject.description}</Typography>
                    </Grid>
                    {([1,2,4].includes(global.state.role?.id))?(
                        <Grid item xl={12} md={12} sm={12} xs={12} style={{ padding: '1em' }}>
                            <Button onClick={() => { setIsEditing(true) }} variant="contained" color="primary">Edit</Button>
                        </Grid>
                    ):null}
                </React.Fragment>
            )}
             
            </Grid >
        </ >
    )
}

const DeleteConfirmDialog =(props) => {
    const open = props.open;
    const handleClose = props.handleClose;
    const handleConfirm = props.handleConfirm;
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{ cursor: 'move' }}>Are you sure you want to delete this project?</DialogTitle>
            <DialogContent>
                <DialogContentText>Data will be deleted permanently</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleConfirm} color="primary"> Confirm </Button>
            </DialogActions>
        </Dialog>
    );
}

export default withRouter(ProjectInfo)