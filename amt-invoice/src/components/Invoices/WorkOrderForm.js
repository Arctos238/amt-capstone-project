import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from "../BackButton/BackButton";
import { useState, useEffect, useRef } from "react";
import { TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Table, TextField } from '@mui/material';
import ReactToPrint from "react-to-print";
import { Button, Icon } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import Typography from "@mui/material/Typography";
import styles from "./WorkOrderForm.module.css"

export default function WorkOrderForm(props) {
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
                <TableCell style={{ fontWeight: "bold" }}>Project</TableCell>
                <TableCell>{items.projectName}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Order NO</TableCell>
                <TableCell></TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Page NO</TableCell>
                <TableCell/>
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
                <TableCell style={{ fontWeight: "bold" }}>Invoice #</TableCell>
                <TableCell>{items.invoices?.[0]?.invoiceId}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Invoiced</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>

          <br></br>
          
          <TableContainer component={Paper}>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Production Ticket Details
          </Typography>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}}>Name</TableCell>
              <TableCell>{toArray[0]?.clientName}</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Address</TableCell>
              <TableCell>{items.projectAddress?.firstLineAddress}</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Phone</TableCell>
              <TableCell>{toArray[0]?.clientContact?.personalContactNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}}>Price</TableCell>
              <TableCell>{items.invoices?.[0]?.invoiceTotalPrice} (+G.S.T.)</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Deposit</TableCell>
              <TableCell></TableCell>
              <TableCell style={{fontWeight: "bold"}}>Balance Due</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableContainer>


          <br/>
          <br/>

          <TableContainer component={Paper}>
          <Table>
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
                  <TableCell style={{ borderRight: "1px solid #ddd"}}></TableCell>
                  <TableCell style={{ borderRight: "1px solid #ddd"}}></TableCell>
                  <TableCell style={{ borderRight: "1px solid #ddd"}}>{item.invoiceItemArea}</TableCell>
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
        </div>
        <br/>
        <br/>
        

        <Typography variant="subtitle1" align="center" gutterBottom>
            Notes
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

        <br>
        </br>

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
        items: {}
      };
    }

    
  
    componentDidMount() {
      const currentDate = new Date().toLocaleDateString();
      let clientInfo = localStorage.getItem("clientInfo");
      let toArray = JSON.parse(clientInfo);
  
      const items = JSON.parse(localStorage.getItem('invoice'));
      if (items) {
        this.setState({ items });
      }
  
      this.setState({
        currentDate,
        toArray
      });
    }

    

    
    
  
    render() {
      
      
      const { items, toArray, currentDate } = this.state;
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
                <TableCell>{toArray?.[0]?.clientContact?.personalContactNumber}</TableCell>
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
                <TableCell style={{ fontWeight: "bold" }}>Invoice #</TableCell>
                <TableCell>{items.invoices?.[0]?.invoiceId}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Invoiced</TableCell>
                <TableCell></TableCell>
            </TableRow> 
            </TableBody>
          </TableContainer>

          <br/>
          <br/>

          <Typography variant="subtitle1" align="center" gutterBottom>
            Production Ticket Details
          </Typography>
          <TableContainer component={Paper}>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}}>Name</TableCell>
              <TableCell>{toArray?.[0]?.clientName}</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Address</TableCell>
              <TableCell>{items.projectAddress?.firstLineAddress}</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Phone</TableCell>
              <TableCell>{toArray?.[0]?.clientContact?.personalContactNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}}>Price</TableCell>
              <TableCell>{items.invoices?.[0]?.invoiceTotalPrice} (+G.S.T.)</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Deposit</TableCell>
              <TableCell></TableCell>
              <TableCell style={{fontWeight: "bold"}}>Balance Due</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableContainer>


          <br/>
          <br/>
          

          <TableContainer component={Paper}>
          <Table>
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
                  <TableCell style={{ borderRight: "1px solid #ddd"}}></TableCell>
                  <TableCell style={{ borderRight: "1px solid #ddd"}}></TableCell>
                  <TableCell style={{ borderRight: "1px solid #ddd"}}>{item.invoiceItemArea}</TableCell>
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

        <br/>
        <br/>
        <Typography variant="subtitle1" align="center" gutterBottom>
            Notes
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
              
          </Table>
        </TableContainer>



        
        </div>
        </div>
      );
    }
  }
  
  
