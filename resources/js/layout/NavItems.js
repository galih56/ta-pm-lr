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

    /*
        access levels
        1. system administrator, ceo
        2. project owner
        3. project manager
    */
    const [showAdminMenu,setAdminMenu]=useState(false);
    const [showApprovalMenu,setShowApprovalMenu]=useState(false);
    useEffect(()=>{
        const checkCurrentSelectedProject=(location)=>{
            var pathname=location.pathname.split('/');
            var current_route=pathname[1];
            var id=pathname[2]; 
            if(((current_route=='projects' && id) || current_route=='approvals') && global.state.current_project_id) {
                setShowApprovalMenu(true); 
            } else{ 
                setShowApprovalMenu(false);
                global.dispatch({type:'remove-current-selected-project'});
            }
        }
        checkCurrentSelectedProject(history.location);
        return history.listen(location=>{
            checkCurrentSelectedProject(location);
        });
    },[ global.state.current_project_id,history]);

    useEffect(()=>{
        if([1,2].includes(global.state.occupation?.id)) setAdminMenu(true);
        else setAdminMenu(false);
    },[global.state.occupation]);


    return (
        <React.Fragment>
            {(showAdminMenu || showApprovalMenu)?(
                <ListSubheader inset>Restricted Access</ListSubheader>
            ):<></>}
            {(showAdminMenu)?(
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
            
            {(showApprovalMenu)?(
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