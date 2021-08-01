import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../../context/UserContext';
import {  makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import axios from 'axios';
import { visuallyHidden } from '@material-ui/utils';
import { useSnackbar } from 'notistack';
import EditLaneForm from '../../widgets/board/EditLaneForm'
import Row from './Row';

const headCells = [
    { id: 'Title', align: 'left', label: 'Title' },
    { id: 'PIC', align: 'left', label: 'PIC' },
    { id: 'Start', align: 'left',  label: 'Start' },
    { id: 'End', align: 'left',  label: 'End' },
    { id: 'Days', align: 'right', label: 'Days' },
    { id: 'Realisasi Start', align: 'left',  label: 'Realisasi Start' },
    { id: 'Realisasi End', align: 'left',  label: 'Realisasi End' },
    { id: 'Work days', align: 'right', label: 'Work days' },
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
    popover: {
      pointerEvents: 'none',
      zIndex:'1200'
    },
    paper: {
      padding: theme.spacing(1),
    },
}));

function Timeline(props) {
    const classes = useStyles();
    const projects_id = props.projects_id;
    const handleDetailTaskOpen=props.handleDetailTaskOpen;
    const [detailProject,setDetailProject]=useState(props.detailProject);
    const [openEditList,setOpenEditList]=useState(false)
    const [selectedList,setSelectedList]=useState(false)
    const [rows, setRows] = useState([]);

    let global = useContext(UserContext);
    const { enqueueSnackbar } = useSnackbar();
    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });

    useEffect(() => {
        setRows(props.data);
        setDetailProject(props.detailProject)
    }, [props.detailProject.id,props.data]);

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
                    <TableBody>
                        {rows.map((row) => {
                            return (
                                <Row 
                                    key={row.id} 
                                    classes={classes} 
                                    data={row} 
                                    handleDetailTaskOpen={handleDetailTaskOpen} 
                                    projects_id={projects_id}
                                    detailProject={detailProject}
                                    onClick={()=>{
                                        setSelectedList(row);
                                        setOpenEditList(true);
                                    }}
                                    headCells={headCells}
                                    onTaskUpdate={onTaskUpdate}
                                    onTaskDelete={onTaskDelete}
                                    />
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {(selectedList.id && openEditList)?(
                <EditLaneForm 
                    laneId={selectedList.id}
                    minDate={selectedList.start}
                    maxDate={selectedList.end}
                    detailProject={{
                        id:detailProject.id,
                        members:detailProject.members
                    }} 
                    open={openEditList}
                    onCancel={()=>setOpenEditList(false)}
                    onAdd={(newTask)=>{
                        onTaskNew(newTask,selectedList.id)
                        setOpenEditList(false); 
                    }}/>
            ):<></>}
        </>
    );
}


export default React.memo(Timeline)