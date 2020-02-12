import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import ProjectList from '../components/Contents/ProjectList';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styles from './styles';
import { Typography } from '@material-ui/core';
import Dashboard from './../components/Dashboard/Dashboard.js';
import SideBar from './../SideBar/SideBar';
import menuSideBar from './../menuSideBar';

function createData1(name, description, type) {
    return { name, description, type };
}

const rows1 = [
    createData1('Project 1', 'This is Project 1', 'Loai 1'),
    createData1('Project 1', 'This is Project 1', 'Loai 2'),
    createData1('Project 1', 'This is Project 1', 'Loai 3'),
];

function Projects(props) {
    const { classes } = props;
    const menuSide = menuSideBar.filter(function (menu) {
        return menu.id === 2
    });
    return (
        <Box>
            <SideBar sidebar={menuSide} />
            <Dashboard />
            <BreadCrumbs />
            <Grid container className={classes.container}>
                <Card className={classes.card}>
                    <Typography variant="h2" className={classes.h2}>
                        Projects
                    </Typography>
                    <ProjectList contents={rows1} />
                </Card>
            </Grid>
        </Box>
    )
}

export default withStyles(styles)(Projects);