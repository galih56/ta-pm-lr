import React, { useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';
import withStyles from '@material-ui/styles/withStyles';
import makeStyles from '@material-ui/styles/makeStyles';
import { MenuItem, FormControl, Select, InputLabel } from '@material-ui/core/';
import UserContext from './UserContext';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
const selectProjects = (props) => {
    const projects_id=props.defaultValue;
    let global = useContext(UserContext);
    const classes = useStyles();

    const handleSelectChange = props.handleSelectChange;

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="select-project">Projects</InputLabel>
            <Select
                labelId="select-project"
                value={projects_id}
                onChange={handleSelectChange}
                className={classes.selectEmpty}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    global.state.projects.map(
                        (project, index) => {
                            return (<MenuItem value={project.id} key={project.id}>{project.title}</MenuItem>);
                        }
                    )
                }
            </Select>
        </FormControl>
    )
}
export default selectProjects;