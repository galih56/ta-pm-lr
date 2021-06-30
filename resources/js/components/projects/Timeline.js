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
import { RowingOutlined } from '@material-ui/icons';

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
    id: '', projectId: '', listId: null, list:null,
    title: '', description: '', label: '', complete: false, progress: 0,
    start:null,end:null,actualStart:null,actualEnd:null, startLabel:'',endLabel:'',
    list: null, tags: [], members: [], parentTask:'',
    cards: [], logs: [], comments: [], attachments: [],creator:null,isSubtask:false
}
export default function EnhancedTable(props) {
    const classes = useStyles();
    const projectId = props.projectId;
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
    }, [props.detailProject.id]);

    useEffect(()=>{
        setDetailProject(props.detailProject)
    },[props.detailProject.id]);
    
    const handleDetailTaskOpen = (taskInfo) => {
        const {task, open } = taskInfo;
        setDetailTaskOpen(open);
        setClickedTask({ ...task,taskId:task.id });
    };

    const onTaskUpdate=(task)=>{
        console.log('onTaskUpdate : ',task)
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
        console.log('onTaskDelete',task)
        var newRows=rows.map(row=>{
            if(task.isSubtask){
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
                    projectId={detailProject.id}
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
        newTask.listId = laneId;
        newTask.userId = global.state.id;
        newTask.projectId = detailProject.id;
        newTask.creator=global.state.id;
        
        if (window.navigator.onLine) {
            const config = { mode: 'no-cors', crossdomain: true }
            const url = process.env.REACT_APP_BACK_END_BASE_URL + 'task/';
            
            axios.defaults.headers.common['Authorization'] = global.state.token;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post(url, newTask, config)
                .then((result) => {
                    newTask.id = result.data.id;
                    newTask.projectId = detailProject.id;
                    newTask.listId = laneId;
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
                                    projectId={projectId}
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
            {selectedList.id?(
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

    const handleCompleteTask = (id,event) => {
        const body = { id: id, complete: event.target.checked };
        const config = { mode: 'no-cors', crossdomain: true }
        const url = process.env.REACT_APP_BACK_END_BASE_URL + `task/${id}`;
        axios.defaults.headers.common['Authorization'] = global.state.token;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.patch(url, body, config)
            .then((result) => {
                const payload = { data: result.data };
                global.dispatch({ type: 'store-detail-task', payload: payload });
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
                        onClick={() => {
                            setOpenCollapsible(!openCollapsible);
                        }}
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
    return(
        <Table className={classes.table} size={'small'} >
            <EnhancedTableHead classes={classes}/>
            <TableBody>
                {tasks?tasks.map((task)=>{
                    return(
                    <>
                        <TaskRow 
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
                    <IconButton size="small"
                            onClick={() =>setOpenCollapsible(!openCollapsible)}
                        > {openCollapsible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </IconButton>
                        
                </TableCell>
                <TableCell pading="checkbox">
                    <Checkbox
                        onChange={(event)=>{
                            handleCompleteTask(data.id,event)
                        }}
                        checked={data.complete}
                    />
                </TableCell>
                <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}
                    onClick={()=>handleDetailTaskOpen({task:data,open:true})}
                > 
                    {data.title}
                </TableCell>
                <TableCell>
                    {data.members?data.members.map((member,i)=>{
                            return (
                                <span>{member.role?member.role.name:''}</span>
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
                    {data.actualStart ? moment(data.actualStart).format('DD MMMM YYYY') : ''}<br/>
                    {data.startLabel?<StatusChip status={data.startLabel}/>:''}
                </TableCell>
                <TableCell align="left">
                    {data.actualEnd ? moment(data.actualEnd).format('DD MMMM YYYY') : ''}<br/>
                    {data.endLabel?<StatusChip status={data.endLabel}/>:''}
                </TableCell>
                <TableCell align="right">
                    {(data.actualStart && data.actualEnd)?Math.round(moment.duration(moment(data.actualStart).diff(moment(data.actualEnd))).asDays())*(-1):''}
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
const TableSubtask=({tasks,classes,handleCompleteTask,handleDetailTaskOpen,projectId,detailProject})=>{
    const [subtasks,setSubtasks]=useState([])
    useEffect(()=>{
        setSubtasks(tasks);
    },[tasks])
    return(
        <>
            <Table>
                <EnhancedTableHead classes={classes}  />
                <TableBody>
                    {tasks?tasks.map((subtask)=>{
                        return(
                        <>
                            <TableRow hover key={subtask.id} >
                                <TableCell> </TableCell>
                                <TableCell padding="checkbox"> 
                                    <Checkbox
                                        onChange={(event)=>{
                                            handleCompleteTask(subtask.id,event)
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
                                            <span>{member.role?member.role.name:''}</span>
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
                                    {subtask.actualStart ? moment(subtask.actualStart).format('DD MMMM YYYY') : ''}<br/>
                                    {subtask.startLabel?<StatusChip status={subtask.startLabel}/>:''}
                                </TableCell>
                                <TableCell align="left">
                                    {subtask.actualEnd ? moment(subtask.actualEnd).format('DD MMMM YYYY') : ''}<br/>
                                    {subtask.endLabel?<StatusChip status={subtask.endLabel}/>:''}
                                </TableCell>
                                <TableCell align="right">
                                    {(subtask.actualStart && subtask.actualEnd)?Math.round(moment.duration(moment(subtask.actualStart).diff(moment(subtask.actualEnd))).asDays())*(-1):''}
                                </TableCell>
                                <TableCell align="right">
                                    {subtask.progress}
                                </TableCell>
                            </TableRow>
                            </>
                        )
                    }):<></> }
                </TableBody>
            </Table>
        </>
    )
}