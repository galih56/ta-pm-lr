import React, { useState, useEffect,useContext } from 'react';
import UserContext from './../../../context/UserContext';
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
import { green, grey} from "@material-ui/core/colors";

const TableSubtask=({tasks,handleDetailTaskOpen,headCells, onTaskUpdate, onTaskDelete})=>{
    const [subtasks,setSubtasks]=useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openPopOver, setOpenPopOver] = React.useState(null);
    const [memberOnHover, setMemberOnHover] = React.useState(null);
    
    let location = useLocation();
    let history = useHistory();
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    let global=useContext(UserContext);
    
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
                                    {subtask.complete?<Checkbox disabled checked={subtask.complete} />:<Checkbox disabled checked={subtask.complete} />}
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
                                                    onMouseLeave={handlePopoverClose} style={{margin:'1em'}}>
                                                    {member?.project_client?.client?(<>{`Client ${`(${member.project_client?.client?.institution})`}`}</>):null}
                                                    {member?.is_client?(<Typography>{`Client ${`(${memberOnHover?.institution})`}`}</Typography>):null}                                    
                                                    {member?.role?<Typography>{member?.role?.name}</Typography>:null}
                                            </span>
                                            )
                                        }):<></>}
                                        
                                        {(openPopOver)?(
                                        <Popover
                                            style={{ pointerEvents: 'none', zIndex:'1200',padding:'1em' }}
                                            open={openPopOver}
                                            anchorEl={anchorEl}
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                            transformOrigin={{ vertical: 'top', horizontal: 'center', }}
                                            onClose={handlePopoverClose}
                                        >
                                            <div style={{padding:'0.3em'}}>
                                                {memberOnHover.project_client?.client?(<Typography>{`Client ${`(${memberOnHover.project_client?.client?.institution})`}`}</Typography>):null}
                                                {memberOnHover?.is_client?(<Typography>{`Client ${`(${memberOnHover?.institution})`}`}</Typography>):null}
                                                {memberOnHover.user?(<Typography>{memberOnHover?.user?.name}</Typography>):null}
                                                {memberOnHover.name?(<Typography>{memberOnHover?.name}</Typography>):null}
                                                {memberOnHover.member?.role?<Typography>{memberOnHover?.member?.role?.name}</Typography>:null}
                                                {memberOnHover.role?<Typography>{memberOnHover?.role?.name}</Typography>:null}
                                            </div>
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