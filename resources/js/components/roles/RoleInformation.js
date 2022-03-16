import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../context/UserContext';
import ModalCreateRole from './ModalCreateRole';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/Button';
import ModalDetailRole from './ModalDetailRole/ModalDetailRole';

const RoleTable = React.lazy(() => import("./RoleTable"));

export default function RoleInformation() {
    const [data, setData] = useState([]);
    let global = useContext(UserContext);
    const [clickedRole, setClickedRole] = useState({ 
        id: null, name: '', color: '', bgColor: '', parents: [], 
        children: [], root: false, isHighlight: false });
    const [modalDetailOpen, setModalDetailOpen] = useState(false);
    const [modalCreateOpen, setModalCreateOpen] = useState(false);
    let history=useHistory();
    
    const removeRoleIdQueryString=()=>{
        const queryParams = new URLSearchParams(history.location.search)
        if (queryParams.has('roles_id')) {
            queryParams.delete('roles_id');
            history.replace({
                search: queryParams.toString(),
            })
        }
    }
    

    const handleModalOpen = (data) => {
        const { role, open } = data;
        setModalDetailOpen(open);
        setClickedRole(role);
        if(!open)removeRoleIdQueryString()
    }

    const getRoles = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}roles`;
        axios.get(url).then((result) => setData(result.data)).catch(console.log);
    }

    useEffect(() => {
        getRoles();
    }, []);

    function handleRoleUpdate(value) {
        var newData = data.map((row => {
            if (row.id === value.id) { return value; }
            return row
        }))
        setData(newData);
    }

    function handleRoleDelete(value) {
        setData(data.filter((row => {
            if (row.id != value.id) return row;
        })));
    }

    const showModalDetailRole = () => {
        if (clickedRole.id !== null && clickedRole.id !== undefined && modalDetailOpen === true) {
            return (<ModalDetailRole open={modalDetailOpen} initialState={clickedRole} closeModal={() =>handleModalOpen({ role: { id: null, name: '', color: '', bgColor: '', parents: [], children: [], root: false, isHighlight: false }, open: false })} onUpdate={handleRoleUpdate} onDelete={handleRoleDelete}/>)
        }
    }
    const openModalCreate=() => setModalCreateOpen(true);
    const closeModal=() => setModalCreateOpen(false)
    const onCreate=(newRole)=>setData([...data,newRole])
    return (
        <>
            <React.Suspense fallback={<LinearProgress />}>
                <Button variant="contained" onClick={openModalCreate}>+ Add</Button>
                <RoleTable data={data} onUpdate={handleRoleUpdate} onDelete={handleRoleDelete} modalOpen={handleModalOpen} />
                <ModalCreateRole open={modalCreateOpen} closeModal={closeModal}
                    onCreate={onCreate}
                />
                {showModalDetailRole()}      
            </React.Suspense>
        </>
    )
}