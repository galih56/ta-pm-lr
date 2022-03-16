import React, { useEffect, useState, useContext,memo } from 'react';
import UserContext from '../../../context/UserContext';
import { Link, useLocation } from 'react-router-dom';
import makeStyles from '@material-ui/styles/makeStyles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import ExcelIcon from './../../../assets/icons/excel.svg';
import MultipleImagesIcon from './../../../assets/icons/multiple-images.svg';
import PDFIcon from './../../../assets/icons/pdf.svg';
import TextIcon from './../../../assets/icons/text.svg';
import WordIcon from './../../../assets/icons/word.svg';
import ZipIcon from './../../../assets/icons/zip.svg';
import FilesIcon from './../../../assets/icons/files.svg';
import PlayButtonIcon from './../../../assets/icons/play-button.svg';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Alert from '@material-ui/core/Alert';

const useStyles = makeStyles((theme) => ({
    root: { maxWidth: 345 },
    media: {
        height: 0, paddingTop: '40%',  backgroundPosition: 'center', 
        backgroundSize: 'auto !important', marginTop: '0.5em', marginBottom: '0.5em',
    },
    expand: { transform: 'rotate(0deg)',  marginLeft: 'auto', 
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    avatar: { backgroundColor: red[500] },
}));

const trimString=(str)=>{
    var space_counter=str.split(' ').length;
    var trimmedString = str;
    var trimmed=false
    if(space_counter>3 && str.length<20) {trimmedString=str.substring(0, 24)+'..';trimmed=true}
    if(space_counter>3 && str.length>20) {trimmedString=str.substring(0, 20)+'..';trimmed=true}
    if(space_counter<=3 && str.length>20) {trimmedString=str.substring(0, 16)+'..';trimmed=true}
    return (trimmed?trimmedString:str);
}
const CustomCard = ({ classes, file, handleDetailTaskOpen,onPick}) => {
    const location = useLocation(); 
    const [anchorEl, setAnchorEl] = useState(false);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const id = open ? 'file-popover' : undefined;

    var file_url = process.env.MIX_BACK_END_BASE_URL;
    if (file.source == 'upload') file_url += file.path
    if (file.source == 'google-drive') file_url = file.path;
    var srcCardMedia = null;
    var file_type='';
    if(file.type){
        srcCardMedia = file.type.split('/');
        file_type=srcCardMedia[0];
    }
    
    switch (file_type) {
        case 'image':
            srcCardMedia = MultipleImagesIcon;
            if (file.source == 'upload' || file.source == 'google-drive') srcCardMedia = file_url;
            break;
        case 'application':
            srcCardMedia = FilesIcon;
            if (srcCardMedia[1] == 'pdf') srcCardMedia = PDFIcon;
            if (srcCardMedia[1] == 'msword' || srcCardMedia[1] == 'vnd.openxmlformats-officedocument.wordprocessingml.document') srcCardMedia = WordIcon;
            if (srcCardMedia[1] == 'vnd.ms-excel' || srcCardMedia[1] == 'vnd.openxmlformats-officedocument.spreadsheetml.sheet') srcCardMedia = ExcelIcon;
            if (srcCardMedia[1] == 'zip' || srcCardMedia[1] == 'x-7z-compressed' || srcCardMedia[1] == 'vnd.rar') srcCardMedia = ZipIcon;
            break;
        case 'text':
            srcCardMedia = TextIcon;
            break;
        case 'video':
            srcCardMedia = PlayButtonIcon;
            break;
        case 'audio':
            srcCardMedia = PlayButtonIcon;
            break;
        default:
            srcCardMedia = FilesIcon;
            break;
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}> {file.user.name?.charAt(0).toUpperCase()} </Avatar>
                }
                action={
                    <IconButton onClick={handleClick} size="large">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={file.file_name?trimString(file.file_name):''}
                subheader={moment(file.createdAt).format('MMMM Do YYYY, h:mm a')}
            />
            <Popover id={id} open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}} transformOrigin={{ vertical: 'top', horizontal: 'center'}} style={{ pointerEvents: 'none'}}>
                <List dense={true}>
                    <ListItem button onClick={()=>onPick(file)}>
                        <ListItemIcon>
                            <AttachFileIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pick" />
                    </ListItem> 
                </List>
            </Popover>
            <CardMedia className={classes.media} image={srcCardMedia} />
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                    {(() => {
                        if(file.tasks_id){
                            let pathname = location.pathname;
                            let searchParams = new URLSearchParams(location.search);
                            searchParams.set('task_id', file.tasks_id);
                            return (<>
                                Task: <Link to={{ pathname: pathname, search: searchParams.toString() }}
                                    onClick={() => {
                                        handleDetailTaskOpen({ projects_id: file.projects_id, lists_id: file.lists_id, tasks_id: file.tasks_id, open: true });
                                    }}>
                                    {file.task_title}
                                </Link>
                            </>)
                        }else{
                            return (<></>)
                        }
                    })()}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                Uploaded by : {file.user.name}
                </Typography>
            </CardContent>
        </Card>
    );
}
const Files = (props) => {
    let global = useContext(UserContext);
    const classes = useStyles();
    const { projects_id, handleDetailTaskOpen,onPick} = props;
    const [files, setFiles] = useState([]);
    const [deleteModalOpen,setDeleteModalOpen]=useState(false);
    const [choosenFileId,setChoosenFileId]=useState(null);
    const handleDeleteModalClose=()=> setDeleteModalOpen(false);

    const getFiles = () => {
        const toast_loading = toast.loading('Loading...');
        const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${projects_id}/files`;
        axios.get(url)
            .then((result) => {
                const data = result.data;
                setFiles(data);
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

    const handleDelete = (id) => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}files/${id}`;
        const toast_loading = toast.loading(`Deleting...`); 
        axios.delete(url)
            .then((result) => {
                setChoosenFileId(null)
                toast.dismiss(toast_loading);
                toast.success(<b>Successfully deleted</b>)
            }).catch(error=> toast.dismiss(toast_loading));
    }

    useEffect(() => {
        if (projects_id) getFiles();
    }, [projects_id])

    return (
        <Grid container spacing={2}>
            {(files.length>0)?(
                <React.Fragment>
                {
                    files.map(file => (
                        <Grid item xl={2} lg={3} md={4} sm={6} xs={6} key={file.id}>
                            <CustomCard  file={file}  classes={classes}  handleDetailTaskOpen={handleDetailTaskOpen}  onPick={onPick}/>
                        </Grid>
                    ))
                }
                </React.Fragment>
            ):(
                <Grid xl={12} lg={12} sm={12} xs={12}>
                    <Alert severity="info" style={{margin:'1em',padding:'auto'}}>No files have been uploaded to this project yet</Alert>
                </Grid>
            )}
            <ModalDeleteConfirm 
                open={deleteModalOpen} 
                handleClose={handleDeleteModalClose} 
                handleDelete={()=>handleDelete(choosenFileId)}/>
             
        </Grid>
    )
};

const ModalDeleteConfirm = (props) => {
    const open = props.open;
    const handleClose = props.handleClose;
    const handleDelete = props.handleDelete;

    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
                <DialogContentText>Data will be deleted permanently.</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}> Cancel </Button>
                <Button onClick={handleDelete} variant='contained' color="primary"> Confirm </Button>
            </DialogActions>
        </Dialog>
    );
}
export default Files;