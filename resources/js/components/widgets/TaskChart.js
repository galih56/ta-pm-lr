import React,{useState,useEffect,useMemo} from 'react';
import { Bar } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
const GroupedTasksChart = ({data}) => {  
  const [datasets,setDatasets]=useState({labels:[], datasets:[]});  

  const options = useMemo(
    () => [
    {
        type: 'bar',
        scales: {
            yAxes: [{
                ticks: {
                }
            }],
            xAxes: [{
                type: 'time',
                time: {
                    displayFormats: {
                        quarter: 'MMM YYYY'
                    }
                }
            }]
        },
        responsive:true,
        maintainAspectRatio : true
    }]
  );

    useEffect(()=>{
        
        const restructureTaskData=( prop1,prop2)=>{
            var estimations=[];
            var realizations=[];
            // var labels=[];
            for (let i = 0; i < data.length; i++) {
                const task = data[i];
                var estimationDate=moment(task[prop1]);
                var realizationDate=moment(task[prop2]);
                // labels.push(task.title);
                estimations.push({  x:estimationDate.format('DD-MM-YYYY'), y:estimationDate.valueOf(), task:task});
                realizations.push({ x:estimationDate.format('DD-MM-YYYY'),  y:realizationDate.valueOf(),  task:task})

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
            setDatasets({
                datasets:datasets
            });
        };
        restructureTaskData('start','actual_start')
    },[data])

  return(
    <>
      <Bar data={datasets} options={options} />
  </>
)};

export default GroupedTasksChart;