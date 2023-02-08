import React,{useState,useContext,useEffect,memo} from 'react';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import Popover from './Popover';

const UpdateProgressButtons=({data,onUpdate,alwaysShow})=>{
    const [showButtons,setShowButtons]=useState(false);
    const [showPopover,setShowPopover]=useState({
        open:false,anchorEl:null,children:''
    })
    const global = useContext(UserContext);
    
    const handleShowButtons=()=>{
        setShowButtons(true)
    };
    
    const handleHideButtons=()=>{
        handlePopoverClose();
        setShowButtons(false)
    };

    const handlePopoverOpen = (event,message) =>  {
        setShowPopover({open:true,anchorEl:event.currentTarget,children:message})
    }

    const handlePopoverClose = () => {
        setShowPopover({open:false,anchorEl:null,children:''})
    }

    useEffect(()=>{
        if(alwaysShow){
            setShowButtons(true);
        }
    },[])

    const startProgress=(id)=>{
        const url = `${process.env.MIX_BACK_END_BASE_URL}tasks/${data.id}/start`;
        const toast_loading = toast.loading(`Updating...`); 
        axios.patch(url)
            .then((result) => {
                result=result.data;
                if(result.parent_task){ global.dispatch({ type: 'store-detail-subtask', payload: result });}
                else global.dispatch({ type: 'store-detail-task', payload: result });
                if(onUpdate)onUpdate(result);
                toast.dismiss(toast_loading);
                toast.success( <b>Successfully updated</b>)
            }).catch(error=> toast.dismiss(toast_loading));
    }

    const markAsComplete=(data)=>{
        if(!data.actual_start){
            toast.error("This task hasn't started yet");
            return;
        }
        const body = { id: data.id, complete: !data.complete};
        const url = process.env.MIX_BACK_END_BASE_URL + `tasks/${data.id}/complete`;
        const toast_loading = toast.loading(`Updating...`); 
        axios.patch(url, body)
            .then((result) => {
                result=result.data
                if(result.parent_task){ global.dispatch({ type: 'store-detail-subtask', payload: result });}
                else global.dispatch({ type: 'store-detail-task', payload: result });
                if(onUpdate)onUpdate(result);
                toast.dismiss(toast_loading);
                toast.success( <b>Successfully updated</b>)
            }).catch(error=> toast.dismiss(toast_loading));
    }
    
    return(
           <> 
           {showButtons?(
               <>
                    {alwaysShow?null:<IconButton fontSize="small" aria-label={"Cancel"} onClick={handleHideButtons} onMouseEnter={(event)=>handlePopoverOpen(event,'Cancel')} onMouseLeave={handlePopoverClose} ><ArrowBackIosIcon /></IconButton>}
                    {!data.actual_end?(<IconButton fontSize="small" aria-label={data.actual_start?"Started":"Start progress"} onClick={(e)=>startProgress(data.id)}  onMouseEnter={(event)=>handlePopoverOpen(event,data.actual_start?"Started":"Start progress")} onMouseLeave={handlePopoverClose} disabled={data.actual_start?true:false}  >
                        {data.actual_start?<PlayCircleFilledWhiteIcon  style={{fill:'green'}}/>:<PlayArrowIcon  style={{fill:'#1976d2'}}/>}
                    </IconButton>):null}
                    {data.actual_start?(
                        <IconButton fontSize="small" aria-label={data.actual_end?"Completed":"Mark as completed"} onClick={(e)=>markAsComplete(data)} onMouseEnter={(event)=>handlePopoverOpen(event,data.actual_end?"Complete":"Mark as complete")} onMouseLeave={handlePopoverClose} disabled={data.actual_end?true:false}  >
                            {data.actual_end?<CheckCircleIcon  style={{fill:'green'}}/>:<CheckCircleOutlineIcon  style={{fill:'#1976d2'}}/>}
                        </IconButton>
                    ):null}
                </>
           ):(
                <>
                    {alwaysShow?null:<IconButton fontSize="small" aria-label="Update Progress" onClick={handleShowButtons}><SettingsIcon /></IconButton>}
                </>
            )}
            <Popover {...showPopover} handleClose={handlePopoverClose} style={{ pointerEvents: 'none'}}/>
        </>
    )
}

export default memo(UpdateProgressButtons);