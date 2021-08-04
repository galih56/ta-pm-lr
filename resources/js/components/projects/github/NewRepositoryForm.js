import React,{ useState,useContext,useEffect} from 'react';
import UserContext from './../../../context/UserContext'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import TextField from '@material-ui/core/TextField';

const NewRepositoryForm=({projects_id,onSave})=>{
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    const global=useContext(UserContext);
    const snackbar = (message, variant) => enqueueSnackbar(message, { variant });
    const [usernameOwner,setUsernameOwner]=useState('');
    const [repositoryName,setRepositoryName]=useState('');

    const saveRepository=(e) => {
        e.preventDefault();
       const url = process.env.MIX_BACK_END_BASE_URL + `github-repositories`;
        const body= {
            owner_name: usernameOwner,
            repository_name: repositoryName,
            projects_id: projects_id,
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post(url,body)
        .then(result => {
            onSave(result.data)
            setUsernameOwner(''); 
            setRepositoryName('');
            snackbar(`Data was added successfuly`, 'success'); 
        }).catch((error) => {
            const payload = { error: error, snackbar: snackbar, dispatch: global.dispatch, history: history }
            global.dispatch({ type: 'handle-fetch-error', payload: payload });
        });
    }
    
    return (   
        <form autoComplete="off" onSubmit={saveRepository}>
            <TextField label="username owner"  
                    variant="outlined" required 
                    value={usernameOwner}
                    onChange={e => setUsernameOwner(e.target.value)}/>
            <span style={{margin:'1em'}}>/</span>
            <TextField label="repository name" required 
                    variant="outlined" 
                    value={repositoryName}
                    onChange={e => setRepositoryName(e.target.value)}/>
            <Button type="submit" 
                    style={{margin:'0.8em'}}
                    variant="contained"
                    color="primary">Save</Button>
        </form>
    )
}

export default NewRepositoryForm;