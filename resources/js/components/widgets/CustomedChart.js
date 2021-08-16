import React,{useState,useEffect} from 'react';
import CanvasJSReact from '../../assets/js/canvasjs.react';
import moment from 'moment';

var initialStateOptions = {
    animationEnabled: true,
    zoomEnabled: true,
    axisX:  {
        title: "",
    },
    axisY: {
        title: ` - `,
        titleFontColor: "#6D78AD",
        lineColor: "#6D78AD",
        labelFontColor: "#6D78AD",
        tickColor: "#6D78AD",  
        includeZero: true, 
    },
    
    axisY2: {
        title: ` - `,
        titleFontColor: "#51CDA0",
        lineColor: "#51CDA0",
        labelFontColor: "#51CDA0",
        tickColor: "#51CDA0",   
        includeZero: true,
        crosshair: {
            enabled: true
        },
    },
    toolTip: {
        shared: true,
        contentFormatter: function ( e ) {
            return``
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
        showInLegend: true,
        dataPoints: []
    }]
}

const CustomedChart=({ 
        data , titleX , titleY , prop1 , prop2,
        contentFormatter , labelXFormatter,
        labelYFormatter , labelY2Formatter,
        maximumX,maximumY, stripLinesX, stripLinesY
    })=> {
    const [options,setOptions]=useState(initialStateOptions);
    useEffect(()=>{
        var config={
            animationEnabled: true,
            zoomEnabled: true,
            axisX:  {
                title: titleX,
            },
            axisY: {
                title: `${titleY?titleY:prop1}`,
                titleFontColor: "#6D78AD",
                lineColor: "#6D78AD",
                labelFontColor: "#6D78AD",
                tickColor: "#6D78AD", 
            },
            axisY2: {
                title: `${titleY?titleY:prop2}`,
                titleFontColor: "#51CDA0",
                lineColor: "#51CDA0",
                labelFontColor: "#51CDA0",
                tickColor: "#51CDA0", 
                
            },
            toolTip: { shared: true },
        }
        
        if(labelXFormatter) config.axisX.labelFormatter=labelXFormatter;
        if(maximumX) config.axisX.maximum=maximumX;
        if(maximumY) config.axisY.maximum=maximumY;
        if(labelYFormatter) config.axisY.labelFormatter=labelYFormatter;
        if(labelY2Formatter) config.axisY2.labelFormatter=labelY2Formatter;
        if(stripLinesX) config.axisX.stripLines=stripLinesX;
        if(stripLinesY) config.axisY.stripLines=stripLinesY;
        if(data)config.data=data
        if(contentFormatter)config.toolTip.contentFormatter=contentFormatter
        setOptions(config)
    },[data,prop1,prop2])

    return (
        <div>
            <CanvasJSReact.CanvasJSChart options = {options}/>
        </div>
    );
}
export default CustomedChart