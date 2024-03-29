import PropTypes from 'prop-types'
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Chip, Autocomplete } from '@material-ui/core';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import toast from 'react-hot-toast';

function RoleSearchBar(props) {
    const { label, exceptedData, defaultValue } = props;
    const handleValueChanges = props.onChange;
    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);
    let global = useContext(UserContext);
    let history = useHistory();

    const getRoles = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}roles`;
        axios.get(url)
            .then((result) => {
                setData(result.data);
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    useEffect(() => {
        getRoles();
    }, []);

    function checkExistingData(id, arr) {
        var exists = false;
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (id == item.id) {
                exists = true;
                break;
            }
        }
        return exists;
    }

    useEffect(() => {
        global.dispatch({ type: 'check-authentication', payload: { history: history } });
        var filteredOptions = [];
        data.forEach((option) => {
            if (!checkExistingData(option.id, exceptedData)) filteredOptions.push(option);
        })
        setOptions(filteredOptions.map((option) => {
            const firstLetter = option.name[0].toUpperCase();
            return { firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter, ...option };
        }));
    }, [data]);

    return (
        <>
            <Autocomplete
                multiple
                freeSolo
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                getOptionLabel={(option) => option.name}
                style={{ width: '100%' }}
                renderInput={params => <TextField {...params} label={label} variant={'standard'} />}
                onChange={(event, options) => handleValueChanges(options)}
                defaultValue={defaultValue.map((option) => {
                    const firstLetter = option.name[0].toUpperCase();
                    return { firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter, ...option };
                })}
                renderTags={(value, getTagProps) => {
                    return (
                        <>
                            {value.map((option, index) => {
                                return (
                                    <Chip variant="outlined" label={option.person ? option.person.name : option.name} {...getTagProps({ index })} />
                                )
                            })}
                        </>
                    )
                }}
            />
             
        </>
    );
}

RoleSearchBar.propTypes = {
    label: PropTypes.string,
    exceptedData: PropTypes.array,
    defaultValue: PropTypes.array
}
export default RoleSearchBar;