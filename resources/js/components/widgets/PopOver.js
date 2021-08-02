import React from 'react';
import Popover from '@material-ui/core/Popover';

const CustomPopOver=({classes,anchorEl,handleClose,children,open})=>{
    return(
        
        <Popover
            className={classes.popover}
            classes={{ paper: classes.paper }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
            transformOrigin={{ vertical: 'top', horizontal: 'left',  }}
            onClose={handleClose}
            disableRestoreFocus
        >
            {children}
        </Popover>
    )
}
export default React.memo(CustomPopOver);