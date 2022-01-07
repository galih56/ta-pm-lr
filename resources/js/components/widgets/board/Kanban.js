import React, { useContext, useEffect, memo, useState } from 'react';
import Board from 'react-trello';
import { createTranslate } from 'react-trello';
import UserContext from '../../../context/UserContext';
import axios from 'axios';
import CustomCard from './Card';
import EditLaneForm from './EditLaneForm';
import toast from 'react-hot-toast';

const Kanban = (props) => {
    const global = useContext(UserContext);
    const [board, setBoard] = useState({ lanes: [] });
    const {detailProject,handleDetailTaskOpen} = props;

    useEffect(() => {
        if (detailProject){                
            const toast_loading = toast.loading('Loading...');
            var url = `${process.env.MIX_BACK_END_BASE_URL}projects/${detailProject.id}/kanban`;
            if(![1,2,3,4].includes(global.state.role?.id)){
                url+=`?users_id=${global.state.id}`;
            }
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.get(url)
                .then((result) => {
                    setBoard({lanes:result.data});
                    toast.dismiss(toast_loading);
                }).catch((error) => {
                    toast.dismiss(toast_loading);
                    switch(error.response.status){
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

        const url = process.env.MIX_BACK_END_BASE_URL + 'tasks/';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        toast.promise(
            axios.post(url, newCard),
            {
                loading: 'Creating a new task',
                success: (result)=>{
                    newCard.id = result.data.id;
                    newCard.projects_id = detailProject.id;
                    newCard.lists_id = laneId;
                    newCard={...newCard,...result.data}
                    global.dispatch({ type: 'create-new-task', payload: newCard })
                    return <b>A new task successfully created</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
            });
        return newCard;
    }

    const onLaneRename = (laneId, data) => {
        data.projects_id = detailProject.id;
        data.lists_id = laneId;
        if (window.navigator.onLine) {
            const url = process.env.MIX_BACK_END_BASE_URL + 'lists/' + laneId;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            toast.promise(
                axios.patch(url, data),
                {
                    loading: 'Updating...',
                    success: (result)=>{
                        global.dispatch({ type: 'update-list', payload: data })
                        return <b>Successfully updated</b>
                    },
                    error: (error)=>{
                        if(error.response.status==401) return <b>Unauthenticated</b>;
                        if(error.response.status==422) return <b>Some required inputs are empty</b>;
                        return <b>{error.response.statusText}</b>;
                    },
                });
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

    const onCardDelete=(lists_id,tasks_id)=>{
        eventBus.publish({type: 'REMOVE_CARD', laneId: listId, cardId: tasks_id});
    }

    const onSorting=(card1,card2)=>{
        // console.log(card1,card2)
    }

    return (
        <React.Fragment>
            <Board
                t={createTranslate(TEXTS)}
                data={board}
                collapsibleLanes={true}
                onLaneUpdate={onLaneRename}
                onCardAdd={onCardNew}
                onCardClick={onCardClick}
                components={{ Card: CustomCard, NewCardForm: EditLaneFormWithDetailProject }}
                detailProject={detailProject}
                eventBusHandle={setEventBus}
                laneSortFunction={onSorting}
            >
            </Board>
             
        </React.Fragment>
    )

}


export default memo(Kanban);