import React,{useState,useEffect,useContext,lazy,Suspense} from 'react';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserContext from '../../../context/UserContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import NumberFormat from 'react-number-format';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import { parseISO } from 'date-fns'; 

const Attachments = lazy(() => import('./Attachments'));
const MemberList = lazy(() => import('./MemberList'));
const Subtasks = lazy(() => import('./Subtasks/Subtasks'));
const ExtendDeadlineForm = lazy(() => import('./../../widgets/ExtendDeadlineForm'));
const SelectTag = lazy(() => import('./../../widgets/SelectTag'));
const StatusChip = lazy(() => import('./../../widgets/StatusChip'));

const OpenEditForm = ({ isEdit, data, setData,detailProject,getProgress,onTaskUpdate,onTaskDelete,setStartConfirmOpen }) => {
    const global = useContext(UserContext);
    const [showExtendDeadlineForm,setShowExtendDeadlineForm]=useState(false);
    const [estimationDateRange,setEstimationDateRange]=useState([null,null]);
    const [realizationDateRange,setRealizationDateRange]=useState([null,null]);
    const [exceptedData,setExceptedData]=useState([]);
    // const [minDate,setMinDate]=useState(null);
    // const [maxDate,setMaxDate]=useState(null);

    useEffect(()=>{
        setEstimationDateRange([data.start,data.end]);
        setRealizationDateRange([data.actual_start,data.actual_end]);
        // if(data.list){
        //     setMinDate(parseISO(data.list.start))
        //     setMaxDate(parseISO(data.list.end))
        // }else if(detailProject.start && detailProject.end){
        //     setMinDate(parseISO(detailProject.start))
        //     setMaxDate(parseISO(detailProject.end))
        // }else{
        //     setMinDate(null)
        //     setMaxDate(null)
        // }
    },[data.id])

    const checkLoggedInUserProjectMember=()=>{
        var logged_in_user={ 
            id:global.state.id, name:global.state.name, 
            username:global.state.username, email:global.state.email, 
        }
        var registered=false
        for (let i = 0; i < detailProject.members.length; i++) {
            const member = detailProject.members[i];
            if(member.id==logged_in_user.id){ registered=true; }
        }
        
        if(!registered){
            setExceptedData([...data.members,logged_in_user]);
        }

    }
    useEffect(()=>{    
        getProgress();
    },[data.cards]);

    useEffect(()=>{
        checkLoggedInUserProjectMember();
    },[data.members,data.cards]);
    
    return (
        <Grid container spacing={2} style={{ paddingLeft: 4, paddingRight: 4 }} justifyContent="center" alignItems="center">
            <Suspense fallback={<CircularProgress style={{marginTop:'1.5em'}} />}>
                {(isEdit)?(
                    <React.Fragment>
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <TextField variant="standard" label="Title : " defaultValue={data.title} onChange={e =>setData({ ...data, title: e.target.value })} fullWidth />
                        </Grid> 
                        <Grid item lg={12} md={12} sm={12} xs={12} container spacing={2}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Typography style={{ whiteSpace: 'noWrap'}}>Estimation start/end at : {data.start ? moment(data.start).format('DD MMMM YYYY') : ''} - {data.end ? moment(data.end).format('DD MMMM YYYY') : ''}</Typography> 
                                {([1,2,4].includes(global.state.occupation?.id))?(
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <MobileDateRangePicker
                                            required
                                            startText="Start at : "
                                            endText="Finish at : "
                                            value={estimationDateRange}
                                            minDate={detailProject.start?parseISO(detailProject.start):null}
                                            maxDate={detailProject.end?parseISO(detailProject.end):null}
                                            onChange={(newValue) => {
                                                if(newValue[0]){
                                                    setData({...data, start:moment(newValue[0]).format('YYYY-MM-DD HH:mm:ss')})
                                                }
                                                if(newValue[1]){ 
                                                    setData({...data, end:moment(newValue[1]).format('YYYY-MM-DD HH:mm:ss')})
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
                                ):(
                                    <Button variant="contained" color="secondary" onClick={()=>setShowExtendDeadlineForm(true)}>Extend deadline</Button>
                                )}
                            </Grid>
                            
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Typography style={{ whiteSpace: 'noWrap'}}>Realization start/end at : {data.actual_start ? moment(data.actual_start).format('DD MMMM YYYY') : ''} - {data.actual_end ? moment(data.actual_end).format('DD MMMM YYYY') : ''}</Typography> 
                                <StatusChip status={data.start_label}/> - <StatusChip status={data.end_label}/>
                                {([1,2].includes(global.state.occupation?.id))?(
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <MobileDateRangePicker
                                            required
                                            startText="Start at : "
                                            endText="Finish at : "
                                            value={realizationDateRange}
                                            onChange={(newValue) => {
                                                if(newValue[0]){
                                                    setData({...data, actual_start:moment(newValue[0]).format('YYYY-MM-DD HH:mm:ss')})
                                                }
                                                if(newValue[1]){ 
                                                    setData({...data, actual_end:moment(newValue[1]).format('YYYY-MM-DD HH:mm:ss')})
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
                                ):(
                                    <>
                                        <Typography style={{ whiteSpace: 'noWrap'}}>Realization start/end at : {data.actual_start ? moment(data.actual_start).format('DD MMMM YYYY') : ''} - {data.actual_end ? moment(data.actual_end).format('DD MMMM YYYY') : ''}</Typography> 
                                        <Button variant="contained" 
                                                disabled={data.actual_start?true:false}
                                                color="primary" style={{marginRight:'0.5em'}} 
                                                onClick={()=>setStartConfirmOpen(true)}>Start progress</Button>
                                    </>
                                )}
                            </Grid>
                        </Grid>
                        
                        {([1,2].includes(global.state.occupation?.id))?(
                            <Grid item lg={12} md={12} sm={12} xs={12} container spacing={2}>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Typography>Progress : </Typography>
                                    <TextField variant="standard" required value={data.progress} 
                                        type="number"
                                        onChange={(e)=>{
                                            e =>setData({ ...data, progress: e.target.value })
                                        }}/>     
                                </Grid>
                            </Grid>
                        ):null} 
                        {([1,2].includes(global.state.occupation?.id) && !data.is_subtask)?(
                            <Grid item lg={12} md={12} sm={12} xs={12} container spacing={2}>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Typography>Cost estimation/realization : 
                                        {data.cost? <NumberFormat customInput={Typography}  style={{ whiteSpace: 'noWrap',margin:'0.4em' }} thousandSeparator={true}  displayType={'text'}  value={isNaN(data.cost)?0:Number.parseInt(data.cost)}/>:'...'}/
                                        {data.actual_cost? <NumberFormat customInput={Typography} style={{ whiteSpace: 'noWrap',margin:'0.4em' }} thousandSeparator={true} displayType={'text'} value={isNaN(data.actual_cost)?0:Number.parseInt(data.actual_cost)} />:'...'}</Typography>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <NumberFormat customInput={TextField} variant="standard" label="Estimation : " type="text" value={isNaN(data.cost)?0:Number.parseInt(data.cost)} onValueChange={formattedValue => setData({ ...data, cost: formattedValue.value })} 
                                        fullWidth thousandSeparator={true} displayType={'input'} allowNegative={false} isNumericString={true} prefix={'Rp.'}  />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <NumberFormat customInput={TextField} variant="standard" label="Realization : " type="text" value={isNaN(data.actual_cost)?0:Number.parseInt(data.actual_cost)} onValueChange={formattedValue => setData({ ...data, actual_cost: formattedValue.value })} 
                                        fullWidth thousandSeparator={true} displayType={'input'} allowNegative={false} isNumericString={true} prefix={'Rp.'}  />
                                </Grid>
                            </Grid>):null} 
                    </React.Fragment>
                ):(
                    <>
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <Typography style={{ whiteSpace: 'noWrap',margin:'0.4em' }}>Estimation : {data.start ? moment(data.start).format('DD MMMM YYYY') : ''} - {data.end ? moment(data.end).format('DD MMMM YYYY') : ''}</Typography>
                            <Typography style={{ whiteSpace: 'noWrap',margin:'0.4em' }}>Realization : {data.actual_start ? moment(data.actual_start).format('DD MMMM YYYY') : ''} - {data.actual_end ? moment(data.actual_end).format('DD MMMM YYYY') : ''}</Typography>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <StatusChip status={data.start_label}/> - <StatusChip status={data.end_label}/>
                        </Grid>
                        {([1,2].includes(global.state.occupation?.id) && !data.is_subtask)?(
                            <Grid item lg={12} md={12} sm={12} xs={12} >
                                <Typography  style={{ whiteSpace: 'noWrap',margin:'0.4em' }} >Cost estimation/realization : 
                                    {data.cost? <NumberFormat customInput={Typography} style={{ whiteSpace: 'noWrap',margin:'0.4em' }}thousandSeparator={true} displayType={'text'} value={isNaN(data.cost)?0:Number.parseInt(data.cost)}/>:'...'}/
                                    {data.actual_cost? <NumberFormat customInput={Typography} style={{ whiteSpace: 'noWrap',margin:'0.4em' }}thousandSeparator={true} displayType={'text'} value={isNaN(data.actual_cost)?0:Number.parseInt(data.actual_cost)} />:'...'}
                                </Typography>  
                            </Grid>
                        ):null}
                    </>
                )}

                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <SelectTag defaultValue={data.tags} onChange={(tags) => {
                        setData({...data,tags:tags})
                    }} isEdit={isEdit} />
                </Grid> 
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography>Attachments : </Typography>
                    <Attachments
                        detailTask={data} 
                        setDetailTask={setData} 
                        isEdit={isEdit}
                        tasks_id={data.id}
                        projects_id={detailProject.id}
                        lists_id={data.lists_id}
                    />
                </Grid>
                {!data.is_subtask?(
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Subtasks isEdit={isEdit} 
                            detailTask={data}  
                            setDetailTask={setData} 
                            detailProject={detailProject} 
                            onTaskUpdate={onTaskUpdate}
                            onTaskDelete={onTaskDelete}
                        />
                    </Grid>
                ):null}
            
                <Grid item lg={12} md={12} sm={12} xs={12} >
                    {(isEdit)?(
                        <TextField variant="standard"
                            label="Description : "
                            multiline rows={4}
                            defaultValue={data.description} fullWidth
                            onChange={(e) => {
                                setData({ ...data, description: e.target.value })
                            }} />
                    ):(
                        <>
                            <Typography>Description : </Typography>
                            <Typography variant="body2">{data.description}</Typography>
                        </>
                    )}
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <MemberList detailProject={detailProject} 
                        exceptedData={exceptedData} 
                        data={data} setData={setData} isEdit={isEdit}/>
                </Grid>
                <ExtendDeadlineForm 
                    open={showExtendDeadlineForm} 
                    handleClose={()=>setShowExtendDeadlineForm(false)}
                    task={data} 
                    detailProject={detailProject}
                    minDate={data.end}
                    maxDate={detailProject.end}
                    />
            </Suspense>
        </Grid>
    )
}
export default OpenEditForm;

