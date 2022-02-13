import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MovableCardWrapper } from 'react-trello/dist/styles/Base';
import Tag from 'react-trello/dist/components/Card/Tag';
import moment from 'moment';
import StatusChip from './../StatusChip';

//https://github.com/rcdexta/react-trello/issues/18
const CustomCard = (props) => {
    const { 
        onClick, cardStyle, className, onDelete, 
        id, title, start, end,
        actual_start,actual_end,start_label,end_label,
        tags, complete, progress 
    } = props;
    let location = useLocation();
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);
    searchParams.set('tasks_id', id);

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
                                    {title}
                                </div>
                        </header>
                        <div style={{ fontSize: '1em' }}>
                            {formattedDateTimes(start, end,actual_start,actual_end,start_label,end_label,progress)}
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
                                    {isCompleted(complete)}
                                    {tags.map(tag => {
                                        if(tag.tag){
                                            return (<Tag key={tag.tag.id} {...tag.tag} />)
                                        }else{
                                            return (<Tag key={tag.id} {...tag} />)
                                        }
                                    })}
                                </div>
                            )}
                        </div>
                </Link>
            </MovableCardWrapper>
    )
}
const formattedDateTimes = (start, end,progress) => {
    if (start) start = moment(start).format('DD MMM YYYY');
    if (end) end = moment(end).format('DD MMM YYYY');
    return (
        <div style={{ color: '#4C4C4C' }}>
            Start : {start} <br />
            End : {end} <br/>
        </div>
    )
}
const isCompleted = (complete) => {
    if (complete) return (<Tag title={'Complete'} color="white" bgcolor={'#06890c'} />);
    return (<></>)
}
export default CustomCard;