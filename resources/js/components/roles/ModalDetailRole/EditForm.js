
import 'fontsource-roboto';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const OpenEditForm = ({ isEdit, data, setData }) => {
    if (isEdit) {
        return (
            <Grid container spacing={2} style={{ paddingLeft: 4, paddingRight: 4 }} >
                <TextField
                    defaultValue={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    style={{ width: '100%' }}
                    variant={'standard'}
                />
            </Grid>
        )
    } else {
        return (
            <Grid container spacing={2} style={{ paddingLeft: 4, paddingRight: 4 }} >
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <Typography variant="body2">{data.name}</Typography>
                </Grid>
            </Grid>
        )
    }
}
export default OpenEditForm;