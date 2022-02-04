import RefreshIcon from '@material-ui/icons/Refresh';
import React,{useState,memo} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Popover from './Popover';

const UpdateProgressButtons=({onClick,style})=>{
    const [showPopover,setShowPopover]=useState({
        open:false,anchorEl:null,children:''
    })

    const handlePopoverOpen = (event,message) => setShowPopover({open:true,anchorEl:event.currentTarget,children:message})
    const handlePopoverClose = () =>  setShowPopover({open:false,anchorEl:null,children:''})

    return(
        <>
            <IconButton style={style} fontSize="small" aria-label="Update Progress" onClick={onClick} 
                onMouseEnter={(event)=>handlePopoverOpen(event,'Refresh')} onMouseLeave={handlePopoverClose} >
                <RefreshIcon />
            </IconButton>
            <Popover {...showPopover} handleClose={handlePopoverClose}style={{ pointerEvents: 'none'}}/>
        </>
        )
}

export default memo(UpdateProgressButtons);