import React, { useState, useContext } from 'react';
import UserContext from '../../../context/UserContext';
import toast, { Toaster } from 'react-hot-toast';
import TableTasks from './TableTasks';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

function Row(props) {
    const { data, handleDetailTaskOpen,onClick,headCells, onTaskUpdate, onTaskDelete,keywords } = props;
    const [openCollapsible, setOpenCollapsible] = useState(true);
    let global = useContext(UserContext);

    const handleCompleteTask = (task,event) => {
        const body = { complete: event.target.checked };
        const url = process.env.MIX_BACK_END_BASE_URL + `tasks/${task.id}/complete`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.patch(url, body),
            {
                loading: 'Updating...',
                success: (result)=>{
                    var result=result.data;
                    if(task.is_subtask) global.dispatch({ type: 'store-detail-subtask', payload: result });
                    else global.dispatch({ type: 'store-detail-task', payload: result });
                    return <b>Successfully updated</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
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
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={headCells.length+2}>
                    <Collapse in={openCollapsible} timeout="auto">
                        <TableTasks
                            headCells={headCells}
                            tasks={data.cards} 
                            handleCompleteTask={handleCompleteTask}
                            handleDetailTaskOpen={handleDetailTaskOpen}
                            onTaskUpdate={onTaskUpdate}
                            onTaskDelete={onTaskDelete}
                            />
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default Row;