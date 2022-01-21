import { useState, useContext,useEffect } from 'react';
import UserContext from '../../context/UserContext';
import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';

export default function TeamSearchbar({onChange}){
    const [teams, setTeams] = useState([]);
    const global = useContext(UserContext);
    
    const getTeams = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}teams`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setTeams(result.data);
            }).catch((error) => {
                switch(error.response?.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    useEffect(()=>{
        getTeams();
    },[])

    return (
        <Autocomplete multiple freeSolo options={teams} onChange={onChange}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => ( <TextField {...params} variant="standard" label="Teams" />)}
            renderTags={(value, getTagProps) => value.map((option, index) => <Chip variant="outlined" label={option.name} {...getTagProps({ index })} />)}
        />
    )
}