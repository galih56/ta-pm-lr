import React,{useState,useEffect,useMemo} from 'react';
import Typography from '@material-ui/core/Typography';
import CustomedChart from './CustomedChart';

const GroupedTasksChart = ({groupedTasks}) => {  
  const [data,setData]=useState([]);  

  useEffect(()=>{
    var datasets=[
        {
            name: `Mulai `,
            showInLegend: true,
            dataPoints: [ {y:groupedTasks.mulai_cepat, label:'Lebih cepat'}, {y:groupedTasks.mulai_tepat_waktu, label:'Tepat waktu'}, {y:groupedTasks.mulai_telat, label:'Terlambat'}, {y:groupedTasks.belum_dilaksanakan, label:'Belum dilaksanakan'}, {y:groupedTasks.belum_selesai, label:'Belum selesai'} ]
        },
        {
            name: `Selesai `,
            showInLegend: true,
            dataPoints:[ {y:groupedTasks.selesai_cepat, label:'Lebih cepat'}, {y:groupedTasks.selesai_tepat_waktu, label:'Tepat waktu'},{ y:groupedTasks.selesai_telat, label:'Terlambat'},  {y:groupedTasks.belum_dilaksanakan, label:'Belum dilaksanakan'}, {y:groupedTasks.belum_selesai, label:'Belum selesai'} ]
        },
    ];
    
    setData(datasets);
  },[groupedTasks])

  return(
    <>
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
        
        <CustomedChart 
                titleX="Projects" 
                prop1={"Tasks"}
                contentFormatter={ ( e )=> {
                    var dp1=e.entries[0].dataPoint
                    var dp2=e.entries[1].dataPoint
                    return`
                    <div>
                        ${dp1.label}
                        Started : ${dp2.y}
                        Finished : ${dp1.y}
                    </div>`
                }}
                intervalY={1}
                data={data}/>
  </>
)};

export default GroupedTasksChart;