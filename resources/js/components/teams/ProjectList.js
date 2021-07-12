import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

const ProjectList = ({teamId,data}) => {
    const [rows,setRows]=useState([]);

    useEffect(()=>{
        setRows(data)
    },[data]);

    return (
        <React.Fragment>
            <Typography variant="h6">Projects</Typography>
            <Grid container spacing={1}>
                {rows?rows.map((row) => (
                    <Grid item xl={3} md={3} sm={6} xs={6} key={row.id}>
                        <Link to={`/project/` + row.id} style={{ textDecoration: 'none' }}>
                            <Card style={{ height: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        image={row.image_url}
                                        title={row.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h5" align="left" style={{ height: '100%' }}> {row.title} </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {row.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                )): (
                <Grid item xl={12} md={12} sm={12} xs={12}>
                    <Alert severity="info">
                        <AlertTitle><b>Info</b></AlertTitle>
                        This team is not working on any project.
                    </Alert>
                </Grid>
                )}
            </Grid>
        </React.Fragment>
    );
}
export default ProjectList;


// const [openFormCreate,setOpenFormCreate]=useState(false);
// <FormAddNewProject 
// open={openFormCreate} 
// closeModal={() => setOpenFormCreate(false)} 
// onCreate={(newValue)=> setRows([...rows,newValue])}/>
