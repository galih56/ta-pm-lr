import React, { useState, useContext, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../context/UserContext';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/core/Autocomplete';
import axios from 'axios';


const SelectTag = (props) => {
    const {isEdit, defaultValue, onChange}=props;
    const global = useContext(UserContext);
    const [data, setData] = useState([]);
    console.log(props);

    const getTags = () => {
        if (window.navigator.onLine) {
            const url = `${process.env.MIX_BACK_END_BASE_URL}tags`;
            axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.get(url)
                .then(result =>setData(result.data)).catch(console.log);
        } else {
            const tags = JSON.parse(localStorage.getItem('tags'));
            setData(tags);
        }
    }
    useEffect(() => {
        getTags();
    }, []);

    if (isEdit) {
        return (
            <Autocomplete multiple onChange={(event, arrValues) => onChange(arrValues) }
                filterOptions={(options, params) => {
                    options=options.filter(function(item){
                        if(item.title.toLowerCase().includes(params.inputValue.toLowerCase()))
                            return item;
                    })
                    if (params.inputValue !== '') {
                        options.unshift({
                            inputNewTag: params.inputValue,
                            title: `Add "${params.inputValue}"`,
                        });
                    }
                    return options;
                }}
                selectOnFocus
                handleHomeEndKeys
                options={data}
                getOptionLabel={option => {
                    if (typeof option === 'string') return option;
                    if (option.inputValue) return option.inputValue;
                    return option.title;
                }}
                renderTags={(value, getTagProps) =>{
                    return value.map((option, index) => (
                        <Chip key={option.id} variant="outlined" label={option.title} {...getTagProps({ index })} />
                    ))
                }}
                style={{ width: '100%' }}
                freeSolo
                renderInput={(params) => <TextField {...params} variant="standard" label="Place tags to categorize cards" />}
                defaultValue={defaultValue}
            />
        );
    } else {
        return (
            <>
                {defaultValue.map((item) => {
                    return <Chip key={item.id} label={item.title} style={{ margin: '0.5em' }} />
                })}
            </>
        )
    }
}


export default SelectTag;
