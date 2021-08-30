import React, { useEffect,useState,useContext } from "react";
import {useHistory} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TaskTable from '../components/tasks/TaskTable';
import ProjectList from '../components/projects/ProjectList';
import { makeStyles } from '@material-ui/styles';
import UserContext from './../context/UserContext';
import axios from 'axios';
import styleConfig from './Theme';
import toast, { Toaster } from 'react-hot-toast';

const useStyles = makeStyles((theme) => (styleConfig(theme)));

const Home = (props) => {
    const classes = useStyles();
    const [taskListOpen, setTaskListOpen] = useState(true);
    const [projectListOpen, setProjectListOpen] = useState(true);
    const [tasks, setTasks] = useState([]);

    const handleTaskListOpen = () => setTaskListOpen(!taskListOpen);

    const handleProjectListOpen = () => setProjectListOpen(!projectListOpen);

    const global=useContext(UserContext);
    const history =useHistory();

    useEffect(()=>{
        if(global.state.authenticated==false){ 
            history.push('/auth');
        }
        const queryParams = new URLSearchParams(history.location.search)
        if (queryParams.has('code')) {
            var codeResponse=queryParams.get('code');
            global.dispatch({type:'store-github-auth',payload:{code:codeResponse}})
        }
        getProjects();
        getTasks();
    },[])

    const getProjects = () => {
        let url =''
        if([1,2,8,9,5].includes(global.state.occupation?.id)){
            url = process.env.MIX_BACK_END_BASE_URL + 'projects';
        }else{
            url = process.env.MIX_BACK_END_BASE_URL + 'users/' + global.state.id + '/projects';
        }
        const toast_loading = toast.loading('Loading...',{ id: 'clipboard' });
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                global.dispatch({ type: 'store-projects', payload: result.data });
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

    const getTasks = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'users/' + global.state.id + '/tasks';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setTasks(result.data);
            }).catch((error) => {
                console.log(error);
            });
    }


    return (
        <React.Fragment>
             
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <ListItem button dense font="small" onClick={handleProjectListOpen} 
                    style={{ paddingBottom: '1.2em' }}> {projectListOpen ? <ExpandLess /> : <ExpandMore />}Your projects </ListItem>
                    <Collapse in={projectListOpen} timeout="auto">
                        <ProjectList data={global.state.projects}></ProjectList>
                    </Collapse>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <ListItem button dense font="small" onClick={handleTaskListOpen} 
                        style={{ paddingBottom: '1.2em' }}> {taskListOpen ? <ExpandLess /> : <ExpandMore />}Task Due Soon </ListItem>
                    <Collapse in={taskListOpen} timeout="auto">
                        <TaskTable data={tasks}/>
                    </Collapse>
                </Paper>
            </Grid>
        </React.Fragment >
    )
};

export default Home;
