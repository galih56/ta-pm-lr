import 'fontsource-roboto';
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
        if (detailProject) setBoard({ lanes: detailProject.columns });
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
    const onCardMove = (fromLaneId, toLaneId, cardId, index) => {
        const body = { id: cardId, lists_id: toLaneId }
        const url = process.env.MIX_BACK_END_BASE_URL + 'tasks/' + cardId;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.patch(url, body, config)
                .then((result) => {
                    global.dispatch({ type: 'move-card', payload: result.data })
                    toast.success(`A card has been moved`);
                }).catch(console.log);
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
    return (
        <React.Fragment>
            <Board
                t={createTranslate(TEXTS)}
                data={board}
                editable={true}
                // draggable={true}
                // laneDraggable={true}
                collapsibleLanes={true}
                onLaneUpdate={onLaneRename}
                onCardAdd={onCardNew}
                onCardClick={onCardClick}
                components={{ Card: CustomCard, NewCardForm: EditLaneFormWithDetailProject }}
                onCardMoveAcrossLanes={onCardMove}
                detailProject={detailProject}
                eventBusHandle={setEventBus}
            >
            </Board>
             
        </React.Fragment>
    )

}


export default memo(Kanban);