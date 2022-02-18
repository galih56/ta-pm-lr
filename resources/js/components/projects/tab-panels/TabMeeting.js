import React, { useContext} from 'react';
import UserContext from '../../../context/UserContext';
import TabPanel from '../../widgets/TabPanel';
import Calendar from '../../widgets/Calendar';
import BreadCrumbs from '../../widgets/BreadCrumbs';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RefreshButton from '../../widgets/RefreshButton';

const TabMeeting=({tabState, index, detailProject, handleDetailMeetingOpen,handleModalCreateMeeting,getDetailProject} )=>{
    const global = useContext(UserContext);
    const openModalCreateMeeting=()=>handleModalCreateMeeting(true)
    return(
        <TabPanel value={tabState} index={index} style={{  padding: '0.5em', minHeight:'500px !important' } }>
            <Grid container >   
                <BreadCrumbs projectName={detailProject.title} tabName="Meeting" style={{marginTop:'1em'}}/>
                <Grid item xl={12} md={12} sm={12} xs={12} >
                    <Button  variant="contained" color="primary" onClick={openModalCreateMeeting}>Add new meeting</Button>
                    <Calendar detailProject={detailProject} handleDetailMeetingOpen={handleDetailMeetingOpen} />
                </Grid>
            </Grid>
        </TabPanel>
    )
}
export default TabMeeting;
                              