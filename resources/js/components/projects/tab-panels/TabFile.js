import React, { useContext} from 'react';
import UserContext from '../../../context/UserContext';
import TabPanel from '../../widgets/TabPanel';
import Files from '../../widgets/Files';
import BreadCrumbs from '../../widgets/BreadCrumbs';
import Grid from '@material-ui/core/Grid';

const TabFile=({tabState, index, detailProject, handleDetailTaskOpen,getDetailProject} )=>{
    const global = useContext(UserContext);
    return(
        <TabPanel value={tabState} index={index} style={{  padding: '0.5em', minHeight:'500px !important' } }>
            <Grid container >   
                <BreadCrumbs projectName={detailProject.title} tabName="Files" style={{marginTop:'1em'}}/>
                <Grid item xl={12} md={12} sm={12} xs={12} >
                    <Files projects_id={detailProject.id} handleDetailTaskOpen={handleDetailTaskOpen} />
                </Grid>
            </Grid>
        </TabPanel>
    )
}
export default TabFile;
                              