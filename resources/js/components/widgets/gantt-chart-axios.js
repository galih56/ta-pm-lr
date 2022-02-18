// import {  }
// import { GanttComponent,Inject,Toolbar,VirtualScroll,ColumnsDirective, ColumnDirective, TaskFieldsModel} from '@syncfusion/ej2-react-gantt';
// import './../../assets/css/syncfusion-gantt.css';
// import * as React from 'react';
// import Grid from '@material-ui/core/Grid';
// import axios from 'axios';

// function GanttChart(){
//     const taskValues ={
//         id: 'id', name: 'title', startDate: 'start', endDate:'end',
//         duration: 'duration', progress: 'progress', child: 'cards',
//         dependency  : 'predecessor', manual: 'isManual'
//     }
//     const getDataSource=(){

//         var data=[];
//         var columns=this.props.lists;
//         for (let i = 0; i < columns.length; i++) {
//             columns[i].isManual=false;
//             var column=columns[i];
//             var new_column={...column,cards:[]};
//             for (let j = 0; j < column.cards.length; j++) {
//                 column.cards[j].realization=false;
//                 column.cards[j].isManual=true;
//                 var task=column.cards[j];
//                 task.metadata={
//                     title:task.title, 
//                     start:task.start, end:task.end,
//                     actual_start:task.actual_start, actual_end:task.actual_end,
//                     complete:task.complete
//                 };

//                 var task_realization={
//                     id: `realisasi-${task.id}`, title:`Realisasi ${task.title}`, subtitle:`Realisasi ${task.title}` ,
//                     start : task.start, end : task.end, 
//                     realization:true, 
//                     metadata:{
//                         title:task.title, 
//                         start:task.start, end:task.end,
//                         actual_start:task.actual_start, actual_end:task.actual_end,
//                         complete:task.complete
//                     }
//                 };
//                 //Jika tanggal selesai belum diinput, pakai tanggal estimasi terlebih dahulu
//                 if(task.actual_start) task_realization.start=task.actual_start;
//                 if(task.actual_end) task_realization.end=task.actual_end;

//                 var new_subtasks=[];
//                 var valuePerSubtask=100/task.cards.length;
//                 var completeSubtaskCounter=0;
//                 for (let k = 0; k < task.cards.length; k++) {
//                     task.cards[k].realization=false;
//                     task.cards[k].isManual=true;
//                     var subtask=task.cards[k];
//                     var subtask_realization={ 
//                         id: `realisasi-${subtask.id}`, title:`Realisasi ${subtask.title}`,
//                         subtitle:`Realisasi ${subtask.title}` ,
//                         start : subtask.start, end : subtask.end,
//                         predecessor:`${task.id}SS`, realization:true,
//                         metadata:{
//                             title:task.title, 
//                             start:subtask.start, end:subtask.end,
//                             actual_start:subtask.actual_start, actual_end:subtask.actual_end,
//                             complete:subtask.complete
//                         }
//                     };
//                     if(subtask.actual_start) subtask_realization.start=subtask.actual_start;
//                     if(subtask.actual_end) subtask_realization.end=subtask.actual_end;
//                     if(subtask.complete) completeSubtaskCounter++;
//                     new_subtasks.push(subtask);
//                     if(subtask.actual_start && subtask.actual_end)new_subtasks.push(subtask_realization);
//                 }
//                 task.progress=completeSubtaskCounter*valuePerSubtask;
//                 task.cards=new_subtasks;
//                 // task.cards.unshift(task_realization);
//                 new_column.cards.push(task);
//                 if(task_realization.actual_start && task_realization.actual_end) new_column.cards.push(task_realization);

//             }
//             data[i]=new_column;
//         }
//         setDataSource({dataSource:data});
//     }
//     return(

//         <>
//         <Grid container item>
//             <Grid container item lg={12} md={12} sm={12} xs={12} style={{marginTop:'1em',marginBottom:'0.5em',}}>
//                 <Grid item lg={12} md={12} sm={12} xs={12}>
//                     <div style={{display:'inline-flex',marginRight:'0,5em'}}>
//                         <div style={{width: '1em',padding: '1em',backgroundColor: '#3f51b5'}}></div>
//                         <span style={{marginLeft:'1em',marginRight:'1em'}}>Plan</span>
//                     </div>
//                     <div style={{display:'inline-flex',marginRight:'0,5em'}}>
//                         <div style={{width: '1em',padding: '1em',backgroundColor: '#ccdc27'}}></div>
//                         <span style={{marginLeft:'1em',marginRight:'1em'}}>In progress</span>
//                     </div>
//                     <div style={{display:'inline-flex',marginRight:'0,5em'}}>
//                         <div style={{width: '1em',padding: '1em',backgroundColor: '#43a047'}}></div>
//                         <span style={{marginLeft:'1em',marginRight:'1em'}}>Finished</span>
//                     </div>
//                 </Grid>
//             </Grid>
//         </Grid>
//         <GanttComponent 
//             dataSource={this.state.dataSource} 
//             height="450px" 
//             taskMode="Custom"
//             taskFields={this.taskFields}
//             collapseAllParentTasks={true} 
//             splitterSettings={this.splitterSettings}
//             toolbar={this.toolbarOptions}
//             highlightWeekends={true}
//             taskbarTemplate={this.TaskbarTemplate.bind(this)} 
//             parentTaskbarTemplate={this.ParentTaskbarTemplate.bind(this)} 
//             labelSettings={this.labelSettings} 
//             actionComplete={this.HandleActionComplete.bind(this)}
//             enableVirtualization={true}
//             milestoneTemplate={this.MilestoneTemplate.bind(this)}
//             ref={gantt => this.ganttInstance = gantt}
//             actionBegin={this.actionBegin.bind(this)}
//         >
//             <Inject services={[Toolbar,VirtualScroll ]}/>
//             <ColumnsDirective>
//                 <ColumnDirective field='title' width='250'></ColumnDirective>
//                 <ColumnDirective field='start' width='100' type="date"></ColumnDirective>
//                 <ColumnDirective field='end' width='100' type="date"></ColumnDirective>
//                 <ColumnDirective field='progress' width='70'></ColumnDirective>
//                 <ColumnDirective field='duration' width='70'></ColumnDirective>
//             </ColumnsDirective>
//         </GanttComponent>
//     </>
//     )
// }
// class GanttChart extends React.Component {
//     constructor(props) {
//         super(props);
//         this.taskFields = ;
//         this.splitterSettings = {
//             position: "23%"
//         };
//         this.GridRefresh = false;  // Prevent the Grid refresh in react state change
//         this.labelSettings = {
//             taskLabel: 'title'
//         };
//         this.toolbarOptions = ['ExpandAll', 'CollapseAll','ZoomIn','ZoomOut','ZoomToFit'];
//         this.state={dataSource:[]};
//     }

//     getGanttDataSource(){
//         // var url = `${process.env.MIX_BACK_END_BASE_URL}projects/${params.id}`;
//         // axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
//         // axios.defaults.headers.post['Content-Type'] = 'application/json';
//         // axios.get(url)
//         //     .then((result) => {
//         //         const data = result.data;
//         //         setDetailProject(data);
//         //         global.dispatch({ type: 'store-detail-project', payload: data });
//         //         global.dispatch({type:'store-current-selected-project',payload:params.id});
//         //     }).catch((error) => {
//         //         switch(error?.response?.status){ 
//         //             case 404 : toast.error(<b>Project not found</b>); break;
//         //             case 401 : toast.error(<b>Unauthenticated</b>); break;
//         //             case 422 : toast.error(<b>Some required inputs are empty</b>); break;
//         //             default : toast.error(<b>{error.response.statusText}</b>); break
//         //         }
//         //         history.push('/projects');
//         //     });
        
//     }
//     shouldComponentUpdate() {
//       if (this.GridRefresh)
//         return false;
//       return true;
//     }
//     componentDidMount() {
//         setTimeout(()=>{
//             this.getGanttDataSource();
//             this.ganttInstance.fitToProject();
//         },500)
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.lists !== this.props.lists) {    
//             setTimeout(()=>{
//                 this.getGanttDataSource();
//             },500);
//         }
//     }
    
//     TaskbarTemplate(props) {
//         var taskBarStyle={height: "100%" };
//         var progressBarStyle={
//             width: props.ganttProperties.progressWidth + "px",
//             height: "100%"
//         };
//         var labelStyle={  position: "absolute", fontSize: "12px",  color: "white", top: "5px", left: "10px",  fontFamily: "Segoe UI", cursor: "move" }
//         const task=props.taskData;

//         if(task.realization==true){
//             if(!task.metadata.actual_start && !task.metadata.actual_end){
//                 taskBarStyle={height: "100%" };
//                 labelStyle.color='black';
//                 progressBarStyle={ width: props.ganttProperties.progressWidth + "px", height: "100%" };
//             }
            
//             if(task.metadata.actual_start && !task.metadata.actual_end){      
//                 taskBarStyle={ backgroundColor:'#ccdc27',height: "100%"}
//                 labelStyle.color='black';
//                 progressBarStyle={ backgroundColor:'#d4b11f', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
//             }


//             if(task.metadata.actual_start && task.metadata.actual_end){
//                 taskBarStyle={ backgroundColor:'#43a047',height: "100%",border:'1px solid #07650b' }
//                 progressBarStyle={ backgroundColor:'#43a047', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
//             }
//         }else{
//             taskBarStyle={height: "100%" };
//             progressBarStyle={
//                 width: props.ganttProperties.progressWidth + "px",
//                 height: "100%"
//             };
//         }

//         return (
//         <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" 
//             style={taskBarStyle}>
//             <div className="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar" style={progressBarStyle}></div>
//             <span className="e-task-label" style={{
//                 position: "absolute", fontSize: "12px", color: "white",
//                 top: "5px", left: "10px", fontFamily: "Segoe UI",  cursor: "move"
//             }}>
//             {props.title}
//             </span>
//       </div>);
//     }
//     ParentTaskbarTemplate(props) {
//         var taskBarStyle={height: "100%" };
//         var progressBarStyle={
//             width: props.ganttProperties.progressWidth + "px",
//             height: "100%"
//         };
//         var labelStyle={  position: "absolute", fontSize: "12px",  color: "white", top: "5px", left: "10px",  fontFamily: "Segoe UI", cursor: "move" }
//         const task=props.taskData;
//         if(task.metadata){
//             if(!task.metadata.actual_start && !task.metadata.actual_end){
//                 taskBarStyle={height: "100%" };
//                 labelStyle.color='black';
//                 progressBarStyle={ width: props.ganttProperties.progressWidth + "px", height: "100%" };
//             }
            
//             if(task.metadata.actual_start && !task.metadata.actual_end){
//                 taskBarStyle={ backgroundColor:'#ccdc27',height: "100%"}
//                 labelStyle.color='black';
//                 progressBarStyle={ backgroundColor:'#d4b11f', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
//             }
    
//             if(task.metadata.actual_start && task.metadata.actual_end){
//                 taskBarStyle={ backgroundColor:'#43a047',height: "100%",border:'1px solid #07650b' }
//                 progressBarStyle={ backgroundColor:'#43a047', width: props.ganttProperties.progressWidth + "px", height: "100%" };    
//             }    
//         }
//         return (
//             <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" style={taskBarStyle}>
//                 <div className="e-gantt-child-progressbar-inner-div e-row-expand e-gantt-child-progressbar" 
//                     style={progressBarStyle}>
//                 </div>
//                 <span className="e-task-label" style={{
//                     position: "absolute", fontSize: "12px", color: "white", 
//                     top: "5px", left: "10px", fontFamily: "Segoe UI", cursor: "move"
//                 }}>
//                     {props.title}
//                 </span>
//             </div>
//         );
//     }

//     HandleActionComplete(args){
//         if (args.requestType == "indent" || args.requestType == "outdent" || args.requestType == "recordUpdate" || (args.requestType === 'save' && args.modifiedRecord)) {
//             console.log(args);
//         }
//     }

//     actionBegin(args) {
//         if (args.requestType === 'paging') {
//             this.GridRefresh = false;
//             this.setState({ currentpage: args.currentPage });
//         }
//     }
    
//     MilestoneTemplate(props) {
//         const taskBarStyle={height: "100%" };
//         const progressBarStyle={
//             width: props.ganttProperties.progressWidth + "px",
//             height: "100%"
//         };
//         return (
//             <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" style={taskBarStyle}>
//                 <div className="e-gantt-child-progressbar-inner-div e-row-expand e-gantt-child-progressbar" 
//                     style={progressBarStyle}>
//                 </div>
//                 <span className="e-task-label" style={{ 
//                     position: "absolute", fontSize: "12px", 
//                     color: "white", top: "5px", left: "10px", 
//                     fontFamily: "Segoe UI", cursor: "move"
//                 }}>
//                     {props.title}
//                 </span>
//             </div>
//       );
//     }
//     render() {
//         return(
//         )
// };
// }

// export default GanttChart
