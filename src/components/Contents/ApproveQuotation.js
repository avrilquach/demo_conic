import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import IconButton from '@material-ui/core/IconButton';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import MuiDialogActions from '@material-ui/core/DialogActions';

import './styles.css';

function createData(description, name, group, origin, guarantee, price, note) {
    return { description, name, group, origin, guarantee, price, note };
  }

class Contents extends Component {
    constructor(props)
    {
        super(props);
        this.state = ({
            open: false
        })
    }
    render() {
        const { classes, contents } = this.props;
        const rows = [
            createData('A00001', 'Vật tư 1', 3, '2 years', 'VN', 300, 'somthing'),
            createData('A00002', 'Vật tư 2', 7, '2 years', 'VN', 900, ''),
            createData('A00003', 'Vật tư 3', 5, '2 years', 'JP', 500, 'somthing to do'),
          ];

        const top100Films = [
            { title: 'The Shawshank Redemption Noaway', year: 1994 },
            { title: 'The Godfather', year: 1972 },
        ];

        const DialogActions = withStyles(theme => ({
            root: {
              margin: 0,
              padding: theme.spacing(1),
            },
          }))(MuiDialogActions);

        return (
            <Box>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead >
                        <TableRow className="tablehead">
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Request Id</TableCell>
                            <TableCell align="center">Request Name</TableCell>
                            <TableCell align="center">Customer</TableCell>
                            <TableCell align="center">Create Date</TableCell>
                            <TableCell align="center">Finish Date</TableCell>
                            <TableCell align="center">State</TableCell>
                            <TableCell align="center">Detail</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contents.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="center">{row.request_id}</TableCell>
                                <TableCell align="center">{row.request_name}</TableCell>
                                <TableCell align="center">{row.customer}</TableCell>
                                <TableCell align="center">{row.create}</TableCell>
                                <TableCell align="center">{row.finish}</TableCell>
                                <TableCell align="center">{row.state}</TableCell>
                                <TableCell align="center">
                                    <IconButton>
                                            <InsertDriveFileIcon onClick={this.handleCLickOpen} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog onClose={this.handleCLickClose} aria-labelledby="customized-dialog-title" open={this.state.open} fullWidth={true} maxWidth={false}>
                <DialogTitle id="customized-dialog-title" onClose={this.handleCLickClose}>
                Detail Quatation
                </DialogTitle>
                <DialogContent dividers>
                    <Box>
                    <Box p={2}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                        <Grid container >
                            <Grid item md={4}>
                            <InputBase
                                readOnly
                                defaultValue="Request ID"
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                            </Grid>
                            <Grid item md={6}>
                            <TextField 
                                variant="outlined"
                                margin="normal"
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
                                defaultValue="Create Date"
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                            </Grid>
                            <Grid item md={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                defaultValue=""
                            />
                            </Grid>
                        </Grid>
                        </Grid>

                        <Grid item md={6}>
                        <Grid container >
                            <Grid item md={4}>
                            <InputBase
                                readOnly
                                defaultValue="Request Name"
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                            </Grid>
                            <Grid item md={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
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
                                defaultValue="Complete Date"
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                            </Grid>
                            <Grid item md={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                defaultValue=""
                            />
                            </Grid>
                        </Grid>
                        </Grid>

                        <Grid item md={6}>
                        <Grid container  >
                            <Grid item md={4}>
                            <InputBase
                                readOnly
                                defaultValue="Customer"
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                            </Grid>
                            <Grid item md={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                defaultValue=""
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
                                options={top100Films}
                                getOptionLabel={option => option.title}
                                style={{ width: 276 }}
                                renderInput={params => (
                                <TextField {...params} label="Combo box" variant="outlined" fullWidth />
                                )}
                            />
                            </Grid>
                        </Grid>
                        </Grid>

                        <Grid item md={6}>
                        <Grid container  >
                            <Grid item md={4}>
                            <InputBase
                                readOnly
                                defaultValue="Request Creator"
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                            </Grid>
                            <Grid item md={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                defaultValue=""
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
                                options={top100Films}
                                getOptionLabel={option => option.title}
                                style={{ width: 276 }}
                                renderInput={params => (
                                <TextField {...params} label="Combo box" variant="outlined" fullWidth />
                                )}
                            />
                            </Grid>
                        </Grid>
                        </Grid>

                        <Grid item md={6}>
                        <Grid container  >
                            <Grid item md={4}>
                            <InputBase
                                readOnly
                                defaultValue="Price"
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                            </Grid>
                            <Grid item md={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                defaultValue=""
                            />
                            </Grid>
                        </Grid>
                        </Grid>

                        <Grid item md={6}>
                        <Grid container  >
                            <Grid item md={4}>
                            <InputBase
                                readOnly
                                defaultValue="Quantity"
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                            </Grid>
                            <Grid item md={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                defaultValue=""
                            />
                            </Grid>
                        </Grid>
                        </Grid>

                        <Grid item md={6}>
                        <Grid container  >
                            <Grid item md={4}>
                            <InputBase
                                readOnly
                                defaultValue="Reject Reason"
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                            </Grid>
                            <Grid item md={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                required
                                defaultValue=""
                            />
                            </Grid>
                        </Grid>
                        </Grid>

                        <Grid item md={6}>
                        <Grid container >
                            <Grid item md={4}>
                            <InputBase
                                readOnly
                                defaultValue="File attach"
                                inputProps={{ 'aria-label': 'naked' }}
                            />
                            </Grid>
                            <Grid item md={8}>
                            <Button
                                variant="contained"
                                color="default"
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
                                    defaultValue="Detail Description"
                                    inputProps={{ 'aria-label': 'naked' }}
                                />
                                </Grid>
                                <Grid item md={9}>
                                    <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" style={{width: "100%"}} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
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
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={this.handleCLickClose} variant="contained" color="primary">
                    Approve
                </Button>
                <Button autoFocus onClick={this.handleCLickClose} variant="contained" color="primary">
                    Reject
                </Button>
                </DialogActions>
            </Dialog>
            </Box>
        );
    }
    handleCLickOpen = () => {
       this.setState({
           open: true
       })
    }
    handleCLickClose = () => {
        this.setState({
            open: false
        })
     }
}

export default withStyles(styles)(Contents)