import React,{useState,useEffect,useMemo} from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Grid from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';

const GroupedTasksChart = ({groupedTasks}) => {  
  const [datasets,setDatasets]=useState({labels:[], datasets:[]});  

  const options = useMemo(
    () => [
    {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      responsive:true,
      maintainAspectRatio : false
    }]
  );

  useEffect(()=>{
    var labels=[ 'Lebih cepat','Tepat waktu','Terlambat','Belum dilaksanakan','Belum selesai'];
    var datasets=[
        {
            type: 'bar',
            label: 'Start',
            data: [ groupedTasks.mulai_cepat, groupedTasks.mulai_tepat_waktu, groupedTasks.mulai_telat, groupedTasks.belum_dilaksanakan, 0 ],
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            type: 'bar',
            label: 'End',                
            data: [ groupedTasks.selesai_cepat, groupedTasks.selesai_tepat_waktu, groupedTasks.selesai_telat, 0, groupedTasks.belum_selesai ],
            backgroundColor: 'rgb(54, 162, 235)',
        },
    ];
    setDatasets({
        labels:labels, 
        datasets:datasets});
  },[groupedTasks])

  return(
    <>
      <Grid item xl={6} md={6} sm={6} xs={12} >
        <table>
            <tbody>
                <tr>
                    <td colSpan="2">
                        <Typography variant="body1">Total tasks : </Typography>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Typography variant="body1">Belum dilaksanakan : </Typography>
                    </td>
                    <td> 
                        <Typography variant="body1">{groupedTasks.belum_dilaksanakan}</Typography> 
                    </td>
                    <td>
                        <Typography variant="body1">Belum selesai : </Typography>
                    </td>
                    <td> 
                        <Typography variant="body1">{groupedTasks.belum_selesai}</Typography> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <Typography variant="body1">Mulai lebih cepat : </Typography>
                    </td>
                    <td>
                        <Typography variant="body1">{groupedTasks.mulai_cepat}</Typography>
                    </td>
                    <td>
                        <Typography variant="body1">Selesai lebih cepat : </Typography>
                    </td>
                    <td>
                        <Typography variant="body1">{groupedTasks.selesai_cepat}</Typography> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <Typography variant="body1">Mulai tepat waktu : </Typography>
                    </td>
                    <td>
                        <Typography variant="body1">{groupedTasks.mulai_tepat_waktu}</Typography> 
                        </td>
                    <td>
                        <Typography variant="body1">Selesai tepat waktu : </Typography>
                    </td>
                    <td> 
                        <Typography variant="body1">{groupedTasks.selesai_tepat_waktu}</Typography> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <Typography variant="body1">Mulai terlambat : </Typography>
                    </td>
                    <td> 
                        <Typography variant="body1">{groupedTasks.mulai_telat}</Typography>  
                    </td>
                    <td>
                        <Typography variant="body1">Selesai terlambat : </Typography>
                    </td>
                    <td> 
                        <Typography variant="body1">{groupedTasks.selesai_telat}</Typography>   
                    </td>
                </tr>
            </tbody>
        </table>
    </Grid>

    <Grid item xl={6} md={6} sm={6} xs={12} >    
      <Bar data={datasets} options={options} />
    </Grid>
  </>
)};

export default GroupedTasksChart;