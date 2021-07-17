import React, { useState, useEffect, useContext, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { DropzoneDialog } from 'material-ui-dropzone';
import DescriptionIcon from '@material-ui/icons/Description';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import GoogleDriveButton from './GoogleDriveClient';
import ModalDeleteConfirm from './ModalDeleteConfirm';
import ModalFilePicker from './../../widgets/ModalFilePicker/ModalFilePicker';
import UserContext from '../../../context/UserContext';
import { useSnackbar } from 'notistack';
import axios from 'axios';

import PlayButtonIcon from './../../../assets/icons/play-button.svg';
const useStyles = makeStyles((theme) => ({
    root: { width: '100%', backgroundColor: theme.palette.background.paper, },
}));

const HandlePreviewIconDZ = (fileObject, classes) => {
    const { type } = fileObject.file
    const iconProps = { className: classes.image }

    if (type.startsWith("video/")) return <PlayButtonIcon {...iconProps} />

    switch (type) {
        case "application/msword":
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            return <DescriptionIcon {...iconProps} />
        case "application/pdf":
            return <PictureAsPdfIcon {...iconProps} />
        default:
            return <AttachFileIcon {...iconProps} />
    }
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

const Attachments = (props) => {
    const classes = useStyles();
    var isEditing = props.isEdit;
    var detailTask = props.detailTask;
    var setDetailTask = props.setDetailTask;
    const [uploadModalOpen, setUploadModalOpen] = useState(false);
    const [chooseFileModalOpen, setChooseFileModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const { tasks_id, projects_id, lists_id } = props;
    const global = useContext(UserContext);
    const [toBeDeletedFile, setToBeDeletedFile] = useState(null);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    var payload = { projects_id: projects_id, lists_id: lists_id, tasks_id: tasks_id }

    const { enqueueSnackbar } = useSnackbar();
    const snackbar = (message, variant) => enqueueSnackbar(message, { variant });

    useEffect(() => {
        console.log(tasks_id, projects_id, lists_id );
        setData(props.detailTask.attachments);
    }, [props.detailTask])

    const showDeleteButton = (isEdit, itemId) => {
        if (isEdit) {
            return (
                <IconButton edge="end" aria-label="Delete" onClick={() => { 
                    setDeleteConfirmOpen(true); 
                    setToBeDeletedFile(itemId) 
                }}>
                    <DeleteIcon fontSize="small" />
                </IconButton >
            )
        } else return (<></>)
    }
    
    const onUploadFiles = async (attachments, payload) => {
        if (!window.navigator.onLine) {
            snackbar(`You are currently offline`, 'warning');
        } else {
            attachments=attachments.map(async (attachment) => {
                var name=attachment.name; 
                var size=attachment.size;
                var type=attachment.type;
                var base64=await getBase64(attachment);
                return {
                    name:name, size:size, type:type, base64:base64
                };
            });
            attachments=await Promise.all(attachments);
    
            var body={
                tasks_id:payload.tasks_id,
                users_id:global.state.id,
                source:'upload',
                files:attachments
            }
            handleAddAttachment(body,  payload)
            
        }
    }
    
    const handleFilePick = async (file,payload) => {
        if (!window.navigator.onLine) {
            snackbar(`You are currently offline`, 'warning');
        } else {
            var body={
                tasks_id:payload.tasks_id,
                users_id:global.state.id,
                source:'pick',
                files_id:file.id
            }
            handleAddAttachment(body, payload);
        }
    }
    
    const handleAddAttachment=(body, payload)=>{
        const url = process.env.MIX_BACK_END_BASE_URL + 'task-attachments';
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.post(url, body).then((result) => {
            payload.data=result.data;
            setDetailTask({...detailTask,attachments:[...detailTask.attachments, ...payload.data]});
            setData([...data, ...payload.data]);
            setChooseFileModalOpen(false);
            global.dispatch({ type: 'create-new-attachments', payload: payload })
            console.log(data,detailTask.attachments,payload)
        }).catch((error) => {
            const payload = { error: error, snackbar: snackbar, dispatch: global.dispatch, history: null }
            global.dispatch({ type: 'handle-fetch-error', payload: payload });
        });
    }
    
    const deleteFile = (payload) => {
        var newAttachments=data.filter((item) => { if (item.id != payload.id) return item })
        setData(newAttachments);
        setDetailTask({...detailTask,attachments:newAttachments})
        setTimeout(()=>{
            //Selalu pending, tapi berhasil. Ditaruh di setTimeout biar masuk eventloop dan dikirim di belakang layar :)
            const url = `${process.env.MIX_BACK_END_BASE_URL}task-attachments/${payload.id}`;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.delete(url)
                .then((result) => {
                    snackbar(`Data has been deleted`, 'success');
                    setDeleteConfirmOpen(false);
                    global.dispatch({ type: 'remove-attachment', payload: payload });
                }).catch((error) => {
                    const payload = { error: error, snackbar: snackbar, dispatch: global.dispatch, history: null }
                    global.dispatch({ type: 'handle-fetch-error', payload: payload });
                });
        })
        
    }

    const showEditButtons = () => {
        if (isEditing) {
            return (
                <ListItem button>
                    <ListItemText primary={`Add new attachment`} />
                    <IconButton edge="end" aria-label="Choose existing file" onClick={()=>{
                        setChooseFileModalOpen(true)
                    }}>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton edge="end" aria-label="Add new attachment" onClick={() => { setUploadModalOpen(true) }}>
                        <PublishRoundedIcon />
                    </IconButton>
                    <GoogleDriveButton payload={payload} snackbar={snackbar}></GoogleDriveButton>
                    <DropzoneDialog
                        cancelButtonText={"Cancel"} submitButtonText={"Submit"}
                        maxFileSize={10000000} open={uploadModalOpen}
                        onClose={() => setUploadModalOpen(false)}
                        onSave={(files) => { onUploadFiles(files, payload) }}
                        showFileNamesInPreview={true}
                        getPreviewIcon={HandlePreviewIconDZ}
                        showAlerts={false}
                    />
                </ListItem>
            )
        } else return (<></>)
    }
    return (
        <>
            <List className={classes.root}>
                {showEditButtons()}
                {data.map((item) => {
                    return (
                        <ListItem key={item.id} style={{ width: '100%' }}>
                            <ListItemText primary={`${item.name}`} />
                            <ListItemSecondaryAction>
                                <IconButton component="a" target="_blank" href={item.source=='upload'?`${process.env.MIX_BACK_END_BASE_URL}files/${item.files_id}/download`:item.path}>
                                    <GetAppIcon fontSize="small" />
                                </IconButton >
                                {showDeleteButton(isEditing, item.id)}
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>                        
            {/* <PublishRoundedIcon /> */}
            <ModalFilePicker 
                open={chooseFileModalOpen} 
                projects_id={projects_id} 
                closeModal={()=> setChooseFileModalOpen(false) }
                onPick={(file)=> handleFilePick(file,payload) }/>
            <ModalDeleteConfirm
                open={deleteConfirmOpen}
                handleClose={() => setDeleteConfirmOpen(false)}
                handleDelete={() => {
                    payload = { id: toBeDeletedFile, tasks_id: tasks_id, projects_id: projects_id, lists_id: lists_id }
                    deleteFile(payload);
                    setDeleteConfirmOpen(false)
                }} />
        </>
    );
}

export default memo(Attachments);
