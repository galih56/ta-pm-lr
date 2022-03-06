import React, { useReducer, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Layout from "./layout/Layout";
import UserContext, {
    initState, resetState, getAuthDataFromStorage,
    storeAuthData, runDelayedHTTPRequest, logout,
    storeGoogleAuth,  storeCurrentSelectedProject,
    removeCurrentSelectedProject,storeUserInformation
} from './context/UserContext';
import { createNewList, removeList, updateList } from './context/ListsReducer';
import { createNewMeeting, storeDetailMeeting, removeMeeting, updateMeeting } from './context/MeetingsReducer';
import { storeProjects, storeDetailProject, createNewProject, removeProject } from './context/ProjectsReducer';
import {
    createNewTask, storeDetailTask,  removeTask,
    storeDetailSubtask,storeSubtasks, createNewSubtask, removeSubtask,
    createNewAttachments, removeAttachment
} from './context/TasksReducer';
// import { addNotification, storeNotifications, updateNotification, removeNotification } from './context/NotificationsReducer';
import { addClientsToProject, storeClientsToProject, removeClientFromProject } from './context/ClientsReducer';
import { LinearProgress } from '@material-ui/core/';
import './index.css';
import {Toaster} from 'react-hot-toast';

const Home = lazy(() => import("./layout/Home"));
const DetailProject = lazy(() => import("./components/projects/DetailProject"));
const ProjectReports = lazy(() => import("./components/reports/ProjectList"));
const DetailProjectReports = lazy(() => import("./components/reports/DetailProject"));
const ApprovalTable = lazy(() => import("./components/approvals/ApprovalTable"));
const DetailApproval = lazy(() => import("./components/approvals/DetailApproval"));
// const NotificationList = lazy(() => import("./layout/notifications/NotificationList"));
const TaskList = lazy(() => import("./components/tasks/TaskList"));
const UserInformation = lazy(() => import("./components/users/UserInformation"));
const ModalAuthentication = lazy(() => import("./layout/auth/ModalAuthentication"));
const DetailClient = lazy(() => import("./components/clients/DetailClient"));
const ClientTable = lazy(() => import("./components/clients/ClientTable"));

const checkAuthentication = (payload, state) => {
    const { history } = payload;
    const auth = JSON.parse(localStorage.getItem('user'));
    if (auth) {
        if (!auth.authenticated) {
            history.push('/auth');
        }
    } else history.push('/auth');
    return state;
}

const reducer = (state, action) => {
    const payload = action.payload;
    switch (action.type) {
        case 'authenticate':
            return storeAuthData(payload);
        case 'remember-authentication':
            return getAuthDataFromStorage();
        case 'store-user-information':
            return storeUserInformation(payload);
        case 'store-google-auth':
            return storeGoogleAuth(payload, state);
        case 'store-projects':
            return storeProjects(state, payload);
        case 'store-detail-project':
            return storeDetailProject(state,payload);
        case 'create-new-project':
            return createNewProject(payload);
        case 'remove-project':
            return removeProject(payload);
        case 'create-new-list':
            return createNewList(payload);
        case 'update-list':
            return updateList(payload); 
        case 'remove-list':
            return removeList(payload);
        case 'create-new-task':
            return createNewTask(payload);
        case 'store-detail-task':
            return storeDetailTask(payload);
        case 'remove-task':
            return removeTask(payload);
        case 'create-new-subtask':
            return createNewSubtask(payload);
        case 'store-detail-subtask':   
            return storeDetailSubtask(payload);
        case 'create-task-subtask':
            return createNewSubtask(payload);
        case 'remove-subtask':
            return removeSubtask(payload);
        case 'create-new-attachments':
            return createNewAttachments(payload);
        case 'remove-attachment':
            return removeAttachment(payload);
        case 'store-detail-meeting':
            return storeDetailMeeting(payload);
        case 'create-new-meeting':
            return createNewMeeting(payload);
        case 'update-meeting':
            return updateMeeting(payload); 
        case 'remove-meeting':
            return removeMeeting(payload);
        case 'add-clients-to-project':
            return addClientsToProject(payload);
        case 'store-clients-to-project':
            return storeClientsToProject(payload);
        case 'remove-client-from-project':
            return removeClientFromProject(payload);
        case 'logout':
            return logout();
        case 'run-delayed-http-request':
            return runDelayedHTTPRequest(state);
        case 'check-authentication':
            return checkAuthentication(payload, state);
        case 'store-current-selected-project':
            return storeCurrentSelectedProject(payload, state);
        case 'remove-current-selected-project':
            return removeCurrentSelectedProject(payload, state);
        default:
            console.log('Default switch : ',action,state);
    }
}

const theme = createTheme();
const App = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Layout>
                        <Toaster 
                            position="bottom-left"
                            reverseOrder={false}/>
                        <React.Suspense fallback={<LinearProgress />}>
                            <Switch>
                                <Route path="/my-tasks" render={(props) => (<TaskList {...props} ></TaskList>)} />
                                <Route path="/users" render={(props) => (<UserInformation {...props} ></UserInformation>)} />
                                <Route path='/auth' render={(props) => (<ModalAuthentication />)} />
                                <Route path={'/projects'} render={(props) => {
                                    const { match: { path } } = props;
                                    return (
                                        <>
                                            <Route path={`${path}/:id`} component={DetailProject} />
                                            <Route path={`${path}`} exact component={Home} />
                                        </>
                                    )
                                }} />
                                <Route path={'/reports'} render={(props) => {
                                    const { match: { path } } = props;
                                    return (
                                        <>
                                            <Route path={`${path}/:id`} component={DetailProjectReports} />
                                            <Route path={`${path}`} exact component={ProjectReports} />
                                        </>
                                    )
                                }} />
                                <Route path='/approvals' render={(props) => {
                                    const { match: { path } } = props;
                                    return (
                                        <>
                                            <Route path={`${path}/:id`} component={DetailApproval} />
                                            <Route path={`${path}`} exact component={ApprovalTable} />
                                        </>
                                    )
                                }} />
                                <Route path='/clients' render={(props) => {
                                    const { match: { path } } = props;
                                    return (
                                        <>
                                            <Route path={`${path}/:id`} component={DetailClient} />
                                            <Route path={`${path}`} exact component={ClientTable} />
                                        </>
                                    )
                                }} />
                                {/* <Route path={`/notifications`} component={NotificationList} /> */}
                                <Route path='/' exact ><Redirect to='/projects' /></Route>
                            </Switch>
                        </React.Suspense>
                    </Layout>
                </Router>
            </ThemeProvider>
        </UserContext.Provider>

    );
}
const root_element = document.getElementById('root');
ReactDOM.render(<App />, root_element);