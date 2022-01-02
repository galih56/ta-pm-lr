import React, { useState, useEffect, useContext } from 'react';
import UserContext from './../../../context/UserContext';
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
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { visuallyHidden } from '@material-ui/utils';
import toast, { Toaster } from 'react-hot-toast';
import ModalCreateRole from './ModalCreateRole';
import ModalDetailRole from './ModalDetailRole';
import axios from 'axios';

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
    { id: 'name', align: 'left', label: 'Name' },
];

const useStyles = makeStyles((theme) => ({
    root: { width: '100%', padding: '1em' },
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

export default function EnhancedTable(props) {
    const classes = useStyles();
    const projects_id = props.projects_id;
    const [newRoleOpen, setNewRoleOpen] = useState(false);
    const [modalDetailOpen,setModalDetailOpen]=useState({open:false,data:{ id:null, name:'' }});
    const [rows, setRows] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('end');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    let global = useContext(UserContext);

    useEffect(() => {
        getRoles();
    }, []);

    const getRoles = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'member-roles';        
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setRows(result.data);
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
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

    return (
        <div className={classes.root}>
            <Grid>
                 
                <Typography variant="h6">Roles  <Button color="primary" component="span" onClick={() => setNewRoleOpen(true)}>+ Add new role</Button></Typography>
            </Grid>
            <TableContainer>
                <Table className={classes.table} size={'medium'} >
                    <EnhancedTableHead
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {(rows.length>0)?
                            (stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow key={row.id} hover onClick={()=>{
                                            setModalDetailOpen({open:true,data:row})
                                        }} >
                                            <TableCell scope="row" > {row.name}</TableCell>
                                        </TableRow>
                                    );
                                })):(    
                                <TableRow>
                                    <TableCell  colSpan={headCells.length} align="center">
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
            <ModalCreateRole 
                projects_id={projects_id} 
                open={newRoleOpen} 
                closeModal={() => setNewRoleOpen(false)}
                onCreate={(newRole)=>{
                    setRows([...rows,newRole])
                }} 
            />
            <ModalDetailRole 
                open={modalDetailOpen.open} 
                initialState={modalDetailOpen.data} 
                closeModal={()=>{
                    setModalDetailOpen({
                        open:false,
                        data:{ id:null, name:'' }
                    });
                }} 
                onUpdate={(value)=>{
                    console.log('onUpdate : ',value)
                    setRows(rows.map(function(item){
                        if(item.id==value.id) return value;
                        return item;
                    }));
            }}/>
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