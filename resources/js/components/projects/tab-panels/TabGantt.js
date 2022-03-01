import React, { useContext} from 'react';
import UserContext from '../../../context/UserContext';
import TabPanel from '../../widgets/TabPanel';
import GanttChart from '../../widgets/GanttChart';
import BreadCrumbs from '../../widgets/BreadCrumbs';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const TabGantt=({tabState, index, detailProject,handleDetailTaskOpen} )=>{
    const global = useContext(UserContext);
    return(
        <TabPanel value={tabState} index={index} style={{  padding: '0.5em', minHeight:'500px !important' } }>
            <Grid container >   
                <BreadCrumbs projectName={detailProject.title} tabName="Gantt"/>
                <Grid item xl={12} md={12} sm={12} xs={12}>
                    <Typography variant="h5">{detailProject.title}  ({detailProject.progress}%)</Typography>
                </Grid>
                <Grid item xl={12} md={12} sm={12} xs={12} >
                    <GanttChart projects_id={detailProject.id} lists={detailProject.columns} handleDetailTaskOpen={handleDetailTaskOpen} />
                </Grid>
            </Grid>
        </TabPanel>
    )
}
export default TabGantt;
                              