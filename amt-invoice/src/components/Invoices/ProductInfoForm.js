import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from "../BackButton/BackButton";
import { useState, useEffect, useRef } from "react";
import { TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Table, TextField } from '@mui/material';
import ReactToPrint from "react-to-print";
import { Button, Icon } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import Typography from "@mui/material/Typography";
import styles from "./ProductInfoForm.module.css"

export default function ProductInfoForm(props) {
  const [additionalNotes, setAdditionalNotes] = useState('');
  

  const handleNotesChange = (event) => {
    setAdditionalNotes(event.target.value);
  }
  
  // Save the additionalNotes state to local storage
  useEffect(() => {
    localStorage.setItem('additionalNotes', additionalNotes);
  }, [additionalNotes]);
  

  const handleAdditionalNotesChange = (event) => {
    setAdditionalNotes(event.target.value);
  };
  
  let componentRef = useRef();
  const [items, setItems] = useState({});
  const [invoiceItems, setInvoiceItems] = useState([]);
  const currentDate = new Date().toLocaleDateString();
  let clientInfo = localStorage.getItem("clientInfo");
  let toArray = JSON.parse(clientInfo);
  console.log(toArray[0]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("invoice"));
    let invoiceItems = [];
    for (let invoice of items.invoices) {
        if(invoice.invoiceItems) {
            for (let item of invoice.invoiceItems) {
                let object = {location: invoice.location, item: item};
                invoiceItems.push(object);
            }
  
        }
    }
    if (items) {
      setItems(items);
      setInvoiceItems(invoiceItems);
    }
  }, []);

  if (items && items.invoices && items.invoices.length > 0) {
    console.log(items.invoices[0].invoiceTotalPrice);
  } else {
    console.log('No invoices found.');
  }
  

  
  

  return (
    <div>
    <BackButton />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "800px" }}>
        

        <div style={{ margin: "0 auto" }}>
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
                <TableCell>Z</TableCell>
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
                    <TableCell>
                        <TextField
                            id="standard-basic"
                            sx={{
                                input: { color: 'black' }
                            }}
                            
                            type="text"
                        />
                    </TableCell>
                    <TableCell style={{fontWeight: "bold"}}>LOC</TableCell>
                    <TableCell>{invoiceItem.location}</TableCell>
                    </TableRow>
                ))}
            </Table>
          </TableContainer>
        </div>
        <br/>
        
        <TableContainer component={Paper}>
        <Table>
        <TableRow>
            <Typography variant="subtitle1" align="center" gutterBottom>
                Shop Notes
            </Typography>

            <TableContainer component={Paper}>
            
            <Table>
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
        </TableRow>
        <TableRow>
            <Typography variant="subtitle1" align="center" gutterBottom>
                Office Notes
            </Typography>

            <TableContainer component={Paper}>
            
            <Table>
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
        </TableRow>
        </Table>
        </TableContainer>    

        <br>
        </br>

        <Typography variant="subtitle1" align="center" gutterBottom>
                Server
        </Typography>

            <TableContainer component={Paper}>
            
            <Table>
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


        <ReactToPrint
          trigger={() => (
            <Button variant="contained" startIcon={<PrintIcon />}  
            style={{ backgroundColor: "#05516a" }}>
              Print
            </Button>
          )}
          content={() => componentRef}
        />

        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        </div>
      </div>
    </div>
    </div>
  );
}

class ComponentToPrint extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        items: {},
        invoiceItems: []
      };
    }

    
  
    componentDidMount() {
      const currentDate = new Date().toLocaleDateString();
      let clientInfo = localStorage.getItem("clientInfo");
      let toArray = JSON.parse(clientInfo);
  
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
      if (items) {
        this.setState({ items, invoiceItems });
      }
  
      this.setState({
        currentDate,
        toArray
      });
    }

    

    
    
  
    render() {
      
      
      const { invoiceItems, items, toArray, currentDate } = this.state;
      const myVariable = "This is dumby data I want to see how long this will go before it gets cut off";
      return (
        <div style={{position: "fixed", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "white"}}>
        <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "white", backgroundImage: "none" }}>
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
                <TableCell>Z</TableCell>
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
        <br/>
        
        <TableContainer component={Paper}>
        <Table>
        <TableRow>
            <Typography variant="subtitle1" align="center" gutterBottom>
                Shop Notes
            </Typography>

            <TableContainer component={Paper}>
            
            <Table>
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
        </TableRow>
        <TableRow>
            <Typography variant="subtitle1" align="center" gutterBottom>
                Office Notes
            </Typography>

            <TableContainer component={Paper}>
            
            <Table>
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
        </TableRow>
        </Table>
        </TableContainer>    

        <br>
        </br>

        <Typography variant="subtitle1" align="center" gutterBottom>
                Server
        </Typography>

            <TableContainer component={Paper}>
            
            <Table>
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
      );
    }
  }
  
  
