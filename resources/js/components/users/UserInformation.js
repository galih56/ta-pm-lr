import React, { useState } from "react";
import {Link, BrowserRouter as Router} from 'react-router-dom'
import { Paper, Grid, ListItem, Collapse } from '@material-ui/core/';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import UserTable from './UserTable';
import RoleInformation from './../roles/RoleInformation';
import makeStyles from '@material-ui/styles/makeStyles';
import styleConfig from '../../layout/Theme';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => (styleConfig(theme)));

const UserInformation = (props) => {
    const classes = useStyles();
    const [userTableOpen, setUserTableOpen] = useState(true);
    const [roleTableOpen, setRoleTableOpen] = useState(true);
    const handleUserTableOpen = () => setUserTableOpen(!userTableOpen);
    const handleRoleTableOpen = () => setRoleTableOpen(!roleTableOpen);

    return (
        <React.Fragment>
                <Grid lg={12} md={12} sm={12} xs={12} item>
                    <Paper className={classes.paper}>
                        <Grid container>
                            <Grid lg={12} md={12} sm={12} xs={12} item>
                                <Router>
                                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="teams">
                                        <Button component={Link}  color="primary"
                                            to="/projects">
                                            Projects
                                        </Button>
                                        <Typography color="textPrimary">Users</Typography>
                                    </Breadcrumbs>
                                </Router>
                            </Grid>
                            <Grid lg={12} md={12} sm={12} xs={12} item>
                                <ListItem button dense font="small" onClick={handleUserTableOpen} style={{ paddingBottom: '1.2em' }}> {userTableOpen ? <ExpandLess /> : <ExpandMore />}Users</ListItem>
                                <Collapse in={userTableOpen} timeout="auto">
                                    <UserTable />
                                </Collapse>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid lg={12} md={12} sm={12} xs={12} item>
                    <Paper className={classes.paper}>
                        <ListItem button dense font="small" onClick={handleRoleTableOpen} style={{ paddingBottom: '1.2em' }}> {roleTableOpen ? <ExpandLess /> : <ExpandMore />}Roles</ListItem>
                        <Collapse in={roleTableOpen} timeout="auto">
                            <RoleInformation />
                        </Collapse>
                    </Paper>
                </Grid>
        </React.Fragment>
    )
};

export default UserInformation;
