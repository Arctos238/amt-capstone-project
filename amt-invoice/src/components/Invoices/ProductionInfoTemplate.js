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
    const [invoice, setInvoice] = useState({});
    const [items, setItems] = useState({});

    useEffect(() => {
        let clientInfo = localStorage.getItem("clientInfo");
        let toArray = JSON.parse(clientInfo);
        setToArray(toArray);

        const items = JSON.parse(localStorage.getItem('project'));
        const invoice = JSON.parse(localStorage.getItem('invoice'));
        console.log(invoice)
        setItems(items);
        setInvoice(invoice);
    }, []);


    return (
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white", backgroundImage: "none" }}>
            <div style={{ maxWidth: "850px" }}>
                <h1>AMT</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ border: '1px solid #ccc' }}>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold" }}>Contractor:</TableCell>
                                <TableCell>{toArray?.[0]?.clientName}</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Phone:</TableCell>
                                <TableCell>{toArray?.[0]?.clientContact.personalContactNumber}</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Date:</TableCell>
                                <TableCell>{currentDate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold" }}>Project Name:</TableCell>
                                <TableCell>{items.projectName}</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Sales Staff:</TableCell>
                                <TableCell>

                                    <TextField
                                        id="standard-basic"
                                        sx={{
                                            input: {
                                                color: 'black',
                                                width: '70px',
                                                height: '30px',
                                                fontSize: '12px'
                                            }
                                        }}
                                        type="text"
                                    />
                                </TableCell>

                                <TableCell style={{ fontWeight: "bold" }}>Required Date:</TableCell>
                                <TableCell>
                                    <TextField
                                        id="standard-basic"
                                        sx={{
                                            input: {
                                                color: 'black',
                                                width: '70px',
                                                height: '30px',
                                                fontSize: '11px'
                                            }
                                        }}
                                        type="text"
                                    />
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold" }}>Address:</TableCell>
                                <TableCell>{items.projectAddress?.firstLineAddress}</TableCell>
                                <TableCell />
                                <TableCell />
                                <TableCell style={{ fontWeight: "bold" }}>Phase:</TableCell>
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
                    </Table>
                </TableContainer>
                <br></br>

                <TableContainer component={Paper}>
                    <Table sx={{ border: '1px solid #ccc' }}>
                        {invoice && invoice?.invoiceItems?.length > 0 ? (
                            (invoice.invoiceItems.map((invoiceItem) => (
                                <TableRow>
                                    <TableCell style={{ fontWeight: "bold" }}>Material</TableCell>

                                    <TableCell>{invoice?.invoiceItems[0]?.edgeProfile?.edgeProfileMeasurement} {invoice?.invoiceItems[0]?.material}</TableCell>
                                    <TableCell style={{ fontWeight: "bold" }}>Number of slabs:</TableCell>
                                    <TableCell>
                                        <TextField
                                            id="standard-basic"
                                            sx={{
                                                input: { color: 'black', width: '70px', height: '30px' }
                                            }}
                                            type="text"
                                        />
                                    </TableCell>

                                    <TableCell style={{ fontWeight: "bold" }}>LOC:</TableCell>
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

                            )))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5}>No invoices found.</TableCell>
                            </TableRow>
                        )}
                    </Table>
                </TableContainer>

                <br />
                <br />
                <br />

                <Typography variant="subtitle1" align="center" gutterBottom>
                    Office Notes
                </Typography>

                <TextField

                    fullWidth
                    multiline
                    id="standard-basic"
                    inputProps={{ style: { color: 'black', width: '100%', minHeight: '120px' } }}
                    type="text"
                />


                <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                    <Typography variant="subtitle1" align="center" gutterBottom>
                        Shop Notes
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ border: '1px solid #ccc' }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                            <TableRow>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                </div>



                <div style={{ marginTop: '70px', marginBottom: '20px' }}>
                    <Typography variant="subtitle1" align="center" gutterBottom>
                        Sawyer
                    </Typography>

                    <TableContainer component={Paper}>

                        <Table sx={{ border: '1px solid #ccc' }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                            <TableRow>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                </div>



            </div>
        </div>

    );
}
