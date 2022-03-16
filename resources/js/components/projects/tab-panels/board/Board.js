import React, { useContext, useEffect, memo, useState } from 'react';
import Board from 'react-trello';
import { createTranslate } from 'react-trello';
import UserContext from '../../../../context/UserContext';
import axios from 'axios';
import CustomCard from './Card';
import EditLaneForm from './EditLaneForm';
import toast from 'react-hot-toast';
import TabPanel from '../../../widgets/TabPanel';
import BreadCrumbs from '../../../widgets/BreadCrumbs';
import Grid from '@material-ui/core/Grid';


const Kanban = (props) => {
    const global = useContext(UserContext);
    const [board, setBoard] = useState({ lanes: [] });
    const {tabState, index, detailProject,handleDetailTaskOpen} = props;

    useEffect(() => {
        if (detailProject){                
            var url = `${process.env.MIX_BACK_END_BASE_URL}projects/${detailProject.id}/kanban`;
            if(![1,2,3,4].includes(global.state.role?.id)){
                url+=`?users_id=${global.state.id}`;
            }
            axios.get(url)
                .then((result) => {
                    setBoard({lanes:result.data});
                }).catch((error) => {
                    switch(error.response.status){
                        case 404 : toast.error(<b>Project not found</b>); break;
                        case 401 : toast.error(<b>Unauthenticated</b>); break;
                        case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                        default : toast.error(<b>{error.response.statusText}</b>); break
                    }
                });

        }
    }, [props.detailProject]);

    const TEXTS = {
        "Add another lane": "NEW LANE",
        "Click to add card": "Edit lane or add new card",
        "Delete lane": "Delete lane",
        "button": { "Add lane": "Add lane", "Add card": "ADD CARD", "Cancel": "Cancel" },
        "placeholder": { "title": "Title", "description": "Description", "label": "Label" }
    }

    const onCardNew = (newCard, laneId) => {
        newCard.id = Date.now();
        newCard.lists_id = laneId;
        newCard.users_id = global.state.id;
        newCard.projects_id = detailProject.id;

        for (let i = 0; i < detailProject.members.length; i++) {
            const member = detailProject.members[i];
            if(member.id==global.state.id) newCard.projectMemberId=member.id; break;
        }

        const url = `${process.env.MIX_BACK_END_BASE_URL}tasks`;
        
        const toast_loading = toast.loading('Creating a new task...');
        axios.post(url, newCard)
            .then((result) => {  
                newCard.id = result.data.id;
                newCard.projects_id = detailProject.id;
                newCard.lists_id = laneId;
                newCard={...newCard,...result.data}
                global.dispatch({ type: 'create-new-task', payload: newCard })
                toast.dismiss(toast_loading)
                toast.success(<b>A new task successfully created</b>)
            }).catch((error)=> toast.dismiss(toast_loading));
        return newCard;
    }

    const onLaneRename = (laneId, data) => {
        data.projects_id = detailProject.id;
        data.lists_id = laneId;
        if (window.navigator.onLine) {
            const url = `${process.env.MIX_BACK_END_BASE_URL}lists/${laneId}`;
            const toast_loading = toast.loading('Updating...'); 
            axios.patch(url, data)
                .then((result) => {                          
                    global.dispatch({ type: 'update-list', payload: data })
                    toast.dismiss(toast_loading)
                    toast.success(<b>Successfully updated</b>)
                }).catch((error)=> toast.dismiss(toast_loading));
        }
    }
    
    const onCardClick = (cardId, metadata,laneId) =>{ 
        handleDetailTaskOpen({ task : {projects_id: detailProject.id, lists_id: laneId, id: cardId, onTaskDelete:onCardDelete}, open: true});
    }
    const EditLaneFormWithDetailProject=(props)=>{
        return (
            <EditLaneForm detailProject={{
                id:detailProject.id,
                start:detailProject.start,
                end:detailProject.end,
                members:detailProject.members,
                clients:detailProject.clients
            }} {...props}/>
        )
    }
   
    const [eventBus, setEventBus] = useState(undefined);

    const onCardDelete=(laneId,cardId)=>{
        eventBus.publish({type: 'REMOVE_CARD', laneId: laneId, cardId: cardId});
    }

    const onSorting=(card1,card2)=>{
        // console.log(card1,card2)
    }

    return (
        <TabPanel value={tabState} index={index} className={{  padding: '0.5em', minHeight:'500px !important' } }>
         <Grid container>
             <BreadCrumbs projectName={detailProject.title} tabName="Board"/>
             <Grid item xl={12} md={12} sm={12} xs={12} style={{marginTop:'1em'}}>
                <Board t={createTranslate(TEXTS)} data={board} collapsibleLanes={true} onLaneUpdate={onLaneRename} onCardAdd={onCardNew} 
                    onCardClick={onCardClick} components={{ Card: CustomCard, NewCardForm: EditLaneFormWithDetailProject }}
                    detailProject={detailProject} eventBusHandle={setEventBus} laneSortFunction={onSorting}>
                </Board>
             </Grid>
         </Grid>
     </TabPanel>
        
    )

}


export default memo(Kanban);