import React, { useState, useEffect, useContext, lazy, Suspense } from 'react';
import UserContext from '../../../context/UserContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import SearchIcon from '@material-ui/icons/Search';
import LinearProgress from '@material-ui/core/LinearProgress';
import toast from 'react-hot-toast';
import axios from 'axios';

const Row = lazy(() => import('./Row'));
const EditLaneForm = lazy(() => import('../../widgets/board/EditLaneForm'));

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
    const [keywords,setKeywords]=useState('');

    let global = useContext(UserContext);

    const searchByKeywords=()=>{
        const toast_loading = toast.loading('Loading...');
        var newRows=props.data.filter(row => {
            var matched=false;
            var filteredTasks=[];
            if(row.title.toLowerCase().includes(keywords.toLowerCase())){
                matched=true;
            }
            for (let i = 0; i < row.cards.length; i++) {
                const task = row.cards[i];
                var filteredSubtasks=[];
                if(task.cards){
                    for (let j = 0; j < task.cards.length; j++) {
                        const subtask = task.cards[j];
                        if(subtask.title.toLowerCase().includes(keywords.toLowerCase())){ 
                            filteredSubtasks.push(subtask); 
                            matched=true;
                        }
                    }
                }
                
                if(task.title.toLowerCase().includes(keywords.toLowerCase()) || filteredSubtasks.length>0){ 
                    task.cards=filteredSubtasks;
                    filteredTasks.push(task);
                    matched=true;
                }
            }
            row = { ...row , cards : filteredTasks }
            if(matched){
                return row
            }
        })
        toast.dismiss(toast_loading);
        return newRows;
    }

    useEffect(() => {
        if(keywords){                
            const results= searchByKeywords()
            setRows(results);
        }else{
            setRows(props.data);
            setDetailProject(props.detailProject)    
        }
    }, [props.detailProject.id,props.data,keywords]);

    const onTaskUpdate=(task)=>{
        var newRows=rows.map(row=>{
            row.cards=row.cards.map(card=>{
                if(card.id==task.id) return task;
                if(card.id==task.parent_task){
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
            if(task.parent_task){
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
        const body=newTask;
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
                    global.dispatch({ type: 'create-new-task', payload: result.data })
                    setRows(rows.map((row)=>{
                        if(row.id==selectedList.id) row.cards.push(newTask)
                        return row
                    }))
                    return <b>A new task successfuly created</b>
                },
                error: (error)=>{
                    console.error(error);
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
    
        if (!window.navigator.onLine) {
            toast.error(`You're currently offline. Please check your internet connection`);
        }
    }

    return (  
        <React.Fragment>
            <Grid item xl={12} md={12} sm={12} xs={12}>
                <form onSubmit={e=>{ 
                    e.preventDefault();
                    const results= searchByKeywords();
                    setRows(results);
                }}>
                    <TextField variant="standard" style={{marginTop:'1em',marginBottom:'1em',minWidth:'300px'}}
                        InputProps={{endAdornment:<SearchIcon/>}} 
                        placeholder="Search by title"
                        onBlur={e=>setKeywords(e.target.value)}
                        // Triggered when out of focus from input
                        // onBlur to prevent lag
                    />
                    <Button type="submit" style={{marginTop:'1em'}}> Search </Button>
                </form>
            </Grid>
            <Grid item xl={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                <TableContainer  style={{ minWidth: 1600}}>         
                    <Table size={'small'} >
                        <Suspense fallback={<LinearProgress />}>
                            <TableBody>
                                {rows.map((row) => {
                                    return (
                                        <Row headCells={headCells} onTaskUpdate={onTaskUpdate} onTaskDelete={onTaskDelete}
                                            key={row.id} data={row} handleDetailTaskOpen={handleDetailTaskOpen} 
                                            projects_id={projects_id} detailProject={detailProject} 
                                            onClick={()=>{ 
                                                if([1,2,4].includes(global.state.role?.id)){
                                                    setSelectedList(row); 
                                                    setOpenEditList(true); 
                                                }
                                            }} />
                                    );
                                })}
                            </TableBody>
                        </Suspense>
                    </Table>
                </TableContainer>
                {(selectedList.id && openEditList)?(
                    <EditLaneForm 
                        laneId={selectedList.id} minDate={selectedList.start} maxDate={selectedList.end}
                        detailProject={{ 
                            id:detailProject.id, start:detailProject.start, end:detailProject.end,
                            members:detailProject.members, clients:detailProject.clients 
                        }} 
                        open={openEditList} onCancel={()=>setOpenEditList(false)}
                        onAdd={(newTask)=>{
                            onTaskNew(newTask,selectedList.id)
                            setOpenEditList(false); 
                        }}/>
                ):<></>}
            </Grid>
        </React.Fragment>
    );
}


export default React.memo(Timeline)