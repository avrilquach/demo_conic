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
import './styles.css';

class Contents extends Component {
  render(){
  const { classes,contents } = this.props;
  return (
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
            <TableCell align="center">Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contents.map((row,index) => (
            <TableRow key={index}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="center">{row.request_id}</TableCell>
              <TableCell align="center">{row.request_name}</TableCell>
              <TableCell align="center">{row.customer}</TableCell>
              <TableCell align="center">{row.create}</TableCell>
              <TableCell align="center">{row.finish}</TableCell>
              <TableCell align="center">
                <IconButton>
                  <InsertDriveFileIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
          }
}

export default withStyles(styles)(Contents)