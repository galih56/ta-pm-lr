import {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Popover from '../../../widgets/Popover';

const DeleteButton=({onClick})=>{
    
    const [showPopover,setShowPopover]=useState({
        open:false,anchorEl:null,children:''
    })

    const handlePopoverOpen = (event,message) =>  {
        setShowPopover({open:true,anchorEl:event.currentTarget,children:message})
    }

    const handlePopoverClose = () => {
        setShowPopover({open:false,anchorEl:null,children:''})
    }
    
    return(
        <>
            <IconButton
                aria-label="Delete"
                onClick={onClick}
                size="large"
                onMouseEnter={(event)=>handlePopoverOpen(event,'Delete')} onMouseLeave={handlePopoverClose} 
                >
                <DeleteIcon fontSize="small" />
            </IconButton>
            <Popover {...showPopover} handleClose={handlePopoverClose}/>
        </>
    )
}
export default DeleteButton;