import React, { useState, useEffect, useContext, lazy, Suspense } from 'react';
import { Link, useHistory,Switch, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import BreadCrumbs from './BreadCrumbs';
import LinearProgress from '@material-ui/core/LinearProgress';
import UserContext from '../../context/UserContext';
import AddIcon from '@material-ui/icons/Add';
import toast from 'react-hot-toast';
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
const ModalImportExcel = lazy(() => import('./timeline/ModalImportExcel'));
const ModalDetailTask = lazy(() => import('../tasks/modalDetailTask/ModalDetailTask'));

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
    let global = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    const { match: { params } } = props;
    const [detailProject, setDetailProject] = useState({ 
        id: null, title: null, description: null, 
        columns: [], members: [], clients:[],
        created_at: '', updated_at: '' 
    });
    const [showModalCreateList, setShowModalCreateList] = useState(false);
    const [showModalImportExcel, setShowModalImportExcel] = useState(false);
    
    const [showModalCreateMeeting, setShowModalCreateMeeting] = useState(false);
    const [tabState, setTabState] = useState(getCurrentTabIndex(location, history, params.id));
    const [clickedTask, setClickedTask] = useState(clickedTaskInitialState);
    const [detailTaskOpen,setDetailTaskOpen]=useState(false)
    const [detailMeetingOpen,setDetailMeetingOpen]=useState(false)
    const [clickedMeeting, setClickedMeeting] = useState(clickedMeetingInitialState);
    const getDetailProject = () => {
        var url = `${process.env.MIX_BACK_END_BASE_URL}projects/${params.id}`;
        if(![1,2,3,4].includes(global.state.role?.id)){
            url+='?users_id='+global.state.id;
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                const data = result.data;
                setDetailProject(data);
                global.dispatch({ type: 'store-detail-project', payload: data });
                global.dispatch({type:'store-current-selected-project',payload:params.id});
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
            
        if (!window.navigator.onLine) {
            const currentProject=getProjectFromState(global.state.projects, params.id);
            if(currentProject)setDetailProject(currentProject);
            toast.error(`You're currently offline. Please check your internet connection.`);
        }
    }

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const paramTaskId = query.get('tasks_id');
        const paramMeetingId = query.get('meetings_id');
        if (paramTaskId) handleDetailTaskOpen({ task:{...clickedTask, id: paramTaskId}, open: true });
        if (paramMeetingId) handleDetailMeetingOpen({ meeting : { id:paramMeetingId,...clickedMeeting }, open: true });
        getDetailProject();
    }, []);

    useEffect(()=>{
        const currentProject=getProjectFromState(global.state.projects, params.id);
        if(currentProject) setDetailProject(currentProject);
    },[global.state.projects]);

    const handleModalCreateList = (open) => setShowModalCreateList(open);
    const handleModalImportExcel = (open) => setShowModalImportExcel(open);
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
                    <Tab component={Link} label="Other" to={`others`} />
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
                                            {([2,4].includes(global.state.role?.id))?(
                                                <>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={()=>handleModalCreateList(true)}
                                                        style={{ marginBottom: '1em' }}
                                                        startIcon={<AddIcon />}> Add new list </Button>
                                                    <Button
                                                        href={`${process.env.MIX_BACK_END_BASE_URL}projects/${params.id}/export`}
                                                        target="_blank"
                                                        variant="contained"
                                                        color="primary"
                                                        style={{ marginBottom: '1em' ,marginLeft:'1em' }}>
                                                        Export
                                                    </Button>
                                                    <Button
                                                        color="primary"
                                                        onClick={()=>setShowModalImportExcel(true)}   
                                                        style={{ marginBottom: '1em' ,marginLeft:'1em'}}> 
                                                            Import 
                                                    </Button>
                                                </>
                                            ):<></>}
                                            
                                        </Grid>
                                        <Timeline 
                                            detailProject={{
                                                id:detailProject.id,
                                                start:detailProject.start,end:detailProject.end,
                                                actual_start:detailProject.actual_start,
                                                actual_end:detailProject.actual_end,
                                                members:detailProject.members,
                                                clients:detailProject.clients
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
                                            <GanttChart projects_id={detailProject.id} lists={detailProject.columns} handleDetailTaskOpen={handleDetailTaskOpen} />
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
                                            <Board detailProject={{
                                                id:detailProject.id,
                                                title:detailProject.title,
                                                members:detailProject.members,
                                            }} handleDetailTaskOpen={handleDetailTaskOpen}/>
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
                <ModalImportExcel
                    projects_id={params.id}
                    open={showModalImportExcel}
                    closeModal={()=>handleModalImportExcel(false)} 
                />
                <ModalCreateList
                    projects_id={params.id}
                    open={showModalCreateList}
                    closeModal={()=>handleModalCreateList(false)} 
                    detailProject={{id:detailProject.id,members:detailProject.members,clients:detailProject.clients,start:detailProject.start,end:detailProject.end}}
                />
                <ModalCreateMeeting
                    detailProject={{
                        id:detailProject.id,
                        members:detailProject.members,
                        start:detailProject.start,
                        end:detailProject.end,
                        actual_start:detailProject.actual_start,
                        actual_end:detailProject.actual_end
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
                            clients:detailProject.clients,
                        }}
                        setDetailProject={setDetailProject}
                        initialState={clickedTask} 
                        onTaskUpdate={clickedTask.onTaskUpdate}
                        onTaskDelete={clickedTask.onTaskDelete}
                        />
                ):<></>}
                {(clickedMeeting.id && detailMeetingOpen)?
                <ModalDetailMeeting
                    open={detailMeetingOpen}
                    closeModal={()=>handleDetailMeetingOpen({open:false,meeting:clickedMeetingInitialState})}
                    detailProject={{ 
                        id:detailProject.id,
                        title:detailProject.title,
                        start:detailProject.start,end:detailProject.end,
                        members:detailProject.members,
                    }}
                    initialState={clickedMeeting}
                />:<></>}
            </Suspense>
        </Router>
    );
        
}

export default DetailProject;