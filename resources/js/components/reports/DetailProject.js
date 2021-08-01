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
import { useSnackbar } from 'notistack';
import axios from 'axios';

const clickedTaskInitialState={ 
    id:null, taskId: null,
    onCardDelete:()=>console.log('no-event')
}
const Overview = lazy(() => import('../projects/Overview'));

const DetailProject = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    let global = useContext(UserContext);
    const { match: { params } } = props;
    const [detailProject, setDetailData] = useState({ 
        id: null, title: null, description: null, columns: [], members: [], 
        createdAt: '', updatedAt: '' 
    });
    const [detailTaskOpen, setDetailTaskOpen] = useState(false)
    const [clickedTask, setClickedTask] = useState(clickedTaskInitialState);

    const snackbar = (message, variant) => enqueueSnackbar(message, { variant });

    const getDetailProject = () => {
        const url = `${process.env.MIX_BACK_END_BASE_URL}projects/${params.id}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                const data = result.data;
                global.dispatch({ type: 'store-detail-project', payload: data })
                setDetailData(data);
            }).catch((error) => {
                const payload = { error: error, snackbar: snackbar, dispatch: global.dispatch, history: null }
                global.dispatch({ type: 'handle-fetch-error', payload: payload });
            });
    }

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const paramTaskId = query.get('task_id');
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