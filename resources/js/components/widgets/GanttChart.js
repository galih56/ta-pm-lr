import { GanttComponent,Inject,Toolbar,Selection,Sort,Edit,ContextMenu,ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-gantt';
import './../../assets/css/syncfusion-gantt.css';
import * as React from 'react';
import moment from 'moment';
import UserContext from './../../context/UserContext';
import axios from 'axios';

class GanttChart extends React.Component {
    static contextType = UserContext
    constructor(props) {
        super(props);
        this.taskFields = {
            id: 'id', name: 'title', startDate: 'start', endDate:'end',
            duration: 'duration', progress: 'progress', child: 'cards',
            manual: 'isManual'
        };
        this.splitterSettings = {
            position: "20%"
        };
        this.labelSettings = {
            taskLabel: 'title'
        };
        this.toolbarOptions = ['ExpandAll', 'CollapseAll'];
        this.state={dataSource:[]};
    }

    TaskbarTemplate(props) {
        var taskBarStyle={};
        var progressBarStyle={};

        if(props.taskData.realization==true){
            taskBarStyle={ backgroundColor:'#F74D40',height: "100%" }
            progressBarStyle={ backgroundColor:'#c0504e', width: props.ganttProperties.progressWidth + "px", height: "100%" }
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
            <span className="e-task-label" style={{
                position: "absolute",
                fontSize: "12px",
                color: "white",
                top: "5px",
                left: "10px",
                fontFamily: "Segoe UI",
                cursor: "move"
            }}>
            {props.title}
            </span>
      </div>);
    }
    ParentTaskbarTemplate(props) {
        var taskBarStyle={};
        var progressBarStyle={};

        if(props.taskData.realization==true){
            taskBarStyle={ backgroundColor:'#F74D40',height: "100%" }
            progressBarStyle={ backgroundColor:'#c0504e', width: props.ganttProperties.progressWidth + "px", height: "100%" }
        }else{
            taskBarStyle={height: "100%" };
            progressBarStyle={
                width: props.ganttProperties.progressWidth + "px",
                height: "100%"
            };
        }

        return (
            <div className="e-gantt-parent-taskbar-inner-div e-gantt-parent-taskbar" style={taskBarStyle}>
                <div className="e-gantt-parent-progressbar-inner-div e-row-expand e-gantt-parent-progressbar" 
                    style={progressBarStyle}>
                </div>
                <span className="e-task-label" style={{
                    position: "absolute",
                    fontSize: "12px",
                    color: "white",
                    top: "5px",
                    left: "10px",
                    fontFamily: "Segoe UI",
                    cursor: "move"
                }}>
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

    render() {
        return(
            <GanttComponent 
                dataSource={this.props.detailProject.columns} 
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
                taskMode="Custom"
            >
                <Inject services={[Toolbar,Selection, Sort,Edit ]}/>
                <ColumnsDirective>
                    <ColumnDirective field='title' width='300'></ColumnDirective>
                    <ColumnDirective field='start' width='100'></ColumnDirective>
                    <ColumnDirective field='end' width='100'></ColumnDirective>
                    <ColumnDirective field='progress' width='70'></ColumnDirective>
                    <ColumnDirective field='duration' width='70'></ColumnDirective>
                </ColumnsDirective>
            </GanttComponent>
        )
};
}

export default GanttChart


//warna
//tepat waktu #1e88e5
//Telat #e53935
//lebih cepat #43a047

// componentDidMount() {
//     return;
//     const global = this.context;
//     const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${this.props.detailProject.id}/gantt`;
//     axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
//     axios.defaults.headers.post['Content-Type'] = 'application/json';
//     axios.get(url)
//         .then((result) => {
//             this.setState({dataSource:result.data});
//         }).catch((error) => {
//             const payload = { error: error, snackbar: handleSnackbar, dispatch: global.dispatch, history: null }
//             global.dispatch({ type: 'handle-fetch-error', payload: payload });
//         });
// }


// recordDoubleClick={(row)=>{
//     if(('lists_id' in row.rowData.taskData)){
//         this.props.handleDetailTaskOpen({
//             open:true,
//             tasks_id:row.rowData.taskData.id
//         })
//     }
// }}