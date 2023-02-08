import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Chip, Autocomplete } from '@material-ui/core';
import axios from 'axios';
import UserContext from '../../context/UserContext';

export default function UserSearchbar(props) {
    const { detailProject, task, exceptedData,exceptedUsers,exceptedClients,onChange,inputLabel,clientOnly,userOnly, withAdmin } = props;
    const handleValueChanges = onChange;
    const [users, setUsers] = useState([]);
    const [clients, setClients] = useState([]);
    const [options, setOptions] = useState([]);
    let global = useContext(UserContext);

    const getUsers = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}users`;
        axios.get(url).then(result => setUsers(result.data)).catch(console.log);
    }
    
    const getClients = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}clients`;
        axios.get(url).then(result => setClients(result.data)).catch(console.log);
    }

    const getDetailProject = () => {
        var url = `${process.env.MIX_BACK_END_BASE_URL}projects/${params.id}`;
        axios.get(url)
            .then((result) => {
                const data = result.data;
                setDetailProject(data);
                global.dispatch({ type: 'store-detail-project', payload: data });
                global.dispatch({type:'store-current-selected-project',payload:params.id});
            }).catch(console.log);
    }


    const getDefaultData=()=>{
        if(!clientOnly && !userOnly){
            getClients();
            getUsers();
        }
        if(clientOnly && !userOnly){
            getClients();
        }
        if(!clientOnly && userOnly){
            getUsers();
        }
    }

    useEffect(() => {
        if(detailProject || task){
            if(detailProject){
                if('members' in detailProject) setUsers(detailProject.members);
                if('clients' in detailProject) setClients(detailProject.clients); 
                if(!('members' in detailProject) && !('clients' in detailProject)){
                    getDefaultData();
                }   
            }
            if(task){
                if('members' in task) {
                    setUsers(task.members.filter(item=>item.is_user));
                    setClients(task.members.filter(item=>item.is_client));
                }else{
                    getDefaultData();
                }
            }
        }else{
            getDefaultData();
        }
    }, [detailProject?.members,detailProject?.clients,task?.members]);

    useEffect(()=>{
        if(!(detailProject||task)){
            getDefaultData();
        }
    },[])

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
        var filteredUsers = [];
        
        if(withAdmin) {
            filteredUsers=users
        }
        else{
            filteredUsers=users.filter((option) => { 
                var check=checkExistingMember(option.id, (exceptedData?exceptedData:exceptedUsers));
                if (!check){ 
                        return option;
                }
            });
        }

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
            var firstLetter = option.institution[0].toUpperCase();
            option.is_user=false;
            option.is_client=true;
            option.name=option.institution;
            return { firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter, ...option };
        });

        setOptions([...filteredUsers,...filteredClients]);
    }, [users,clients]);

    return (
        <>
        <Autocomplete multiple freeSolo options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))} groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => {
                var label='';
                if(option.is_user){
                    if(option.role){
                        label= `${option.name} (${option.role?.name})`; 
                    }
                    else{ 
                        label= `${option.name} (${option.email})`;
                    }
                }
                if(option.is_client){
                    label= `${option.institution}`;
                }
                return label;
            }}
            fullWidth renderInput={(params) => <TextField {...params} label={inputLabel?inputLabel:"Search Users"} variant="standard"/>}
            onChange={(event, options) => handleValueChanges(options)}
            renderTags={(values, getTagProps) => values.map((option, index) =>{
                return(<Chip key={index} variant="outlined" label={option.name} {...getTagProps({ index })} /> )
            })}
        />
{/*         
        {(modalCreateOpen)?(
            <ModalCreateUser
                open={modalCreateOpen}
                closeModal={() => setModalCreateOpen(false)}
                onCreate={handleUserUpdate}
            />
        ):<></>} */}
        </>
    );
}
