import React, { createContext } from 'react';

const initState = {
    token: '', authenticated: false,
    id: '', username: '', email: '', phoneNumber: '',
    profile_picture_path: '', occupation: null, projects: [], 
    delayedRequest: [], googleAuth: null, 
    githubAuth:{
        code:'',  authenticated:false,  access_token:'',  scope:null
    }, 
    current_project_member_role:null,
};

const getAuthDataFromStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return initState;
    const data = { ...user };
    return data;
}

const storeAuthData = (payload) => {
    var token=payload.token.split(' ')[1];
    const user = {
        ...payload.user,
        projects: [], delayedRequest: [], googleAuth: null, 
        githubAuth:{
            code:'',  authenticated:false,  access_token:'',  scope:null
        }, 
        token: token, authenticated: true,
    }
    localStorage.setItem("user", JSON.stringify(user));
    return { ...user };
}

const storeUserInformation=(payload)=>{
    var user = JSON.parse(localStorage.getItem('user'));
    user={...user,...payload};
    localStorage.setItem("user", JSON.stringify(user));
    return { ...user };
}

const storeGoogleAuth = (payload, state) => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.googleAuth = payload;
    localStorage.setItem("user", JSON.stringify(user));
    const data = { ...user };
    return data
}

const storeGithubAuth = (payload, state) => {
    var user = JSON.parse(localStorage.getItem('user'));
    user.githubAuth = payload;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const storeProjectMemberRole = (payload, state) => {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user){ user.current_project_member_role = payload; }
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const removeProjectMemberRole = (payload, state) => {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user){ user.current_project_member_role = null; }
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const removeGithubAuth=(payload,state)=>{
    var user = JSON.parse(localStorage.getItem('user'));
    user.githubAuth = {
        code:'',  authenticated:false,  access_token:'',  scope:null
    };
    localStorage.setItem("user", JSON.stringify(user));
    const data = { ...user };
    return data
    
}

const logout=()=>{
    var user = JSON.parse(localStorage.getItem('user'));
    user.authenticated=false;
    user.token='';
    localStorage.setItem("user", JSON.stringify(user));
    return user
}

const resetState = () => {
    const user = {
        id: '', username: '', email: '',
        phoneNumber: '', profilePicturePath: '', occupation: null, 
        last_login: '', projects: [], delayedRequest: [],
        githubAuth:{
            code:'',  authenticated:false,  access_token:'',  scope:null
        }, 
        token: '', authenticated: false
    }
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const runDelayedHTTPRequest = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.delayedRequest) {

    }
}

const context = createContext();
export default context;
export { initState, resetState, getAuthDataFromStorage, storeAuthData, logout,
    runDelayedHTTPRequest, storeGoogleAuth,storeGithubAuth ,removeGithubAuth,
    storeProjectMemberRole,removeProjectMemberRole,storeUserInformation
};


/*
import Grid from '@material-ui/core/Grid';

this.taskFields = {
    id: 'id', name: 'title', startDate: 'start', endDate:'end',
    duration: 'duration', progress: 'progress', child: 'cards',
    dependency  : 'dependency', manual: 'isManual'
};
TaskbarTemplate(props) {
    var taskBarStyle={};
    var progressBarStyle={};

    const taskData =props.taskData;
    const metadata =taskData.metadata;

    var taskBarStyle={};
    var progressBarStyle={};
    var labelStyle={ position: "absolute", fontSize: "12px", 
                    color: "white", top: "5px", left: "10px", 
                    fontFamily: "Segoe UI", cursor: "move"}
    if(taskData.realization==true){
        if(!metadata.actual_start && !metadata.actual_end){
            taskBarStyle={height: "100%" };
            progressBarStyle={ width: props.ganttProperties.progressWidth + "px", height: "100%" };
        }
        
        if(metadata.actual_start && !metadata.actual_end){
            taskBarStyle={ backgroundColor:'#ccdc27',height: "100%"}
            labelStyle.color='black';
            progressBarStyle={ backgroundColor:'#d4b11f', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
        }

        if(metadata.actual_start && !metadata.complete && metadata.actual_end){
            taskBarStyle={ backgroundColor:'#d4b11f',height: "100%",border:'1px solid #07650b' }
            progressBarStyle={ backgroundColor:'#43a047', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
        }

        if(metadata.actual_start && metadata.complete && metadata.actual_end){
            taskBarStyle={ backgroundColor:'#43a047',height: "100%",border:'1px solid #07650b' }
            progressBarStyle={ backgroundColor:'#43a047', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
        }
    }else{
        taskBarStyle={height: "100%" };
        progressBarStyle={
            width: props.ganttProperties.progressWidth + "px",
            height: "100%"
        };
    }

    return (
        <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" 
            style={taskBarStyle}>
            <div className="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar" style={progressBarStyle}></div>
            <span className="e-task-label" style={labelStyle}>
            {props.title}
            </span>
    </div>
    );
}
ParentTaskbarTemplate(props) {
    const taskData =props.taskData;
    const metadata =taskData.metadata;

    var taskBarStyle={};
    var progressBarStyle={};
    var labelStyle={ position: "absolute", fontSize: "12px", 
                    color: "white", top: "5px", left: "10px", 
                    fontFamily: "Segoe UI", cursor: "move"}
    if(taskData.realization==true){
        if(!metadata.actual_start && !metadata.actual_end){
            taskBarStyle={height: "100%" };
            progressBarStyle={ width: props.ganttProperties.progressWidth + "px", height: "100%" };
        }
        
        if(metadata.actual_start && !metadata.actual_end){
            taskBarStyle={ backgroundColor:'#ccdc27',height: "100%" ,color:'black'}
            labelStyle.color='black';
            progressBarStyle={ backgroundColor:'#a0ad18', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
        }

        if(metadata.complete && metadata.actual_end){
            taskBarStyle={ backgroundColor:'#43a047',height: "100%",border:'1px solid #07650b' }
            progressBarStyle={ backgroundColor:'#43a047', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
        }
    }else{
        taskBarStyle={height: "100%" };
        progressBarStyle={
            width: props.ganttProperties.progressWidth + "px",
            height: "100%"
        };
    }

    return (
        <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" style={taskBarStyle}>
            <div className="e-gantt-child-progressbar-inner-div e-row-expand e-gantt-child-progressbar" 
                style={progressBarStyle}>
            </div>
            <span className="e-task-label" style={labelStyle}>
                {props.title}
            </span>
        </div>
    );
}
MilestoneTemplate(props) {
    return (
        <div className="e-gantt-milestone" style={{ position: "absolute" }}>
            <div className="e-milestone-top" style={{
                borderRightWidth: "15px",
                borderLeftWidth: "15px",
                borderBottomWidth: "15px"
            }}/>
            <div className="e-milestone-bottom" style={{
                top: "15px",
                borderRightWidth: "15px",
                borderLeftWidth: "15px",
                borderTopWidth: "15px"
            }}/>
        </div>
  );
}

HandleActionComplete(args){
    if (args.requestType == "indent" || args.requestType == "outdent" || args.requestType == "recordUpdate" || (args.requestType === 'save' && args.modifiedRecord)) {
        console.log(args);
    }
}

actionBegin(args) {
    if (args.requestType === 'paging') {
        this.GridRefresh = false;
        this.setState({ currentpage: args.currentPage });
    }
}
render() {
    return(
        <Grid container item>
            <Grid container item lg={12} md={12} sm={12} xs={12} >
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div style={{display:'inline-flex'}}>
                        <div style={{width: '1em',padding: '1em',backgroundColor: '#616161de'}}></div>
                        Started
                    </div>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div style={{display:'inline-flex'}}>
                        <div style={{width: '1em',padding: '1em',backgroundColor: '#ccdc27'}}></div>
                        On progress
                    </div>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div style={{display:'inline-flex'}}>
                        <div style={{width: '1em',padding: '1em',backgroundColor: '#43a047'}}></div>
                        Finished
                    </div>
                </Grid>
            </Grid>
            <Grid container item lg={12} md={12} sm={12} xs={12} style={{padding:'1em'}}>
            </Grid>
            <Grid container item lg={12} md={12} sm={12} xs={12}>
                <GanttComponent 
                    dataSource={this.state.dataSource} 
                    height="450px" 
                    taskFields={this.taskFields}
                    collapseAllParentTasks={true} 
                    splitterSettings={this.splitterSettings}
                    toolbar={this.toolbarOptions}
                    highlightWeekends={true}
                    taskbarTemplate={this.TaskbarTemplate.bind(this)} 
                    parentTaskbarTemplate={this.ParentTaskbarTemplate.bind(this)} 
                    milestoneTemplate={this.MilestoneTemplate.bind(this)}
                    labelSettings={this.labelSettings} 
                    actionComplete={this.HandleActionComplete.bind(this)}
                    enableVirtualization={true}
                    taskMode="Custom"
                    ref={gantt => this.ganttInstance = gantt}
                    actionBegin={this.actionBegin.bind(this)}
                >
                    <Inject services={[Toolbar,VirtualScroll ]}/>
                    <ColumnsDirective>
                        <ColumnDirective field='title' width='250'></ColumnDirective>
                        <ColumnDirective field='start' width='100' type="date"></ColumnDirective>
                        <ColumnDirective field='end' width='100' type="date"></ColumnDirective>
                        <ColumnDirective field='progress' width='70'></ColumnDirective>
                        <ColumnDirective field='duration' width='70'></ColumnDirective>
                    </ColumnsDirective>
                </GanttComponent>
            </Grid>
        </Grid>
    )

    */