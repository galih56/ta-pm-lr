import React,{useState,useEffect,useContext,useCallback} from 'react';
import UserContext from './../../context/UserContext';
import Grid from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';
import CanvasJSReact from '../../assets/js/canvasjs.react';
import CustomedChart from '../widgets/CustomedChart';
import CostChart from '../widgets/CostChart';
import GroupedTasksChart from '../widgets/GroupedTasksChart';
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


    const [taskComparisonData,setTaskComparisonData]=useState({starts:null,ends:null});
    const [starts,setStarts]=useState({ estimations:[], realizations: [] });
    const [ends,setEnds]=useState({  estimations:[], realizations: [] });
    
    useEffect(()=>{
        if(detailProject.id) getReports();
    },[detailProject.id]);

    const getReports = useCallback(() => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${detailProject.id}/reports`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url, {}, {})
            .then((result) => {
                setAllTasks(result.data.all_tasks)
                delete result.data.all_tasks;
                setGroupedTasks(result.data)
            }).catch((error) => console.log(error));
    },[detailProject.id]);
    
    const restructureTaskData=( prop1,prop2)=>{
        var estimations=[];
        var realizations=[];
        
        for (let i = 0; i < allTasks.length; i++) {
            const task = allTasks[i];
            var estimationDate=moment(task[prop1],'YYYY-MM-DD');
            var realizationDate=moment(task[prop2],'YYYY-MM-DD');
            estimations.push({ y: i , x:estimationDate.toDate(), data:task});
            realizations.push({ y: i , x:realizationDate.toDate(), data:task});
        } 

        const results= {
            estimations:estimations,
            realizations:realizations,
        }
        return results;
    };

    useEffect(()=>{
        if(!detailProject.id && refreshDetailProject) refreshDetailProject()
        var startsData=restructureTaskData('start','actual_start');
        var endsData=restructureTaskData('end','actual_end');
        console.log(endsData);
        setStarts({ estimations:startsData.estimations, realizations:startsData.realizations });
        setEnds({ estimations:endsData.estimations, realizations:endsData.realizations })
    },[detailProject.id,allTasks]);
    
    useEffect(()=>{
        setTaskComparisonData({ 
            starts:[ 
                { type:'line', name: `Estimations `, dataPoints: starts.estimations }, 
                { type:'line', name: `Realizations `, dataPoints:starts.realizations } 
            ],
            ends:[ 
                { type:'line', name: `Estimations `, dataPoints: ends.estimations }, 
                { type:'line', name: `Realizations `, dataPoints:ends.realizations } 
            ]
        })
    },[starts,ends]);

    const handleContentFormat=(e,prop)=>{
        var nested_data=e.entries[0].dataPoint.data
        if(nested_data){
            var task_title=nested_data.title;  
            var start_label=nested_data.start_label;  
            var end_label=nested_data.end_label;  
            var start_value=moment(nested_data.start,'YYYY-MM-DD').valueOf();  
            var actual_start_value=moment(nested_data.actual_start,'YYYY-MM-DD').valueOf();  
            var end_value=moment(nested_data.end,'YYYY-MM-DD').valueOf();  
            var actual_end_value=moment(nested_data.actual_end,'YYYY-MM-DD').valueOf();
            var start=moment(nested_data.start).format('YYYY-MM-DD');
            var actual_start=moment(nested_data.actual_start).format('YYYY-MM-DD');
            var end=moment(nested_data.end).format('YYYY-MM-DD');
            var actual_end=moment(nested_data.actual_end).format('YYYY-MM-DD');
            var str_html=``;
            
            if(nested_data.is_project){
                str_html+=`Project deadline : ${end}`;
            }else{
                str_html+=`<div>
                                ${task_title} <br/>`;``
                if(prop=='starts'){
                    if(!actual_start_value)str_html+=`Start : ${start} ${(start_label?'('+start_label+')':'')}<br/>`;
                    else str_html+=`Start : ${start} (${(start_label?start_label+' : ':'')} ${actual_start})<br/>`; 
                }else if(prop=='ends'){
                    if(!actual_end_value)str_html+=`End : ${end} ${(end_label?'('+end_label+')':'')}<br/>`;
                    else str_html+=`End : ${end} (${(end_label?end_label+' : ':'')} ${actual_end})<br/>`;    
                }
                str_html+=`</div>`
            }
            return str_html;
        }else return '';
    }
    
    return(
        <Grid container component="div" style={{padding:'1em'}}>
            <Grid item xl={12} md={12} sm={12} xs={12} component="div">
                <Typography variant="h5">Tasks overview : </Typography>
            </Grid>
            <Grid item xl={12} md={12} sm={12} xs={12} component="div">
                <GroupedTasksChart groupedTasks={groupedTasks}/>
            </Grid>
            <Grid item xl={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                <Typography variant="h5">Starts : </Typography>
                <CustomedChart 
                        titleX="Tasks"  titleY="Date"titleX="Date" titleY="Tasks"
                        prop1={"estimations"} prop2={"realizations"}
                        maximumX={moment(detailProject.end).add(1, 'weeks').toDate()}
                        contentFormatter={(e)=>handleContentFormat(e,'starts')}
                        data={taskComparisonData.starts}
                        
                        labelYFormatter={(e)=>{  
                            var tasks= allTasks.filter((task,i)=>(e.value==i))
                            if(tasks.length>0){
                                var task_title=tasks[0].title
                                var maxLength = 25;
                                if(task_title.length>23){
                                    task_title=task_title.substring(0, maxLength)+"...";
                                }
                                return task_title;
                            }else return '';
                        }}
                     />
            </Grid> 
            <Grid item xl={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                <Typography variant="h5">Ends : </Typography>
                <CustomedChart titleX="Date" titleY="Tasks"
                        prop1={"estimations"} prop2={"realizations"}
                        maximumX={moment(detailProject.end).add(1, 'weeks').toDate()}
                        contentFormatter={(e)=>handleContentFormat(e,'ends')}
                        data={taskComparisonData.ends}
                        
                        labelYFormatter={(e)=>{  
                            var tasks= allTasks.filter((task,i)=>(e.value==i))
                            if(tasks.length>0){
                                var task_title=tasks[0].title
                                var maxLength = 25;
                                if(task_title.length>23){
                                    task_title=task_title.substring(0, maxLength)+"...";
                                }
                                return task_title;
                            }else return '';
                        }}
                        stripLinesX={[
                            {
                                value: moment(detailProject?.end,'YYYY-MM-DD').toDate(),
                                label:`Estimation : ${moment(detailProject?.end).format('DD-MM-YYYY')}`,
                                color:'blue'
                            },
                            {
                                value: moment(detailProject.actual_end,'YYYY-MM-DD').toDate(),
                                label:`Realization : ${moment(detailProject.actual_end).format('DD-MM-YYYY')}`,
                                color:'red'
                            }
                        ]}
                    />
            </Grid> 
            {([1,8,9].includes(global.state.occupation?.id))?(    
                <Grid item xl={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                    <CostChart 
                        data={allTasks.sort((task1, task2)=> {
                            return task1.cost - task2.cost;
                        })}/>
                </Grid>
            ):(
                null
            )} 
        </Grid>
    )
}
export default React.memo(Overview);