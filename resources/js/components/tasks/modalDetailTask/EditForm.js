
import 'fontsource-roboto';
import React,{useState,useEffect} from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Attachments from './Attachments';
import Subtasks from './Subtask/Subtasks';
import MemberList from './MemberList';
import DatePicker from '@material-ui/lab/DatePicker';
import SelectTag from '../../widgets/SelectTag';
import StatusChip from './../../widgets/StatusChip';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';


const OpenEditForm = ({ isEdit, data, setData,detailProject,getProgress,onTaskUpdate,onTaskDelete }) => {
    const useStyles = makeStyles((theme) => ({
        textfield: { marginTop: theme.spacing(1), width: '100%' },
        textField: { marginLeft: theme.spacing(1), marginRight: theme.spacing(1), },
    }));
    const classes = useStyles();
    
    useEffect(()=>{    
        getProgress();
    },[data.cards])

    if (isEdit) {
        return (
            <Grid container spacing={2} style={{ paddingLeft: 4, paddingRight: 4 }} >
                <Grid  item lg={12} md={12} sm={12} xs={12} container spacing={2} >
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <TextField variant="standard"
                            label="Title : "
                            defaultValue={data.title}
                            onChange={(e) => {
                                setData({ ...data, title: e.target.value })
                            }}
                            style={{ width: '100%' }}
                        />
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12} >
                    <Typography style={{ whiteSpace: 'noWrap',margin:'0.4em' }}>Estimation start/end at : {data.start ? moment(data.start).format('DD MMMM YYYY') : ''} - {data.end ? moment(data.end).format('DD MMMM YYYY') : ''}</Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} container>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker 
                                value={data.actual_start} 
                                label="Execution start at : "
                                ampm={false}
                                renderInput={(params) => <TextField {...params} variant="standard" />}
                                onChange={(value)=>{
                                    setData({ ...data,actual_start:moment(value).format()})
                            }}/>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker 
                            value={data.actual_end} 
                            label="Execution end at : "
                            ampm={false}
                            renderInput={(params) => <TextField {...params} variant="standard" />}
                            onChange={(value)=>{
                                setData({ ...data,actual_end:moment(value).format()})
                            }}/>
                        </LocalizationProvider>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <TextField variant="standard"
                        label="Description : "
                        multiline rows={4}
                        defaultValue={data.description} className={classes.textfield}
                        onChange={(e) => {
                            setData({ ...data, description: e.target.value })
                        }} />
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
                    ></Attachments>
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
                ):<></>}
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <SelectTag defaultValue={data.tags} onChange={(tags) => {
                        setData({...data,tags:tags})
                    }} isEdit={isEdit} />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <MemberList detailProject={detailProject} data={data} setData={setData} isEdit={isEdit}/>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid container spacing={2} style={{ paddingLeft: 4, paddingRight: 4 }} >
                <Grid item lg={6} md={6} sm={6} xs={12} >
                    <Typography style={{ whiteSpace: 'noWrap',margin:'0.4em' }}>Start : {data.start ? moment(data.start).format('DD MMMM YYYY') : ''}</Typography>
                    <Typography style={{ whiteSpace: 'noWrap',margin:'0.4em' }}>End : {data.end ? moment(data.end).format('DD MMMM YYYY') : ''}</Typography>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12} >
                    <Typography style={{ whiteSpace: 'noWrap',margin:'0.4em' }}>Actual Start : {data.actual_start ? moment(data.actual_start).format('DD MMMM YYYY') : ''}<StatusChip status={data.start_label}/></Typography>
                    <Typography style={{ whiteSpace: 'noWrap',margin:'0.4em' }}>Actual End : {data.actual_end ? moment(data.actual_end).format('DD MMMM YYYY') : ''}<StatusChip status={data.end_label}/></Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography>Description : </Typography>
                    <Typography variant="body2">{data.description}</Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography>Attachments : </Typography>
                    <Attachments
                        detailTask={data} setDetailTask={setData} 
                        tasks_id={data.id}
                        projects_id={detailProject.id}
                        lists_id={data.lists_id}>
                    </Attachments>
                </Grid>
               {!data.is_subtask?(
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Subtasks  
                        isEdit={isEdit} 
                        detailTask={data} 
                        setDetailTask={setData} 
                        detailProject={detailProject} 
                        onTaskUpdate={onTaskUpdate}
                        onTaskDelete={onTaskDelete}
                    />
                </Grid>
                ):<></>}
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <SelectTag defaultValue={data.tags} onChange={(tags) => console.log(tags)} isEdit={isEdit}></SelectTag>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <MemberList detailProject={detailProject} data={data} setData={setData} isEdit={isEdit}/>
                </Grid>
            </Grid>
        )
    }
}
export default OpenEditForm;

