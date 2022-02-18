import React, { useState, useEffect, Suspense, lazy, useContext } from 'react';
import UserContext from '../../../../context/UserContext';
import { Link, useLocation ,useHistory} from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const UpdateProgressButtons = lazy(() => import('../../../widgets/UpdateProgressButtons'));
const StatusChip = lazy(() => import('../../../widgets/StatusChip'));
const PICPopover = lazy(() => import('./PICPopover'));
const TableSubtask = lazy(() => import('./TableSubtasks'));

const TaskRow=({data, handleDetailTaskOpen,headCells, onTaskUpdate, onTaskDelete})=>{
    const [openCollapsible, setOpenCollapsible] = useState(false);
    const [progress, setProgress] = useState(0);

    const [anchorEl, setAnchorEl] = useState(null);
    const [openPopOver, setOpenPopOver] = useState(null);
    const [memberOnHover, setMemberOnHover] = useState(null);
    
    let global = useContext(UserContext);
    let location = useLocation();
    let history = useHistory();
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    searchParams.set('tasks_id', data.id);

    const handlePopoverOpen = (event,member) =>  {
        setMemberOnHover(member);
        setOpenPopOver(true);
        setAnchorEl(event.currentTarget);
    }

    const handlePopoverClose = () => {
        setOpenPopOver(false);
        setAnchorEl(null);
    }

    const isMemberLoggedInOrAdmin=(task_members=[])=>{
        try {
            var user=task_members?.find((o, i) => (o.user?.email===global.state.email || o?.email===global.state.email));
            return user||[1,2,3,4,5].includes(global.state.role.id);                
        } catch (error) {
            console.log(task_members,error)
            return false;
        }
    }

    useEffect(()=>{
        const getProgress=()=>{
            if(!data.parent_task){
                try {
                    if(data.cards?.length>0){
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
                <TableCell> 
                    {data.cards?.length?( <IconButton size="small" onClick={() =>setOpenCollapsible(!openCollapsible)} > {openCollapsible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </IconButton> ):null}
                </TableCell>
                <TableCell padding="checkbox"> 
                    {(isMemberLoggedInOrAdmin(data.members)) && !data.cards?.length?(
                        <div style={{display:'flex'}}>
                            <UpdateProgressButtons data={data} alwaysShow={true}/>
                        </div>
                    ):null}
                </TableCell>
                <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}> 
                    <Link  onClick={(e)=>{
                        e.preventDefault();
                        history.push({ pathname: pathname, search: searchParams.toString() });
                        var taskInfo={task:{...data,onTaskUpdate:onTaskUpdate,onTaskDelete:onTaskDelete},open:true}
                        handleDetailTaskOpen(taskInfo);
                    }}  
                    to={{ pathname: pathname, search: searchParams.toString() }} style={{ textDecoration: 'none', color: '#393939' }}>
                        {data.title} ({Math.round(progress)}%)
                    </Link>
                </TableCell>
                <TableCell style={{maxWidth:'100px'}}>
                    {data.members?data.members.map((member,i)=>{
                            return (
                                <span key={i} onMouseEnter={(event)=>handlePopoverOpen(event,member)} 
                                    onMouseLeave={handlePopoverClose}  style={{margin:'0.5em',float:'left'}}>
                                    {member?.project_client?.client?(<>{`Client ${`(${member.project_client?.client?.institution})`}`}</>):null}
                                    {member?.is_client?(<Typography>{`Client ${`(${member?.institution})`}`}</Typography>):null}
                                    {member?.role?<>{member?.role?.name}</>:null}
                                    {member?.user?.role?<>{member?.user?.role?.name}</>:null}
                                </span>
                            )
                        }):<></>}
                        <PICPopover open={openPopOver} data={memberOnHover} anchorEl={anchorEl} onClose={handlePopoverClose}/>
                </TableCell>
                <TableCell align="left"> {data.start ? moment(data.start).format('DD MMMM YYYY') : null} </TableCell>
                <TableCell align="left"> {data.end ? moment(data.end).format('DD MMMM YYYY') : null} </TableCell>
                <TableCell align="right"> {(data.start && data.end)?Math.round(moment.duration(moment(data.start).diff(moment(data.end))).asDays())*(-1):null} </TableCell>
                <TableCell align="left"> {data.actual_start ? moment(data.actual_start).format('DD MMMM YYYY'):null}<br/> {data.start_label?<StatusChip status={data.start_label}/>:null} </TableCell>
                <TableCell align="left">  {data.actual_end ? moment(data.actual_end).format('DD MMMM YYYY'):null}<br/> {data.end_label?<StatusChip status={data.end_label}/>:null} </TableCell>
                <TableCell align="right"> {(data.actual_start && data.actual_end)?Math.round(moment.duration(moment(data.actual_start).diff(moment(data.actual_end))).asDays())*(-1):null} </TableCell>
               
            </TableRow>
            {data.cards?.length?(
                <TableRow >
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={headCells.length+1}>
                        <Collapse in={openCollapsible} timeout="auto">
                            <TableSubtask tasks={data.cards} headCells={headCells}
                                handleDetailTaskOpen={handleDetailTaskOpen} onTaskUpdate={onTaskUpdate} onTaskDelete={onTaskDelete}
                            />
                        </Collapse>
                    </TableCell>
                </TableRow>
            ):null}
        </Suspense>
    )
}
export default TaskRow;