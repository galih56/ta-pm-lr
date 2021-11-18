import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { visuallyHidden } from '@material-ui/utils';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
import SearchIcon from '@material-ui/icons/Search';
import ModalCreateProject from './ModalCreateProject';

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
    { id: 'title', align: 'left', label: 'Title' },
    { id: 'updated-at', align: 'right', disablePadding: false, label: 'Updated At' },
    { id: 'created-at', align: 'right', disablePadding: false, label: 'Created At' },
];

const useStyles = makeStyles((theme) => ({
    root: { width: '100%', },
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

export default function EnhancedTable({data}) {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('end');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [keywords,setKeywords]=useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const openModalCreateProject = () => setModalOpen(true);

    useEffect(()=>{
        setRows(data)
    },[data])

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
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={openModalCreateProject}
                            style={{ marginBottom: '1em' }}
                            startIcon={<AddIcon />}> Add new project </Button> 
                        <ModalCreateProject open={modalOpen} closeModal={() => setModalOpen(false)}/>
                        <TextField 
                            variant="standard" InputProps={{endAdornment:<SearchIcon/>}} 
                            style={{ margin:'1em', float:'right', minWidth:'300px' }}
                            placeholder="Search by title"
                            onInput={e=>setKeywords(e.target.value)}
                            onKeyUp={e=>setKeywords(e.target.value)}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
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
                                        .filter(row=>{
                                            if(
                                                row.title?.toLowerCase().includes(keywords.toLowerCase()) 
                                                    || row.created_at?.toLowerCase().includes(keywords.toLowerCase())
                                                    || row.updated_at?.toLowerCase().includes(keywords.toLowerCase())
                                                ){
                                                return row;
                                            }
                                        })
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                            if (row.progress >= 100) row.complete = true;
                                            return (
                                                <TableRow
                                                    hover key={row.title}
                                                >
                                                    <TableCell component="th" scope="row"
                                                        style={{ cursor: 'pointer' }}
                                                        align="left"
                                                    >
                                                        <Link to={`/projects/${row.id}/`} style={{ textDecoration: 'none', color: 'black', textAlign:"left" }}>
                                                            {row.title}
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {moment(row.updated_at).format('DD MMM YYYY')}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {moment(row.created_at).format('DD MMM YYYY')}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        }):(
                                            <TableRow>
                                                <TableCell colSpan={headCells.length+1} align="center">
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
                    </Grid>
                </Grid>
            </Paper>
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