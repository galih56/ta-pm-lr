import React, { memo } from 'react';
import { Button } from '@material-ui/core/';

const dialogActionButtons = ({ isEdit,  setEditMode, deleteTask, setConfirm, closeModal,deletable }) => {
    const handleConfirm=()=> setConfirm({open:true,callback:deleteTask})
    if (isEdit) {
        return (
            <React.Fragment>
                <Button onClick={() => setEditMode(false)} color="primary"> Cancel </Button>
                <Button type="submit" variant="contained" color="primary"> Save</Button>
                {(deletable)?(
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