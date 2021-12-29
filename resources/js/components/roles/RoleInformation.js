import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import ModalCreateRole from './ModalCreateRole';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/Button';
import ModalDetailRole from './ModalDetailRole/ModalDetailRole';
import toast from 'react-hot-toast';
const RoleTable = React.lazy(() => import("./RoleTable"));

export default function RoleInformation() {
    const [data, setData] = useState([]);
    const [tree, setTree] = useState(null);
    let global = useContext(UserContext);
    const [clickedRole, setClickedRole] = useState({ 
        id: null, name: '', color: '', bgColor: '', parents: [], 
        children: [], root: false, isHighlight: false });
    const [modalDetailOpen, setModalDetailOpen] = useState(false);
    const [modalCreateOpen, setModalCreateOpen] = useState(false);

    const handleModalOpen = (data) => {
        const { role, open } = data;
        setModalDetailOpen(open);
        setClickedRole(role);
    }

    const getRoles = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'roles';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setData(result.data)
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
        if (clickedRole?.id !== null && clickedRole?.id !== undefined && modalDetailOpen === true) {
            return (
                <ModalDetailRole
                    open={modalDetailOpen}
                    initialState={clickedRole}
                    closeModal={() =>handleModalOpen({ role: { id: null, name: '', color: '', bgColor: '', parents: [], children: [], root: false, isHighlight: false }, open: false })}
                    onUpdate={handleRoleUpdate}
                    onDelete={handleRoleDelete}
                />
            )
        }
    }

    return (
        <>
            <React.Suspense fallback={<LinearProgress />}>
                <Button variant="contained" onClick={() => setModalCreateOpen(true)}>+ Add</Button>
                <RoleTable data={data} onUpdate={handleRoleUpdate} onDelete={handleRoleDelete} modalOpen={handleModalOpen} />
                <ModalCreateRole
                    open={modalCreateOpen}
                    closeModal={() =>  setModalCreateOpen(false)}
                    onCreate={(newRole)=>setData([...data,newRole])}
                />
                {showModalDetailRole()}
                 
            </React.Suspense>
        </>
    )
}