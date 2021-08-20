import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link, useLocation ,useHistory} from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import moment from 'moment';

const StatusChip = lazy(() => import('../../widgets/StatusChip'));
const TableSubtask = lazy(() => import('./TableSubtasks'));

const TaskRow=({data,handleCompleteTask,handleDetailTaskOpen,headCells, onTaskUpdate, onTaskDelete})=>{
    const [openCollapsible, setOpenCollapsible] = useState(false);
    const [progress, setProgress] = useState(0);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openPopOver, setOpenPopOver] = React.useState(null);
    const [memberOnHover, setMemberOnHover] = React.useState(null);
    const handlePopoverOpen = (event,member) =>  {
        setMemberOnHover(member);
        setOpenPopOver(true);
        setAnchorEl(event.currentTarget);
    }
    const handlePopoverClose = () => {
        setOpenPopOver(false);
        setAnchorEl(null);
    }

    let location = useLocation();
    let history = useHistory();
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    searchParams.set('tasks_id', data.id);

    useEffect(()=>{
        const getProgress=()=>{
            if(!data.is_subtask){
                try {
                    if(data.cards.length>0){
                        var valuePerSubtask=100/data.cards.length;
                        var completeSubtaskCounter=0;
                        for (let i = 0; i < data.cards.length; i++) {
                            const subtask = data.cards[i];
                            if(subtask.complete)completeSubtaskCounter++;
                        }
                        var finalValue=completeSubtaskCounter*valuePerSubtask;
                        setProgress(finalValue);
                    }else{
                        if(data.complete) setProgress(100);
                        else setProgress(0);
                    }  
                } catch (error) {
                    console.log(error,data);
                }
            }
        }
        getProgress();
    },[])
    
    return(
        <Suspense fallback={null}>
            <TableRow hover key={data.id} >
                <TableCell> <IconButton size="small" onClick={() =>setOpenCollapsible(!openCollapsible)} > {openCollapsible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </IconButton> </TableCell>
                <TableCell padding="checkbox"> 
                    <Checkbox onChange={event=> handleCompleteTask(data,event)} checked={data.complete}/>
                </TableCell>
                <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}> 
                    <Link 
                    onClick={(e)=>{
                        e.preventDefault();
                        history.push({ pathname: pathname, search: searchParams.toString() });
                        var taskInfo={task:{...data,onTaskUpdate:onTaskUpdate,onTaskDelete:onTaskDelete},open:true}
                        handleDetailTaskOpen(taskInfo);
                    }}  
                    to={{ pathname: pathname, search: searchParams.toString() }} style={{ textDecoration: 'none', color: '#393939' }}>
                        {data.title} ({progress}%)
                    </Link>
                </TableCell>
                <TableCell>
                    {data.members?data.members.map((member,i)=>{
                            return (
                                <span key={i} onMouseEnter={(event)=>handlePopoverOpen(event,member)} onMouseLeave={handlePopoverClose}>
                                    {member.project_client?.client?`Client ${`(${member.project_client?.client?.institution})`}`:member.member?.role?.name}
                                </span>
                            )
                        }):<></>}
                        
                        {(openPopOver)?(
                        <Popover style={{ pointerEvents: 'none', zIndex:'1200',padding:'1em' }} open={openPopOver} anchorEl={anchorEl} 
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }} transformOrigin={{ vertical: 'top', horizontal: 'center', }} onClose={handlePopoverClose}>
                                {(()=>{
                                    if(memberOnHover?.project_client?.client){
                                        return(<Typography>{memberOnHover?.project_client?.client?.name}</Typography>)
                                    }else if(memberOnHover.user){
                                        return(<Typography>{memberOnHover?.member?.role.name}</Typography>)
                                    }else {
                                        return(<Typography>{memberOnHover?.role?.name}</Typography>)
                                    }
                                })()}
                        </Popover>):<></>}
                </TableCell>
                <TableCell align="left"> {data.start ? moment(data.start).format('DD MMMM YYYY') : null} </TableCell>
                <TableCell align="left"> {data.end ? moment(data.end).format('DD MMMM YYYY') : null} </TableCell>
                <TableCell align="right"> {(data.start && data.end)?Math.round(moment.duration(moment(data.start).diff(moment(data.end))).asDays())*(-1):null} </TableCell>
                <TableCell align="left"> {data.actual_start ? moment(data.actual_start).format('DD MMMM YYYY'):null}<br/> {data.start_label?<StatusChip status={data.start_label}/>:null} </TableCell>
                <TableCell align="left">  {data.actual_end ? moment(data.actual_end).format('DD MMMM YYYY'):null}<br/> {data.end_label?<StatusChip status={data.end_label}/>:null} </TableCell>
                <TableCell align="right"> {(data.actual_start && data.actual_end)?Math.round(moment.duration(moment(data.actual_start).diff(moment(data.actual_end))).asDays())*(-1):null} </TableCell>
            </TableRow>
            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={headCells.length+1}>
                    <Collapse in={openCollapsible} timeout="auto">
                        <TableSubtask 
                            tasks={data.cards}  headCells={headCells} handleCompleteTask={handleCompleteTask}
                            handleDetailTaskOpen={handleDetailTaskOpen} onTaskUpdate={onTaskUpdate}
                            onTaskDelete={onTaskDelete}
                        />
                    </Collapse>
                </TableCell>
            </TableRow>
        </Suspense>
    )
}
export default TaskRow;