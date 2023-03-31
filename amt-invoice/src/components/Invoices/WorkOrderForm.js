import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from "../BackButton/BackButton";
import { useState, useEffect } from "react";
import { TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const WorkOrderForm = (props) =>{
    const [items, setItems] = useState({});
    const currentDate = new Date().toLocaleDateString();

    let clientInfo = localStorage.getItem("clientInfo");
    let toArray = JSON.parse(clientInfo);
    console.log(toArray[0]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('invoice'));
        if (items) {
         setItems(items);
        }
      }, []);

     console.log(items.invoices);

    return(
        <div>
        <BackButton/>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <TableContainer component={Paper}>
            <TableBody>
            <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Contractor</TableCell>
                <TableCell>{toArray[0].clientName}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Phone</TableCell>
                <TableCell>{toArray[0].clientContact.personalContactNumber}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Date</TableCell>
                <TableCell>{currentDate}</TableCell>
            </TableRow> 
            <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Project</TableCell>
                <TableCell>{items.projectName}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Order NO</TableCell>
                <TableCell></TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Page NO</TableCell>
                
            </TableRow> 
            <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Address</TableCell>
                <TableCell>{items.projectAddress?.firstLineAddress}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Postal Code</TableCell>
                <TableCell>{items.projectAddress?.postalCode}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Required</TableCell>
                <TableCell>{currentDate}</TableCell>
            </TableRow> 
            <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Material</TableCell>
                <TableCell>See List</TableCell>
                <TableCell style={{ fontWeight: "bold" }}></TableCell>
                <TableCell></TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Invoice #</TableCell>
                <TableCell>{items.invoices?.[0]?.invoiceId}</TableCell>
            </TableRow> 
            </TableBody>
        </TableContainer>
        
        <TableContainer>

        </TableContainer>
        </div>



    </div>
    );
}

export default WorkOrderForm;
