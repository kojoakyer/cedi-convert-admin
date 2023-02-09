import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'


export default function Transactions() {

    const [transaction, setTransaction]= React.useState()

    React.useEffect(()=>{

            const getTransaction =  async ()=>{
              try{
                  
                  const res = await axios.get(`http://localhost:5000/api/transactions`)
      
                  console.log(res.data,'-transaction data-');
                  
                  setTransaction(res.data)
      
              }catch(err){
                  console.log(err);
                  
              }
                  
              }
              getTransaction()
          
          },[])

  return (
    <Box sx={{marginTop:'150px', width: '100%' }}>
      <TableContainer component={Paper} sx={{padding:'0px 0px 50px 0px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell>Transaction ID</TableCell>
            <TableCell align="left">Coin Details</TableCell>
            <TableCell align="left">Amount To Send</TableCell>
            <TableCell align="left">Bank Account</TableCell>
            <TableCell align="left">Account Number</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Mobile Money</TableCell>
            <TableCell align="left">Momo Number</TableCell>
            <TableCell align="left">Momo Reference</TableCell>
     
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction?.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="left">{row.sellingCoin}</TableCell>
              <TableCell align="left">{row.amounttosend}</TableCell>
              <TableCell align="left">{row.bankName}</TableCell>
              <TableCell align="left">{row.accountNumber}</TableCell>
              <TableCell align="left">{new Date(row.createdAt).toLocaleDateString()}</TableCell>
              <TableCell align="left">{row.mobileMoney}</TableCell>
              <TableCell align="left">{row.mobileNumber}</TableCell>
              <TableCell align="left">{row.mobileReference}</TableCell>
              
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}