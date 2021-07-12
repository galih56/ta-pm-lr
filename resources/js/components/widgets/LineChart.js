import React,{useState,useEffect} from 'react';
import CanvasJSReact from '../../assets/js/canvasjs.react';
import moment from 'moment';

function compareDataPointXAscend(dataPoint1, dataPoint2) {
    return dataPoint1.x - dataPoint2.x;
}

const LineChart=({data,title})=> {
    var options = {
        animationEnabled: true,
		zoomEnabled: true,
        axisX: {
            title: "Activities",
        },
        axisY: {
            title: "Estimations",
            titleFontColor: "#6D78AD",
            lineColor: "#6D78AD",
            labelFontColor: "#6D78AD",
            tickColor: "#6D78AD",           
            labelFormatter: function(e){               
                return moment(e.value).format('DD-MM-YYYY');
            }   
        },
        axisY2: {
            title: "Realizations",
            titleFontColor: "#51CDA0",
            lineColor: "#51CDA0",
            labelFontColor: "#51CDA0",
            tickColor: "#51CDA0",               
            labelFormatter: function(e){
                return '';
            }       
        },
        toolTip: {
            shared: true,
            contentFormatter: function ( e ) {
                var task_title=e.entries[0].dataPoint.title;  
                var start_label=e.entries[0].dataPoint.start_label;  
                var end_label=e.entries[0].dataPoint.end_label;  
                var start=e.entries[0].dataPoint.start;  
                var actual_start=e.entries[0].dataPoint.actual_start;  
                var end=e.entries[0].dataPoint.end;  
                var actual_end=e.entries[0].dataPoint.actual_end;
                start=moment(start).format('DD-MMM-YYYY');
                actual_start=moment(actual_start).format('DD-MM-YYYY');
                end=moment(end).format('DD-MMM-YYYY');
                actual_end=moment(actual_end).format('DD-MM-YYYY');
                var str_html=``;
                if(title=='Starts')str_html+=  `<div>
                                                    ${task_title} <br/>
                                                    Start : ${start} (${actual_start} - ${start_label})<br/>
                                                </div>`
                                                
                if(title=='Ends')str_html+=  `<div>
                                                    ${task_title} <br/>
                                                    End : ${end} (${actual_end} - ${end_label})<br/>
                                                </div>`
                return str_html;
            }
        },
        data: [{
            type: "line",
            name: `${title} estimations `,
            showInLegend: true,
            dataPoints: data.estimations
        },
        {
            type: "line",
            name: `${title} realizations `,
            axisYType: "secondary",
            showInLegend: true,
            dataPoints: data.realizations
        }]
    }
       
    options.data[0].dataPoints.sort(compareDataPointXAscend);   
    options.data[1].dataPoints.sort(compareDataPointXAscend);   
    return (
        <div>
            <CanvasJSReact.CanvasJSChart options = {options}
                /* onRef = {ref => this.chart = ref} */
            />
        </div>
    );
}
export default LineChart