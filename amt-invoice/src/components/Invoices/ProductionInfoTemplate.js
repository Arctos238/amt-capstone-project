import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from "../BackButton/BackButton";
import { TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Table, TextField } from '@mui/material';
import ReactToPrint from "react-to-print";
import { Button, Icon } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import Typography from "@mui/material/Typography";

export default function ProductionTemplate() {
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const [toArray, setToArray] = useState([]);
  const [items, setItems] = useState({});
  const [invoiceItems, setInvoiceItems] = useState([]);

  useEffect(() => {
    let clientInfo = localStorage.getItem("clientInfo");
    let toArray = JSON.parse(clientInfo);
    setToArray(toArray);

    const items = JSON.parse(localStorage.getItem('invoice'));
    let invoiceItems = [];
    for (let invoice of items.invoices) {
      if(invoice.invoiceItems) {
          for (let item of invoice.invoiceItems) {
              let object = {location: invoice.location, item: item};
              invoiceItems.push(object);
          }
      }
    }
    setItems(items);
    setInvoiceItems(invoiceItems);
  }, []);

  console.log(items);
  return (
    <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white", backgroundImage: "none"}}>
    <div style={{ maxWidth: "800px" }}>
    <h1>AMT</h1>
          <TableContainer component={Paper}>
            <TableBody>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Contractor</TableCell>
                <TableCell>{toArray?.[0]?.clientName}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Phone</TableCell>
                <TableCell>{toArray?.[0]?.clientContact.personalContactNumber}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Date</TableCell>
                <TableCell>{currentDate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Project Name</TableCell>
                <TableCell>{items.projectName}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Sales Staff</TableCell>
                <TableCell>{items.employeeName}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Required</TableCell>
                <TableCell>{currentDate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Address</TableCell>
                <TableCell>{items.projectAddress?.firstLineAddress}</TableCell>
                <TableCell/>
                <TableCell/>
                <TableCell style={{ fontWeight: "bold" }}>Phase</TableCell>
                <TableCell>
                <TextField
                  id="standard-basic"
                  sx={{
                    input: { color: 'black', width: '70px', height: '30px' }
                  }}
                  type="text"
                />
              </TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>
          <br></br>
          
          <TableContainer component={Paper}>
            <Table>
                {invoiceItems.map(invoiceItem => (
                     <TableRow>
                    <TableCell style={{fontWeight: "bold"}}>Material</TableCell>
                    <TableCell>{invoiceItem.item.invoiceItemName}</TableCell>
                    <TableCell style={{fontWeight: "bold"}}>Number of slabs</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell style={{fontWeight: "bold"}}>LOC</TableCell>
                    <TableCell>{invoiceItem.location}</TableCell>
                    </TableRow>
                ))}
            </Table>
          </TableContainer>
    </div>
    </div>
    
  );
}
