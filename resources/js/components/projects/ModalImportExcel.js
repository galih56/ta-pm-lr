import axios from 'axios';
import React, { useContext,useState,useEffect } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import UserContext from '../../context/UserContext';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/core/Alert'; 
import AlertTitle from '@material-ui/core/AlertTitle'; 
import toast from 'react-hot-toast';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme) => ({
    root: { margin: 0, padding: theme.spacing(2) },
    closeButton: { position: 'absolute !important', right: theme.spacing(1), top: theme.spacing(1), color: theme.palette.grey[500], },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose} size="large"><CloseIcon /></IconButton>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: { padding: theme.spacing(2) },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: { margin: 0, padding: theme.spacing(1) },
}))(MuiDialogActions);

export default function ModalImportExcel(props) {
    const {open,closeModal,projects_id,onUpdate}=props;
    const global = useContext(UserContext);
    const [selectedFile, setSelectedFile]=useState();
    const [isCheckingFile, setIsCheckingFile]=useState(0);
    const [showImportErrors,setShowImportErrors]=useState(false);
    const [importErrors, setImportErrors] = useState([]);

    const handleShowMoreErrors=(e)=>{
        e.preventDefault();
        setShowImportErrors(!showImportErrors);
    }

    const submitData = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${projects_id}/import`;
        let body = new FormData();        
        var fileBlob= new Blob(selectedFile);
        body.append("file", fileBlob);

        const toast_loading = toast.loading('Importing...');
        axios.post(url,body)
            .then((result) => {
                if(!result.data?.error){
                    closeModal();
                    global.dispatch({ type: 'store-detail-project', payload: result.data });
                    onUpdate();
                    toast.dismiss(toast_loading)
                    toast.success('Imported')
                }else{
                    if(result.data.error==true && result.data.messages.length>0){
                        setImportErrors(result.data.messages);
                        toast.dismiss(toast_loading);
                        toast.error('Failed to import excel file')
                    }
                }
            }).catch((error)=>{
                console.log(error)
                toast.dismiss(toast_loading);
                var error_message=error?.response?.statusText? error?.response?.statusText:'Something went wrong'
                if(e?.response?.status==404){
                    error_message='Project not found';
                }
                if(e?.response?.status==401){
                    error_message='Unauthenticated';
                }
                if(e?.response?.status==422){
                    error_message='Some required inputs are empty';
                }
                toast.error(error_message)
            });
    }

    const handleFormTypeOnChange=(e)=>{setIsCheckingFile(e.target.value)};
    
    return (
        <Dialog aria-labelledby="Import Excel" open={open}>
            <DialogTitle onClose={() => closeModal(false)} > Import Excel </DialogTitle>
            {(global.state.authenticated===true)?(
                <React.Fragment>
                    <DialogContent dividers>
                        <Grid container spacing={2} style={{ paddingLeft: 3, paddingRight: 3 }} >
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <a href={`${process.env.MIX_BACK_END_BASE_URL}import-format`}>Download format import</a>
                                {importErrors.length?
                                <Alert severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    {(showImportErrors)?<ul>
                                        {importErrors.map(error=><li>Row {error.row} : {error.title}</li>)}
                                    </ul>:<ul><li>Invalid format</li></ul>}
                                    {(showImportErrors)?
                                        <a onClick={handleShowMoreErrors}>Hide...</a>:
                                        <a onClick={handleShowMoreErrors}>Show more...</a>}
                                </Alert>:null}
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                 <FormControl fullWidth>
                                    <NativeSelect defaultValue={0} inputProps={{ name: 'Check file', id: 'uncontrolled-native' }} onChange={handleFormTypeOnChange}>
                                        <option value={0}>Import file</option>
                                        <option value={1}>Periksa data file</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                {isCheckingFile==0?(
                                    <input type="file" accept=".csv, .xls, .xlsx, text/csv, application/csv, text/comma-separated-values, application/csv, application/excel, application/vnd.msexcel, text/anytext, application/vnd. ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"onChange={e=> setSelectedFile(e.target.files)}/>
                                ):(
                                    <form method="POST" enctype="multipart/form-data" target="_blank" action={`${process.env.MIX_BACK_END_BASE_URL}check_file_import`}>
                                        <input type="file" name="file"  accept=".csv, .xls, .xlsx, text/csv, application/csv, text/comma-separated-values, application/csv, application/excel, application/vnd.msexcel, text/anytext, application/vnd. ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
                                        <Button type="submit" variantcolor="secondary" startIcon={<SearchIcon />}>Check</Button>
                                    </form>
                                )}    
                            </Grid>
                        </Grid>
                    </DialogContent>
                    {isCheckingFile==0? 
                    <DialogActions>
                        <Button onClick={submitData} variant="contained" color="primary">Import</Button>
                    </DialogActions>:null}
                </React.Fragment>
            ):(
                <DialogContent dividers>
                    <Alert severity="warning">Your action requires authentication. Please sign in.</Alert>
                </DialogContent>
            )}
        </Dialog>
    );
}
