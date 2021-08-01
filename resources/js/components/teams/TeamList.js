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
import axios from 'axios';
import FormCreateTeam from './FormCreateTeam';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function TeamTable() {
    const [openFormCreate,setOpenFormCreate]=useState(false);
    const [rows,setRows]=useState([])
    const global = useContext(UserContext);
    const getTeams = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'teams';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setRows(result.data);
            }).catch(console.log);
    }

    useEffect(()=>{
        getTeams()
    },[]);

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
                            {(global.state.occupation?.name?.toLowerCase().includes('manager'))?(
                                    <Button onClick={()=>setOpenFormCreate(true)}>Create a new team</Button>
                                ):<></>}
                            <FormCreateTeam 
                                open={openFormCreate}
                                handleClose={()=>setOpenFormCreate(false)}
                                onCreate={(newTeam)=>{
                                    setRows([...rows,newTeam])
                                }}/>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id} style={onHoveredStyle}>
                                            <TableCell>
                                                <Typography variant="body2" display="block">
                                                    <Link to={`/teams/` + row.id} style={{ textDecoration: 'none', color: 'black' }}>
                                                        <strong>{row.name}</strong><br />
                                                        {row.description}
                                                    </Link>
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid >
                </Paper>
        </Grid>
    </Grid >
    );
}


