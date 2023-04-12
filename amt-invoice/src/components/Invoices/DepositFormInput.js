import React from 'react';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input'
import { useState, useEffect, useRef } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import classes from "../UI/CardWithRadius.module.css";
import styles from "../Create_client/CreateClientDetails.module.css"
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { Button, Icon } from '@mui/material';
import { GetInvoiceById } from '../../services/InvoiceServices';
import { UpdateInvoice } from '../../services/InvoiceServices';


export default function DepositInput(props) {
  const [value, setValue] = React.useState("+1")
  const [invoiceInfo, setInvoiceInfo] = useState([{}]);
  const [isDepositAdded, setIsDepositAdded] = useState(false);
  const [isDepositExist, setIsDepositExist] = useState(false);
  const invoiceId = props.selectedInvoiceId;

  const nameOnCardRef = useRef();
  const billingAddressRef = useRef();
  const cityRef = useRef();
  const provinceRef = useRef();
  const postalCodeRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const depositRef = useRef('');
  const creditCardTypeRef = useRef('');
  const creditCardNumberRef = useRef();
  const expiryDateRef = useRef();
  const cvsRef = useRef();
  const depositAmountRef = useRef();



  const fetchInvoiceInfo = async () => {
    const data = await GetInvoiceById(invoiceId);
    setInvoiceInfo(data);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDepositAdded(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isDepositAdded]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDepositExist(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isDepositExist]);

  useEffect(() => {
    fetchInvoiceInfo();
  }, []);

  const handleChange = (newValue) => {
    setValue(newValue);
  }

  const handleDepositType = event => {
    depositRef.current = event.target.value;
    console.log(depositRef.current);
  }

  const handleCardTypeChange = (event) => {
    creditCardTypeRef.current = event.target.value;
    console.log(creditCardTypeRef.current);
  }

  const handleSaveDeposit = async () => {
    const nameOnCard = nameOnCardRef.current.value;
    const billingAddress = billingAddressRef.current.value;
    const city = cityRef.current.value;
    const province = provinceRef.current.value;
    const postalCode = postalCodeRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const deposit = depositRef.current;
    const creditCardType = creditCardTypeRef.current;
    const creditCardNumber = creditCardNumberRef.current.value;
    const expiryDate = expiryDateRef.current.value;
    const cvs = cvsRef.current.value;
    const depositAmount = depositAmountRef.current.value;

    const obj = {
      invoiceId: invoiceInfo.invoiceId,
      invoiceTotalPrice: invoiceInfo.invoiceTotalPrice,
      location: invoiceInfo.location,
      dateCreated: invoiceInfo.dateCreated,
      invoiceItems: invoiceInfo.invoiceItems,
      depositForm: {
        depositAmount,
        billingAddress: {
          firstLineAddress: billingAddress,
          secondLineAddress: "",
          postalCode,
          city,
          province
        },
        creditCardInformation: {
          nameOnCard,
          creditCardNumber,
          expiryDate,
          cvs,
          creditCardType
        },
        depositFormPhoneNumber: phone,
        depositEmailAddress: email,
        deposit
      },
      project: {
        projectId: invoiceInfo.projectId
      }
    }

    if (invoiceInfo.depositForm === null) {
      const data = await UpdateInvoice(obj);
      console.log(JSON.stringify(obj));
      if (data != null) {
        setIsDepositAdded(true);
      }
    } else {
      setIsDepositExist(true);
    }
  }

  return (
    <div>
      {isDepositExist ? (
        <div className={styles.errorBox}>
          <Stack sx={{ width: 1100, margin: "auto" }} spacing={2}>
            <Alert severity="error">
              A deposit form was already created.
            </Alert>
          </Stack>
        </div>
      ) : (
        <></>
      )}
      {isDepositAdded ? (
        <div className={styles.errorBox}>
          <Stack sx={{ width: 1100, margin: "auto" }} spacing={2}>
            <Alert severity="success">
              Deposit Created!{" "}
              <Link to={"/invoices"}>Go back to Invoice Page</Link>
            </Alert>
          </Stack>
        </div>
      ) : (
        <></>
      )}
      <h1>Deposit</h1>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <TextField
            sx={{
              width: "100%",
              color: "white",
              "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              },
            }}
            id="standard-basic"
            label="Name on Card"
            placeholder="Chandler Bing"
            variant="standard"
            type="text"
            inputRef={nameOnCardRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline,
              },
            }}
          />
        </CardWithRadius>

        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <TextField
            sx={{
              width: "100%",
              color: "white",
              "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              },
            }}
            id="standard-basic"
            label="Billing Address"
            placeholder="2020 Pegasus Rd"
            variant="standard"
            type="text"
            inputRef={billingAddressRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline,
              },
            }}
          />
        </CardWithRadius>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <TextField
            sx={{
              width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              },
            }}
            id="standard-basic"
            label="City"
            placeholder="Calgary"
            variant="standard"
            type="text"
            inputRef={cityRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline,
              },
            }}
          />
        </CardWithRadius>

        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <TextField
            sx={{
              width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              },
            }}
            id="standard-basic"
            label="Province"
            placeholder="AB"
            variant="standard"
            type="text"
            inputRef={provinceRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline,
              },
            }}
          />
        </CardWithRadius>


      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <TextField
            sx={{
              width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              },
            }}
            id="standard-basic"
            label="Postal Code"
            placeholder="T2E 8K7"
            variant="standard"
            type="text"
            inputRef={postalCodeRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline,
              },

            }}
          />
        </CardWithRadius>

        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <TextField
            sx={{
              width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              },
            }}
            id="standard-basic"
            label="Email"
            placeholder="TotalyRealEmail.com"
            variant="standard"
            type="text"
            inputRef={emailRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline,
              },
            }}
          />
        </CardWithRadius>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>

        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <MuiTelInput
            label="Phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            inputRef={phoneRef}
            type="tel"
            value={value} onChange={handleChange}
          />
        </CardWithRadius>
      </div>
      {/* DEPOSIT OR INVOICE NUMBER */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        <CardWithRadius className={classes.blueCard}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="name"
              onChange={handleDepositType}
            >
              <FormControlLabel
                value="true"
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#fabd44",
                      },
                    }}
                  />
                }
                label="Deposit"
              />
              <FormControlLabel
                value="false"
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#fabd44",
                      },
                    }}
                  />
                }

                label="Invoice Number"
              />
            </RadioGroup>
          </FormControl>
        </CardWithRadius>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        <CardWithRadius className={classes.blueCard}>
          <FormControl>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="name"
              onChange={handleCardTypeChange}
            >
              <FormControlLabel
                value="Visa"
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#fabd44",
                      },
                    }}
                  />
                }

                label="Visa"
              />
              <FormControlLabel
                value="Master Card"
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#fabd44",
                      },
                    }}
                  />
                }

                label="Master Card"
              />

              <FormControlLabel
                value="AmEx"
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#fabd44",
                      },
                    }}
                  />
                }

                label="AmEx"
              />
            </RadioGroup>
          </FormControl>
        </CardWithRadius>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <TextField
            sx={{
              width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              },
            }}
            id="standard-basic"
            label="Credit Card Number"
            placeholder="1234 5678 1234 5678"
            variant="standard"
            type="text"
            inputRef={creditCardNumberRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline,
              },
            }}
          />
        </CardWithRadius>

        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <TextField
            sx={{
              width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              },
            }}
            id="standard-basic"
            label="Expiration Date"
            placeholder="0/42"
            variant="standard"
            type="text"
            inputRef={expiryDateRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline,
              },
            }}
          />
        </CardWithRadius>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <TextField
            sx={{
              width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              },
            }}
            id="standard-basic"
            label="Card Identification Number"
            placeholder="3 digits on back of card"
            variant="standard"
            type="text"
            inputRef={cvsRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline,
              },
            }}
          />
        </CardWithRadius>

        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <TextField
            sx={{
              width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              },
            }}
            startAdornment={<label>$</label>}
            id="standard-basic"
            label="Amount to Charge"
            placeholder="$5"
            variant="standard"
            type="text"
            inputRef={depositAmountRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline,
              },
            }}
          />
        </CardWithRadius>
      </div>

      <div style={{ display: "flex", justifyContent: "center", margin: "0 auto", maxWidth: "800px", padding: "32px 0 64px 0" }}>
        <Button variant="contained" style={{ backgroundColor: "#fabd44" }} onClick={handleSaveDeposit}>
          Save Deposit
        </Button>
      </div>


    </div>


  );
}

