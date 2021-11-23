import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../../context/UserContext';
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
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { visuallyHidden } from '@material-ui/utils';
import ModalDetailMember from './ModalDetailMember/ModalDetailMember';
import TaskList from '../../tasks/TaskList';
import moment from 'moment';
import axios from 'axios';
import ModalCreateMember from './ModalCreateMember';
import toast, { Toaster } from 'react-hot-toast';

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
    { id: 'role', align: 'left', disablePadding: false, label: 'Role' },
    { id: 'last login', align: 'right', disablePadding: false, label: 'Last login' },
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
                <TableCell></TableCell>
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
    const handleDetailTaskOpen = props.handleDetailTaskOpen;
    const projects_id = props.projects_id;
    const memberChange = props.memberChange;
    const setMemberChange = props.setMemberChange;
    const data = props.data;
    let global = useContext(UserContext);

    let initStateUser = { id: null, name: '', email: '', occupation: { id: null, name: '' } }
    const [clickedUser, setClickedUser] = useState(initStateUser);
    const [modalOpen, setModalOpen] = useState(false);
    const [newMemberOpen, setNewMemberOpen] = useState(false);

    const [rows, setRows] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('end');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleModalOpen = (user, open) => {
        setModalOpen(open);
        setClickedUser(user);
    }

    const showUserProfile = () => {
        if (clickedUser.id != null && clickedUser.id !== undefined && modalOpen == true) {
            return (
                <ModalDetailMember
                    open={modalOpen}
                    closeModal={() => handleModalOpen(initStateUser, false) }
                    initialState={clickedUser} 
                    handleDetailTaskOpen={handleDetailTaskOpen}
                    onUpdate={(newValue)=>{
                        setRows(rows.map(function(row){
                            if(row.id==newValue.id) return newValue;
                            else return row;
                        }));
                    }}
                    onDelete={(deletedValue)=>{
                        setRows(rows.filter(function(row){
                            if(row.id!=deletedValue.id)return row;
                        }))
                    }}
                    />
            )
        }
    }

    useEffect(() => {
        setRows(data);
    }, [data]);

    useEffect(()=>{
        if(memberChange===true){
            getMembers()
        }
        console.log(memberChange);
    },[memberChange])

    const getMembers=()=>{
        const url = process.env.MIX_BACK_END_BASE_URL + 'projects/' + projects_id + '/members';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setRows(result.data);
                if(setMemberChange) setMemberChange(false);
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
             
            {([1,2,4,5].includes(global.state.occupation?.id))?(
                <Grid>
                    <Typography variant="h6">Members  <Button color="primary" component="span" 
                        onClick={() => setNewMemberOpen(true)}>+ Add new member</Button></Typography>
                </Grid>
            ):<></>}
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
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <Row key={row.id} data={row} handleDetailTaskOpen={handleDetailTaskOpen} handleModalOpen={handleModalOpen} projects_id={projects_id}/>
                                );
                            })}
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
            <ModalCreateMember 
                projects_id={projects_id} 
                open={newMemberOpen} 
                handleClose={() => setNewMemberOpen(false)} 
                exceptedUsers={rows} 
                onCreate={(newMembers)=>{
                    setRows([...rows,...newMembers])
                }}
            />
            {showUserProfile()}
        </div>
    );
}

function Row(props) {
    const { data, handleDetailTaskOpen, handleModalOpen } = props;
    const [open, setOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const projects_id=props.projects_id;
    let global = useContext(UserContext);

    const getTasks = (id) => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'project-members/' + id + '/tasks';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setTasks(result.data);
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    return (
        <React.Fragment>
            <TableRow
                hover key={data.id}
            >
                <TableCell>
                    <IconButton aria-label="expand row" size="small"
                        onClick={() => {
                            getTasks(data.project_members_id);
                            setOpen(!open);
                        }}
                    > {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" style={{ cursor: 'pointer' }}
                    onClick={() => {
                        handleModalOpen(data, true);
                    }}> {data.name} <br />({data.email}) </TableCell>
                <TableCell>{data.occupation?data.occupation?.name:'-'}</TableCell>
                <TableCell align="right">
                    {data.last_login ? moment(data.last_login).format('DD MMM YYYY') : ''}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto">
                    <Grid container>
                        <Grid xs={12} sm={12} md={12} lg={12} lg={12} item style={{ padding: '1em' }}>
                            <TaskList projects_id={projects_id} data={tasks} handleDetailTaskOpen={handleDetailTaskOpen} />
                        </Grid>
                    </Grid>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};