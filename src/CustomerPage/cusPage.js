import React, { Component } from 'react';
import BreadCrumbs from './../components/BreadCrumbs/BreadCrumbs';
import ListQuotation from './../components/Contents/ListQuotation';
import ApproveQuotation from './../components/Contents/ApproveQuotation';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import Dashboard from './../components/Dashboard/Dashboard.js';
import SideBar from './../SideBar/SideBar';
import menuSideBar from './../menuSideBar';
import styles from './styles';
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

function createData2(id, request_id, request_name, customer, create, finish, state) {
    return { id, request_id, request_name, customer, create, finish, state };
}

const rows2 = [
    createData2('1', '42071', 'Item A	', 'Nguyen Van A', '1-Jan-2020', '5-Jan-2020', "Pending"),
    createData2('2', '42071', 'Item A	', 'Nguyen Van A', '1-Jan-2020', '5-Jan-2020', "Pending"),
    createData2('3', '42071', 'Item A	', 'Nguyen Van A', '1-Jan-2020', '5-Jan-2020', "Pending"),
    createData2('4', '42071', 'Item A	', 'Nguyen Van A', '1-Jan-2020', '5-Jan-2020', "Approve"),
    createData2('5', '42071', 'Item A	', 'Nguyen Van A', '1-Jan-2020', '5-Jan-2020', "Approve")
];

class cusPage extends Component {
    render() {
        const { classes } = this.props;
        const menuSide = menuSideBar.filter(function (menu) {
            return menu.id === 0
        });
        return (
            <Box>
                <SideBar sidebar={menuSide}/>
                <Dashboard />
                <BreadCrumbs />
                <Grid container className={classes.container}>
                    <Card className={classes.card}>
                        <Typography variant="h2" className={classes.h2}>
                            List Quotation
                        </Typography>
                        <ListQuotation contents={rows1} />
                    </Card>
                </Grid>
                <Grid container className={classes.container}>
                    <Card className={classes.card}>
                        <Typography variant="h2" className={classes.h2}>
                            List Approve
                        </Typography>
                        <ApproveQuotation contents={rows2} />
                    </Card>
                </Grid>
            </Box>
        )
    }
}
export default withStyles(styles)(cusPage);