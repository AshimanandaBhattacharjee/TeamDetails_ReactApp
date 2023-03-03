import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


function createData(name, title, pic, hobbies) {
  return { name, title, pic, hobbies};
}

export default function BasicTable({}) {
  // const [formValues, setFormValues] = useState();
  // console.log(formValues);

const rows = [
  createData('Ashimananda Bhattacharjee', 'Intern', '(to be uploaded)', 'Music, Table-Tennis'),
  createData('Hirak', 'GET', '(to be uploaded)', ' '),
  createData('','','',''),
];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell align="right">Employee Title</TableCell>
            <TableCell align="right">Employee pic</TableCell>
            <TableCell align="right">Employee Hobbies</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.pic}</TableCell>
              <TableCell align="right">{row.hobbies}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}