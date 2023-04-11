import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from "../BackButton/BackButton";
import { useState, useEffect, useRef } from "react";
import { TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Table, TextField } from '@mui/material';
import ReactToPrint from "react-to-print";
import { Button, Icon } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import Typography from "@mui/material/Typography";

export default function WorkOrderTemplate() {
    let componentRef = useRef();
    const [items, setItems] = useState({});
    const currentDate = new Date().toLocaleDateString();
    let clientInfo = localStorage.getItem("clientInfo");
    let toArray = JSON.parse(clientInfo);
    console.log(toArray[0]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("invoice"));
        if (items) {
            setItems(items);
        }
    }, []);

    if (items && items.invoices && items.invoices.length > 0) {
        console.log(items.invoices[0].invoiceItems[0]);
    } else {
        console.log('No invoices found.');
    }




    return (
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white", backgroundImage: "none" }}>
            <div style={{ maxWidth: "800px" }}>
                <h1>AMT</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ border: '1px solid #ccc' }}>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold" }}>Contractor:</TableCell>
                                <TableCell>{toArray?.[0]?.clientName}</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Phone:</TableCell>
                                <TableCell>{toArray?.[0]?.clientContact?.personalContactNumber}</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Date:</TableCell>
                                <TableCell>{currentDate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold" }}>Project:</TableCell>
                                <TableCell>{items.projectName}</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Order NO:</TableCell>
                                <TableCell>
                                    <TextField
                                        id="standard-basic"
                                        sx={{
                                            input: { color: 'black', width: '70px', height: '30px' }
                                        }}
                                        type="text" />
                                </TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Page NO:</TableCell>
                                <TableCell>
                                    <TextField
                                        id="standard-basic"
                                        sx={{
                                            input: { color: 'black', width: '70px', height: '30px' }
                                        }}
                                        type="text" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold" }}>Address:</TableCell>
                                <TableCell>{items.projectAddress?.firstLineAddress}</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Postal Code:</TableCell>
                                <TableCell>{items.projectAddress?.postalCode}</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Required Date:</TableCell>
                                <TableCell>
                                    <TextField
                                        id="standard-basic"
                                        sx={{
                                            input: { color: 'black', width: '70px', height: '30px' }
                                        }}
                                        type="text" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold" }}>Material:</TableCell>
                                <TableCell>See List</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Invoice #:</TableCell>
                                <TableCell>{items.invoices?.[0]?.invoiceId}</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Invoiced:</TableCell>
                                <TableCell>
                                    <TextField
                                        id="standard-basic"
                                        sx={{
                                            input: { color: 'black', width: '70px', height: '30px' }
                                        }}
                                        type="text" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <br />
                <br />

                <Typography variant="subtitle1" align="center" gutterBottom>
                    Production Ticket Details
                </Typography>
                <TableContainer component={Paper} >
                    <Table sx={{ border: '1px solid #ccc' }}>
                        <TableRow>
                            <TableCell style={{ fontWeight: "bold" }}>Name:</TableCell>
                            <TableCell>{toArray?.[0]?.clientName}</TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>Address:</TableCell>
                            <TableCell>{items.projectAddress?.firstLineAddress}</TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>Phone:</TableCell>
                            <TableCell>{toArray?.[0]?.clientContact?.personalContactNumber}</TableCell>


                        </TableRow>
                        <TableRow>
                            <TableCell style={{ fontWeight: "bold" }}>Price:</TableCell>
                            <TableCell>{items.invoices?.[0]?.invoiceTotalPrice} (+G.S.T.)</TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>Deposit:</TableCell>
                            <TableCell>
                                <TextField
                                    id="standard-basic"
                                    sx={{
                                        input: { color: 'black', width: '70px', height: '30px' }
                                    }}
                                    type="text" />
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>Balance Due:</TableCell>
                            <TableCell>
                                <TextField
                                    id="standard-basic"
                                    sx={{
                                        input: { color: 'black', width: '70px', height: '30px' }
                                    }}
                                    type="text" />
                            </TableCell>

                        </TableRow>
                    </Table>
                </TableContainer>




                <br />
                <br />


                <TableContainer component={Paper}>
                    <Table sx={{ border: '1px solid #ccc' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ borderRight: "1px solid #ddd", fontWeight: "bold" }}>PC. NO.</TableCell>
                                <TableCell style={{ borderRight: "1px solid #ddd", fontWeight: "bold" }}>NO. OF PCS</TableCell>
                                <TableCell style={{ borderRight: "1px solid #ddd", fontWeight: "bold" }}>SIZE</TableCell>
                                <TableCell style={{ borderRight: "1px solid #ddd", fontWeight: "bold" }}>UNIT</TableCell>
                                <TableCell style={{ borderRight: "1px solid #ddd", fontWeight: "bold" }}>EDGE NAME.</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>M2/SQ. FT.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items && items.invoices && items.invoices.length > 0 && items.invoices[0].invoiceItems.length > 0 ? (
                                items.invoices[0].invoiceItems.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell style={{ borderRight: "1px solid #ddd" }}></TableCell>
                                        <TableCell style={{ borderRight: "1px solid #ddd" }}></TableCell>
                                        <TableCell style={{ borderRight: "1px solid #ddd" }}>{item.invoiceItemArea}</TableCell>
                                        <TableCell style={{ borderRight: "1px solid #ddd", fontWeight: "bold" }}>{item.invoiceItemMeasurement}</TableCell>
                                        <TableCell style={{ borderRight: "1px solid #ddd", fontWeight: "bold" }}>{item.edgeProfile.edgeProfileCut}</TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}>{item.invoiceItemMeasurement}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5}>No invoices found.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>

                    </Table>
                </TableContainer>

                <br />
                <br />
                <Typography variant="subtitle1" align="center" gutterBottom>
                    Notes
                </Typography>

                <TextField
                    fullWidth
                    multiline
                    id="standard-basic"
                    inputProps={{ style: { color: 'black', width: '100%', minHeight: '120px' } }}
                    type="text"
                />




            </div>
        </div>);
}