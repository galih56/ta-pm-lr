import React,{useEffect,useState} from 'react'
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { green, blue, grey, red } from "@material-ui/core/colors";

function colorForStatus(status) {
    status=status.toLowerCase()
    if(status=='accepted'){
        return green;
    }
    if(status=='waiting for confirmation'){   
        return blue;
    }
    if(status=='declined' || status=='selesai terlambat') return red;
    return grey;
}

function StatusChip({ status }) {
    const [label,setLabel]=useState('')
    
    useEffect(()=>{
      setLabel(status);
      if(!status) setLabel('waiting for confirmation')
    },[status])  
    
    return (
      <Chip
        component="div"
        size="small"
        label={label}
        style={{ backgroundColor: colorForStatus(label)[600], color: "white",fontSize:'1em' }}
      />
    );
  }

export default StatusChip;