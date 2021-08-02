import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import EnhancedTableHead from './EnhancedTableHead';
import TaskRow from './TaskRow';

const TableTasks=({classes,tasks,handleCompleteTask,handleDetailTaskOpen,headCells, onTaskUpdate, onTaskDelete})=>{
    const [rows,setRows]=useState([]);
    
    useEffect(()=>{
        setRows(tasks);
    },[tasks]);
    
    return(
        <Table className={classes.table} size={'small'} >
            <EnhancedTableHead classes={classes} headCells={headCells}/>
            <TableBody>
                {rows?rows.map((task)=>{
                    return(
                        <TaskRow 
                            key={task.id}
                            data={task} 
                            classes={classes} 
                            handleCompleteTask={handleCompleteTask}
                            handleDetailTaskOpen={handleDetailTaskOpen}
                            headCells={headCells}
                            onTaskUpdate={onTaskUpdate}
                            onTaskDelete={onTaskDelete}
                            />
                    )
                }):<></>}
            </TableBody>
        </Table>
    )
}

export default TableTasks;