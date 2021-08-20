import React, { useState, useEffect } from 'react';
import { Link, useHistory,useLocation } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import moment from 'moment';
import StatusChip from '../../widgets/StatusChip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import EnhancedTableHead from './EnhancedTableHead';

const TableSubtask=({tasks,handleCompleteTask,handleDetailTaskOpen,headCells, onTaskUpdate, onTaskDelete})=>{
    const [subtasks,setSubtasks]=useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openPopOver, setOpenPopOver] = React.useState(null);
    const [memberOnHover, setMemberOnHover] = React.useState(null);
    
    let location = useLocation();
    let history = useHistory();
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);

    const handlePopoverOpen = (event,member) =>  {
        setMemberOnHover(member);
        setOpenPopOver(true);
        setAnchorEl(event.currentTarget);
    }
    const handlePopoverClose = () => {
        setOpenPopOver(false);
        setAnchorEl(null);
    }
    
    useEffect(()=>{
        setSubtasks(tasks);
    },[tasks])

    return(
        <>
            <Table size={'small'}>
                <EnhancedTableHead headCells={headCells} extraHeadCells={<TableCell></TableCell>}/>
                <TableBody>
                    {subtasks?subtasks.map((subtask)=>{
                        searchParams.set('tasks_id', subtask.id);
                        return(
                            <TableRow hover key={subtask.id} >
                                <TableCell padding="checkbox"></TableCell>
                                <TableCell padding="checkbox"></TableCell>
                                <TableCell padding="checkbox"> 
                                </TableCell>
                                <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}> 
                                
                                <Checkbox
                                        onChange={event=>handleCompleteTask(subtask,event)}
                                        checked={subtask.complete}
                                    />
                                
                                    <Link 
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        history.push({ pathname: pathname, search: searchParams.toString() });
                                        handleDetailTaskOpen({ task:{ ...subtask, onTaskUpdate : onTaskUpdate,  onTaskDelete : onTaskDelete } , open:true })
                                    }}
                                    to={{ pathname: pathname, search: searchParams.toString() }} 
                                        style={{ textDecoration: 'none', color: '#393939' }}>
                                        {subtask.title}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {subtask.members?subtask.members.map((member,i)=>{
                                            return (
                                                <span 
                                                    key={i}
                                                    onMouseEnter={(event)=>handlePopoverOpen(event,member)}
                                                    onMouseLeave={handlePopoverClose}>
                                                    {member.project_client?.client? 
                                                        `Client ${`(${member.project_client?.client?.institution})`}`:
                                                        member.member?.role?.name}
                                                </span>
                                            )
                                        }):<></>}
                                        
                                        {(openPopOver)?(
                                        <Popover
                                            style={{ pointerEvents: 'none', zIndex:'1200',padding:'1em' }}
                                            open={openPopOver}
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }}
                                            onClose={handlePopoverClose}
                                        >
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
                                <TableCell align="left">
                                    {subtask.start ? moment(subtask.start).format('DD MMMM YYYY') : ''}
                                </TableCell>
                                <TableCell align="left">
                                    {subtask.end ? moment(subtask.end).format('DD MMMM YYYY') : ''}
                                </TableCell>
                                <TableCell align="right">
                                    {(subtask.start && subtask.end)?Math.round(moment.duration(moment(subtask.start).diff(moment(subtask.end))).asDays())*(-1):''}
                                </TableCell>
                                <TableCell align="left">
                                    {subtask.actual_start ? moment(subtask.actual_start).format('DD MMMM YYYY') : ''}<br/>
                                    {subtask.start_label?<StatusChip status={subtask.start_label}/>:''}
                                </TableCell>
                                <TableCell align="left">
                                    {subtask.actual_end ? moment(subtask.actual_end).format('DD MMMM YYYY') : ''}<br/>
                                    {subtask.end_label?<StatusChip status={subtask.end_label}/>:''}
                                </TableCell>
                                <TableCell align="right">
                                    {(subtask.actual_start && subtask.actual_end)?Math.round(moment.duration(moment(subtask.actual_start).diff(moment(subtask.actual_end))).asDays())*(-1):''}
                                </TableCell>
                            </TableRow>
                        )
                    }):<></> }
                </TableBody>
            </Table>
        </>
    )
}

export default TableSubtask;