import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, BrowserRouter as Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import UserContext from '../../context/UserContext';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import BarChart from './../widgets/BarChart';
import axios from 'axios';

const ProjectList = (props) => {
    const global = useContext(UserContext);
    let history = useHistory();
    const [projects,setProjects]=useState([]);
    const [completeTasks,setCompleteTasks]=useState({complete:[],incomplete:[]});
    
    useEffect(()=>{
        setCompleteTasks(getCompleteTasksForChart(projects));
    },[projects])

    const getProjects = () => {
        let url = process.env.MIX_BACK_END_BASE_URL + 'projects-overview';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setProjects(result.data)
            }).catch((error) => {
                const payload = { error: error, snackbar: null, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }

    useEffect(() => {
        global.dispatch({ type: 'remember-authentication' });
        if (!global.state.authenticated === true) history.push('/auth');
        getProjects();
    }, []);

    return (
        <Grid container spacing={2}>
             <Grid lg={12} md={12} sm={12} xs={12} item>
                <Router>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                        <Button component={Link}  color="primary"
                            to="/projects">
                            Projects
                        </Button>
                        <Typography>
                            Reports
                        </Typography>
                    </Breadcrumbs>
                </Router>
            </Grid>
            {
                projects.map(
                    (row, index) => {
                        return (
                            <Grid item xl={3} md={3} sm={4} xs={4} key={row.id}>
                                <Link to={`/reports/${row.id}/`} style={{ textDecoration: 'none' }}>
                                    <Card style={{ height: '100%' }}>
                                        <CardActionArea style={{ height: '100%' }}>
                                            <CardContent component='div' align='center'>
                                                <Typography gutterBottom variant="h6" align="center"> {row.title} </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    }
                )
            }
             <Grid lg={12} md={12} sm={12} xs={12} item>
                <BarChart data={completeTasks} prop1={'complete'} prop2={'incomplete'}/>
            </Grid >
        </Grid >
    );
}

const getCompleteTasksForChart=(projects)=>{
    var y1=[]
    var y2=[]
    projects.forEach(project => {
        y1.push({y:project.total_complete_tasks, label:project.title});
        y2.push({y:project.total_incomplete_tasks, label:project.title});
    });
    var results={
        complete:y1,
        incomplete:y2
    }
    return results;
}
export default ProjectList;