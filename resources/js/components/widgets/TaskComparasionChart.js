import React,{useState,useEffect,useMemo} from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Grid from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'

const TaskComparasionChart = ({tasks,deadlineKey}) => {  
  const [data,setData]=useState({ labels:[],datasets:[]});
  
  const reformatData=()=>{
    var labels=[];
    var estimations=[];
    var realizations=[];
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      labels.push(task.title);
      console.log(task);
      estimations.push(task[deadlineKey]);
      realizations.push(task['actual_'+deadlineKey]);
    }
    var datasets=[
        {
          label: 'Estimation',
          data: estimations,
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Realization',                
          data: realizations,
          backgroundColor: 'rgb(54, 162, 235)',
        },
    ];
    setData({labels:labels,datasets:datasets})
  }

  useEffect(()=>{
    reformatData();
  },[tasks]);

  const options = useMemo(
    () => [
    {
      scales: {
          yAxis: {
              type: 'time',
              time: {
                  displayFormats: {
                      quarter: 'MMM YYYY'
                  }
              }
          }
      },
      tooltips: {
        enabled: true,
        callbacks: {
          label: function(tooltipItem, data) {
            console.log(tooltipItem,data);
            return ' tes ';
          }
        }
      },
      responsive:true,
      maintainAspectRatio : false
    }]
  );
  

  return(
    <>
    <Grid item xl={12} md={12} sm={12} xs={12} >    
      <Bar data={data} options={options} />
    </Grid>
  </>
)};

export default TaskComparasionChart;