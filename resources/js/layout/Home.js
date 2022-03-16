import React, { useEffect,useState,useContext } from "react";
import {useHistory} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TaskTable from '../components/tasks/TaskTable';
import ProjectTable from '../components/projects/ProjectTable';
import { makeStyles } from '@material-ui/styles';
import UserContext from './../context/UserContext';
import axios from 'axios';
import styleConfig from './Theme';
import Typography from '@material-ui/core/Typography';
import toast from 'react-hot-toast';

const useStyles = makeStyles((theme) => (styleConfig(theme)));

var groupTasks = function (arr) {
  return arr.reduce(function(results, task) {
      const projects_id = task.projects_id;
      const projects_title = task.projects_title;

      if(projects_id && projects_title){
        var project_check = results.find((item) => item.id == projects_id);
        if(project_check){
          for (let i = 0; i <= results.length; i++) {
            if (results[i].id === project_check.id) {
              results[i].tasks.push(task);
              break;
            }
          }
        }else{
          var project={
            id:projects_id,
            title:projects_title,
            tasks:[]
          }
          project.tasks.push(task);
          results.push(project);
        }
      }
      return results;
  }, [])
};

const Home = (props) => {
    const classes = useStyles();
    const [projectListOpen, setProjectListOpen] = useState(true);
    const handleProjectListOpen = () => setProjectListOpen(!projectListOpen);
    const [tasksDueSoon, setTasksDueSoon] = useState([]);

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
    },[])

    useEffect(()=>{
        getProjects();
        getTasks();
    },[]);

    useEffect(()=>{
        return history.listen(location=>{
                getProjects();
                getTasks();
        });
    },[history]);
    
    const getProjects = () => {
        let url =''
        const toast_loading=toast.loading('Loading...');
        if([1,2,3,4].includes(global.state.role?.id)){
            url = `${process.env.MIX_BACK_END_BASE_URL}projects`;
        }else{
            url = `${process.env.MIX_BACK_END_BASE_URL}users/${global.state.id}/projects`;
        }
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
        const url = `${process.env.MIX_BACK_END_BASE_URL}users/${global.state.id}/tasks`;
        axios.get(url)
            .then((result) => {
              const tasks=groupTasks(result.data);
              // console.log(tasks)
                setTasksDueSoon(tasks);
            }).catch(console.log);
    }


    const TasksList=({project})=>{
        const [taskListOpen, setTaskListOpen] = useState(true);
        const handleTaskListOpen = () => setTaskListOpen(!taskListOpen);
        return( 
            <React.Fragment key={project.id}>
                <ListItem button dense font="small" onClick={handleTaskListOpen} style={{ paddingBottom: '1.2em' }}> {taskListOpen ? <ExpandLess /> : <ExpandMore />}{project.title} </ListItem>
                <Collapse in={taskListOpen} timeout="auto">
                    <TaskTable data={project.tasks} withSearchbar={true} hiddenCells={['project']}/>
                </Collapse>
            </React.Fragment>
        )
    }
  
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <ListItem button dense font="small" onClick={handleProjectListOpen} 
                    style={{ paddingBottom: '1.2em' }}> {projectListOpen ? <ExpandLess /> : <ExpandMore />}Your projects </ListItem>
                    <Collapse in={projectListOpen} timeout="auto">
                        <ProjectTable data={global.state.projects} page_name="projects" showFormCreate={true}/>
                    </Collapse>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="body1">Tasks due soon</Typography>
                  {tasksDueSoon.map(project=><TasksList key={project.id} project={project}/>)}
                </Paper>
            </Grid>
        </React.Fragment >
    )
};

export default Home;
