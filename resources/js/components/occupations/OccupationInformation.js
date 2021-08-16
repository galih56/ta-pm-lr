import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import ModalCreateOccupation from './ModalCreateOccupation';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/Button';
import ModalDetailOccupation from './ModalDetailOccupation/ModalDetailOccupation';
import toast, { Toaster } from 'react-hot-toast';

// const OccupationTree = React.lazy(() => import("./OccupationTree"));
const OccupationTable = React.lazy(() => import("./OccupationTable"));

export default function OccupationInformation() {
    const [data, setData] = useState([]);
    const [tree, setTree] = useState(null);
    let global = useContext(UserContext);
    const [clickedOccupation, setClickedOccupation] = useState({ 
        id: null, name: '', color: '', bgColor: '', parents: [], 
        children: [], root: false, isHighlight: false });
    const [modalDetailOpen, setModalDetailOpen] = useState(false);
    const [modalCreateOpen, setModalCreateOpen] = useState(false);

    const handleModalOpen = (data) => {
        const { occupation, open } = data;
        setModalDetailOpen(open);
        setClickedOccupation(occupation);
    }

    const getOccupations = () => {
        const toast_loading = toast.loading('Loading...');
        const url = process.env.MIX_BACK_END_BASE_URL + 'occupations';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setData(result.data)
                toast.dismiss(toast_loading);
            }).catch((error) => {
                toast.dismiss(toast_loading);
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    const getOccupationTree = () => {
        const url = process.env.MIX_BACK_END_BASE_URL + 'occupations/tree';
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                console.log(result.data);
                // setTree(result.data)
            }).catch((error) => {
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    useEffect(() => {
        getOccupations();
        // getOccupationTree();
    }, []);

    function handleOccupationUpdate(value) {
        var newData = data.map((row => {
            if (row.id === value.id) { return value; }
            return row
        }))
        setData(newData);
    }

    function handleOccupationDelete(value) {
        setData(data.filter((row => {
            if (row.id != value.id) return row;
        })));
    }

    const showModalDetailOccupation = () => {
        if (clickedOccupation.id !== null && clickedOccupation.id !== undefined && modalDetailOpen === true) {
            return (
                <ModalDetailOccupation
                    open={modalDetailOpen}
                    initialState={clickedOccupation}
                    closeModal={() =>handleModalOpen({ occupation: { id: null, name: '', color: '', bgColor: '', parents: [], children: [], root: false, isHighlight: false }, open: false })}
                    onUpdate={handleOccupationUpdate}
                    onDelete={handleOccupationDelete}
                />
            )
        }
    }

    return (
        <>
            <React.Suspense fallback={<LinearProgress />}>
                {/* <OccupationTree data={tree} modalOpen={handleModalOpen} /> */}
                <Button variant="contained" onClick={() => setModalCreateOpen(true)}>+ Add</Button>
                <OccupationTable data={data} onUpdate={handleOccupationUpdate} onDelete={handleOccupationDelete} modalOpen={handleModalOpen} />
                <ModalCreateOccupation
                    open={modalCreateOpen}
                    closeModal={() =>  setModalCreateOpen(false)}
                    onCreate={(newOccupation)=>setData([...data,newOccupation])}
                />
                {showModalDetailOccupation()}
                <Toaster/>
            </React.Suspense>
        </>
    )
}