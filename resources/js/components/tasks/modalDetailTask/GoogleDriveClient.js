import React, { useState, useEffect, useContext, memo } from 'react';
import UserContext from '../../../context/UserContext';
import IconButton from '@material-ui/core/IconButton';
// import { gapi } from 'gapi-script';
import { Icon, InlineIcon } from '@iconify/react';
import googleDrive from '@iconify-icons/mdi/google-drive';
import axios from 'axios';
import GooglePicker from 'react-google-picker';
import toast from 'react-hot-toast';

const GoogleDriveButton = (props) => {
    const global = useContext(UserContext);
    const payload = props.payload;
    var developerKey = process.env.MIX_GOOGLE_API_KEY;
    var clientId = process.env.MIX_GOOGLE_CLIENT_ID;
    var appId = "tugas-akhir-288302";
    var scope = ['https://www.googleapis.com/auth/drive.readonly'];

    function createPicker(google, oauthToken) {
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
                users_id: global.state.id,
                tasks_id: payload.tasks_id,
                source: 'google-drive',
                files: data.docs
            }
            if (!window.navigator.onLine) toast.error(`You are currently offline`);

            const url = `${process.env.MIX_BACK_END_BASE_URL}task-attachments`;
            const toast_loading = toast.loading('Deleting...'); 
            axios.delete(url, body)
                .then((result) => {                      
                    Object.assign(payload, { data: result.data });
                    global.dispatch({ type: 'create-new-attachments', payload: payload })
                    toast.dismiss(toast_loading)
                    toast.success(<b>A new attachment successfuly created</b>)
                }).catch((error)=> toast.dismiss(toast_loading));
        }
    }
    return (
        <React.Fragment>
             
            {/* <IconButton onClick={() => { loadPicker() }}>
                <Icon icon={googleDrive} />
            </IconButton> */}
            <GooglePicker  clientId={clientId} developerKey={developerKey} scope={scope} onChange={data => console.log('on change:', data)}
                onAuthFailed={data => console.error('on auth failed:', data)}  multiselect={true}  navHidden={true}  authImmediate={false}
                // mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                viewId={'DOCS'} createPicker={createPicker}>
                <IconButton size="large">
                    <Icon icon={googleDrive} />
                </IconButton>
            </GooglePicker>
        </React.Fragment>
    );
}
export default memo(GoogleDriveButton);