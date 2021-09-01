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

const FormCreateNewTask=({newTask,setNewTask,handleAddNewTask,detailProject,isSubtask,minDate,maxDate})=>{
    const global=useContext(UserContext);
    const [dateRange, setDateRange] = useState([null, null]);
    const [exceptedUsers,setExceptedUsers]=useState([]);

    useEffect(()=>{
        setNewTask({...newTask,is_subtask:isSubtask});
        const checkLoggedInUserProjectMember=()=>{
            var logged_in_user={
                id:global.state.id,
                name:global.state.name,
                username:global.state.username,
                email:global.state.email,
                current_project_member_role:global.state.current_project_member_role
            }
            var registered=false
            for (let i = 0; i < detailProject.members.length; i++) {
                const member = detailProject.members[i];
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
    
    return (
        <Grid container spacing={2} style={{ paddingLeft: "1em", paddingRight: "1em",paddingTop:"1em" }} component="form" 
            onSubmit={(e) => { 
                e.preventDefault(); 
                handleAddNewTask();
            }} >
            <Grid item lg={6} md={6} sm={6} xs={12}>
                <TextField
                    label="Title : "
                    onChange={ (e) => setNewTask({ ...newTask, title: e.target.value })}
                    placeholder={"Example : Redesigning UI"}
                    style={{ width: '100%' }}
                    variant="standard" 
                    required
                />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
                {(!isSubtask)?
                    <NumberFormat 
                        customInput={TextField} 
                        variant="standard"
                        label="Actual cost : "
                        onValueChange={ (formattedValue) => setNewTask({ ...newTask, cost: formattedValue.value })}
                        fullWidth
                        thousandSeparator={true} 
                        isNumericString={true} 
                        displayType={'input'} />:<></>}
                
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} container>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateRangePicker
                        required
                        startText="Start : "
                        endText="End : "
                        value={dateRange}
                        minDate={minDate?parseISO(minDate):null}
                        maxDate={maxDate?parseISO(maxDate):null}
                        onChange={(newValue) => {
                            if(newValue[0]) setNewTask({...newTask, start:moment(newValue[0]).format('YYYY-MM-DD HH:mm:ss')});
                            if(newValue[1]) setNewTask({...newTask, end:moment(newValue[1]).format('YYYY-MM-DD HH:mm:ss')});
                            setDateRange([newValue[0],newValue[1]]);
                        }}
                        renderInput={(startProps, endProps) => (
                        <>
                            <TextField {...startProps} variant="standard" required />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps}  variant="standard"  required/>
                        </>
                        )}
                    />
                </LocalizationProvider>  
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <UserSearchBar 
                    detailProject={detailProject}
                    exceptedUsers={exceptedUsers} 
                    onChange={(users)=>{
                        setNewTask({...newTask,members:[...users]});
                    }}
                />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <SelectTag onChange={(tags) => setNewTask({ ...newTask, tags: tags })} isEdit={true} defaultValue={[]}/>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography>Description : </Typography>
                <TextField 
                    variant="standard" 
                    multiline 
                    rows={4}
                    style={{ width: '100%' }}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value }) } />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Button type="submit" variant="contained" color="primary">Add</Button>
            </Grid>
        </Grid>
    )
}
export default FormCreateNewTask;