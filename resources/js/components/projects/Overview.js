import React,{useState,useEffect,useContext} from 'react';
import UserContext from './../../context/UserContext';
import Grid from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';
import LineChart from '../widgets/LineChart';
import LineChartTask from '../widgets/LineChartTask';
import GroupedTasksChart from '../widgets/GroupedTasksChart';
import TaskComparasionChart from '../widgets/TaskComparasionChart';
import moment from 'moment';
import axios from 'axios';

const Overview=({detailProject,refreshDetailProject,handleDetailTaskOpen})=>{
    const global=useContext(UserContext);
    const [allTasks,setAllTasks]=useState([]);
    const [groupedTasks,setGroupedTasks]=useState({
            mulai_cepat :  0,  selesai_cepat :  0, 
            mulai_tepat_waktu :  0, selesai_tepat_waktu :  0, 
            mulai_telat :  0,  selesai_telat :  0, 
            belum_dilaksanakan :  0,  belum_selesai :  0
    });
    
    const [starts,setStarts]=useState({ estimations:[], realizations: [] });
    const [ends,setEnds]=useState({ estimations:[], realizations: [] });
        
    useEffect(()=>{
        if(detailProject.id) getReports();
    },[detailProject.id]);

    const getReports = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${detailProject.id}/reports`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url, {}, {})
            .then((result) => {
                setAllTasks(result.data.all_tasks)
                delete result.data.all_tasks;
                setGroupedTasks(result.data)
            }).catch((error) => console.log(error));
    }
    const dataPointOnClick=function(e){
        var dp=e.dataPoint
        handleDetailTaskOpen({taskId:dp.id,...dp,open:true})
    }
    
    const restructureTaskData=( prop1,prop2)=>{
        var estimations=[];
        var realizations=[];
        
        for (let i = 0; i < allTasks.length; i++) {
            const task = allTasks[i];
            var estimationDate=moment(task[prop1]);
            var realizationDate=moment(task[prop2]);
            estimations.push({  id:task.id, title:task.title,label:task.title, y:estimationDate.valueOf(), start: task.start, end: task.end, actual_start: task.actual_start, actual_end: task.actual_end, click:dataPointOnClick , start_label: task.start_label, end_label: task.end_label});
            realizations.push({ id:task.id, title:task.title,label:task.title,  y:realizationDate.valueOf(),  start: task.start, end: task.end, actual_start: task.actual_start, actual_end: task.actual_end, click:dataPointOnClick , start_label: task.start_label, end_label: task.end_label})

        }
        const results= {
            estimations:estimations,
            realizations:realizations,
        }
        return results;
    }

    useEffect(()=>{
        if(!detailProject.id && refreshDetailProject) refreshDetailProject()
        var startsData=restructureTaskData('start','actual_start');
        var endsData=restructureTaskData('end','actual_end');
        setStarts({ estimations:startsData.estimations, realizations:startsData.realizations });
        setEnds({ estimations:endsData.estimations, realizations:endsData.realizations })
    },[detailProject.id,allTasks])

    return(
        <Grid container>
            <Grid item xl={12} md={12} sm={12} xs={12} >
                <Typography variant="h5">Tasks overview : </Typography>
            </Grid>
            <GroupedTasksChart groupedTasks={groupedTasks}/>
            {/* <Grid item xl={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                <TaskComparasionChart tasks={allTasks}/>
            </Grid> */}
            <Grid item xl={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                <Typography variant="body2">Starts : </Typography>
                <LineChart projects_id={detailProject.id} data={starts} title={'Starts'}  handleDetailTaskOpen={handleDetailTaskOpen}/>  
            </Grid>
            <Grid item xl={12} md={12} sm={12} xs={12} >
                <Typography variant="body2">Ends : </Typography>
                <LineChart projects_id={detailProject.id} data={ends} title={'Ends'}  handleDetailTaskOpen={handleDetailTaskOpen}/>  
            </Grid>
        </Grid>
    )
}
export default Overview;