import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from "../BackButton/BackButton";
import { useState, useEffect, useRef } from "react";
import { TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Table, TextField } from '@mui/material';
import ReactToPrint from "react-to-print";
import { Button, Icon } from '@mui/material';
import Typography from "@mui/material/Typography";
import DepositInput from './DepositFormInput';

export default function Deposit(){
    return(
        <div>
            <BackButton />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: "800px" }}>
                    <div style={{ margin: "0 auto" }}>
                        <DepositInput></DepositInput>
                    </div>
                </div>
            </div>
        </div>
        
    );
}