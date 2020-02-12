import React from 'react';
import BreadCrumbs from './../components/BreadCrumbs/BreadCrumbs';
import RequestQuotation from './../components/Contents/RequestQuotation';
import ListQuotation from './../components/Contents/ListQuotation';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styles from './styles';
import { Typography } from '@material-ui/core';
import Dashboard from './../components/Dashboard/Dashboard.js';
import SideBar from './../SideBar/SideBar';
import menuSideBar from './../menuSideBar';

function createData1(id, request_id, request_name, customer, create, finish) {
    return { id, request_id, request_name, customer, create, finish };
}

const rows1 = [
    createData1('1', '42071', 'Item A	', 'Nguyen Van A', '1-Jan-2020', '5-Jan-2020'),
    createData1('2', '42071', 'Item A	', 'Nguyen Van A', '1-Jan-2020', '5-Jan-2020'),
    createData1('3', '42071', 'Item A	', 'Nguyen Van A', '1-Jan-2020', '5-Jan-2020'),
    createData1('4', '42071', 'Item A	', 'Nguyen Van A', '1-Jan-2020', '5-Jan-2020'),
    createData1('5', '42071', 'Item A	', 'Nguyen Van A', '1-Jan-2020', '5-Jan-2020')
];

function userPage(props) {
    const { classes } = props;
    const menuSide = menuSideBar.filter(function (menu) {
        return menu.id === 1
    });
    return (
        <Box>
            <SideBar sidebar={menuSide} />
            <Dashboard />
            <BreadCrumbs />
            <Grid container className={classes.container}>
                <Card className={classes.card}>
                    <Typography variant="h2" className={classes.h2}>
                        List Projects
                    </Typography>
                    <RequestQuotation contents={rows1} />
                </Card>
            </Grid>
            <Grid container className={classes.container}>
                <Card className={classes.card}>
                    <Typography variant="h2" className={classes.h2}>
                        List Quotation
                    </Typography>
                    <ListQuotation contents={rows1} />
                </Card>
            </Grid>
        </Box>
    )
}

export default withStyles(styles)(userPage);