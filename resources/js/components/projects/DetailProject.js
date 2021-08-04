import React, { useState, useEffect, useContext, lazy, Suspense } from 'react';
import { Link, useHistory,Switch, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ModalDetailTask from '../tasks/modalDetailTask/ModalDetailTask';
import BreadCrumbs from './BreadCrumbs';
import LinearProgress from '@material-ui/core/LinearProgress';
import UserContext from '../../context/UserContext';
import AddIcon from '@material-ui/icons/Add';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const ModalCreateList = lazy(() => import('./ModalCreateList'));
const ModalCreateMeeting = lazy(() => import('./../meetings/ModalCreateMeeting'));
const ModalDetailMeeting = lazy(() => import('./../meetings/ModalDetailMeeting/ModalDetailMeeting'));
const Board = lazy(() => import('../widgets/board/Kanban'));
const GanttChart = lazy(() => import('../widgets/GanttChart'));
const Calendar = lazy(() => import('../widgets/Calendar'));
const Files = lazy(() => import('../widgets/Files'));
const Others = lazy(() => import('./Others'));
const Timeline = lazy(() => import('./timeline/Timeline'));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {children}
        </Box>
    );
}

const getProjectFromState = (projects, projects_id) => {
    var data = null;
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        if (project.id == projects_id) {data = project;break;}
    }
    return data
}

const getCurrentTabIndex = (location, history, projects_id) => {
    var tabIndex = 0;
    var currentUrl = location.pathname;
    currentUrl = currentUrl.split('/');
    var currentTab = currentUrl[currentUrl.length - 1];

    switch (currentTab) {
        case `timeline`:
            tabIndex = 0;
            break;
        case `gantt`:
            tabIndex = 1;
            break;
        case `board`:
            tabIndex = 2;
            break;
        case `meeting`:
            tabIndex = 3;
            break;
        case `files`:
            tabIndex = 4;
            break;
        case `others`:
            tabIndex = 5;
            break;
        default:
            history.push(`/projects/${projects_id}/timeline`);
            tabIndex = 0;
            break;
    }
    return tabIndex;
}

const clickedTaskInitialState={ 
    id:null, projects_id: '', lists_id: null, list:null,
    title: '', description: '', label: '', complete: false, progress: 0,
    start:null,end:null,actual_start:null,actual_end:null, start_label:'',end_label:'',
    list: null, tags: [], members: [], parentTask:'',creator:null,is_subtask:false,
    cards: [], logs: [], comments: [], attachments: [],
    onTaskDelete:()=>console.log('no-event'),
    onTaskUpdate:()=>console.log('no-event'),
}

const clickedMeetingInitialState={
    id: null, name: null, type: null, size: null, source: null,
    icon: null, path: null, createdAt: null, updatedAt: null, user:null,
    link:''
};

const DetailProject = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    let global = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    const { match: { params } } = props;
    const [detailProject, setDetailProject] = useState({ id: null, title: null, description: null, columns: [], members: [], createdAt: '', updatedAt: '' });
    const [showModalCreateList, setShowModalCreateList] = useState(false);
    const [showModalCreateMeeting, setShowModalCreateMeeting] = useState(false);
    const [tabState, setTabState] = useState(getCurrentTabIndex(location, history, params.id));
    const [clickedTask, setClickedTask] = useState(clickedTaskInitialState);
    const [detailTaskOpen,setDetailTaskOpen]=useState(false)
    const [clickedMeeting, setClickedMeeting] = useState(clickedMeetingInitialState);

    const handleSnackbar = (message, variant) => enqueueSnackbar(message, { variant });

    const getUserMemberRole=(project)=>{
        var user=null;
        const members=project.members;
        if(typeof members !== 'undefined'){
            for (let i = 0; i < members.length; i++) {
                const member = members[i];
                if(member.id==global.state.id){
                    user=member;
                    break;
                }
            }
            if(user){
                var role={...user.role,project: { id: project.id,  title: project.title }}
                global.dispatch({type:'store-project-member-role',payload:role})
            }
        }
    }

    const getDetailProject = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'projects/' + params.id;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                const data = result.data;
                global.dispatch({ type: 'store-detail-project', payload: data })
                setDetailProject(data);
                getUserMemberRole(data);
            }).catch((error) => {
                const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
            
        if (!window.navigator.onLine) {
            const currentProject=getProjectFromState(global.state.projects, params.id);
            getUserMemberRole(currentProject)
            if(currentProject)setDetailProject(currentProject);
            handleSnackbar(`You're currently offline. Please check your internet connection.`, 'warning');
        }
    }

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const paramTaskId = query.get('tasks_id');
        const paramMeetingId = query.get('meetings_id');
        if (paramTaskId) handleDetailTaskOpen({ task:{...clickedTask, id: paramTaskId}, open: true });
        if (paramMeetingId) handleDetailMeetingOpen({ meeting:{
            id:paramMeetingId,...clickedMeeting
        }, open: true });
        getDetailProject();
    }, []);

    useEffect(()=>{
        const currentProject=getProjectFromState(global.state.projects, params.id);
        if(currentProject) setDetailProject(currentProject);
    },[global.state.projects]);

    const handleModalCreateList = (open) => setShowModalCreateList(open);
    const handleModalCreateMeeting = (open) => setShowModalCreateMeeting(open);
    const handleChange = (event, newValue) => setTabState(newValue);

    const handleDetailTaskOpen = (taskInfo) => {
        const {task, open,onTaskUpdate,onTaskDelete } = taskInfo;
        setDetailTaskOpen(open);
        setClickedTask({ ...task, onTaskDelete:onTaskDelete, onTaskUpdate:onTaskUpdate });
    };

    const handleDetailMeetingOpen = (meetingInfo) => {
        setDetailMeetingOpen(meetingInfo.open);
        setClickedMeeting({ ...meetingInfo.meeting });
    };


    return (
        <Router>
            <Paper>
                <Tabs
                    value={tabState}
                    onChange={handleChange} >
                    <Tab component={Link} label="Timeline" to={`timeline`} />
                    <Tab component={Link} label="Gantt" to={`gantt`} />
                    <Tab component={Link} label="Board" to={`board`} />
                    <Tab component={Link} label="Meeting" to={`meeting`} />
                    <Tab component={Link} label="Files" to={`files`} />
                    <Tab component={Link} label="Others" to={`others`} />
                </Tabs>
            </Paper>
            <Suspense fallback={<LinearProgress />}>
                <Switch>
                    <Route
                        path={"/projects/:id/timeline"}
                        render={() => {
                            return (
                                <TabPanel
                                    value={tabState}
                                    index={0}
                                    style={{  padding: '0.5em', minHeight:'500px !important' } }>
                                    <Grid container >   
                                        <BreadCrumbs projectName={detailProject.title} tabName="Timeline" style={{marginTop:'1em'}}/>
                                        <Grid item xl={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                                            {(global.state.occupation?.name.toLowerCase()=='manager' ||global.state.occupation?.name.toLowerCase()=='project manager' )?(
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={()=>handleModalCreateList(true)}
                                                    style={{ marginBottom: '1em' }}
                                                    startIcon={<AddIcon />}> Add new list </Button>
                                            ):<></>}
                                            
                                        </Grid>
                                        <Timeline 
                                            detailProject={{
                                                id:detailProject.id,
                                                start:detailProject.start,end:detailProject.end,
                                                actual_start:detailProject.actual_start,
                                                actual_end:detailProject.actual_end,
                                                members:detailProject.members
                                            }}
                                            data={detailProject.columns} 
                                            handleDetailTaskOpen={handleDetailTaskOpen}
                                        />
                                    </Grid>
                                </TabPanel>
                            )
                        }} />
                    <Route
                        path={`/projects/:id/gantt`}
                        render={() => {
                            return (
                                <TabPanel
                                    value={tabState}
                                    index={1}
                                    style={{  padding: '0.5em', minHeight:'500px !important' } }>
                                    <Grid container >   
                                        <BreadCrumbs projectName={detailProject.title} tabName="Gantt"/>
                                        <Grid item xl={12} md={12} sm={12} xs={12} >
                                            <GanttChart detailProject={detailProject} handleDetailTaskOpen={handleDetailTaskOpen} />
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                            )
                        }} />
                    <Route
                        path={`/projects/:id/board`}
                        render={() => {
                            return (
                                <TabPanel
                                    value={tabState}
                                    index={2}
                                    className={{  padding: '0.5em', minHeight:'500px !important' } }
                                >
                                    <Grid container>
                                        <BreadCrumbs projectName={detailProject.title} tabName="Board"/>
                                        <Grid item xl={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                                            <Board detailProject={detailProject} handleDetailTaskOpen={handleDetailTaskOpen}/>
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                            )
                        }} />
                    <Route
                        path={"/projects/:id/meeting"}
                        render={() => {
                            return (
                                <TabPanel
                                    value={tabState}
                                    index={3}
                                    style={{  padding: '0.5em', minHeight:'500px !important' } }>
                                    <Grid container >   
                                        <BreadCrumbs projectName={detailProject.title} tabName="Meeting" style={{marginTop:'1em'}}/>
                                        <Grid item xl={12} md={12} sm={12} xs={12} >
                                            <Button  variant="contained" color="primary" onClick={()=>handleModalCreateMeeting(true)}>Add new meeting</Button>
                                            <Calendar detailProject={detailProject} handleDetailMeetingOpen={handleDetailMeetingOpen} />
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                            )
                        }} />
                    <Route
                        path={"/projects/:id/files"}
                        render={() => {
                            return (
                                <TabPanel
                                    value={tabState}
                                    index={4}
                                    style={{  padding: '0.5em', minHeight:'500px !important' } }>
                                    <Grid container >   
                                        <BreadCrumbs projectName={detailProject.title} tabName="Files" style={{marginTop:'1em'}}/>
                                        <Grid item xl={12} md={12} sm={12} xs={12} >
                                            <Files projects_id={detailProject.id} handleDetailTaskOpen={handleDetailTaskOpen} />
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                            )
                        }} />
                    <Route
                        path={"/projects/:id/others"}
                        render={() => {
                            return (
                                <TabPanel
                                    value={tabState}
                                    index={5}
                                    style={{  padding: '0.5em', minHeight:'500px !important' } }>
                                    <BreadCrumbs projectName={detailProject.title} tabName="Others" style={{marginTop:'1em'}}/>
                                    <Others detailProject={detailProject}   handleDetailTaskOpen={handleDetailTaskOpen}/>
                                </TabPanel>
                            )
                        }} />
                </Switch>
                <ModalCreateList
                    projects_id={params.id}
                    open={showModalCreateList}
                    handleClose={()=>handleModalCreateList(false)} />
                <ModalCreateMeeting
                    detailProject={{
                        id:detailProject.id,
                        members:detailProject.members,
                        start:detailProject.start,
                        end:detailProject.end
                    }}
                    projects_id={params.id}
                    open={showModalCreateMeeting}
                    handleClose={()=>handleModalCreateMeeting(false)} />
                        
                {(clickedTask.id && detailTaskOpen == true)?(
                    <ModalDetailTask
                        open={detailTaskOpen}
                        closeModalDetailTask={() => {
                            handleDetailTaskOpen({task :clickedTaskInitialState,open:false})
                        }}
                        projects_id={detailProject.id}
                        detailProject={{
                            id:detailProject.id,
                            start:detailProject.start,end:detailProject.end,
                            members:detailProject.members,
                        }}
                        initialState={clickedTask} 
                        onTaskUpdate={clickedTask.onTaskUpdate}
                        onTaskDelete={clickedTask.onTaskDelete}
                        />
                ):<></>}
            </Suspense>
        </Router>
    );
        
}

export default DetailProject;