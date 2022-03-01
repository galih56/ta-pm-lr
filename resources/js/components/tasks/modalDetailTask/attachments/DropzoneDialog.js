import React,{useState,useMemo,useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/styles/withStyles';
import { Dialog, IconButton, Typography } from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import toast, { Toaster } from 'react-hot-toast';

import PDFIcon from './../../../../assets/images/pdf.png';
import TxtIcon from './../../../../assets/images/txt.png';
import DocsIcon from './../../../../assets/images/docs.png';
import PowerpointIcon from './../../../../assets/images/powerpoint.png';
import SpreadsheetsIcon from './../../../../assets/images/spreadsheets.png';
const styles = (theme) => ({
    root: { margin: 0, padding: theme.spacing(2) },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={onClose}
                size="large">
                <CloseIcon />
            </IconButton>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: { padding: theme.spacing(2) },
}))(MuiDialogContent);


const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
  
const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
    position:'relative'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    maxHeight:'550px',
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

  const file_name={
      position:'absolute',
      marginTop:'500px'
  }
const DropzoneDialog=({open,cancelButtonText,submitButtonText,onClose,onSave})=>{
    const [files,setFiles]=useState([]);

    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({ accept:'application/msword,.docx, application/vnd.ms-excel, application/vnd.ms-powerpoint,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain, application/pdf, image/*', 
        onDrop: acceptedFiles => {
        setFiles(acceptedFiles);
      }});
    


    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    const handleSubmit=()=>{
        onSave(files);
        setFiles([]);
    }

    const handleClose=()=>{
        setFiles([]);
        onClose();
    }

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
    
    const thumbs = files.map(file => {
        function renderFileTypeIcon(file){           
            console.log(file.type,file.type.includes('image/')); 
            switch (file.type) {    
                case "application/msword" || "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                    return <img src={DocsIcon} style={img}/>
                case "application/vnd.ms-excel":
                    return <img src={SpreadsheetsIcon} style={img}/>
                case 'text/plain':
                    Object.assign(file, {  preview: TxtIcon })
                    return <img src={TxtIcon} style={img}/>
                case "application/pdf":
                    return <img src={PDFIcon} style={img}/>
                case 'application/pdf,application/vnd.ms-powerpoint'||'application/vnd.openxmlformats-officedocument.presentationml.slideshow'||'application/vnd.openxmlformats-officedocument.presentationml.presentation':
                    return <img src={PowerpointIcon} style={img}/>
                case file.type.includes('image/'):
                    return <img src={URL.createObjectURL(file)} style={img} />
                default:
                    return <img src={TxtIcon} style={img}/>
            }
        }
        return (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            {renderFileTypeIcon(file)}
          </div>
          <div style={file_name}>
              {file.name.substring(0, 20)}
          </div>
        </div>
      )});
    return(
        <Dialog aria-labelledby="Add new attachments" open={open}>
             
            <DialogTitle onClose={onClose} > Add new attachmennts </DialogTitle>
            <DialogContent dividers>
                <Grid container spacing={2}>  
                    <Grid lg={12} md={12} sm={12} xs={12} item>
                        <div className="container">
                            <div {...getRootProps({style,className:'dropzone'})}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                            <aside style={thumbsContainer}>
                                {thumbs}
                            </aside>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} lg={12} item>
                        <Button onClick={handleSubmit} variant="contained" color="primary">Upload</Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default DropzoneDialog;
