
import 'fontsource-roboto';
import React, { memo } from 'react';
import DialogConfirm from './DialogConfirm';
import { Button } from '@material-ui/core/';
import DialogContentText from '@material-ui/core/DialogContentText';

const dialogActionButtons = ({ isEdit, saveChanges, setEditMode, deleteTask, deleteConfirmOpen, setDeleteConfirmOpen, closeModal }) => {
    if (isEdit) {
        return (
            <React.Fragment>
                <Button onClick={() => setEditMode(false)} color="primary"> Cancel </Button>
                <Button onClick={
                    () => { saveChanges()}
                } variant="contained" color="primary"> Save</Button>
                <Button onClick={
                    () => { setDeleteConfirmOpen(true); }
                } variant="contained" color="secondary">Delete</Button>
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