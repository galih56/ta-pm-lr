import React, { useContext} from 'react';
import UserContext from '../../../context/UserContext';
import TabPanel from '../../widgets/TabPanel';
import BreadCrumbs from '../../widgets/BreadCrumbs';
import RefreshButton from '../../widgets/RefreshButton';
import Others from './others/Others';

const TabOthers=({tabState, index, detailProject, handleDetailTaskOpen,getDetailProject} )=>{
    const global = useContext(UserContext);
    return(
        <TabPanel value={tabState} index={index}>
            <BreadCrumbs projectName={detailProject.title} tabName="Others" style={{marginTop:'1em'}}/>
            <RefreshButton onClick={getDetailProject} style={{float:'right'}}/>
            <Others refreshProject={getDetailProject} detailProject={detailProject}   handleDetailTaskOpen={handleDetailTaskOpen}/>
        </TabPanel>
    )
}
export default TabOthers;
                              