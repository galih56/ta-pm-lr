import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import ModalDetailTask from './../tasks/modalDetailTask/ModalDetailTask';
import UpdateProgressButtons from './UpdateProgressButtons';
import UserContext from '../../context/UserContext';
import { visuallyHidden } from '@material-ui/utils';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

function descendingComparator(a, b, orderBy) {
   if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'title', align: 'left', disablePadding: true, label: 'Title' },
    { id: 'deadline', align: 'right', disablePadding: false, label: 'Start - End' },
    { id: 'project', align: 'right', disablePadding: false, label: 'Project' },
    { id: 'creator', align: 'right', disablePadding: false, label: 'Creator' },
];

const useStyles = makeStyles((theme) => ({
    root: { width: '100%', },
    paper: { width: '100%', },
    sortSpan: visuallyHidden,
}));

function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;

    const createSortHandler = (property) => (event) => onRequestSort(event, property);

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox"></TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.sortSpan}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default function EnhancedTable({detailProject}) {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('end');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [clickedTask, setClickedTask] = useState({ projects_id: null, lists_id: null, tasks_id: null });
    const [modalOpen, setModalOpen] = useState(false);

    let global = useContext(UserContext);

    const handleModalOpen = (taskInfo) => {
        const { projects_id, lists_id, tasks_id, open } = taskInfo;
        setModalOpen(open);
        setClickedTask({ projects_id: projects_id, lists_id: lists_id, tasks_id: tasks_id });
    }

    const showModalDetailTask = () => {
        if (clickedTask.tasks_id != null && clickedTask.tasks_id !== undefined && modalOpen == true) {
            return (
                <ModalDetailTask
                    open={modalOpen}
                    closeModalDetailTask={() =>handleModalOpen({ projects_id: null, lists_id: null, tasks_id: null, open: false })}
                    projects_id={clickedTask.projects_id}
                    initialState={clickedTask} />
            )
        }
    }

    useEffect(() => {
        setRows(detailProject.columns);
    }, []);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => setPage(newPage);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                 
                <TableContainer>
                    <Table className={classes.table} aria-labelledby="tableTitle" size={'small'} >
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {rows.length?stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" key={row.title}>
                                            <TableCell padding="checkbox">
                                                {!row.cards?.length || row.parent_task ?(
                                                <div style={{display:'flex'}}>
                                                    <UpdateProgressButtons data={row}/>
                                                </div>):null}
                                                {/* {row.complete?<Checkbox disabled checked={row.complete}/>:<Checkbox disabled checked={row.complete}/>} */}
                                            </TableCell>
                                            <TableCell component="th" scope="row" padding="none" style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    handleModalOpen({
                                                        projects_id: row.list.project.id,
                                                        lists_id: row.list.id,
                                                        tasks_id: row.id,
                                                        open: true
                                                    });
                                                }}>
                                                {row.title} ({row.progress}%)
                                            </TableCell>
                                            <TableCell align="right">{row.start ? moment(row.start).format('DD MMM YYYY') : ''} - {row.end ? moment(row.end).format('DD MMM YYYY') : ''}</TableCell>
                                            <TableCell align="right">
                                                <Link to={`/projects/${row.project.id}/`} style={{ textDecoration: 'none', color: 'black' }}>
                                                    {row.project.title}
                                                </Link>
                                            </TableCell>
                                            <TableCell align="right">{row.creator?row.creator.name:''}</TableCell>
                                        </TableRow>
                                    );
                                }):( 
                                    <TableRow>
                                        <TableCell colSpan={headCells.length} align="center">
                                            <Typography variant="body1">There is no data to show</Typography>
                                        </TableCell>
                                    </TableRow>
                                )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 30]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            {showModalDetailTask()}
        </div>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};