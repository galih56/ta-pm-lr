import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import {
    Table, TableBody, TableCell, TableContainer, TablePagination,
    TableHead, TableRow, TableSortLabel
} from '@material-ui/core';
import { visuallyHidden } from '@material-ui/utils';

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

export default function EnhancedTable(props) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rows, setRows] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleModalOpen = props.modalOpen;

    useEffect(() => {
        setRows(props.data);
    }, [props.data]);

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
            <TableContainer>
                <Table className={classes.table} size={'small'} padding="normal" >
                    <EnhancedTableHead classes={classes} order={order} orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {(rows.length)?
                            stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover key={row.id}>
                                        <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}
                                            onClick={() => handleModalOpen({
                                                occupation: {
                                                    ...row,
                                                },
                                                open: true
                                            })}>
                                            {row.name}
                                        </TableCell>
                                    </TableRow>
                                );
                            }):(
                                (
                                    <TableRow>
                                        <TableCell align="center" colSpan={headCells.length}>
                                            <Typography variant="body1"><b>There is no data to show</b></Typography>
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
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
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};