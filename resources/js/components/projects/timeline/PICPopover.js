import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const PICPopover=({open,anchorEl,onClose,data})=>{
    if(open){
        return(
            <Popover style={{ pointerEvents: 'none', zIndex:'1200',padding:'1em' }} 
                    open={open} anchorEl={anchorEl} 
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }} 
                    transformOrigin={{ vertical: 'top', horizontal: 'center', }} onClose={onClose}>
                    <div style={{padding:'0.5em'}}>
                        {data.project_client?.client?(<Typography>{`Client ${`(${data.project_client?.client?.institution})`}`}</Typography>):null}
                        {data?.is_client?(<Typography>{`Client ${`(${data?.institution})`}`}</Typography>):null}
                        {data.user?(<Typography>{data?.user?.name}</Typography>):null}
                        {data.name?(<Typography>{data?.name}</Typography>):null}
                        {data.member?.role?<Typography>{data?.member?.role?.name}</Typography>:null}
                        {data.role?<Typography>{data?.role?.name}</Typography>:null}
                    </div>
            </Popover>
        )
    }else{
        return null;
    }
}

export default PICPopover;