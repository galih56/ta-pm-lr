import React, { useContext, useEffect, memo, useState } from 'react';
import Timeline from './timeline/Timeline';
import UserContext from '../../../context/UserContext';
import TabPanel from '../../widgets/TabPanel';
import BreadCrumbs from '../../widgets/BreadCrumbs';
import RefreshButton from '../../widgets/RefreshButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const TabTimeline=({tabState, index, detailProject,handleDetailTaskOpen,openModalImportExcel,handleModalCreateList,getDetailProject} )=>{
    
    const global = useContext(UserContext);
    return(
        <TabPanel value={tabState} index={index} style={{  padding: '0.5em', minHeight:'500px !important' } }>
            <Grid container >   
                <BreadCrumbs projectName={detailProject.title} tabName="Timeline" style={{marginTop:'1em'}}/>
                <Grid item xl={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                    <RefreshButton onClick={getDetailProject}  style={{float:'right'}}/>
                    {([1,2,4,5].includes(global.state.role?.id))?(
                        <>
                            <Button variant="contained" color="primary"
                                onClick={()=>handleModalCreateList(true)}
                                style={{ marginBottom: '1em' }}
                                startIcon={<AddIcon />}> Add new list </Button>
                            <Button href={`${process.env.MIX_BACK_END_BASE_URL}projects/${detailProject.id}/export`}
                                target="_blank" variant="contained" color="primary"
                                style={{ marginBottom: '1em' ,marginLeft:'1em' }}>
                                Export
                            </Button>
                            <Button color="primary" onClick={openModalImportExcel} style={{ marginBottom: '1em' ,marginLeft:'1em'}}> 
                                Import 
                            </Button>
                        </>
                    ):<></>}
                    
                </Grid>
                <Timeline detailProject={detailProject}
                    handleDetailTaskOpen={handleDetailTaskOpen}
                />
            </Grid>
        </TabPanel>
    )
}
export default TabTimeline;