import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const CustomBreadCrumbs=({projectName,tabName})=>{
    return(
        <Grid lg={12} md={12} sm={12} xs={12} item>
            <Router>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label={projectName}>
                    <Button component={Link}  color="primary"
                        to="/projects">
                        Projects
                    </Button>
                    <Typography>
                        {projectName}
                    </Typography>
                    <Typography>
                        {tabName}
                    </Typography>
                </Breadcrumbs>
            </Router>
        </Grid>
    )
}
export default CustomBreadCrumbs