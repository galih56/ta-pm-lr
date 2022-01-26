import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import EnhancedTableHead from './EnhancedTableHead';
import TaskRow from './TaskRow';

const TableTasks=({tasks,handleDetailTaskOpen,headCells, onTaskUpdate, onTaskDelete})=>{
    const [rows,setRows]=useState([]);
    
    useEffect(()=>{
        setRows(tasks);
    },[tasks]);
    
    return(
        <Table size={'small'} >
            <EnhancedTableHead headCells={headCells}/>
            <TableBody>
                {rows?rows.map((task)=>{
                    return(
                        <TaskRow key={task.id} data={task} headCells={headCells} onTaskUpdate={onTaskUpdate} onTaskDelete={onTaskDelete} handleDetailTaskOpen={handleDetailTaskOpen} />
                    )
                }):<></>}
            </TableBody>
        </Table>
    )
}

export default TableTasks;