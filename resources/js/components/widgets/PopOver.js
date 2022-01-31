import Popover from '@material-ui/core/Popover';
const CustomPopover=({open,anchorEl,handleClose,children})=>{
    return(
        <Popover style={{ pointerEvents: 'none', zIndex:'1200',padding:'1em' }}
            open={open} anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center', }}
            onClose={handleClose}
        >
            <div style={{padding:'0.5em'}}>{children}</div>
        </Popover>
    )
}
export default CustomPopover;