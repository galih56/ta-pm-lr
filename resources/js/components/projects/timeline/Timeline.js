import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../../context/UserContext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import EditLaneForm from '../../widgets/board/EditLaneForm'
import toast, { Toaster } from 'react-hot-toast';
import Row from './Row';
import axios from 'axios';

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

function Timeline(props) {
    const projects_id = props.projects_id;
    const handleDetailTaskOpen=props.handleDetailTaskOpen;
    const [detailProject,setDetailProject]=useState(props.detailProject);
    const [openEditList,setOpenEditList]=useState(false)
    const [selectedList,setSelectedList]=useState(false)
    const [rows, setRows] = useState([]);

    let global = useContext(UserContext);

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
            toast.promise(
                axios.post(url, body),
                {
                    loading: 'Creating a new task',
                    success: (result)=>{
                        newTask.id = result.data.id;
                        newTask.projects_id = detailProject.id;
                        newTask.lists_id = laneId;
                        global.dispatch({ type: 'create-new-task', payload: newTask })
                        setRows(rows.map((row)=>{
                            if(row.id==selectedList.id) row.cards.push(newTask)
                            return row
                        }))
                        return <b>A new meeting successfuly created</b>
                    },
                    error: (error)=>{
                        if(error.response.status==401) return <b>Unauthenticated</b>;
                        if(error.response.status==422) return <b>Some required inputs are empty</b>;
                        return <b>{error.response.statusText}</b>;
                    },
                });
        } else {
            toast.error(`You're currently offline. Please check your internet connection`);
            global.dispatch({ type: 'create-new-task', payload: newTask });
        }
    }

    return (
        <>
           <Toaster/> 
           <TableContainer  style={{ minWidth: 1800}}>         
                <Table size={'small'} >
                    <TableBody>
                        {rows.map((row) => {
                            return (
                                <Row 
                                    key={row.id} 
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