import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Select from './Select';
import SelectRequest from './SelectRequest';
import SelectDoc from './SelectDoc';
import SelectHistory from './SelectHistory';


class LinkHistoryGateway extends Component {
    render() {
        const { classes } = this.props;
        return (
            < div className = {
                classes.breadCrumbContainer
            } >
                <Select/>
                <SelectRequest/>
                <SelectDoc/>
                <SelectHistory />
            </div>
        )
    }
}

export default withStyles(styles)(LinkHistoryGateway);