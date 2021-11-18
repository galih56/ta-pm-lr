import React, {useEffect,useState} from 'react';
import CustomizedChart from './CustomedChart';

export default function CostOverview({data}){
    const [costTasks,setCostTasks]=useState({ estimations:[], realizations: [] });

    const restructureTaskData=( prop1,prop2)=>{
        var estimations=[];
        var realizations=[];
        
        for (let i = 0; i < data.length; i++) {
            const task = data[i];
            var estimation=task[prop1];
            var realization=task[prop2];
            if(!estimation)estimation=0;
            if(!realization)realization=0;
            estimations.push({ label: task.title , y:Number(estimation), data:task});
            realizations.push({ label: task.title , y:Number(realization), data:task});
        } 

        const results= {
            estimations:estimations,
            realizations:realizations,
        }
        return results;
    };
    
    useEffect(()=>{
        var costTasksData=restructureTaskData('cost','actual_cost');
        setCostTasks({ estimations:costTasksData.estimations, realizations:costTasksData.realizations });
    },[data]);

    function formatRupiah(angka){
        if(angka){
            var reverse = angka.toString().split('').reverse().join('');
            var ribuan = reverse.match(/\d{1,3}/g);
            ribuan = ribuan.join('.').split('').reverse().join('');
            return ribuan
        }else{
            return '';
        }
    }

    return(
       <>
            <CustomizedChart titleX="Tasks" titleY="Costs"
                prop1={"estimations"} prop2={"realizations"}
                contentFormatter={(e)=>{
                    var nested_data=e.entries[0].dataPoint.data
                    if(nested_data){
                        var task_title=nested_data.title;  
                        var task_cost=nested_data.cost;  
                        var task_actual_cost=nested_data.actual_cost;  
                        var str_html=``;
                        str_html+=`${task_title} \n`;
                        str_html+=`Cost : Rp. ${formatRupiah(task_cost)} \n`;
                        str_html+=`Actual cost : Rp. ${formatRupiah(task_actual_cost)} \n`;
                        return str_html;
                    }else return '';
                }}
                labelYFormatter={(e)=>{  
                    if(e.value){
                        return `Rp. ${formatRupiah(`${e.value}`)}`;
                    }
                    else return '';
                }}
                labelY2Formatter={(e)=>{   
                    if(e.value){
                        return `Rp. ${formatRupiah(`${e.value}`)}`;
                    }
                    else return '';
                }}
                data={[ 
                    {name: `Estimations `, dataPoints: costTasks.estimations },
                    {name: `Realizations `, dataPoints: costTasks.realizations } 
                ]}/>
        </>
    );
}