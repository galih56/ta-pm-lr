import React, { useState, useEffect,useContext } from 'react';
import { Link, useHistory,useLocation } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import moment from 'moment';
import StatusChip from '../../widgets/StatusChip';
import UpdateProgressButtons from '../../widgets/UpdateProgressButtons';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import EnhancedTableHead from './EnhancedTableHead';
import PICPopover from './PICPopover';

const TableSubtask=({tasks,handleDetailTaskOpen,headCells, onTaskUpdate, onTaskDelete})=>{
    const [subtasks,setSubtasks]=useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const [openPopOver, setOpenPopOver] = useState(null);
    const [memberOnHover, setMemberOnHover] = useState(null);
    
    let location = useLocation();
    let history = useHistory();
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    
    const handlePopoverOpen = (event,member) =>  {
        console.log(member);
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
                                    {!subtask.cards?.length || subtask.parent_task ?(
                                        <div style={{display:'flex'}}>
                                            <UpdateProgressButtons data={subtask} alwaysShow={true}/>
                                        </div>):null}
                                </TableCell>
                                <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}> 
                                    {/* {subtask.complete?<Checkbox disabled checked={subtask.complete} />:<Checkbox disabled checked={subtask.complete} />} */}
                                    <Link onClick={(e)=>{
                                            e.preventDefault()
                                            history.push({ pathname: pathname, search: searchParams.toString() });
                                            handleDetailTaskOpen({ task:{ ...subtask, onTaskUpdate : onTaskUpdate,  onTaskDelete : onTaskDelete } , open:true })
                                        }}
                                        to={{ pathname: pathname, search: searchParams.toString() }} style={{ textDecoration: 'none', color: '#393939' }}>
                                        {subtask.title}
                                    </Link>
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
                                <TableCell>
                                    {subtask.members?subtask.members.map((member,i)=>{
                                        return (
                                            <span key={i} onMouseEnter={(event)=>handlePopoverOpen(event,member)} onMouseLeave={handlePopoverClose} style={{margin:'1em'}}>
                                                {member?.project_client?.client?(<>{`Client ${`(${member.project_client?.client?.institution})`}`}</>):null}
                                                {member?.is_client?(<Typography>{`Client ${`(${member?.institution})`}`}</Typography>):null}                                    
                                                {member?.role?<>{member?.role?.name}</>:null}
                                                {member?.user?.role?<>{member?.user?.role?.name}</>:null}
                                        </span>
                                        )
                                    }):<></>}                                        
                                    <PICPopover open={openPopOver} data={memberOnHover} anchorEl={anchorEl} onClose={handlePopoverClose}/>
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