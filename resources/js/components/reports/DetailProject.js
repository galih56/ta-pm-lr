import React, { useState, useEffect, useContext, lazy, Suspense, useCallback } from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ModalDetailTask from '../tasks/modalDetailTask/ModalDetailTask';
import LinearProgress from '@material-ui/core/LinearProgress';
import UserContext from '../../context/UserContext';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const clickedTaskInitialState={ 
    id:null, taskId: null,
    onCardDelete:()=>console.log('no-event')
}
const Overview = lazy(() => import('../projects/Overview'));

const DetailProject = (props) => {
    let global = useContext(UserContext);
    const { match: { params } } = props;
    const [detailProject, setDetailData] = useState({ 
        id: null, title: null, description: null, columns: [], members: [], 
        createdAt: '', updatedAt: '' 
    });
    const [detailTaskOpen, setDetailTaskOpen] = useState(false)
    const [clickedTask, setClickedTask] = useState(clickedTaskInitialState);

    const getDetailProject = () => {
        const toast_loading = toast.loading('Loading...');
        var url = `${process.env.MIX_BACK_END_BASE_URL}projects/${params.id}`;
        if(![1,2,3,4,5,6].includes(global.state.role?.id)){
            url+=`?users_id=${global.state.id}`;
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setDetailData(result.data)
                toast.dismiss(toast_loading);
            }).catch((error) => {
                toast.dismiss(toast_loading);
                console.error(error);
                switch(error.response.status){
                    case 401 : toast.error(<b>Unauthenticated</b>); break;
                    case 422 : toast.error(<b>Some required inputs are empty</b>); break;
                    default : toast.error(<b>{error.response.statusText}</b>); break
                }
            });
    }

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const paramTaskId = query.get('tasks_id');
        if (paramTaskId) handleDetailTaskOpen({ ...clickedTask, taskId: paramTaskId, open: true });
        getDetailProject();
    }, []);

    const handleDetailTaskOpen = (taskInfo) => {
        const {taskId, open,onCardDelete } = taskInfo;
        setDetailTaskOpen(open);
        setClickedTask({ taskId: taskId,onCardDelete:onCardDelete });
    };


    const showModalDetailTask = useCallback(() => {
        if ((clickedTask.id || clickedTask.taskId) && detailTaskOpen == true) {
            return (
                <ModalDetailTask
                    open={detailTaskOpen}
                    closeModalDetailTask={() => {
                        handleDetailTaskOpen(clickedTaskInitialState)
                    }}
                    refreshDetailProject={getDetailProject}
                    projectId={detailProject.id}
                    detailProject={{
                        id:detailProject.id,
                        members:detailProject.members,
                    }}
                    initialState={clickedTask} 
                    onDelete={clickedTask.onCardDelete}
                    />
            )
        }
    }, [clickedTask]);

    return (
        <Grid container>
             
            <Grid lg={12} md={12} sm={12} xs={12} item>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label={`project reports - ${detailProject.title}`}>
                    <Button component={Link}  color="primary"
                        to="/projects">
                        Projects
                    </Button>
                    <Button component={Link}  color="primary"
                        to="/reports">
                        Reports
                    </Button>
                    <Typography>
                        {detailProject.title}
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
                <Suspense fallback={<LinearProgress />}>
                    <Overview detailProject={detailProject} handleDetailTaskOpen={handleDetailTaskOpen} refreshDetailProject={getDetailProject}/>
                </Suspense>
            </Grid>
        </Grid>
    );
}
export default DetailProject;