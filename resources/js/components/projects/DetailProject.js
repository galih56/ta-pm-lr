import React, { useState, useEffect, useContext, lazy, Suspense } from 'react';
import { Link, useHistory,Switch, Route, BrowserRouter as Router, useLocation,Redirect, withRouter } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LinearProgress from '@material-ui/core/LinearProgress';
import UserContext from '../../context/UserContext';
import toast from 'react-hot-toast';
import axios from 'axios';

const ModalCreateList = lazy(() => import('./ModalCreateList'));
const ModalCreateMeeting = lazy(() => import('./../meetings/ModalCreateMeeting'));
const ModalDetailMeeting = lazy(() => import('./../meetings/ModalDetailMeeting/ModalDetailMeeting'));
const TabBoard = lazy(() => import('./tab-panels/board/Board'));
const TabGantt = lazy(() => import('./tab-panels/TabGantt'));
const TabFile = lazy(() => import('./tab-panels/TabFile'));
const TabOthers = lazy(() => import('./tab-panels/TabOthers'));
const TabTimeline = lazy(() => import('./tab-panels/TabTimeline'));
const TabMeeting = lazy(() => import('./tab-panels/TabMeeting'));
const ModalImportExcel = lazy(() => import('./ModalImportExcel'));
const ModalDetailTask = lazy(() => import('../tasks/modalDetailTask/ModalDetailTask'));


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
            tabIndex = 0;
            break;
    }
    return tabIndex;
}

const clickedTaskInitialState={ 
    id:null, projects_id: '', lists_id: null, list:null,
    title: '', description: '', label: '', complete: false, progress: 0,
    start:null,end:null,actual_start:null,actual_end:null, start_label:'',end_label:'',
    list: null, tags: [], members: [], parent_task:'',creator:null,is_subtask:false,
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
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                const data = result.data;
                setDetailProject(data);
                global.dispatch({ type: 'store-detail-project', payload: data });
                global.dispatch({type:'store-current-selected-project',payload:params.id});
            }).catch((error) => {
                switch(error?.response?.status){ 
                    case 404 : toast.error(<b>Project not found</b>); break;
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
                history.push('/projects');
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
    }, []);

    useEffect(()=>{
        getDetailProject();
        return history.listen(location=>{
            getDetailProject();
        });
    },[history]);

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
                <Tabs value={tabState} onChange={handleChange}  variant="scrollable" scrollButtons="auto">
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
                    <Route path='/projects/:id' exact ><Redirect to={`/projects/${params.id}/timeline`} /></Route>
                    <Route path={"/projects/:id/timeline"} render={() => <TabTimeline tabState={tabState}  index={0}  detailProject={detailProject} handleDetailTaskOpen={handleDetailTaskOpen} handleModalCreateList={handleModalCreateList} openModalImportExcel={()=>setShowModalImportExcel(true)} getDetailProject={getDetailProject} />} />
                    <Route path={`/projects/:id/gantt`} render={() =>  <TabGantt tabState={tabState} index={1} detailProject={detailProject} handleDetailTaskOpen={handleDetailTaskOpen}/> } />
                    <Route path={`/projects/:id/board`} render={() =><TabBoard tabState={tabState} index={2} detailProject={detailProject} handleDetailTaskOpen={handleDetailTaskOpen} getDetailProject={getDetailProject}/>} />
                    <Route path={"/projects/:id/meeting"} render={() => <TabMeeting  tabState={tabState} detailProject={detailProject}index={3}  handleModalCreateMeeting={handleModalCreateMeeting} getDetailProject={getDetailProject} handleDetailMeetingOpen ={handleDetailMeetingOpen }/>} />
                    <Route path={"/projects/:id/files"} render={() => <TabFile tabState={tabState} index={4} detailProject={detailProject} getDetailProject={getDetailProject} handleDetailTaskOpen={handleDetailTaskOpen}/>}/>
                    <Route path={"/projects/:id/others"} render={() => <TabOthers  tabState={tabState} index={5} detailProject={detailProject} getDetailProject={getDetailProject}handleDetailTaskOpen={handleDetailTaskOpen}/>} />
                </Switch>
                <ModalImportExcel projects_id={params.id} open={showModalImportExcel} closeModal={()=>handleModalImportExcel(false)} onUpdate={getDetailProject}/>
                <ModalCreateList projects_id={params.id} open={showModalCreateList} closeModal={()=>handleModalCreateList(false)} detailProject={detailProject}/>
                <ModalCreateMeeting detailProject={detailProject} projects_id={params.id} open={showModalCreateMeeting}  handleClose={()=>handleModalCreateMeeting(false)} />       
                {(clickedTask.id && detailTaskOpen == true)?(<ModalDetailTask open={detailTaskOpen} closeModalDetailTask={() => handleDetailTaskOpen({task :clickedTaskInitialState,open:false})} projects_id={detailProject.id} detailProject={detailProject} setDetailProject={setDetailProject} initialState={clickedTask}  onTaskUpdate={clickedTask.onTaskUpdate} onTaskDelete={clickedTask.onTaskDelete}/>):<></>}
                {(clickedMeeting.id && detailMeetingOpen)?<ModalDetailMeeting open={detailMeetingOpen} closeModal={()=>handleDetailMeetingOpen({open:false,meeting:clickedMeetingInitialState})} detailProject={detailProject} initialState={clickedMeeting} />:<></>}
            </Suspense>
        </Router>
    ); 
}

export default withRouter(DetailProject);