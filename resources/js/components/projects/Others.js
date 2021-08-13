import React, { Suspense,lazy } from 'react';
import Grid from '@material-ui/core/Grid';
// import Overview from './Overview';

const ProjectInformations = lazy(() => import('./ProjectInformations'));
const ClientTable = lazy(() => import('./clients/ClientTable'));
const MemberList = lazy(() => import('./members/MemberList'));
const TeamList = lazy(() => import('./TeamList'));
const RoleList = lazy(() => import('./roles/RoleList'));
const RepositoryList = lazy(() => import('./github/RepositoryList'));

const Others = ({detailProject,handleDetailTaskOpen}) => {
    return (
        <Grid container spacing={2}>
            <Suspense>
                <Grid item xl={12} md={12} sm={12} xs={12} >
                    <ProjectInformations detailProject={detailProject} />
                </Grid>
                {/* <Grid item xl={12} md={12} sm={12} xs={12} >
                    <Overview detailProject={detailProject} handleDetailTaskOpen={handleDetailTaskOpen}/>
                </Grid>  */}
                <Grid item xl={7} md={7} sm={12} xs={12} >
                    <MemberList 
                        projects_id={detailProject.id} 
                        data={detailProject.members} 
                        handleDetailTaskOpen={handleDetailTaskOpen} />
                </Grid>
                <Grid item xl={5} md={5} sm={12} xs={12} >
                    <RoleList projects_id={detailProject.id} />
                </Grid>
                <Grid item xl={12} md={12} sm={12} xs={12}>
                    <ClientTable detailProject={{id:detailProject.id,clients:detailProject.clients}}/>
                </Grid>
                <Grid item xl={6} md={6} sm={6} xs={12}>
                    <RepositoryList projects_id={detailProject.id}/>
                </Grid>
                <Grid item xl={6} md={6} sm={6} xs={12}>
                    <TeamList projects_id={detailProject.id}/>
                </Grid>
            </Suspense>
        </Grid >
    );
}

export default Others;