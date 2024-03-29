import React, { useState,Suspense,lazy } from 'react';
import Grid from '@material-ui/core/Grid';
import MemberList from './members/MemberList';
const ProjectInformations = lazy(() => import('./ProjectInformations'));
const ClientTable = lazy(() => import('./clients/ClientTable'));

const Others = ({detailProject,handleDetailTaskOpen, refreshProject}) => {
    const [memberChange,setMemberChange]=useState(false);

    return (
        <Grid container spacing={2}>
            <Suspense>
                <Grid item xl={12} md={12} sm={12} xs={12} >
                    <ProjectInformations detailProject={detailProject} />
                </Grid>
                <Grid item xl={12} md={12} sm={12} xs={12} >
                    <MemberList projects_id={detailProject.id} data={detailProject?.members?detailProject.members:[]} 
                        handleDetailTaskOpen={handleDetailTaskOpen} memberChange={memberChange}
                        setMemberChange={setMemberChange} refreshProject={refreshProject}/>
                </Grid>
                <Grid item xl={12} md={12} sm={12} xs={12}>
                    <ClientTable detailProject={{id:detailProject.id,clients:detailProject.clients}} refreshProject={refreshProject}/>
                </Grid>
            </Suspense>
        </Grid >
    );
}

export default Others;