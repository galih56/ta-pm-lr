import React, { useState, useEffect, useContext,useCallback } from 'react';
import UserContext from '../../context/UserContext';
import {  makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { visuallyHidden } from '@material-ui/utils';
import moment from 'moment';
import Checkbox from '@material-ui/core/Checkbox';
import StatusChip from '../widgets/StatusChip';
import { useSnackbar } from 'notistack';
import EditLaneForm from './../widgets/board/EditLaneForm'
import ModalDetailTask from '../tasks/modalDetailTask/ModalDetailTask';

const headCells = [
    { id: 'checkbox', align: 'left', label: '' },
    { id: 'Title', align: 'left', label: 'Title' },
    { id: 'PIC', align: 'left', label: 'PIC' },
    { id: 'Start', align: 'left',  label: 'Start' },
    { id: 'End', align: 'left',  label: 'End' },
    { id: 'Days', align: 'right', label: 'Days' },
    { id: 'Realisasi Start', align: 'left',  label: 'Realisasi Start' },
    { id: 'Realisasi End', align: 'left',  label: 'Realisasi End' },
    { id: 'Work days', align: 'right', label: 'Work days' },
    { id: 'Progress', align: 'right', label: 'Progress' },
];

const useStyles = makeStyles((theme) => ({
    root: { width: '100%', padding: '1em' },
    table: {
        minWidth: 2000,
    },
    tableCellTitle:{
        minWidth:200
    },
    sortSpan: visuallyHidden,
}));

function EnhancedTableHead({extraCells}) {
    return (
        <TableHead>
            <TableRow>
                {extraCells}
                <TableCell></TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
var clickedTaskInitialState={
    id: '', projects_id: '', lists_id: null, list:null,
    title: '', description: '', label: '', complete: false, progress: 0,
    start:null,end:null,actual_start:null,actual_end:null, start_label:'',end_label:'',
    list: null, tags: [], members: [], parentTask:'',
    cards: [], logs: [], comments: [], attachments: [],creator:null,is_subtask:false
}

export default function EnhancedTable(props) {
    const classes = useStyles();
    const projects_id = props.projects_id;
    const [detailProject,setDetailProject]=useState(props.detailProject);
    const [openEditList,setOpenEditList]=useState(false)
    const [selectedList,setSelectedList]=useState(false)
    const [clickedTask, setClickedTask] = useState(clickedTaskInitialState);
    const [detailTaskOpen,setDetailTaskOpen]=useState(false)

    const [rows, setRows] = useState([]);

    let global = useContext(UserContext);
    const { enqueueSnackbar } = useSnackbar();
    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });

    useEffect(() => {
        setRows(props.data);
        setDetailProject(props.detailProject)
    }, [props.detailProject.id,props.detailProject.columns]);

    const handleDetailTaskOpen = (taskInfo) => {
        const {task, open } = taskInfo;
        setDetailTaskOpen(open);
        setClickedTask({ ...task,tasks_id:task.id });
    };

    const onTaskUpdate=(task)=>{
        var newRows=rows.map(row=>{
            row.cards=row.cards.map(card=>{
                if(card.id==task.id) return task;
                if(card.id==task.parentTask){
                    card.cards=card.cards.map(subtask=>{
                        if(subtask.id==task.id)return task;
                        return subtask;
                    })
                }
                return card
            })
            return row;
        })
        setRows(newRows)
    }
    const onTaskDelete=(task)=>{
        var newRows=rows.map(row=>{
            if(task.is_subtask){
                row.cards=row.cards.map(card=>{
                    if(card.id==task.parentTask){
                        card.cards=card.cards.filter((subtask)=>{
                            if(subtask.id!=task.id) return subtask
                        })
                    }
                    return card
                })
            }else{
                row.cards=row.cards.filter(card=>{
                    if(card.id!=task.id)return card
                })
            }
            return row;
        })
        setRows(newRows)
    }

    const showModalDetailTask = useCallback(() => {
        if (clickedTask.id && detailTaskOpen == true) {
            return (
                <ModalDetailTask
                    open={detailTaskOpen}
                    closeModalDetailTask={() => {
                        handleDetailTaskOpen({task :clickedTaskInitialState,open:false})
                    }}
                    projects_id={detailProject.id}
                    detailProject={{
                        id:detailProject.id,
                        members:detailProject.members,
                    }}
                    initialState={clickedTask} 
                    onTaskUpdate={onTaskUpdate}
                    onTaskDelete={onTaskDelete}
                    />
            )
        }
    }, [clickedTask]);

    const onTaskNew = (newTask, laneId) => {
        newTask.id = Date.now();
        newTask.lists_id = laneId;
        newTask.users_id = global.state.id;
        newTask.projects_id = detailProject.id;
        newTask.creator=global.state.id;
        
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + 'tasks';
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post(url, newTask)
                .then((result) => {
                    newTask.id = result.data.id;
                    newTask.projects_id = detailProject.id;
                    newTask.lists_id = laneId;
                    global.dispatch({ type: 'create-new-task', payload: newTask })
                    setRows(rows.map((row)=>{
                        if(row.id==selectedList.id) row.cards.push(newTask)
                        return row
                    }))
                    handleSnackbar(`A new card successfuly created`, 'success');
                }).catch(error => {
                    const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
                    global.dispatch({ type: 'handle-fetch-error', payload: payload });
                });
        } else {
            handleSnackbar(`You're currently offline. Please check your internet connection`, 'warning');
            global.dispatch({ type: 'create-new-task', payload: newTask });
        }
    }

    return (
        <>
            <TableContainer  className={classes.table}>
                <Table size={'small'} >
                    {/* <EnhancedTableHead classes={classes}  /> */}
                    <TableBody>
                        {rows.map((row, index) => {
                            return (
                                <Row classes={classes} key={row.id} 
                                    data={row} 
                                    handleDetailTaskOpen={handleDetailTaskOpen} 
                                    projects_id={projects_id}
                                    detailProject={detailProject}
                                    onClick={()=>{
                                        setSelectedList(row);
                                        setOpenEditList(true);
                                    }}
                                    />
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {(selectedList.id && openEditList)?(
                <EditLaneForm 
                    laneId={selectedList.id}
                    detailProject={{id:detailProject.id,members:detailProject.members}} 
                    open={openEditList}
                    onCancel={()=>setOpenEditList(false)}
                    onAdd={(newTask)=>{
                        onTaskNew(newTask,selectedList.id)
                        setOpenEditList(false); 
                    }}/>
            ):<></>}
            
            {showModalDetailTask()}
        </>
    );
}

function Row(props) {
    const { data, handleDetailTaskOpen,classes,onClick } = props;
    const [openCollapsible, setOpenCollapsible] = useState(false);
    let global = useContext(UserContext);
    const { enqueueSnackbar } = useSnackbar();
    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });

    const handleCompleteTask = (task,event) => {
        const body = { ...task, complete: event.target.checked };
        const url = process.env.MIX_BACK_END_BASE_URL + `tasks/${task.id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.patch(url, body)
            .then((result) => {
                var result=result.data;
                if(task.is_subtask) global.dispatch({ type: 'store-detail-subtask', payload: result });
                else global.dispatch({ type: 'store-detail-task', payload: result });
                handleSnackbar(`Data has been updated`, 'success');
            }).catch((error) => {
                const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }
    
    return (
        <React.Fragment>
            <TableRow hover key={data.id} style={{ color:'#393939', backgroundColor:'#e3e3e3' }}>
                <TableCell>
                    <IconButton size="small"
                        onClick={() => setOpenCollapsible(!openCollapsible)}
                    > {openCollapsible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" style={{ cursor: 'pointer' }} onClick={onClick}>{data.title}</TableCell>
                <TableCell> </TableCell>
                <TableCell align="right"> </TableCell>
                <TableCell align="right"> </TableCell>
                <TableCell align="right"> </TableCell>
                <TableCell align="right"> </TableCell>
                <TableCell align="right"> </TableCell>
                <TableCell align="right"> </TableCell>
                <TableCell> </TableCell>
            </TableRow>
            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={headCells.length+1}>
                    <Collapse in={openCollapsible} timeout="auto">
                        <TableTasks 
                            tasks={data.cards} 
                            classes={classes} 
                            handleCompleteTask={handleCompleteTask}
                            handleDetailTaskOpen={handleDetailTaskOpen}
                            />
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const TableTasks=({tasks,classes,handleCompleteTask,handleDetailTaskOpen})=>{
    const [rows,setRows]=useState([]);
    
    useEffect(()=>{
        setRows(tasks);
    },[tasks]);
    
    return(
        <Table className={classes.table} size={'small'} >
            <EnhancedTableHead classes={classes}/>
            <TableBody>
                {rows?rows.map((task)=>{
                    return(
                    <>
                        <TaskRow 
                            key={task.id}
                            data={task} 
                            classes={classes} 
                            handleCompleteTask={handleCompleteTask}
                            handleDetailTaskOpen={handleDetailTaskOpen}
                            />
                    </>
                    )
                }):<></>}
            </TableBody>
        </Table>
    )
}
const TaskRow=({data,classes,handleCompleteTask,handleDetailTaskOpen})=>{
    const [openCollapsible, setOpenCollapsible] = useState(false);
    return(
        <>
            <TableRow hover key={data.id} >
                <TableCell>
                    <IconButton size="small" onClick={() =>setOpenCollapsible(!openCollapsible)} > {openCollapsible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </IconButton>
                        
                </TableCell>
                <TableCell pading="checkbox">
                    <Checkbox
                        onChange={(event)=> handleCompleteTask(data,event)}
                        checked={data.complete}
                    />
                </TableCell>
                <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}
                    onClick={()=>handleDetailTaskOpen({task:data,open:true})} > 
                    {data.title}
                </TableCell>
                <TableCell>
                    {data.members?data.members.map((member,i)=>{
                            return (
                                <span>{member.role?.name}</span>
                            )
                        }):<></>}
                </TableCell>
                <TableCell align="left">
                    {data.start ? moment(data.start).format('DD MMMM YYYY') : ''}
                </TableCell>
                <TableCell align="left">
                    {data.end ? moment(data.end).format('DD MMMM YYYY') : ''}
                </TableCell>
                <TableCell align="right">
                    {(data.start && data.end)?Math.round(moment.duration(moment(data.start).diff(moment(data.end))).asDays())*(-1):''}
                </TableCell>
                <TableCell align="left">
                    {data.actual_start ? moment(data.actual_start).format('DD MMMM YYYY') : ''}<br/>
                    {data.start_label?<StatusChip status={data.start_label}/>:''}
                </TableCell>
                <TableCell align="left">
                    {data.actual_end ? moment(data.actual_end).format('DD MMMM YYYY') : ''}<br/>
                    {data.end_label?<StatusChip status={data.end_label}/>:''}
                </TableCell>
                <TableCell align="right">
                    {(data.actual_start && data.actual_end)?Math.round(moment.duration(moment(data.actual_start).diff(moment(data.actual_end))).asDays())*(-1):''}
                </TableCell>
                <TableCell align="right">
                    {data.progress}
                </TableCell>
            </TableRow>
            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={headCells.length+1}>
                    <Collapse in={openCollapsible} timeout="auto">
                        <TableSubtask 
                            tasks={data.cards} 
                            classes={classes} 
                            handleCompleteTask={handleCompleteTask}
                            handleDetailTaskOpen={handleDetailTaskOpen}
                        />
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}
const TableSubtask=({tasks,classes,handleCompleteTask,handleDetailTaskOpen,projects_id,detailProject})=>{
    const [subtasks,setSubtasks]=useState([])
    useEffect(()=>{
        setSubtasks(tasks);
    },[tasks])
    return(
        <>
            <Table>
                <EnhancedTableHead classes={classes}  />
                <TableBody>
                    {subtasks?subtasks.map((subtask)=>{
                        return(
                            <TableRow hover key={subtask.id} >
                                <TableCell> </TableCell>
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
                                            task:subtask,open:true
                                        })
                                    }}
                                > 
                                    {subtask.title}
                                </TableCell>
                                <TableCell>
                                    {subtask.members?subtask.members.map((member,i)=>{
                                        return (
                                            <span key={i}>{member.role?member.role.name:''}</span>
                                        )
                                    }):<></>}
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
                                <TableCell align="right">
                                    {subtask.progress}
                                </TableCell>
                            </TableRow>
                        )
                    }):<></> }
                </TableBody>
            </Table>
        </>
    )
}