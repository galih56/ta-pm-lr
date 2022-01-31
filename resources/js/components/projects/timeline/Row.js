import React, { useState, useContext } from 'react';
import UserContext from '../../../context/UserContext';
import TableTasks from './TableTasks';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';

function Row(props) {
    const { data, handleDetailTaskOpen,onClick,headCells, onTaskUpdate, onTaskDelete,keywords } = props;
    const [openCollapsible, setOpenCollapsible] = useState(true);
    
    return (
        <React.Fragment>
             
            <TableRow hover key={data.id} style={{ color:'#393939', backgroundColor:'#e3e3e3' }}>
                <TableCell>
                    {data.cards?.length?(
                        <IconButton size="small"
                            onClick={() => setOpenCollapsible(!openCollapsible)}
                        > {openCollapsible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} 
                        </IconButton>
                    ):null}
                </TableCell>
                <TableCell component="th" scope="row" style={{ cursor: 'pointer' }} onClick={onClick}>{data.title} ({data.progress?Math.round(data.progress):'0'}%)</TableCell>
                <TableCell align="left"> {data.start ? moment(data.start).format('DD MMMM YYYY') : null} </TableCell>
                <TableCell align="left"> {data.end ? moment(data.end).format('DD MMMM YYYY') : null} </TableCell>
                <TableCell> </TableCell>
                <TableCell align="left">  </TableCell>
                <TableCell align="left"> </TableCell>
                <TableCell align="right"> </TableCell>
                <TableCell align="right"> </TableCell>
                <TableCell> </TableCell>
            </TableRow>
            {data.cards?.length?(
                <TableRow >
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={headCells.length+2}>
                        <Collapse in={openCollapsible} timeout="auto">
                            <TableTasks headCells={headCells} tasks={data.cards} handleDetailTaskOpen={handleDetailTaskOpen}
                                onTaskUpdate={onTaskUpdate} onTaskDelete={onTaskDelete} />
                        </Collapse>
                    </TableCell>
                </TableRow>
            ):null}
        </React.Fragment>
    );
}

export default Row;