import React,{useState,useEffect} from 'react';
import CanvasJSReact from '../../assets/js/canvasjs.react';
import moment from 'moment';

var initialStateOptions = {
    animationEnabled: true,
    zoomEnabled: true,
    axisX:  {
        title: "Projects",
    },
    axisY: {
        title: ` - `,
        titleFontColor: "#6D78AD",
        lineColor: "#6D78AD",
        labelFontColor: "#6D78AD",
        tickColor: "#6D78AD",    
    },
    axisY2: {
        title: ` - `,
        titleFontColor: "#51CDA0",
        lineColor: "#51CDA0",
        labelFontColor: "#51CDA0",
        tickColor: "#51CDA0",   
    },
    toolTip: {
        shared: true,
        contentFormatter: function ( e ) {
            var dp1=e.entries[0].dataPoint
            var dp2=e.entries[1].dataPoint
            return`<div>
                ${dp1.label}
                Complete Tasks : ${dp1.y}
                Incomplete Tasks : ${dp2.y}
            </div>`
        }
    },
    data: [{
        type: "bar",
        name: ` - `,
        showInLegend: true,
        dataPoints: []
    },
    {
        type: "bar",
        name: ` - `,
        axisYType: "secondary",
        showInLegend: true,
        dataPoints: []
    }]
}

const BarChart=({data,prop1,prop2})=> {
    const [options,setOptions]=useState(initialStateOptions)
       
    useEffect(()=>{
        setOptions({
            animationEnabled: true,
            zoomEnabled: true,
            axisX:  {
                title: "Projects",
            },
            axisY: {
                title: `${prop1}`,
                titleFontColor: "#6D78AD",
                lineColor: "#6D78AD",
                labelFontColor: "#6D78AD",
                tickColor: "#6D78AD",    
            },
            axisY2: {
                title: `${prop2}`,
                titleFontColor: "#51CDA0",
                lineColor: "#51CDA0",
                labelFontColor: "#51CDA0",
                tickColor: "#51CDA0",   
            },
            toolTip: {
                shared: true,
                contentFormatter: function ( e ) {
                    var dp1=e.entries[0].dataPoint
                    var dp2=e.entries[1].dataPoint
                    return`
                    <div>
                        ${dp1.label}
                        Complete Tasks : ${dp2.y}
                        Incomplete Tasks : ${dp1.y}
                    </div>`
                }
            },
            data: [{
                type: "bar",
                name: `${prop1} `,
                showInLegend: true,
                dataPoints: data[prop1]
            },
            {
                type: "bar",
                name: `${prop2} `,
                axisYType: "secondary",
                showInLegend: true,
                dataPoints: data[prop2]
            }]
        })
    },[data,prop1,prop2])

    return (
        <div>
            <CanvasJSReact.CanvasJSChart options = {options}/>
        </div>
    );
}
export default BarChart