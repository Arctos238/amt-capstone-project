import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from "../BackButton/BackButton";
import { useState, useEffect, useRef } from "react";
import { TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Table, TextField } from '@mui/material';
import ReactToPrint from "react-to-print";
import { Button, Icon } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import Typography from "@mui/material/Typography";

export default function BudgetQouteTemplate(){
    let componentRef = useRef();
    const [items, setItems] = useState({});
    const currentDate = new Date().toLocaleDateString();
    let clientInfo = localStorage.getItem("clientInfo");
    let toArray = JSON.parse(clientInfo);
    let invoice = JSON.parse(localStorage.getItem('invoice'));
    console.log(toArray[0]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("invoice"));
        if (items) {
        setItems(items);
        }
    }, []);

    return(
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white", backgroundImage: "none"}}>
            <div style={{ maxWidth: "800px" }}>
        

                <div style={{ margin: "0 auto" }}>
                    <h1>Budget Qoute Only</h1>
                </div>

                <div style={{ margin: "0 auto" }}>
                <p>
                    To template, fabricate, supply and install specified countertops in Calgary, as per the specifications supplied. 
                    Pricing will be affected if additional trips are required. Eliminating one or more areas from this quote may affect pricing.
                    <span style={{ fontWeight: 'bold' }}>A 50% deposit or Purchase Order is required to hold material and book templates</span>
                </p>

                <p>
                    <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Please Note: </span>
                    Prices do not include GST or applicable PST, tile or counter removal, electrical or plumbing, 
                    and are subject to final site measure and material selection.
                    <span style={{ fontWeight: 'bold' }}>Seams to be determined by AMT. Any unsupported overhangs larger than 8"(16" for quartz) needs to have supports. AMT does NOT supply supports.</span>
                </p>

                {invoice && invoice.invoiceItems.length > 0 ? (
                    invoice.invoiceItems.map((item) => (
                        <TableContainer component={Paper} key={item.invoiceItemId}>
                        <Table>
                            <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} style={{ fontWeight: "bold", borderBottom: "2px solid black" }}>
                                {item.location} {item.invoiceItemName}
                                </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                            <TableCell colSpan={2} style={{ fontWeight: "bold", borderBottom: "none" }}>
                            <TextField
                                    id="standard-basic"
                                    sx={{
                                        input: { color: 'black',wide: '200', height: '30px' }
                                    }}
                                    type="text"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2} style={{ fontWeight: "bold", borderBottom: "none" }}>No Allowance for support</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2} style={{ fontWeight: "bold", borderBottom: "none" }}>Please Provide drilling instruction as this is done in the shop</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2} style={{ fontWeight: "bold", borderBottom: "none" }}>
                                Recommend deeper base cabinets to ensure that faucet will have room between the backsplash and wall
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2} style={{ fontWeight: "bold", borderBottom: "2px solid black" }}>{item.edgeProfile.edgeProfileMeasurement} {item.edgeProfile.edgeProfileType} Edge Profile</TableCell>
                                
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold", textAlign: "left", borderRight: "2px solid black" }}>{item.edgeProfile.edgeProfileMeasurement} {item.edgeProfile.edgeProfileCut}</TableCell>
                                <TableCell style={{ fontWeight: "bold", textAlign: "right", borderLeft: "2px solid black" }}>${item.invoiceItemPrice}</TableCell>
                            </TableRow>
                            </TableBody>
                        </Table>
                        </TableContainer>
                    ))
                    ) : (
                    <TableRow>
                        <TableCell colSpan={5}>No invoices found.</TableCell>
                    </TableRow>
                    )}

                    <br/>

                    {items?.invoices?.length > 0 && (
                    <div style={{ maxWidth: "150px", margin: "0 auto" }}>
                        <TableContainer component={Paper}>
                        <TableBody>
                            <TableRow>
                            <TableCell style={{ fontWeight: "bold", textAlign: "center"}}>
                                Total ${items.invoices[0].invoiceTotalPrice}
                            </TableCell>
                            </TableRow>
                        </TableBody>
                        </TableContainer>
                    </div>
                    )}

                <p>
                    Please email/fax the cook-top/range specs prior to template booking and provide 
                    a list of all sinks invluding preferred drilling instructions for faucets including R.O.'s, 
                    soap dispenser locations, etc.. as we predrill at the shop.
                </p>
                
                <p>
                    Please advise if there will be stairs invovled for our installation as 
                    this may affect the pricing & seams if required.
                </p>

                <p>
                    <span style={{ fontWeight: 'bold' }}>
                        Materials that are supplied by other suppliers should be tested for etching/staining as 
                        AMT will not be held responsible for replacing, repairs or service calls.
                    </span>
                </p>
                <p>
                    <span style={{ fontWeight: 'bold' }}>
                        As per the industry standard for all sink cutouts, the standard is 4-5" at the front & 4-5" at the back for 
                        drilling of faucets. AMT reserves the right to position the sink starts within reason if needed.
                    </span>
                </p>

                <p>
                    <span style={{ fontWeight: 'bold' }}>
                       ** All apron front sinks must be installed prior to template **Garburators must be supported 
                       - by others**
                    </span>
                </p>

                <p>
                    Any unsupported overhagns larger than 8" needs to have supports. AMT does not supply supports.
                </p>

                <p>
                    <span style={{ fontWeight: 'bold' }}>
                       Please note we use the manufacturer template for all under-mount sink cut-outs unless otherwise 
                       specified.
                    </span>
                </p>

                <p>
                    <span style={{ fontWeight: 'bold' }}>
                       Extra trips for template or install will be charged accordingly.
                    </span>
                </p>

                <p>
                    If applicable: For warranty on quarts (man-made) prodcuts it is the client's 
                    responsiblity to register on line with the supplier, you will need your invoice from AMT for registering.
                </p>

                <p>
                    Should any clearance measuerments be required for any upper cabinets that may sit on the countertops, please ensure
                    to call for the thickness of the material selected.
                </p>

                <p>
                    <span style={{ fontWeight: 'bold' }}>
                    Color variations, veining, pitting and fissuers are natural characteristics of natural stone. None
                    of these varations are considered deficiencies.
                    </span>
                </p>
                
                </div>
            </div>
        </div>
        
                    
                

           
    );
}