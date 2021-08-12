// VirtualScroll,
import { GanttComponent,Inject,Toolbar,ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-gantt';
import './../../assets/css/syncfusion-gantt.css';
import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

class GanttChart extends React.Component {
    
    constructor(props) {
        super(props);
        this.taskFields = {
            id: 'id', name: 'title', startDate: 'start', endDate:'end',
            duration: 'duration', progress: 'progress', child: 'cards',
            dependency  : 'dependency', manual: 'isManual'
        };
        this.splitterSettings = {
            position: "23%"
        };
        this.GridRefresh = false;  // Prevent the Grid refresh in react state change
        this.labelSettings = {
            taskLabel: 'title'
        };
        this.toolbarOptions = ['ExpandAll', 'CollapseAll','ZoomIn','ZoomOut','ZoomToFit'];
        this.state={dataSource:[],resources:[],showRealization:true};
        this.resourceFields= {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'resourceUnit',
            group: 'resourceGroup'
          };
    }

    shouldComponentUpdate() {
      if (this.GridRefresh) return false;
      return true;
    }
    componentDidMount() {
        setTimeout(()=>{
            this.getGanttDataSource();
            // this.ganttInstance.fitToProject();
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

        const taskData =props.taskData;
        const metadata =taskData.metadata;
        
        var taskBarStyle={};
        var progressBarStyle={};
        var labelStyle={ 
            position: "absolute", fontSize: "12px", 
            color: "white", top: "5px", left: "10px", 
            fontFamily: "Segoe UI", cursor: "move"
        }
        if(taskData.realization==true){
            if(!metadata.actual_start && !metadata.actual_end){
                console.log(metadata,'belum dimulai','belum selesai')
                taskBarStyle={height: "100%" };
                progressBarStyle={ width: props.ganttProperties.progressWidth + "px", height: "100%" };
            }
            
            if(metadata.actual_start && !metadata.actual_end){
                taskBarStyle={ backgroundColor:'#ccdc27',height: "100%"}
                labelStyle.color='black';
                console.log(metadata,'sudah dimulai','belum selesai')
                progressBarStyle={ backgroundColor:'#d4b11f', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
            }

            if(metadata.actual_start && !metadata.complete && metadata.actual_end){
                console.log(metadata,'sudah dimulai','sudah selesai','belum complete')
                taskBarStyle={ backgroundColor:'#d4b11f',height: "100%",border:'1px solid #07650b' }
                progressBarStyle={ backgroundColor:'#43a047', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
            }

            if(metadata.actual_start && metadata.complete && metadata.actual_end){
                console.log(metadata,'sudah dimulai','sudah selesai','sudah complete')
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
        var labelStyle={ 
                        position: "absolute", fontSize: "12px", 
                        color: "white", top: "5px", left: "10px", 
                        fontFamily: "Segoe UI", cursor: "move"
                    }
        if(taskData.realization==true){
            if(!metadata.actual_start && !metadata.actual_end){
                console.log(metadata,'belum dimulai','belum selesai')
                taskBarStyle={height: "100%" };
                progressBarStyle={ width: props.ganttProperties.progressWidth + "px", height: "100%" };
            }
            
            if(metadata.actual_start && !metadata.actual_end){
                taskBarStyle={ backgroundColor:'#ccdc27',height: "100%"}
                labelStyle.color='black';
                console.log(metadata,'sudah dimulai','belum selesai')
                progressBarStyle={ backgroundColor:'#d4b11f', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
            }

            if(metadata.actual_start && !metadata.complete && metadata.actual_end){
                console.log(metadata,'sudah dimulai','sudah selesai','belum complete')
                taskBarStyle={ backgroundColor:'#d4b11f',height: "100%",border:'1px solid #07650b' }
                progressBarStyle={ backgroundColor:'#43a047', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
            }

            if(metadata.actual_start && metadata.complete && metadata.actual_end){
                console.log(metadata,'sudah dimulai','sudah selesai','sudah complete')
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

    actionBegin(args) {
        if (args.requestType === 'paging') {
            this.GridRefresh = false;
            this.setState({ currentpage: args.currentPage });
        }
    }
    
    getGanttDataSource(){
        var data=[];
        var resources_data=[];
        var columns=this.props.lists;
        for (let i = 0; i < columns.length; i++) {
            columns[i].isManual=false;
            var column=columns[i];
            column.id=`list-${column.id}`;
            resources_data.push({resourceId:column.id,resourceName:column.title})
            var new_column={...column,cards:[]};
            for (let j = 0; j < column.cards.length; j++) {
                column.cards[j].realization=false;
                column.cards[j].isManual=true;
                var task=column.cards[j];
                task.id=`task-${task.id}`;
                task.resources=[{resourceId:column.id}];

                var task_realization={
                    id: `realisasi-${task.id}`,
                    title:`Realisasi ${task.title}`,
                    subtitle:`Realisasi ${task.title}` ,
                    start : task.actual_start, end : task.actual_end, 
                    dependency:task.id, realization:true,
                    resources:[{resourceId:task.id}],
                    metadata:{
                        title:task.title,
                        actual_start:task.actual_start,
                        actual_end:task.actual_end,
                    }
                };
                
                var task_extension={ 
                    id : `extension-${task.id}`,
                    title :`Deadline extended : ${task.title}`,
                    start : task.old_deadline, end : task.end,
                    realization : false,
                    resources : [{  resourceId: task.id }]
                };
                var new_subtasks=[];
                var valuePerSubtask=100/task.cards.length;
                var completeSubtaskCounter=0;
                for (let k = 0; k < task.cards.length; k++) {
                    task.cards[k].realization=false;
                    task.cards[k].isManual=true;
                    var subtask=task.cards[k];
                    subtask.id=`subtask-${subtask.id}`;
                    var subtask_realization={ 
                        id: `realisasi-${subtask.id}`,
                        title:`Realisasi ${subtask.title}`,
                        subtitle:`Realisasi ${subtask.title}` ,
                        start : subtask.actual_start, end : subtask.actual_end,
                        dependency: task.id, realization:true,
                        resources : [{  resourceId: subtask.id }],
                        metadata:{
                            title:subtask.title,
                            actual_start:subtask.actual_start,
                            actual_end:subtask.actual_end,
                        }
                    };
                    if(subtask.complete)completeSubtaskCounter++;
                    new_subtasks.push(subtask);
                    if(this.state.showRealization && !subtask.actual_start && !subtask.actual_end) {
                        new_subtasks.push(subtask_realization);
                    }
                }
                task.progress=completeSubtaskCounter*valuePerSubtask;
                task.cards=new_subtasks;
                // task.cards.unshift(task_realization);
                new_column.cards.push(task);

                if(task.extended && task_extension.start && task_extension.end ){
                    new_column.cards.push(task_extension);
                }
                
                if(this.state.showRealization && !task.actual_start && !task.actual_end){
                    new_column.cards.push(task_realization);
                }
            }
            data[i]=new_column;
        }
        this.setState({dataSource:data,resources:resources_data});
    }
    
    render() {
        return(
            <>
            <Grid container item>
                <Grid container item lg={12} md={12} sm={12} xs={12} style={{marginTop:'1em',marginBottom:'0.5em',}}>
                    <Typography variant="subtitle2"></Typography>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle1">Estimation : </Typography>
                        <div style={{display:'inline-flex',marginRight:'0,5em'}}>
                            <div style={{width: '1em',padding: '1em',backgroundColor: '#3f51b5'}}></div>
                            <span style={{marginLeft:'1em',marginRight:'1em'}}>Plan</span>
                        </div>
                        <div style={{display:'inline-flex',marginRight:'0,5em'}}>
                            <div style={{width: '1em',padding: '1em',backgroundColor: '#ff8a00'}}></div>
                            <span style={{marginLeft:'1em',marginRight:'1em'}}>Deadline extended </span>
                        </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="subtitle1">Realization : </Typography>
                        <div style={{display:'inline-flex',marginRight:'0,5em'}}>
                            <div style={{width: '1em',padding: '1em',backgroundColor: '#616161de'}}></div>
                            <span style={{marginLeft:'1em',marginRight:'1em'}}>Started</span>
                        </div>
                        <div style={{display:'inline-flex',marginRight:'0,5em'}}>
                            <div style={{width: '1em',padding: '1em',backgroundColor: '#ccdc27'}}></div>
                            <span style={{marginLeft:'1em',marginRight:'1em'}}>On progress</span>
                        </div>
                        <div style={{display:'inline-flex',marginRight:'0,5em'}}>
                            <div style={{width: '1em',padding: '1em',backgroundColor: '#43a047'}}></div>
                            <span style={{marginLeft:'1em',marginRight:'1em'}}>Finished</span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            
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
                ref={gantt => this.ganttInstance = gantt}
                actionBegin={this.actionBegin.bind(this)}
                viewType ='ResourceView'
                enableMultiTaskbar={true}
                resourceFields={this.resourceFields}
                resources={this.state.resources}
            >
                <Inject services={[Toolbar ]}/>
                <ColumnsDirective>
                    <ColumnDirective field='title' width='250'></ColumnDirective>
                    <ColumnDirective field='start' width='100' type="date"></ColumnDirective>
                    <ColumnDirective field='end' width='100' type="date"></ColumnDirective>
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



// recordDoubleClick={(row)=>{
//     if(('lists_id' in row.rowData.taskData)){
//         this.props.handleDetailTaskOpen({
//             open:true,
//             tasks_id:row.rowData.taskData.id
//         })
//     }
// }}