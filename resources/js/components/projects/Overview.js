import React,{useState,useEffect,useContext} from 'react';
import UserContext from '../../context/UserContext';
import {useHistory} from 'react-router-dom';
import Grid from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';
import LineChart from '../widgets/LineChart';
import LineChartTask from '../widgets/LineChartTask';
import GroupedBars from '../widgets/GroupedBars';
import moment from 'moment';
import axios from 'axios';

const Overview=({detailProject,refreshDetailProject,handleDetailTaskOpen})=>{
    const [groupedTasks,setGroupedTasks]=useState({
        mulaiCepat :  { data: [ ], count: 0 }, 
        selesaiCepat :  { data: [ ], count: 0 }, 
        mulaiTepatWaktu :  { data: [ ], count: 0 }, selesaiTepatWaktu :  { data: [ ], count: 0 }, 
        mulaiTelat :  { data: [ ], count: 0 }, 
        selesaiTelat :  { data: [ ], count: 0 }, 
        belumDilaksanakan :  { data: [ ], count: 0 }, 
        belumSelesai :  { data: [ ], count: 0 }
    });
    
    const [starts,setStarts]=useState({ estimations:[], realizations: [] });
    const [ends,setEnds]=useState({ estimations:[], realizations: [] });
    const [groupedTasksForBar,setGroupedTasksForBar]=useState({labels:[], datasets:[]});
    const history=useHistory();
    const global=useContext(UserContext);    
    const dataPointOnClick=function(e){
        var dp=e.dataPoint
        handleDetailTaskOpen({taskId:dp.id,...dp,open:true})
    }
    
    const restructureTaskData=(lists,prop1,prop2)=>{
        var estimations=[];
        var realizations=[];
    
        for (let i = 0; i < lists.length; i++) {
            const list = lists[i];
            for (let j = 0; j < list.cards.length; j++) {
                const task = list.cards[j];
                var estimationDate=moment(task[prop1]);
                var realizationDate=moment(task[prop2]);
                estimations.push({  id:task.id, title:task.title, progress:task.progress,x: estimationDate.valueOf(), y:estimationDate.valueOf(), start: task.start, end: task.end, actualStart: task.actualStart, actualEnd: task.actualEnd, click:dataPointOnClick , startLabel: task.startLabel, endLabel: task.endLabel});
                realizations.push({ id:task.id, title:task.title, progress:task.progress,x:realizationDate.valueOf(),  y:realizationDate.valueOf(),  start: task.start, end: task.end, actualStart: task.actualStart, actualEnd: task.actualEnd, click:dataPointOnClick , startLabel: task.startLabel, endLabel: task.endLabel})
                
                for (let k = 0; k < task.cards.length; k++) {
                    const subtask = task.cards[k];
                    estimationDate=moment(subtask[prop1]);
                    realizationDate=moment(subtask[prop2]);
                    estimations.push({  id:subtask.id, title:subtask.title, progress:subtask.progress, x: estimationDate.valueOf(), y:estimationDate.valueOf(), start: task.start, end: task.end, actualStart: task.actualStart, actualEnd: task.actualEnd, click:dataPointOnClick , startLabel: task.startLabel, endLabel: task.endLabel});
                    realizations.push({ id:subtask.id, title:subtask.title, progress:subtask.progress,x: realizationDate.valueOf(), y:realizationDate.valueOf(), start: task.start, end: task.end, actualStart: task.actualStart, actualEnd: task.actualEnd, click:dataPointOnClick , startLabel: task.startLabel, endLabel: task.endLabel})    
                } 
            } 
        }
        const results= {
            estimations:estimations,
            realizations:realizations,
        }
        
        return results;
    }

    const getGroupedTasks = () => {
        const config = { mode: 'no-cors', crossdomain: true }
        const url = `${process.env.REACT_APP_BACK_END_BASE_URL}project-reports/${detailProject.id}`;
        axios.defaults.headers.common['Authorization'] = global.state.token;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url, {}, config)
            .then((result) => {
                setGroupedTasks(result.data)
            }).catch((error) => console.log(error));
    }

    useEffect(() => {
        global.dispatch({ type: 'remember-authentication' });
        if (!global.state.authenticated === true) history.push('/auth');
    }, []);

    useEffect(()=>{
        if(!detailProject.id && refreshDetailProject) refreshDetailProject()
        if(detailProject.id) getGroupedTasks();
        var startsData=restructureTaskData(detailProject.columns,'start','actualStart');
        var endsData=restructureTaskData(detailProject.columns,'end','actualEnd');
        setStarts({ estimations:startsData.estimations, realizations:startsData.realizations });
        setEnds({ estimations:endsData.estimations, realizations:endsData.realizations })
    },[detailProject.id])

    useEffect(()=>{
        var labels=[ 'Lebih cepat','Tepat waktu','Terlambat','Belum dilaksanakan','Belum selesai'];
        var datasets=[
            {
                label: 'Start',
                data: [ groupedTasks.mulaiCepat, groupedTasks.mulaiTepatWaktu, groupedTasks.mulaiTelat, groupedTasks.belumDilaksanakan, 0 ],
                backgroundColor: 'rgb(255, 99, 132)',
            },
            
            {
                label: 'End',                
                data: [ groupedTasks.selesaiCepat, groupedTasks.selesaiTepatWaktu, groupedTasks.selesaiTelat, 0, groupedTasks.belumSelesai ],
                backgroundColor: 'rgb(54, 162, 235)',
            },
        ];
        setGroupedTasksForBar({
            labels:labels, 
            datasets:datasets});
    },[groupedTasks])

    return(
        <Grid container>
            <Grid item xl={12} md={12} sm={12} xs={12} >
                <Typography variant="h5">Tasks overview : </Typography>
            </Grid>
            <Grid item xl={6} md={6} sm={6} xs={12} >
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Typography variant="body1">Total tasks : </Typography>
                            </td>
                            <td> 
                                <Typography variant="body1">{starts.estimations.length}</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography variant="body1">Belum dilaksanakan : </Typography>
                            </td>
                            <td> 
                                <Typography variant="body1">{groupedTasks.belumDilaksanakan.count}</Typography> 
                            </td>
                            <td>
                                <Typography variant="body1">Belum selesai : </Typography>
                            </td>
                            <td> 
                                <Typography variant="body1">{groupedTasks.belumSelesai.count}</Typography> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography variant="body1">Mulai lebih cepat : </Typography>
                            </td>
                            <td>
                                <Typography variant="body1">{groupedTasks.mulaiCepat.count}</Typography>
                            </td>
                            <td>
                                <Typography variant="body1">Selesai lebih cepat : </Typography>
                            </td>
                            <td>
                                <Typography variant="body1">{groupedTasks.mulaiCepat.count}</Typography> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography variant="body1">Selesai tepat waktu : </Typography>
                            </td>
                            <td>
                                <Typography variant="body1">{groupedTasks.mulaiTepatWaktu.count}</Typography> 
                                </td>
                            <td>
                                <Typography variant="body1">Mulai tepat waktu : </Typography>
                            </td>
                            <td> 
                                <Typography variant="body1">{groupedTasks.mulaiTepatWaktu.count}</Typography> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography variant="body1">Mulai terlambat : </Typography>
                            </td>
                            <td> 
                                <Typography variant="body1">{groupedTasks.mulaiTelat.count}</Typography>  
                            </td>
                            <td>
                                <Typography variant="body1">Selesai terlambat : </Typography>
                            </td>
                            <td> 
                                <Typography variant="body1">{groupedTasks.selesaiTelat.count}</Typography>   
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
            
            <Grid item xl={6} md={6} sm={6} xs={12} >
                <GroupedBars data={groupedTasksForBar}/>
            </Grid>
            <Grid item xl={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                <Typography variant="body2">Starts : </Typography>
                <LineChart projectId={detailProject.id} data={starts} title={'Starts'}  handleDetailTaskOpen={handleDetailTaskOpen}/>  
            </Grid>
            <Grid item xl={12} md={12} sm={12} xs={12} >
                <Typography variant="body2">Ends : </Typography>
                <LineChart projectId={detailProject.id} data={ends} title={'Ends'}  handleDetailTaskOpen={handleDetailTaskOpen}/>  
            </Grid>
        </Grid>
    )
}
export default Overview;