import React, { memo,useContext } from 'react';
import DialogConfirm from './DialogConfirm';
import { Button } from '@material-ui/core/';
import DialogContentText from '@material-ui/core/DialogContentText';
import UserContext from '../../../context/UserContext';

const dialogActionButtons = ({ isEdit, saveChanges, setEditMode, deleteTask, deleteConfirmOpen, setDeleteConfirmOpen, closeModal }) => {
    const global = useContext(UserContext);
    if (isEdit) {
        return (
            <React.Fragment>
                <Button onClick={() => setEditMode(false)} color="primary"> Cancel </Button>
                <Button onClick={
                    () => { saveChanges()}
                } variant="contained" color="primary"> Save</Button>
                {([2,4].includes(global.state.occupation?.id))?(
                    <Button onClick={
                        () => { setDeleteConfirmOpen(true); }
                    } variant="contained" color="secondary">
                        Delete
                    </Button>
                ):null}
                <DialogConfirm
                    open={deleteConfirmOpen}
                    handleConfirm={() => { deleteTask(); setDeleteConfirmOpen(false); closeModal(); }}
                    handleClose={() => { setDeleteConfirmOpen(false);}}  
                    title={"Are you sure?"}>
                    <DialogContentText>Data will be deleted permanently.</DialogContentText>
                </DialogConfirm>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <Button onClick={() => setEditMode(true)} color="primary">Edit</Button>
            </React.Fragment>
        )
    }
}
export default memo(dialogActionButtons)