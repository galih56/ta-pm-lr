import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Chip, Autocomplete } from '@material-ui/core';
import axios from 'axios';
import UserContext from '../../context/UserContext';


export default function UserSearchbar(props) {
    const { detailProject, exceptedData,exceptedUsers,exceptedClients,onChange,inputLabel,clientOnly,userOnly } = props;
    const handleValueChanges = onChange;
    const [users, setUsers] = useState([]);
    const [clients, setClients] = useState([]);
    const [options, setOptions] = useState([]);
    let global = useContext(UserContext);

    const getUsers = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'users';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url).then(result => setUsers(result.data)).catch(console.log);
    }
    
    const getClients = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'clients';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url).then(result => setClients(result.data)).catch(console.log);
    }
    useEffect(() => {
        if(detailProject?.members?.length) setUsers(detailProject.members);
        if(detailProject?.clients?.length) setClients(detailProject.clients);
        if(!detailProject?.members?.length && !detailProject?.members?.length) {
            if(!clientOnly && !userOnly){
                getClients()
                getUsers();
            }
            if(clientOnly && !userOnly){
                getClients()
            }
            
            if(!clientOnly && userOnly){
                getUsers()
            }
        }
    }, [detailProject?.members,detailProject?.clients]);

    function checkExistingMember(id, arr=[]) {
        var exists = false;
        try {  
            for (let i = 0; i < arr.length; i++) {
                const item = arr[i];
                if (id == item?.user?.id){ exists = true;  break; }
                if (id == item?.id){ exists = true;  break;}
            }
        } catch (error) {
            console.log('checkExistingMember => usersearchbar',error)
        }
        return exists;
    }

    useEffect(() => {
        var filteredUsers = users.filter((option) => { 
            if (!(checkExistingMember(option.id, (exceptedData?exceptedData:exceptedUsers))
                || option.occupation?.name?.toLowerCase().includes('administrator') 
                || option.occupation?.name?.toLowerCase().includes('ceo'))){ 
                    return option;
                }
        });

        var filteredClients = clients.filter((option) => { 
            if (!checkExistingMember(option.id, (exceptedData?exceptedData:exceptedClients))){ 
                    return option;
                }
        });

        filteredUsers = filteredUsers.map((option) => {
            const firstLetter = option.name[0].toUpperCase();
            option.is_user=true;
            option.is_client=false;
            return { firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter, ...option };
        });

        filteredClients = filteredClients.map((option) => {
            var firstLetter = option.name[0].toUpperCase();
            option.is_user=false;
            option.is_client=true;
            return { firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter, ...option };
        });

        setOptions([...filteredUsers,...filteredClients]);
    }, [users,clients]);

    return (
        <Autocomplete
            multiple
            freeSolo
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => {
                var label='';
                if(option.is_user){
                    if(option?.role) label= `${option.name} (${option.role.name})`;
                    if(option?.occupation) label= `${option.name} (${option.occupation.name})`; 
                    if(!option.role && !option.occupation){ 
                        label= `${option.name} (${option.email})`;
                    }
                }
                if(option.is_client){
                    label= `${option.name} (${option.institution})`;
                }
                return label;
            }}
            fullWidth
            renderInput={(params) => <TextField {...params} label={inputLabel?inputLabel:"Search Users"} variant="standard"/>}
            onChange={(event, options) => handleValueChanges(options)}
            renderTags={(values, getTagProps) => values.map((option, index) =>{
                return(<Chip key={index} variant="outlined" label={option.name} {...getTagProps({ index })} /> )
            })}
        />
    );
}
