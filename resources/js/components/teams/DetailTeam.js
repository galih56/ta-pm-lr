import React,{useState,useContext,useEffect} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import MemberList from './MemberList';
import ProjectList from './ProjectList';
import UserContext from './../../context/UserContext';
import 'fontsource-roboto';
import axios from 'axios';


export default function DetailTeam(props) {
    const global=useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState({
        id:'', name:"", description:'',
        users:[],projects:[]
    });
    const { match: { params } } = props;
    const handleEditingMode = (bool = false) => setIsEditing(bool);

    const getDetailTeam=()=>{
        const toast_loading = toast.loading('Loading...');
        const url = process.env.MIX_BACK_END_BASE_URL + 'teams/'+params.id;
        axios.defaults.headers.common['Authorization'] = `Bearer ${global.state.token}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.get(url)
            .then((result) => {
                setData(result.data);
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

    useEffect(()=>{
        getDetailTeam();
    },[]);

    return (
        <Paper style={{ padding: '1em',width:'100%' }}>
            <Grid container spacing={2}>
                
                <Grid item xl={12} lg={12} md={12} sm={12}>
                    <Router>
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="teams">
                            <Button component={Link}  color="primary"
                                to="/teams">
                                Teams
                            </Button>
                            <Typography color="textPrimary">{data.name}</Typography>
                        </Breadcrumbs>
                    </Router>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                    <Typography variant="h4">{data.name}</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                    <ProjectList teamId={params.id} data={data.projects}/>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                    <MemberList teamId={params.id} data={data.members}/>
                </Grid>
            </Grid>
        </Paper>
    );
}
