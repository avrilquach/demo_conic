import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './styles.js';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const top100Films = [
  { title: 'Project Type 001', year: 1994 },
  { title: 'Project Type 002', year: 1972 },
];

class PjPage extends React.Component {
	constructor(props) {
	 	super(props);

		this.state = {
			username : '',
			password : '',
      submited : false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
    this.setState({submited : true});
		//return <Redirect to={{ pathname: '/user'}} />

	}

	render() {

    const {submited} = this.state;

		if (submited === true) {
			return <Redirect to="/user" />
		}
		//const asd = this.props.location.data.name;
		return (

			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={this.props.classes.paper}>
					<Typography component="h1" variant="h5">
						Create Project
					</Typography>
					<form className={this.props.classes.form} onSubmit={this.handleSubmit} noValidate>
						<Grid
							container
							spacing={2}
						> 
							<Grid item xs>
								<TextField 
									variant="outlined"
									margin="normal"
									fullWidth
									required
									label="Project Name"
									onChange={(event, newUsername) => 
										this.setState({username : newUsername})
									}
								/>
							</Grid>
							
							<Grid item xs>
								<Autocomplete id="combo-box-demo"
								options={top100Films}
								getOptionLabel={option => option.title}
								style={{ width: 396 }}
								renderInput={params => (
									<TextField {...params} label="Combo box" variant="outlined" fullWidth />
								)}
								/>
							</Grid>
							
							<Grid item xs>
								<TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" style={{width: "100%"}} />
							</Grid>

           					
						</Grid>
						<Button
							variant="contained"
							fullWidth
							type="submit"
							color="primary"
							className={this.props.classes.submit}
						>
							Create
						</Button>
					</form>
				</div>
			</Container>

		);
	}
}

export default withStyles(styles)(PjPage);