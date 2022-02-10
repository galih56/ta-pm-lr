import react,{useState,useContext,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import SelectTag from './../widgets/SelectTag';
import UserSearchBar from '../widgets/UserSearchBar';
import moment from 'moment';
import UserContext from './../../context/UserContext';
import { parseISO } from 'date-fns'; 
import NumberFormat from 'react-number-format';

const FormCreateNewTask=({newTask,setNewTask,handleAddNewTask,detailProject,is_subtask,minDate,maxDate,parent_task})=>{
    const global=useContext(UserContext);
    const [dateRange, setDateRange] = useState([null, null]);
    const [exceptedUsers,setExceptedUsers]=useState([]);

    useEffect(()=>{
        setNewTask({...newTask,is_subtask:is_subtask});
        const project_members=detailProject?.members||[];
        const checkLoggedInUserProjectMember=()=>{
            var logged_in_user={
                id:global.state.id,
                name:global.state.name,
                username:global.state.username,
                email:global.state.email,
            }
            var registered=false
            for (let i = 0; i < project_members.length; i++) {
                const member = project_members[i];
                if(member.id==logged_in_user.id){ registered=true; }
            }
            
            var users=[];
            if(!registered){
                users=[ logged_in_user ];
                setExceptedUsers(users);
            }
        }
        checkLoggedInUserProjectMember();
    },[]);
    
    const handleUserSearchbarChange=(users)=> setNewTask({...newTask,members:[...users]});
    const handleSelectTagChange=(tags) => setNewTask({ ...newTask, tags: tags });
    const handleDescriptionChange=(e) => setNewTask({ ...newTask, description: e.target.value });
    const handleTitleChange=(e) => setNewTask({ ...newTask, title: e.target.value });
    const handleCostEstimationChange=(formattedValue) => setNewTask({ ...newTask, cost: formattedValue.value });
    const handleEstimationDateRangeChange=(newValue) => {
        if(newValue[0]) setNewTask({...newTask, start:moment(newValue[0]).format('YYYY-MM-DD HH:mm:ss')});
        if(newValue[1]) setNewTask({...newTask, end:moment(newValue[1]).format('YYYY-MM-DD HH:mm:ss')});
        setDateRange([newValue[0],newValue[1]]);
    }

    const dateRangeRenderInput=(startProps, endProps) => (
        <>
            <TextField {...startProps} variant="standard" required />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps}  variant="standard"  required/>
        </>
    )
    return (
        <Grid container spacing={2} style={{ paddingLeft: "1em", paddingRight: "1em",paddingTop:"1em" }} 
            // component="form" 
            // onSubmit={handleOnSubmit} 
            >
            <Grid item lg={6} md={6} sm={6} xs={12}>
                <TextField label="Title : " onChange={handleTitleChange} placeholder={"Example : Redesigning UI"} style={{ width: '100%' }} variant="standard"  required/>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
                {(!is_subtask)?
                    <NumberFormat  customInput={TextField}  variant="standard" label="Cost estimation: "
                        fullWidth thousandSeparator={true}  isNumericString={true}  onValueChange={ handleCostEstimationChange}
                        displayType={'input'} />:<></>}
                
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} container>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateRangePicker required startText="Start : " endText="End : "
                        value={dateRange} minDate={minDate?parseISO(minDate):null} maxDate={maxDate?parseISO(maxDate):null}
                        onChange={handleEstimationDateRangeChange}
                        renderInput={dateRangeRenderInput}
                    />
                </LocalizationProvider>  
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                {data.cards?.length?( <UserSearchBar detailProject={detailProject}  exceptedData={[...exceptedData,data.creator]}  onChange={handleUserbarOnChange} userOnly={true}/>):
                (<UserSearchBar  task={data} exceptedData={[...exceptedData,data.creator]} onChange={handleUserSearchbarChange} userOnly={true}/>)}
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <SelectTag onChange={handleSelectTagChange} isEdit={true} defaultValue={[]}/>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography>Description : </Typography>
                <TextField   variant="standard"   multiline   rows={4}  style={{ width: '100%' }} onChange={handleDescriptionChange} />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Button onClick={handleAddNewTask} variant="contained" color="primary">Add</Button>
            </Grid>
        </Grid>
    )
}
export default FormCreateNewTask;