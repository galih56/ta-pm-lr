import React,{ useState,useContext,useEffect} from 'react';
import UserContext from './../../../context/UserContext';
import Button from '@material-ui/core/Button';
import toast, { Toaster } from 'react-hot-toast';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const NewRepositoryForm=({projects_id,onSave})=>{
    const global=useContext(UserContext);
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
        axios.defaults.headers.post['Content-Type'] = 

        toast.promise(
            axios.post(url, body),
            {
                loading: 'Creating a new repository',
                success: (result)=>{
                    onSave(result.data)
                    setUsernameOwner(''); 
                    setRepositoryName('');
                    return <b>A new repostory successfuly created</b>
                },
                error: (error)=>{
                    if(error.response.status==401) return <b>Unauthenticated</b>;
                    if(error.response.status==422) return <b>Some required inputs are empty</b>;
                    return <b>{error.response.statusText}</b>;
                },
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
            <Toaster/>
        </form>
    )
}

export default NewRepositoryForm;