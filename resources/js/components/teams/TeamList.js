import axios from 'axios';
import React,{useState,useEffect,useContext} from 'react';
import { Link, useHistory, BrowserRouter as Router } from "react-router-dom";
import UserContext from '../../context/UserContext';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import FormCreateTeam from './FormCreateTeam';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Alert from '@material-ui/core/Alert';
import AlertTitle from '@material-ui/core/AlertTitle';
import toast from 'react-hot-toast';

export default function TeamTable() {
    const [openFormCreate,setOpenFormCreate]=useState(false);
    const [rows,setRows]=useState([])
    const global = useContext(UserContext);
    let history=useHistory();

    const getTeams = () => {
        const toast_loading=toast.loading('Loading...');
        const url = `${process.env.MIX_BACK_END_BASE_URL}teams`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setRows(result.data);
                toast.dismiss(toast_loading);
            }).catch(e=>{
                toast.dismiss(toast_loading);
                console.error(e);
            });
    }

    useEffect(()=>{
        getTeams()
        return history.listen(location=>{
            getTeams();
        });
    },[history]);

    const onHoveredStyle = { cursor: 'pointer' };
    return (
        <Grid container spacing={2}>
            <Grid xl={12}item lg={12} md={12} sm={12} xs={12}>
                <Paper style={{ padding: '1em' }}>
                    <Grid container spacing={2}>
                        <Grid xl={12}item lg={12} md={12} sm={12} xs={12}>
                            <Router>
                                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="teams">
                                    <Button component={Link}  color="primary"
                                        to="/projects">
                                        Projects
                                    </Button>
                                    <Typography color="textPrimary">Teams</Typography>
                                </Breadcrumbs>
                            </Router>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Typography variant="h5">Teams</Typography>
                            {([1,2,4].includes(global.state.role?.id))?(
                                <>
                                    <Button onClick={()=>setOpenFormCreate(true)}>Create a new team</Button>
                                    <FormCreateTeam 
                                        open={openFormCreate}
                                        handleClose={()=>setOpenFormCreate(false)}
                                        onCreate={(newTeam)=>{
                                            setRows([...rows,newTeam])
                                        }}/>
                                </>
                                ):<></>}
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rows.length)?rows.map((row) => (
                                        <>
                                        <TableRow key={row.id} style={onHoveredStyle}>
                                            <TableCell>
                                                <Typography variant="body2" display="block">
                                                    <Link to={`/teams/` + row.id} style={{ textDecoration: 'none', color: 'black' }}>
                                                        <strong>{row.name}</strong>
                                                    </Link>
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                        {row.description?(
                                            <TableRow>
                                                <TableCell align="left"  colSpan="2" style={{paddingLeft:'1em'}}>
                                                {row.description}
                                                </TableCell>
                                            </TableRow>
                                        ):null}
                                        </>
                                    )):(
                                        <Grid item xl={12} md={12} sm={12} xs={12}>
                                            <Alert severity="info">
                                                <AlertTitle><b>Info</b></AlertTitle>
                                                There is no data to show.
                                            </Alert>
                                        </Grid>
                                    )}
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid >
                </Paper>
        </Grid>
    </Grid >
    );
}


