import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';    
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import ModalDetailUser from './ModalDetailUser/ModalDetailUser';
import ModalCreateUser from './ModalCreateUser';
import UserContext from '../../context/UserContext';
import { visuallyHidden } from '@material-ui/utils';
import moment from 'moment';
import axios from 'axios';
import DoneIcon from '@material-ui/icons/Done';
import toast, { Toaster } from 'react-hot-toast';

function descendingComparator(a, b, orderBy) {
    if (orderBy === 'created_at' || orderBy === 'created_at'  || orderBy === 'last_login' ) {
        return (new Date(b[orderBy]).valueOf() - new Date(a[orderBy]).valueOf());
    }
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
    { id: 'id', align: 'left', disablePadding: true, label: 'ID' },
    { id: 'name', align: 'left', disablePadding: true, label: 'Name' },
    { id: 'role', align: 'left', disablePadding: false, label: 'Role' },
    { id: 'last_login', align: 'right', disablePadding: false, label: 'Last login' },
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
    let location = useLocation();
    let history=useHistory();
    let pathname = location.pathname;
    const [rows, setRows] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [clickedUser, setClickedUser] = useState({ id: null, name: '', email: '' });
    const [modalOpen, setModalOpen] = useState(false);
    const [modalCreateOpen,setModalCreateOpen]=useState(false);
    let global = useContext(UserContext);
    const [keywords,setKeywords]=useState('');

    const removeUserIdQueryString=()=>{
        const queryParams = new URLSearchParams(history.location.search)
        if (queryParams.has('users_id')) {
            queryParams.delete('users_id');
            history.replace({
                search: queryParams.toString(),
            })
        }
    }
    
    const getUsers = () => {
        const toast_loading = toast.loading('Loading...');
        const url = `${process.env.MIX_BACK_END_BASE_URL}users`;
        axios.get(url)
            .then((result) => {
                setRows(result.data);
                toast.dismiss(toast_loading);
            }).catch((error) => {
                toast.dismiss(toast_loading);
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    function handleUserUpdate(data, action) {
        var newRows = [];
        switch (action) {
            case 'create':
                newRows=rows;
                newRows.push(data)
            case 'update':
                newRows = rows.map((row => {
                    if (row.id == data.id) return data
                    return row
                }));
                break;
            case 'delete':
                newRows = rows.filter((row => {
                    if (row.id != data.id) return row
                }));
                removeUserIdQueryString()
                break;
            default:
                newRows = rows;
                break;
        }
        setRows(newRows)
    }

    const handleModalOpen = (data) => {
        const { user, open } = data;
        setModalOpen(open);
        setClickedUser(user);
        if(!open) removeUserIdQueryString()
    }

    useEffect(()=>{
        getUsers()
        return history.listen(location=>{
            getUsers();
        });
    },[history]);

    useEffect(()=>{
        const query = new URLSearchParams(location.search);
        const paramUserId = query.get('users_id');
        if (paramUserId){ 
            const currentUser=rows.filter((user)=>user.id==paramUserId);
            if(currentUser.length>0) handleModalOpen({user: currentUser[0],open:true});
        }
    },[rows])

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
             
            <Button 
                variant="contained"
                color="primary"
                onClick={()=>{setModalCreateOpen(true)}}>
                    <b style={{marginRight:'0.5em',fontStyle:'1.2em'}}>+</b> Create a new user
            </Button>
            
            <TextField 
                variant="standard" InputProps={{endAdornment:<SearchIcon/>}} 
                style={{ margin:'1em', float:'right', minWidth:'300px' }}
                placeholder="Search by title"
                onInput={e=>setKeywords(e.target.value)}
                onKeyUp={e=>setKeywords(e.target.value)}
            />
            <TableContainer>
                <Table className={classes.table} aria-labelledby="tableTitle" size={'small'} padding="normal" >
                    <EnhancedTableHead classes={classes} order={order} orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {rows.length?stableSort(rows, getComparator(order, orderBy))
                            .filter(row=>{
                                if(
                                    row.name?.toLowerCase().includes(keywords.toLowerCase()) 
                                        || row.email?.toLowerCase().includes(keywords.toLowerCase())
                                        || row.role?.name?.toLowerCase().includes(keywords.toLowerCase())
                                    ){
                                    return row;
                                }
                            })
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                let searchParams = new URLSearchParams(location.search);
                                searchParams.set('users_id', row.id);
                                return (
                                    <TableRow hover key={row.id}>
                                        <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}>
                                            {row.id}
                                        </TableCell>
                                        <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}>
                                            <Link to={{ pathname: pathname, search: searchParams.toString() }} 
                                                style={{ textDecoration: 'none', color: '#393939' }} 
                                                onClick={() => handleModalOpen({ user: row, open: true })}>
                                                {row.name} ({row.email})
                                            </Link>
                                        </TableCell>
                                        <TableCell align="left">{row.role?.name}</TableCell>
                                        <TableCell align="right">{row.last_login ? moment(row.last_login).format('DD MMM YYYY') : ''}</TableCell>
                                    </TableRow>
                                );
                            }):(
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
                page={page}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[10, 20, 30]}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            
            {(modalOpen)?(
                <ModalDetailUser
                    open={modalOpen} id={clickedUser.id} initialState={clickedUser}
                    closeModal={() => handleModalOpen({ user: { id: null, name: '', email: '' }, open: false })}
                    onUpdate={handleUserUpdate}
                    asProfile={false}
                />
            ):<></>}
            
            {(modalCreateOpen)?(
                <ModalCreateUser
                    open={modalCreateOpen}
                    closeModal={() => setModalCreateOpen(false)}
                    onCreate={handleUserUpdate}
                />
            ):<></>}
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