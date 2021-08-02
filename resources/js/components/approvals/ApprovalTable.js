import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import moment from 'moment';
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { visuallyHidden } from '@material-ui/utils';
import ApprovalStatus from './../widgets/ApprovalStatus';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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
    { id: 'name', align: 'left', disablePadding: true, label: 'Name' },
    { id: 'project', align: 'left', disablePadding: false, label: 'Project' },
    { id: 'status', align: 'left', disablePadding: false, label: 'Status' },
    { id: 'created_at', align: 'right', disablePadding: false, label: 'Created/Updated at' },
];

const useStyles = makeStyles((theme) => ({
    root: { width: '100%', paddingLeft: '1em', paddingTop: '1em' },
    paper: { width: '100%', marginBottom: theme.spacing(2), },
    sortSpan: visuallyHidden,
}));

function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;

    const createSortHandler = (property) => (event) => onRequestSort(event, property);

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'default'}
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
                                    {order === 'asc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default function EnhancedTable() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    let global = useContext(UserContext);
    let history=useHistory();

    useEffect(() => {
        getApprovals();
        console.log(global.state.current_project_member_role,global.state);
        // if(!global.state.current_project_member_role) history.push('/projects');
    }, []);

    const getApprovals = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}approvals?projects_id=${global.state.current_project_member_role?.project?.id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setRows(result.data);
            }).catch((error) => {
                const payload = { error: error, snackbar: null, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }

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

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Grid container>        
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Router>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="projects">
                        <Button component={Link}  color="primary"
                            to="/projects">
                            Projects
                        </Button>
                    </Breadcrumbs>
                </Router>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >        
                <Paper>
                    <div className={classes.root}>
                        <TableContainer>
                            <Table className={classes.table} aria-labelledby="tableTitle" size={'small'} padding="default" >
                                <EnhancedTableHead classes={classes} order={order} orderBy={orderBy}
                                    onRequestSort={handleRequestSort}
                                    rowCount={rows.length}
                                />
                                <TableBody>
                                    {stableSort(rows, getComparator(order, orderBy))
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            var maxLenght = 50;
                                            var trimmedString = (typeof row.description =='string') ? (row.description.length > maxLenght ? row.description.substring(0, maxLenght - 3) + "..." : row.description):"";
                                            var url=``;
                                            if(row.task){
                                                url=(row.parent_task_id)?
                                                `/projects/${row.project.id}/timeline?tasks_id=${row.parent_task_id}`:
                                                `/projects/${row.project.id}/timeline?tasks_id=${row.tasks_id}`;
                                            }else{
                                                url=`/projects/${row.project.id}/timeline`
                                            }
                                            return (
                                                <TableRow hover key={row.id}>
                                                    <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}>
                                                        <Link to={`/approvals/${row.id}`} style={{textDecoration:'none'}}><b>{row.title}</b></Link>
                                                        <br/>
                                                        {trimmedString}
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <Link target={"_blank"}  style={{textDecoration:'none'}}
                                                            to={url}>{row.project.title}</Link>
                                                    </TableCell>
                                                    <TableCell align="left"><ApprovalStatus status={row.status}/></TableCell>
                                                    <TableCell align="right">
                                                        Created at : 
                                                        <br/>
                                                        {row.created_at ? moment(row.created_at).format('DD MMM YYYY') : ''}
                                                        <br/>
                                                        Updated at : 
                                                        <br/>
                                                        {row.updated_at ? moment(row.updated_at).format('DD MMM YYYY') : ''}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    {emptyRows > 0 && (<TableRow style={{ height: (53) * emptyRows }} > <TableCell colSpan={6} /> </TableRow>)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            page={page}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            onPageChange={handleChangePage}
                            rowsPerPageOptions={[5, 10, 25]}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};