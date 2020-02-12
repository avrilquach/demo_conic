import React, { Component } from 'react';
//import WhatshotIcon from '@material-ui/icons/Whatshot';
//import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box';
import styles from './styles.js';


class BreadCrumbs extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box pl={3} pr={3} pt={1.5} pb={1.5}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" className={classes.link}>
                        <HomeIcon className={classes.icon} />
                    </Link>
                    <Link color="inherit" href="/" className={classes.link}>
                        Text Demo
      </Link>
                </Breadcrumbs>
            </Box>
        )
    }
}

export default withStyles(styles)(BreadCrumbs);