import React,{useEffect,useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MovableCardWrapper } from 'react-trello/dist/styles/Base';
import Tag from 'react-trello/dist/components/Card/Tag';
import moment from 'moment';
import ModalDetailTask from './../../tasks/modalDetailTask/ModalDetailTask';
import StatusChip from './../StatusChip';

//https://github.com/rcdexta/react-trello/issues/18
const CustomCard = (props) => {
    const { 
        onClick, cardStyle, className, onDelete, 
        id, title, label, start, end,
        actual_start,actual_end,start_label,end_label,
        tags, complete, cards,tagStyle
    } = props;
    let location = useLocation();
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    searchParams.set('task_id', id);
    const [progress,setProgress]=useState(0)
    const [overdue,setOverdue]=useState(false);

    const checkOverdue=()=>{
        var current_date=moment();
        var end_date=moment(end, "YYYY-MM-DD");
        var actual_end_date=moment(actual_end, "YYYY-MM-DD");
        
		var timeDiff=moment.duration(current_date.diff(end_date)).asDays();
        if(timeDiff>0 && !actual_end && progress<100) setOverdue(true);
        if(timeDiff>0 && progress<100) setOverdue(true);
        if(end_label=='Selesai terlambat') setOverdue(true);
    }

    const getProgress=()=>{
        var valuePerSubtask=100/cards.length;
        var completeSubtaskCounter=0;
        for (let i = 0; i < cards.length; i++) {
            const subtask = cards[i];
            if(subtask.complete) completeSubtaskCounter++;
        }
        var finalValue=completeSubtaskCounter*valuePerSubtask;
        if(isNaN(finalValue)) setProgress(0);
        else setProgress(finalValue);
    }

    useEffect(()=>{
        getProgress();
        checkOverdue();
    },[])

    return (
            <MovableCardWrapper
            onClick={onClick}
                style={cardStyle}
                className={className}
            >
                <Link to={{ pathname: pathname, search: searchParams.toString() }} style={{ textDecoration: 'none', color: '#393939' }}>

                        <header
                            style={{
                                borderBottom: '1px solid #eee', paddingBottom: 6, marginBottom: 10,
                                display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
                            }}>
                                <div style={{ fontSize: '1em', fontWeight: 'bold', color: '#393939' }}>
                                    {title} <br/> ({progress}%)
                                </div>
                        </header>
                        <div style={{ fontSize: '1em' }}>
                            {formattedDateTimes(start, end,actual_start,actual_end,start_label,end_label)}
                            <div style={{ marginTop: 5, textAlign: 'center', fontSize: '1em', fontWeight: 'bold' }}>
                               {(start_label=='Belum dikerjakan' && end_label=='Belum dikerjakan')?(
                                <span style={{margin:'0.2em'}}>
                                    <StatusChip status={start_label}/>
                                </span>
                               ):<></>}
                            </div>
                            {tags && (
                                <div
                                    style={{
                                        borderTop: '1px solid #eee', paddingTop: 6, display: 'flex',
                                        justifyContent: 'flex-end', flexDirection: 'row', flexWrap: 'wrap'
                                    }}>
                                    {/* {tags.map(item =>{ 
                                        return (
                                            <span key={`${item.id}-${item.tag?.id}`} 
                                            style={{
                                                padding: '2px 3px',
                                                borderRadius: '3px',
                                                margin: '2px 5px',
                                                fontSize: '70%',
                                                color: 'white',
                                                backgroundColor: 'orange'
                                            }} >{item.tag?.title}</span>)
                                    })} */}
                                    {overdue?(    
                                        <span style={{
                                                padding: '2px 3px',
                                                borderRadius: '3px',
                                                margin: '2px 5px',
                                                fontSize: '70%',
                                                color: 'white',
                                                backgroundColor: '#e53935'
                                            }}>
                                            Overdue
                                        </span>
                                    ):<></>}
                                </div>
                            )}
                        </div>
                </Link>
            </MovableCardWrapper>
    )
}
const formattedDateTimes = (start, end,) => {
    if (start) start = moment(start).format('DD MMM YYYY');
    if (end) end = moment(end).format('DD MMM YYYY');
    return (
        <div style={{ color: '#4C4C4C' }}>
            Start : {start} <br />
            End : {end}
        </div>
    )
}
export default CustomCard;