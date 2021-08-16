import React, { useState, useEffect, useContext, memo } from 'react';
import UserContext from '../../../context/UserContext';
import IconButton from '@material-ui/core/IconButton';
// import { gapi } from 'gapi-script';
import { Icon, InlineIcon } from '@iconify/react';
import googleDrive from '@iconify-icons/mdi/google-drive';
import axios from 'axios';
import GooglePicker from 'react-google-picker';
import toast, { Toaster } from 'react-hot-toast';

const GoogleDriveButton = (props) => {
    const global = useContext(UserContext);
    const payload = props.payload;

    var developerKey = process.env.MIX_GOOGLE_API_KEY;
    var clientId = process.env.MIX_GOOGLE_CLIENT_ID;
    var appId = "tugas-akhir-288302";
    var scope = ['https://www.googleapis.com/auth/drive.readonly'];

    function createPicker(google, oauthToken) {
        console.log('createPicker : ',google,oauthToken)
        if (google && oauthToken) {
            var view = new google.picker.View(google.picker.ViewId.DOCS);
            view.setMimeTypes("image/png,image/jpeg,image/jpg,application/pdf,application/zip");
            var picker = new google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.MINE_ONLY)
                .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                .setAppId(appId)
                .setOAuthToken(oauthToken)
                .addView(view)
                .addView(new google.picker.DocsUploadView()).hideTitleBar()
                .setDeveloperKey(developerKey)
                .hideTitleBar()
                .setCallback((data)=>pickerCallback(data,google))
                .build();
            picker.setVisible(true);
        }
    }

    function pickerCallback(data,google) {
        if (data.action == google.picker.Action.PICKED) {
            var body = {
                userId: global.state.id,
                taskId: payload.taskId,
                source: 'google-drive',
                files: data.docs
            }
            if (!window.navigator.onLine) toast.error(`You are currently offline`);

            const config ={ headers: { 'X-Authorization':`Bearer ${global.state.token}`, 'Content-Type': 'application/json'  } }
            const url = process.env.MIX_BACK_END_BASE_URL + 'task-attachments/';
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            toast.promise(
                axios.post(url, body),
                {
                    loading: 'Uploadng new attachments',
                    success: (result)=>{
                        clearState();
                        Object.assign(payload, { data: result.data });
                        global.dispatch({ type: 'create-new-attachments', payload: payload })
                        return <b>A new meeting successfuly created</b>
                    },
                    error: (error)=>{
                        if(error.response.status==401) return <b>Unauthenticated</b>;
                        if(error.response.status==422) return <b>Some required inputs are empty</b>;
                        return <b>{error.response.statusText}</b>;
                    },
                });
        }
    }
    return (
        <React.Fragment>
            <Toaster/>
            {/* <IconButton onClick={() => { loadPicker() }}>
                <Icon icon={googleDrive} />
            </IconButton> */}
            <GooglePicker 
                clientId={clientId}
                developerKey={developerKey}
                scope={scope}
                onChange={data => console.log('on change:', data)}
                onAuthFailed={data =>{ 
                    console.log('on auth failed:', data)
                }}
                multiselect={true}
                navHidden={true}
                authImmediate={false}
                // mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                viewId={'DOCS'}
                createPicker={createPicker}
        >
                <IconButton size="large">
                    <Icon icon={googleDrive} />
                </IconButton>
            </GooglePicker>
        </React.Fragment>
    );
}
export default memo(GoogleDriveButton);