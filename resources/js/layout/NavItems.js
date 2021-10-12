import React,{useContext,useState,useEffect} from 'react';
import { Link , useHistory} from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import EmailIcon from '@material-ui/icons/Email';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import UserContext from './../context/UserContext'

export const MainListItems = () => (
    <React.Fragment>
        <ListItem button component={Link} to="/projects" >
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText>
                Home
            </ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/teams" >
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText> Teams </ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/reports" >
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText>Reports
            </ListItemText>
        </ListItem>
    </React.Fragment >
);
export const RestrictedAccessMenu = () => {
    const global=useContext(UserContext);
    const history=useHistory();

    useEffect(()=>{
        const checkCurrentProjectMemberRole=(location)=>{
            var pathname=location.pathname.split('/');
            var current_route=pathname[1];
            var id=pathname[2];
            var remove_member_role=true;
            if((current_route=='projects'  && id)) remove_member_role=false;
            if(current_route=='approvals')  remove_member_role=false;
            if(remove_member_role) global.dispatch({type:'remove-project-member-role'});
        }
        checkCurrentProjectMemberRole(history.location);
        return history.listen(location=>{
            checkCurrentProjectMemberRole(location);
        });
    },[history])

    /*
        access levels
        1. system administrator, ceo
        2. project owner
        3. project manager
    */
    const [isFirstLevel,setIsFirstLevel]=useState(false);
    const [isSecondLevel,setIsSecondLevel]=useState(false);
    const [isThirdLevel,setIsThirdLevel]=useState(false);

    useEffect(()=>{
        const occupation=global.state.occupation;
        const current_project_member_role=global.state.current_project_member_role;
        if([1,8].includes(occupation?.id)) setIsFirstLevel(true);
        else setIsFirstLevel(false);
        if([1].includes(current_project_member_role?.id)) setIsSecondLevel(true); else setIsSecondLevel(false);
        if( [2].includes(current_project_member_role?.id)) setIsThirdLevel(true); else setIsThirdLevel(false);
    },[global.state.occupation,global.state.current_project_member_role]);


    return (
        <React.Fragment>
            {(isFirstLevel || isSecondLevel)?(
                <ListSubheader inset>Restricted Access</ListSubheader>
            ):<></>}
            {(isFirstLevel)?(
                <React.Fragment>
                    <ListItem button component={Link} to="/clients" >
                        <ListItemIcon>
                            <BusinessCenterIcon />
                        </ListItemIcon>
                        <ListItemText> Clients </ListItemText>
                    </ListItem>
                    <ListItem button component={Link} to="/users" >
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText> Employee </ListItemText>
                    </ListItem>
                </React.Fragment>
            ):<></>}
            
            {(isSecondLevel)?(
                <React.Fragment>
                    <ListItem button component={Link} to="/approvals" >
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText> Approvals </ListItemText>
                    </ListItem>
                </React.Fragment>
            ):<></>}
            {/* 
            <ListSubheader inset>Saved reports</ListSubheader>
            <ListItem button component={Link} to="/my-tasks" >
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Last quarter" />
            </ListItem>
            <ListItem button component={Link} to="/my-tasks" >
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Year-end sale" />
            </ListItem> 
            */}
        </React.Fragment>
    )
};

{/* 
<ListItem button component={Link} to="/my-tasks" >
    <ListItemIcon>
        <LayersIcon />
    </ListItemIcon>
    <ListItemText>Integrations</ListItemText>
</ListItem>  
*/}