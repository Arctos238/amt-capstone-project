import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from "../BackButton/BackButton";
import { useState, useEffect, useRef } from "react";
import { TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Table, TextField } from '@mui/material';
import ReactToPrint from "react-to-print";
import { Button, Icon } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import Typography from "@mui/material/Typography";
import BudgetQouteTemplate from './BudgetQouteTemplate';

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
        const tabStyle = {
            overflow: "scroll",
            backgroundColor: "white" // set background color to white
          };
        
        const { items } = this.state;

      return (
        <div style={tabStyle}>
        <div ref={this.props.propsRef}>
            
            <BudgetQouteTemplate/>
        </div>
      </div>
      );
    }
  }

class BudgetQoute extends React.Component{
    render(){
    return(
        <div style={{backgroundColor: "white", backgroundImage: "none"}}>
            <BackButton/>
        <ComponentToPrint propsRef={(el) => (this.componentRef = el)} />
        <div style={{textAlign: "center"}}>
        <ReactToPrint
          trigger={() => (
            <Button variant="contained" startIcon={<PrintIcon />}
            style={{ backgroundColor: "#05516a" }}>
              Print
            </Button>
          )}
          content={() => this.componentRef}
        />
        </div>
        
      </div>
    );
    }
}

export default BudgetQoute;
