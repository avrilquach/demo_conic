import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import SideBar from './../SideBar/SideBar';
import menuSideBar from './../menuSideBar';
import Dashboard from './../components/Dashboard/Dashboard.js';
import BreadCrumbs from './../components/BreadCrumbs/BreadCrumbs';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Materials from '../components/Contents/Materials';
import Steps from '../components/Contents/Steps';

class AddPage extends Component {
    render() {
        const { classes } = this.props;
        const menuSide = menuSideBar.filter(function (menu) {
            return menu.id === 0
        });
        return (<Box>
            <SideBar sidebar={menuSide} />
            <Dashboard />
            <BreadCrumbs />
            <Grid container className={classes.container}>
                <Card className={classes.card}>
                    <Typography variant="h2" className={classes.h2}>
                        Materials
                    </Typography>
                    <Materials />
                </Card>
            </Grid>
            <Grid container className={classes.container}>
                <Card className={classes.card}>
                    <Typography variant="h2" className={classes.h2}>
                        Steps
                    </Typography>
                    <Steps />
                </Card>
            </Grid>
        </Box>)
    }
}

export default withStyles(styles)(AddPage);