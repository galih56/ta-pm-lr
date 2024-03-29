import 'fontsource-roboto';
import React, { useEffect, useContext, useState,memo } from 'react';
import UserContext from '../../../context/UserContext';
import ModalDeleteConfirm from './ModalDeleteConfirm';
import { Button } from '@material-ui/core/';

const dialogActionButtons = ({ isEdit, deletable, saveChanges, setEditMode, deleteRole, deleteConfirmOpen, setDeleteConfirmOpen, closeModal }) => {    
    if (isEdit) {
        return (
            <React.Fragment>
                <Button onClick={() => setEditMode(false)} color="primary"> Cancel </Button>
                <Button onClick={
                    () => { saveChanges(); setEditMode(false); }
                } variant="contained" color="primary"> Save</Button>
                {(deletable)?(
                    <>
                        <Button onClick={
                            () => { setDeleteConfirmOpen(true); }
                        } variant="contained" color="secondary">Delete</Button>
                        <ModalDeleteConfirm
                            open={deleteConfirmOpen}
                            handleDelete={() => { deleteRole(); setDeleteConfirmOpen(false); closeModal(); }}
                            handleClose={() => { setDeleteConfirmOpen(false); closeModal(); }}>
                        </ModalDeleteConfirm>
                    </>
                    ):(null)}
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