import React, { memo } from 'react';
import ModalDeleteConfirm from './ModalDeleteConfirm';
import Button from '@material-ui/core/Button';

const dialogActionButtons = ({ isEdit, deletable,saveChanges, setEditMode, deleteUser, deleteConfirmOpen, setDeleteConfirmOpen, closeModal }) => {
    const save=()=>{
        saveChanges(); setEditMode(false); 
    }
    if (isEdit) {
        return (
            <React.Fragment>
                <Button onClick={() => setEditMode(false)} color="primary"> Cancel </Button>
                <Button onClick={save} variant="contained" color="primary"> Save</Button>
                {(deletable)?(
                    <React.Fragment>
                        <Button onClick={
                            () => { setDeleteConfirmOpen(true); }
                        } variant="contained" color="secondary">Delete</Button>
                        <ModalDeleteConfirm
                            open={deleteConfirmOpen}
                            handleDelete={() => { deleteUser(); setDeleteConfirmOpen(false); closeModal(); }}
                            handleClose={() => { setDeleteConfirmOpen(false); closeModal(); }}>
                        </ModalDeleteConfirm>
                    </React.Fragment>

                ):<></>}
               
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