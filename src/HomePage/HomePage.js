import React from 'react';

import { Redirect } from 'react-router-dom';

import styles from './styles.js';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Breadcrumb from './../components/BreadCrumbs/BreadCrumbs';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(description, name, group, origin, guarantee, price, note) {
    return { description, name, group, origin, guarantee, price, note };
  }
  
  const rows = [
    createData('A00001', 'Vật tư 1', 3, '2 years', 'VN', 300, 'somthing'),
    createData('A00002', 'Vật tư 2', 7, '2 years', 'VN', 900, ''),
    createData('A00003', 'Vật tư 3', 5, '2 years', 'JP', 500, 'somthing to do'),
  ];

const top100Films = [
  { title: 'The Shawshank Redemption Noaway', year: 1994 },
  { title: 'The Godfather', year: 1972 },
];



class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      submited : false,
    }

    this.backHome = this.backHome.bind(this);

  };


  backHome(event) {
    event.preventDefault();
    this.setState({submited : true});

  }

  render() {

    const { submited } = this.state;

    if (submited === true) {
      return <Redirect to='/user' />
    }

    return (

      <Box>
        <Breadcrumb />
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Grid container >
                <Grid item md={4}>
                  <InputBase
                    readOnly
                    defaultValue="Code Request"
                    inputProps={{ 'aria-label': 'naked' }}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField className={this.props.classes.margin}
                    variant="outlined"                    margin="normal"
                    fullWidth
                    required
                    defaultValue="42071"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Grid container >
                <Grid item md={4}>
                  <InputBase
                    readOnly
                    defaultValue="Customer"
                    inputProps={{ 'aria-label': 'naked' }}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    className={this.props.classes.margin}
                    variant="outlined"
                    fullWidth
                    required
                    defaultValue="Customer"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={6}>
              <Grid container >
                <Grid item md={4}>
                  <InputBase
                    readOnly
                    defaultValue="Name Request"
                    inputProps={{ 'aria-label': 'naked' }}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    variant="outlined"
                    className={this.props.classes.margin}
                    fullWidth
                    required
                    defaultValue="42071"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Grid container  >
                <Grid item md={4}>
                  <InputBase
                    readOnly
                    defaultValue="Create Date"
                    inputProps={{ 'aria-label': 'naked' }}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    variant="outlined"
                    className={this.props.classes.margin}
                    fullWidth
                    required
                    defaultValue="Customer"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={6}>
              <Grid container >
                <Grid item md={4}>
                  <InputBase
                    readOnly
                    defaultValue="Request Type"
                    inputProps={{ 'aria-label': 'naked' }}
                  />
                </Grid>
                <Grid item md={8}>
                  <Autocomplete id="combo-box-demo"
                    className={this.props.classes.margin}
                    options={top100Films}
                    getOptionLabel={option => option.title}
                    style={{ width: 300 }}
                    renderInput={params => (
                      <TextField {...params} label="Combo box" variant="outlined" fullWidth />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Grid container >
                <Grid item md={4}>
                  <InputBase
                    readOnly
                    defaultValue="Complete Date"
                    inputProps={{ 'aria-label': 'naked' }}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    variant="outlined"
                    className={this.props.classes.margin}
                    fullWidth
                    required
                    defaultValue="Customer"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Grid container >
                <Grid item md={4}>
                  <InputBase
                    readOnly
                    defaultValue="Quote Type"
                    inputProps={{ 'aria-label': 'naked' }}
                  />
                </Grid>
                <Grid item md={8}>
                  <Autocomplete id="combo-box-demo"
                    className={this.props.classes.margin}
                    options={top100Films}
                    getOptionLabel={option => option.title}
                    style={{ width: 300 }}
                    renderInput={params => (
                      <TextField {...params} label="Combo box" variant="outlined" fullWidth />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={6}>
              <Grid container >
                <Grid item md={4}>
                  <InputBase
                    readOnly
                    className={this.props.classes.margin}
                    defaultValue="Detail Description"
                    inputProps={{ 'aria-label': 'naked' }}
                  />
                </Grid>
                <Grid item md={8}>
                  <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={6}>
              <Grid container >
                <Grid item md={4}>
                  <InputBase
                    readOnly
                    className={this.props.classes.margin}
                    defaultValue="File attach"
                    inputProps={{ 'aria-label': 'naked' }}
                  />
                </Grid>
                <Grid item md={8}>
                  <Button
                    variant="contained"
                    color="default"
                    className={this.props.classes.button}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Grid container >
                <Grid item md={4}>

                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Grid container >
                <Grid item md={2}>
                  <InputBase
                    readOnly
                    className={this.props.classes.margin}
                    defaultValue="Map Project"
                    inputProps={{ 'aria-label': 'naked' }}
                  />
                </Grid>
                <Grid item md={8}>
                  <Autocomplete id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={option => option.title}
                    style={{ width: 300 }}
                    renderInput={params => (
                      <TextField {...params} label="Combo box" variant="outlined" fullWidth />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Container component="main" maxWidth="xs">
            <Button
              variant="contained"
              fullWidth
              type="submit"
              color="primary"
              onClick={this.backHome}
              className={this.props.classes.submit}
            >
              Create Quotation
            </Button>
          </Container>
        </Box>
          <TableContainer component={Paper}>
                          <Table aria-label="simple table">
                              <TableHead>
                              <TableRow>
                                  <TableCell>DESCRIPTION</TableCell>
                                  <TableCell>NAME</TableCell>
                                  <TableCell align="center">GROUP</TableCell>
                                  <TableCell>ORIGIN</TableCell>
                                  <TableCell align="center">GUARANTEE</TableCell>
                                  <TableCell align="right">PRICE</TableCell>
                                  <TableCell>NOTE</TableCell>
                              </TableRow>
                              </TableHead>
                              <TableBody>
                              {rows.map(row => (
                                  <TableRow key={row.description}>
                                  <TableCell component="th" scope="row">
                                      {row.description}
                                  </TableCell>
                                  <TableCell>{row.name}</TableCell>
                                  <TableCell align="center">{row.group}</TableCell>
                                  <TableCell>{row.origin}</TableCell>
                                  <TableCell align="center">{row.guarantee}</TableCell>
                                  <TableCell align="right">{row.price}</TableCell>
                                  <TableCell>{row.note}</TableCell>
                                  </TableRow>
                              ))}
                              </TableBody>
                          </Table>
          </TableContainer>
      </Box>

    );
  }
}

export default withStyles(styles)(HomePage);