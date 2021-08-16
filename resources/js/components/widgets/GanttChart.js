import { GanttComponent,Inject,Toolbar,VirtualScroll,ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-gantt';
import './../../assets/css/syncfusion-gantt.css';
import * as React from 'react';

class GanttChart extends React.Component {
    
    constructor(props) {
        super(props);
        this.taskFields = {
            id: 'id', name: 'title', startDate: 'start', endDate:'end',
            duration: 'duration', progress: 'progress', child: 'cards',
            dependency  : 'predecessor', manual: 'isManual'
        };
        this.splitterSettings = {
            position: "23%"
        };
        this.GridRefresh = false;  // Prevent the Grid refresh in react state change
        this.labelSettings = {
            taskLabel: 'title'
        };
        this.toolbarOptions = ['ExpandAll', 'CollapseAll','ZoomIn','ZoomOut','ZoomToFit'];
        this.state={dataSource:[],showRealization:true};
    }

    getGanttDataSource(){
        var data=[];
        var columns=this.props.lists;
        for (let i = 0; i < columns.length; i++) {
            columns[i].isManual=false;
            var column=columns[i];
            var new_column={...column,cards:[]};
            for (let j = 0; j < column.cards.length; j++) {
                column.cards[j].realization=false;
                column.cards[j].isManual=true;
                var task=column.cards[j];
                var task_realization={
                    id: `realisasi-${task.id}`,
                    title:``,
                    subtitle:`Realisasi ${task.title}` ,
                    start : task.actual_start, end : task.actual_end,
                    realization:true
                };
                var new_subtasks=[];
                var valuePerSubtask=100/task.cards.length;
                var completeSubtaskCounter=0;
                for (let k = 0; k < task.cards.length; k++) {
                    task.cards[k].realization=false;
                    task.cards[k].isManual=true;
                    var subtask=task.cards[k];
                    var subtask_realization={ 
                        id: `realisasi-${subtask.id}`,
                        title:``,
                        subtitle:`Realisasi ${subtask.title}` ,
                        start : subtask.actual_start, end : subtask.actual_end,
                        predecessor:`${task.id}SS`, realization:true
                    };
                    if(subtask.complete)completeSubtaskCounter++;
                    new_subtasks.push(subtask);
                    if(this.state.showRealization) new_subtasks.push(subtask_realization);
                }
                task.progress=completeSubtaskCounter*valuePerSubtask;
                task.cards=new_subtasks;
                // task.cards.unshift(task_realization);
                new_column.cards.push(task);
                if(this.state.showRealization) new_column.cards.push(task_realization);
            }
            data[i]=new_column;
        }
        this.setState({dataSource:data});
    }
    shouldComponentUpdate() {
      if (this.GridRefresh)
        return false;
      return true;
    }
    componentDidMount() {
        setTimeout(()=>{
            this.getGanttDataSource();
            this.ganttInstance.fitToProject();
        },500)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.lists !== this.props.lists) {    
            setTimeout(()=>{
                this.getGanttDataSource();
            },500);
        }
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
            <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" style={taskBarStyle}>
                <div className="e-gantt-child-progressbar-inner-div e-row-expand e-gantt-child-progressbar" 
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

    actionBegin(args) {
        if (args.requestType === 'paging') {
            this.GridRefresh = false;
            this.setState({ currentpage: args.currentPage });
        }
    }
    render() {
        return(
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
        )
};
}

export default GanttChart
