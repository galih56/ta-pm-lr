import React, { useContext,useState } from 'react';
import UserContext from '../../../context/UserContext';
import {v4 as uuidv4} from 'uuid';
import { gapi } from 'gapi-script';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Icon } from '@iconify/react';
import googleMeet from '@iconify-icons/logos/google-meet';
import toast from 'react-hot-toast';
import moment from 'moment';
import axios from 'axios';

const GoogleClient  = ({isEdit,meeting,detailProject,saveChanges}) => {
    const [loading, setLoading]=useState(false);
    const global = useContext(UserContext);
    
    function insertEvent(calendarId,cb){
        var requestId = uuidv4();
        gapi.client.load('calendar', 'v3', function() {
            const body={
                calendarId:calendarId,
                conferenceDataVersion:1,
                resource: {
                    start:{ dateTime : moment(meeting.start).format('YYYY-MM-DDTHH:MM:SS'), timeZone : 'Asia/Jakarta' },
                    end:{ dateTime : moment(meeting.end).format('YYYY-MM-DDTHH:MM:SS'), timeZone :'Asia/Jakarta' },
                    conferenceData: {
                        createRequest: {
                            conferenceSolutionKey: { type: "hangoutsMeet" },
                            requestId: requestId
                        }
                    },
                    summary : meeting.title,
                    description : meeting.description,
                    reminders:{
                        useDefault:false,
                        overrides:[
                            {method:'email',minutes:10},
                            {method:'popup',minutes:10}
                        ]
                    },
                }
            }
            const insertRequest=gapi.client.calendar.events.insert(body);
            insertRequest.execute(function(event) {
                if(event.error){
                    toast.error('Failed to create google calendar event')
                }else{
                    updateMeetingMember({google_calendar_info:event})
                }
                if(cb)cb()
            });
        });
    }
    
    function insertCalendar(calendars,insertEventCallback){
        var calendarWithProjectName = checkIfProjectCalendarExist(calendars,detailProject.title);
        
        if(!calendarWithProjectName){
            gapi.client.load('calendar', 'v3', function() {
                const body={
                    contentType: 'application/json',    
                    summary: detailProject.title
                }
                const insertRequest=gapi.client.calendar.calendars.insert(body);
                insertRequest.execute(function(response) {
                    var newCalendar= response.result;
                    insertEventCallback(newCalendar.id);
                    toast.success('A new calendar was created on google calendar');
                });
            });
        }else{
            insertEventCallback(calendarWithProjectName.id);
        }
    }

    function checkIfProjectCalendarExist(calendars,id){
        var existedCalendar=null
        for (let i = 0; i < calendars.length; i++) {
            const calendar = calendars[i];
            if(calendar.summary==id) {
                existedCalendar=calendar; 
                break;
            }
        }
        return existedCalendar;
    }

    function getCalendar(cb){
        gapi.client.load('calendar', 'v3', function() {
            gapi.client.calendar.calendarList.list({
                maxResults: 250,
            }).execute(res => {
                let calendars = res.items;
                cb(calendars)
            });
        });
    }

    const updateMeetingMember=(body)=>{
        if(!meeting.member?.id) return;
        const url = `${process.env.MIX_BACK_END_BASE_URL}meetings/${meeting.id}`;
        axios.patch(url)
            .then((result) => {
                var newMeetingData={...data}
                newMeetingData.member.google_calendar_info=body.google_calendar_info;
                setData(newMeetingData);
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    const deleteEvent=(calendarId,eventId)=>{
        gapi.client.load('calendar', 'v3', function() {
            var params = { calendarId: calendarId, eventId: eventId };
            var deleteRequest =gapi.client.calendar.events.delete(params, function(err) {
              if (err) { console.log('The API returned an error: ',err); return; }
              toast.success('Event deleted')
            });
            
            deleteRequest.execute(function(event) {
                if(event.error){
                    toast.error('Failed to delete google calendar event')
                }else{
                    console.log('Event deleted.');
                    updateMeetingMember({google_calendar_info:null})
                }
            });
        });
    }

    if(meeting?.google_calendar_info){
        return (
            <>
                {loading?(
                    <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                        <CircularProgress disableShrink={false} style={{margin:'1em'}}/>
                    </Grid>):<></>}
                <Grid item lg={12} md={12} sm={12} xs={12} align="center" alignContent="center">
                    <Button component="a"href={meeting?.google_calendar_info.hangoutLink} target="_blank" >
                        Join video meeting
                        <Icon icon={googleMeet} height="20px" style={{marginLeft:'0.6em'}}/>
                    </Button>
                </Grid>
                {isEdit?(
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Button onClick={()=>{
                            gapi.load('client:auth2', function(){
                                gapi.auth2.authorize({
                                    client_id: process.env.MIX_GOOGLE_CLIENT_ID,
                                    scope: "https://www.googleapis.com/auth/calendar",
                                    response_type: 'id_token permission code'
                                }, async function(response) {
                                    setLoading(true);
                                    if (response.error) return;
                                    console.log('authenticated');
                                    getCalendar(function(calendars){
                                        var calendarWithProjectName = checkIfProjectCalendarExist(calendars,detailProject.title);
                                        if(calendarWithProjectName){
                                            deleteEvent(calendarWithProjectName.id,meeting.google_calendar_info.id);
                                        }
                                        setLoading(false);
                                    });
                                });
                            });
                        }}> 
                            Delete video conference
                            <Icon icon={googleMeet}  height="20px" style={{marginLeft:'0.6em'}}/>
                        </Button>
                        </Grid>
                ):null}
            </>
        )
    }
    return(
        <>
            {loading?(
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <CircularProgress disableShrink={false} style={{margin:'1em'}}/>
                </Grid>
            ):<></>}
                 
            {isEdit?(
            <Grid item  lg={12} md={12} sm={12} xs={12} align="center" alignContent="center">
                <Button onClick={()=>{
                    gapi.load('client:auth2', function(){
                        gapi.auth2.authorize({
                            client_id: process.env.MIX_GOOGLE_CLIENT_ID,
                            scope: "https://www.googleapis.com/auth/calendar",
                            response_type: 'id_token permission code'
                        }, async function(response) {
                            setLoading(true)
                            if (response.error) return;
                            getCalendar(function(calendars){
                                insertCalendar(calendars,
                                    function(newCalendarId){
                                        insertEvent(newCalendarId,function(){
                                            setLoading(false);
                                        })
                                    });
                                setLoading(false);
                            });
                        });
                    });
                }}> 
                    Create Video Conference
                    <Icon icon={googleMeet} height="20px" style={{marginLeft:'0.6em'}} />
                </Button>
            </Grid>):null}
        </>
    );
}

export default GoogleClient;
