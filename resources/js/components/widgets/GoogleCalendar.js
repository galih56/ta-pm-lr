import React, { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import {v4 as uuidv4} from 'uuid';
import { gapi } from 'gapi-script';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Icon } from '@iconify/react';
import googleMeet from '@iconify-icons/logos/google-meet';
import googleCalendar from '@iconify-icons/logos/google-calendar';
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';

const GoogleClient  = ({meeting,detailProject,saveChanges}) => {
    const [loading, setLoading]=useState(false);
    const global=useContext(UserContext);
    
    function insertEvent(calendarId,cb){
        var requestId = uuidv4();
        console.log(calendarId)
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
            console.log(body);
            const insertRequest=gapi.client.calendar.events.insert(body);
            insertRequest.execute(function(event) {
                if(event.error){
                    toast.error('Failed to create google calendar event')
                }else{
                    saveChanges({google_calendar_info:event})
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
                console.log(body)
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
                }
            });
        });
    }

    if(meeting.google_calendar_info){
        return (
            <>
                {loading?(
                    <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                        <CircularProgress disableShrink={false} style={{margin:'1em'}}/>
                    </Grid>):<></>}
                <Grid item lg={6} md={6} sm={12} xs={12} align="center" alignContent="center">
                    <Button component="a"href={meeting.google_calendar_info.hangoutLink} target="_blank" >
                        Join video meeting
                        <Icon icon={googleMeet} height="20px" style={{marginLeft:'0.6em'}}/>
                    </Button>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Button onClick={()=>{
                        gapi.load('client:auth2', function(){
                            gapi.auth2.authorize({
                                client_id: process.env.MIX_GOOGLE_CLIENT_ID,
                                scope: "https://www.googleapis.com/auth/calendar",
                                response_type: 'id_token permission code'
                            }, async function(response) {
                                setLoading(true);
                                if (response.error) return;
                                getCalendar(function(calendars){
                                    var calendarWithProjectName = checkIfProjectCalendarExist(calendars,detailProject.title);
                                    
                                    if(calendarWithProjectName){
                                        deleteEvent(calendarWithProjectName.id,meeting.google_calendar_info.id);
                                    }
                                    setLoading(false);
                                });
                            });
                            saveChanges({google_calendar_info:null});
                        });
                    }}> 
                        Disconnect from google calendar 
                        <Icon icon={googleCalendar}  height="20px" style={{marginLeft:'0.6em'}}/>
                    </Button>
                </Grid>
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
                 
            <Grid item  lg={6} md={6} sm={12} xs={12} align="center" alignContent="center">
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
                                        console.log(newCalendarId);
                                        insertEvent(newCalendarId,function(){
                                            setLoading(false);
                                        })
                                    });
                                setLoading(false);
                            });
                        });
                    });
                }}> 
                    Connect to google calendar 
                    <Icon icon={googleCalendar} height="20px" style={{marginLeft:'0.6em'}} />
                </Button>
            </Grid>
        </>
    );
}
export default GoogleClient;

