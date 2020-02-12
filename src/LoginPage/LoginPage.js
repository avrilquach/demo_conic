import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styles from './styles.js';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBox from '@material-ui/core/CheckBox';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

class LoginPage extends React.Component {
	constructor(props) {
	 	super(props);

		this.state = {
			username : '',
			password : ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(event) {
		event.preventDefault();

		console.log(this.state.username);

	}

	render() {

		if (this.props.location.data === undefined) {
			return <Redirect to="/" />
		}
		return (

			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={this.props.classes.paper}>
					<Avatar className={this.props.classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={this.props.classes.form} onSubmit={this.handleSubmit} noValidate>
						<TextField 
							variant="outlined"
							margin="normal"
							fullWidth
							required
							label="Email Address"
							onChange={(event, newUsername) => 
								this.setState({username : newUsername})
							}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							fullWidth
							required
							label="Password"
							type="password"
							onChange={(event, newPassword) => 
								this.setState({password : newPassword})	
							}
						/>
						<FormControlLabel
							label="Remember"
							control={<CheckBox value="Remember" color="primary" />}
						/>
						<Button
							variant="contained"
							fullWidth
							type="submit"
							color="primary"
							className={this.props.classes.submit}
						>
							Sign In
						</Button>
          	<Grid container>
          	  <Grid item xs>
								<Link className={this.props.classes.link} to={{
									pathname : "/customer"	
								}}>
									Customer
								</Link>
          	  </Grid>
          	  <Grid item xs>
          	    <Link className={this.props.classes.link} to={{
									pathname : "/user"
								}}>
          	      User
          	    </Link>
          	  </Grid>
              <Grid item xs>
                <Link className={this.props.classes.link} to={{
                  pathname : "/super"
                }}>
                  Superuser
                </Link>
              </Grid>
          	</Grid>
					</form>
				</div>
			</Container>

		);
	}
}

export default withStyles(styles)(LoginPage);