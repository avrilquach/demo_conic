import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AssignmentIcon from '@material-ui/icons/Assignment';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class FiltersHistoryGateway extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            category: ""
        })
    }
    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className = {
                classes.FilterContainer
            }>
                <TextField
                className = {
                    classes.margin
                }
                id = "input-with-icon-textfield"
                label = "TextField"
                InputProps = {
                    {
                        startAdornment: ( < AssignmentIcon / >
                        ),
                    }
                }
                />
                <TextField
                    id = "date"
                    label = "Date Create"
                    type = "date"
                    defaultValue = ""
                    className = {
                        classes.textField
                    }
                    InputLabelProps = {
                        {
                            shrink: true,
                        }
                    }
                    InputProps={
                        {
                            startAdornment: (
                                < CalendarTodayIcon / >
                            ),
                        }
                    }
                />
                <TextField
                    id = "date"
                    label = "Date Complete"
                    type = "date"
                    defaultValue = ""
                    className = {
                        classes.textField
                    }
                    InputLabelProps = {
                        {
                            shrink: true,
                        }
                    }
                    InputProps = {
                        {
                            startAdornment: ( 
                                <CalendarTodayIcon / >
                            ),
                        }
                    }
                />
            </div>
            
        )
    }
}

export default withStyles(styles)(FiltersHistoryGateway);