import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import moment from 'moment';
import StatusChip from '../../widgets/StatusChip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const TableSubtask=({tasks,classes,handleCompleteTask,handleDetailTaskOpen,headCells, onTaskUpdate, onTaskDelete})=>{
    const [subtasks,setSubtasks]=useState([])
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
    
    useEffect(()=>{
        setSubtasks(tasks);
    },[tasks])
    return(
        <>
            <Table size={'small'}>
                <TableBody>
                    {subtasks?subtasks.map((subtask)=>{
                        return(
                            <TableRow hover key={subtask.id} >
                                <TableCell padding="checkbox"></TableCell>
                                <TableCell padding="checkbox"></TableCell>
                                <TableCell padding="checkbox"></TableCell>
                                <TableCell padding="checkbox"> 
                                    <Checkbox
                                        onChange={(event)=>{
                                            handleCompleteTask(subtask,event)
                                        }}
                                        checked={subtask.complete}
                                    />
                                </TableCell>
                                <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}
                                    onClick={()=>{
                                        handleDetailTaskOpen({
                                            task:{
                                                ...subtask,
                                                onTaskUpdate : onTaskUpdate, 
                                                onTaskDelete : onTaskDelete
                                            },open:true
                                        })
                                    }}
                                > 
                                    {subtask.title}
                                </TableCell>
                                <TableCell>
                                    {subtask.members?subtask.members.map((member,i)=>{
                                        return (
                                                <span key={i}
                                                onMouseEnter={(event)=>handlePopoverOpen(event,member)}
                                                onMouseLeave={handlePopoverClose}>
                                                    {member.role?member.role?.name:member.member?.role.name}
                                                </span>
                                            
                                        )
                                    }):<></>}
                                    {(openPopOver)?(<Popover
                                        className={classes.popover}
                                        classes={{ paper: classes.paper }}
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
                                        <Typography>{memberOnHover?.user?.name}</Typography>
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