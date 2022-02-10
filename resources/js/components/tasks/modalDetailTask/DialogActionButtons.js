import React, { memo,useContext } from 'react';
import DialogConfirm from './DialogConfirm';
import { Button } from '@material-ui/core/';
import DialogContentText from '@material-ui/core/DialogContentText';
import UserContext from '../../../context/UserContext';

const dialogActionButtons = ({ isEdit, saveChanges, setEditMode, deleteTask, confirm, setConfirm, closeModal }) => {
    const global = useContext(UserContext);
    const handleConfirm=()=> setConfirm({open:true,callback:deleteTask})
    if (isEdit) {
        return (
            <React.Fragment>
                <Button onClick={() => setEditMode(false)} color="primary"> Cancel </Button>
                <Button type="submit" variant="contained" color="primary"> Save</Button>
                {([2,4].includes(global.state.role?.id))?(
                    <Button onClick={handleConfirm} variant="contained" color="secondary">
                        Delete
                    </Button>
                ):null}
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