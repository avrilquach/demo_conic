import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import './styles.css';

//id, process, requestId, requestName, price, createDate, finishDate, approveDate
function createData(id, process, requestId, requestName, price, createDate, finishDate, approveDate) {
  return {
    id,
    process,
    requestId,
    requestName,
    price,
    createDate,
    finishDate,
    approveDate
  };
}

const rows = [
  createData(1, 'TEST', 6.0, 'Request test', 4.0, '2019/11/11', '2019/11/11', '2019/11/11'),
  createData(2, 'TEST', 6.0, 'Request test', 4.0, '2019/11/11', '2019/11/11', '2019/11/11'),
  createData(3, 'TEST', 6.0, 'Request test', 4.0, '2019/11/11', '2019/11/11', '2019/11/11'),
  createData(4, 'TEST', 6.0, 'Request test', 4.0, '2019/11/11', '2019/11/11', '2019/11/11'),
  createData(5, 'TEST', 6.0, 'Request test', 4.0, '2019/11/11', '2019/11/11', '2019/11/11'),
];

function ListHistoryGateway(props) {
    const {classes} = props;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">PROCESS</TableCell>
            <TableCell align="right">REQUSET&nbsp;ID</TableCell>
            <TableCell align="right">REQUEST&nbsp;NAME</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">CREATE&nbsp;DATE</TableCell>
            <TableCell align="right">FINISH&nbsp;DATE</TableCell>
            <TableCell align="right">APPROVE&nbsp;DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
                {/* <TableCell align="left">
                <IconButton>
                    <InsertDriveFileIcon />
                </IconButton>
                </TableCell> */}
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="right">{row.process}</TableCell>
              <TableCell align="right">{row.requestId}</TableCell>
              <TableCell align="right">{row.requestName}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.createDate}</TableCell>
              <TableCell align="right">{row.finishDate}</TableCell>
              <TableCell align="right">{row.approveDate}</TableCell>
              {/* <TableCell align="right">
                <IconButton>
                    <CreateIcon />
                </IconButton>
                <IconButton>
                    <HighlightOffIcon />
                </IconButton>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default withStyles(styles)(ListHistoryGateway)