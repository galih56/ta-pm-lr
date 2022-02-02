import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../../context/UserContext';
import axios from 'axios';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableRow from '@material-ui/core/TableRow';
import DialogConfirm from './DialogConfirm';
import { visuallyHidden } from '@material-ui/utils';
import FormAddClient from './FormAddClient';
import toast from 'react-hot-toast';

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
    { id: 'Institution', align: 'left', disablePadding: false, label: 'Institution' },
    { id: 'City', align: 'left', disablePadding: false, label: 'City' },
    {id : 'action',align:'right',disablePadding:false,label:'Action'}
];

const useStyles = makeStyles((theme) => ({
    root: { width: '100%', paddingLeft: '1em', paddingTop: '1em' },
    paper: { width: '100%'},
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

export default function EnhancedTable(props) {
    const { detailProject }=props;
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openFormAddClient,setOpenFormAddClient]=useState(false);
    const [deleteConfirmDialog,setDeleteConfirmDialog]=useState({
        open:false,
        data:null
    })

    let global = useContext(UserContext);

    useEffect(() => {
        getClients();
    }, []);

    const getClients = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${detailProject.id}/clients`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setRows(result.data);
                global.dispatch({type:'store-clients-to-project',payload:{projects_id:detailProject.id,clients:result.data}})
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }    
            });
    }

    const handleRemoveClient=(clients_id)=>{
        const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${detailProject.id}/clients/${clients_id}`;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            toast.promise(axios.delete(url),
            {
                loading: 'Deleting...',
                success: (result)=>{
                    setRows(rows.filter((row)=>{
                        if(row.id!=clients_id){
                            return row;
                        }
                    }));  
                    global.dispatch({type:'remove-client-from-project',payload:{projects_id:detailProject.id,clients_id:clients_id}})
                    return <b>Successfully deleted</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
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

    const handleDeleteDialogOpen=()=>setDeleteConfirmDialog(true);
    return (
        <Grid container>  
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                   
            {([1,2,4,5].includes(global.state.role?.id ))?(    
                    <FormAddClient
                        open={openFormAddClient}
                        handleClose={()=>setOpenFormAddClient(false)}
                        detailProject={detailProject}
                        onCreate={newClient=>setRows([...rows,...newClient])}/> 
                ):<></>}
                <div className={classes.root}>
                    <Typography variant="h6">Clients</Typography>
                    {([1,2,4,5].includes(global.state.role?.id ))?(
                        <Button variant="contained" color="primary" onClick={()=>setOpenFormAddClient(true)}>Add</Button>   
                        ):<></>}
                    <TableContainer>
                        <Table className={classes.table} aria-labelledby="tableTitle" size={'small'} padding="normal" >
                            <EnhancedTableHead classes={classes} order={order} orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {(rows.length)?stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover key={row.id}>
                                                <TableCell align="left">
                                                    {row.institution}
                                                </TableCell>
                                                <TableCell align="left">
                                                    {row.city}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <IconButton onClick={()=>setDeleteConfirmDialog({open:true,data:row})}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    }):(
                                        <TableRow>
                                            <TableCell align="center"  colSpan={headCells.length}>
                                                <Typography variant="body1"><b>There is no data to show</b></Typography>
                                            </TableCell>
                                        </TableRow>
                                    )}        
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination page={page} component="div" count={rows.length} rowsPerPage={rowsPerPage} onPageChange={handleChangePage} rowsPerPageOptions={[10, 20, 30]} onRowsPerPageChange={handleChangeRowsPerPage}/>
                </div>
            </Grid>
            <DialogConfirm open={deleteConfirmDialog.open}handleClose={()=>{setDeleteConfirmDialog({open:false,data:null})}} handleConfirm={()=>handleRemoveClient(deleteConfirmDialog.data?.id)} title={`Are you sure?`} children={`Data will be deleted permanently`}/>
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
