import { GanttComponent,Inject,Toolbar,Selection,Sort,Edit,ContextMenu,ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-gantt';
import './../../assets/css/syncfusion-gantt.css';
import * as React from 'react';
import moment from 'moment';
import UserContext from './../../context/UserContext';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
            position: "19%"
        };
        this.labelSettings = {
            taskLabel: 'title'
        };
        this.toolbarOptions = ['ExpandAll', 'CollapseAll'];
        this.state={dataSource:[],showEstimations:true,showRealizations:true};
    }

    TaskbarTemplate(props) {
        var taskBarStyle={};
        var progressBarStyle={};
        // {props.title}

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
            }}></span>
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
                <div className="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar e-row-expand" 
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
                }}></span>
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
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.detailProject !== this.props.detailProject) {
            var ds=this.GetTaskRealization(this.props.detailProject);
            this.setState({dataSource:ds})
        }
        if(prevState.showEstimations !== this.state.showEstimations || prevState.showRealizations !== this.state.showRealizations){    
            var ds=this.GetTaskRealization(this.props.detailProject);
            this.setState({dataSource:ds})
        }
    }
    componentDidMount(){
        var ds=this.GetTaskRealization(this.props.detailProject);
        this.setState({dataSource:ds})
    }

    GetTaskRealization=(detailProject)=>{
        var data=[];
        var columns=detailProject.columns;
        for (let i = 0; i < columns.length; i++) {
            columns[i].isManual=false;
            var column=columns[i];
            var new_column={...column,cards:[]};
            for (let j = 0; j < column.cards.length; j++) {
                column.cards[j].realization=false;
                column.cards[j].isManual=true;
                var task=column.cards[j];
                var task_realization={...task,id:`${task.id}-realisasi`,title:`Realisasi ${task.title}`,start:task.actual_start,end:task.actual_end,realization:true,cards:[]};
                var subtasks=[];
                for (let k = 0; k < task.cards.length; k++) {
                    task.cards[k].realization=false;
                    task.cards[k].isManual=false;
                    var subtask=task.cards[k];
                    var subtask_realization={...subtask,id:`${subtask.id}-realisasi`,title:`Realisasi ${subtask.title}`, start:subtask.actual_start,end:subtask.actual_end,realization:true};
                    if(this.state.showEstimations)subtasks.push(subtask);
                    if(this.state.showRealizations)subtasks.push(subtask_realization);
                }

                if(!this.state.showEstimations && this.state.showRealizations){
                    task_realization.cards=subtasks;
                    new_column.cards.push(task_realization);
                }
                if(this.state.showEstimations && !this.state.showRealizations){
                    task.cards=subtasks;
                    new_column.cards.push(task);
                }
                if(this.state.showEstimations && this.state.showRealizations){
                    task.cards=subtasks;
                    task.cards.unshift(task_realization);
                    new_column.cards.push(task);
                }
                if(!this.state.showEstimations && !this.state.showRealizations){
                    new_column.cards.push(task);
                }
            }
            data[i]=new_column;
        }
        return data;
    }

    render() {
        return(
            <>
                {/* 
                <FormControlLabel
                        control={<Checkbox 
                            onChange={(event) =>this.setState({showEstimations:event.target.checked})} 
                        fontSize="small" />}
                        label={`Estimation`}
                        checked={this.state.showEstimations}
                    />
                    
                <FormControlLabel
                        control={<Checkbox 
                            onChange={(event) =>this.setState({showRealizations:event.target.checked})} 
                        fontSize="small" />}
                        label={`Realization`}
                        checked={this.state.showRealizations}
                    /> */}

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
                    taskMode="Custom"
                    validateManualTasksOnLinking={false}
                >
                    <Inject services={[Toolbar,Selection, Sort,Edit ]}/>
                    <ColumnsDirective>
                        <ColumnDirective field='title' width='340'></ColumnDirective>
                        <ColumnDirective field='start' width='90'></ColumnDirective>
                        <ColumnDirective field='end' width='90'></ColumnDirective>
                        <ColumnDirective field='progress' width='70'></ColumnDirective>
                        <ColumnDirective field='duration' width='70'></ColumnDirective>
                    </ColumnsDirective>
                </GanttComponent>
            </>
        )
};
}

export default GanttChart


//warna
//tepat waktu #1e88e5
//Telat #e53935
//lebih cepat #43a047

                    // actionComplete={this.HandleActionComplete.bind(this)}
