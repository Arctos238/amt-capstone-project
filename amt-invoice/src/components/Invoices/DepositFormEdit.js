import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from "../BackButton/BackButton";
import BudgetQouteTemplate from './BudgetQouteTemplate';
import ReactToPrint from "react-to-print";
import { Button, Icon } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Table, TextField } from '@mui/material';
import UpdateInvoice from '../CreateInvoice/UpdateInvoice';


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
            overflow: "auto",
            overflowY: "hidden", // hide the vertical scrollbar
            backgroundColor: "white",
            paddingRight: "17px",
            marginRight: "-17px",
        };


        const { items } = this.state;

        console.log(items?.depositForm?.invoiceId);
        return (
            <div style={tabStyle}>
                <div ref={this.props.propsRef}>
                    <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white", backgroundImage: "none" }}>
                        <div style={{ maxWidth: "800px" }}>
                            <div style={{ margin: "0 auto" }}>
                                <h1>AMT Deposit Form</h1>
                            </div>

                            <div style={{ margin: "0 auto" }}>
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Name on Card:</TableCell>
                                                <TableCell>{items?.depositForm?.creditCardInformation?.nameOnCard}</TableCell>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Billing Address:</TableCell>
                                                <TableCell>{items?.depositForm?.billingAddress?.firstLineAddress}</TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>City, Province:</TableCell>
                                                <TableCell>{items?.depositForm?.billingAddress?.city}&nbsp;&nbsp; {items?.depositForm?.billingAddress?.province}</TableCell>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Postal Code:</TableCell>
                                                <TableCell>{items?.depositForm?.billingAddress?.postalCode}</TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Telephone:</TableCell>
                                                <TableCell>{items?.depositForm?.depositFormPhoneNumber}</TableCell>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>
                                                    {items?.depositForm?.deposit ? "Deposit:" : "Invoice number:"}
                                                </TableCell>
                                                <TableCell>{items?.depositForm?.deposit ? "Deposit was choose" : items?.depositForm?.invoiceId}</TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Credit Card Type:</TableCell>
                                                <TableCell>{items?.depositForm?.creditCardInformation?.creditCardType}</TableCell>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Credit Card Number:</TableCell>
                                                <TableCell>{items?.depositForm?.creditCardInformation?.creditCardNumber}</TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Expiration Date:</TableCell>
                                                <TableCell>{items?.depositForm?.creditCardInformation?.expiryDate}</TableCell>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Card Identification Number:</TableCell>
                                                <TableCell>{items?.depositForm?.creditCardInformation?.cvs}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Amount to Charge:</TableCell>
                                                <TableCell>{items?.depositForm?.depositAmount}</TableCell>
                                            </TableRow>
                                        </TableHead>
                                    </Table>
                                </TableContainer>

                                <p>I authorize Alberta Marble & Tile Co. Ltd. to charge the amount listed aboce to the credit card provided herein.
                                    I agree to pay for the purchase in accordance with the issuing bank cardholder agreement</p>
                                <p>
                                    Cardholder -Please Sign and Date
                                </p>

                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Signature:</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Date:</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>Print Name:</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>

                                        </TableHead>
                                    </Table>
                                </TableContainer>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function useNavigation() {
    const navigate = useNavigate();
    return navigate;
}

class EditDeposit extends React.Component {
    deleteFun = async (items) => {
        const navigate = useNavigation();
        const obj = {
            dateCreated: items.dateCreated,
            depositForm: null,
            invoiceId: items.invoiceId,
            invoiceItems: items.invoiceItems,
            invoiceTotalPrice: items.invoiceTotalPrice,
            location: items.location,
            projectId: items.projectId
        }
        await UpdateInvoice(obj);
        navigate('/invoices'); // navigate to new route after deleting the deposit
    }

    constructor(props) {
        super(props);

        this.state = {
            items: {},
            currentDate: new Date().toLocaleDateString(),
            toArray: JSON.parse(localStorage.getItem("clientInfo"))
        };
    }

    componentDidMount() {
        const items = JSON.parse(localStorage.getItem('invoice'));
        if (items) {
            this.setState({ items });
        }
    }

    render() {

        const { items } = this.state;

        return (
            <div style={{ backgroundColor: "white", backgroundImage: "none" }}>
                <BackButton />
                <ComponentToPrint propsRef={(el) => (this.componentRef = el)} />
                <div style={{ textAlign: "center" }}>
                    <ReactToPrint
                        trigger={() => (
                            <Button
                                variant="contained"
                                startIcon={<PrintIcon />}
                                style={{
                                    backgroundColor: "#05516a",
                                    margin: "20px"
                                }}
                            >
                                Print
                            </Button>

                        )}
                        content={() => this.componentRef}
                    />

                </div>
                <Button onClick={() => this.deleteFun(items)}>
                    Delete Deposit
                </Button>

            </div>
        );
    }
}

export default EditDeposit;

