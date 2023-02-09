import React, { useState, useRef } from "react";

import CreateInvoiceItem from "./CreateInvoiceItem";
import EdgeProfile from "./EdgeProfile";
import Button from "../UI/Button";
import CreateInvoiceNotes from "./CreateInvoiceNotes";

import { CreateNewInvoiceItem } from "../../services/InvoiceItemServices";

import styles from "./CreateInvoice.module.css";

const standardProfiles = [
  { edgeProfileCut: "Minimal Eased" },
  { edgeProfileCut: "Eased" },
  { edgeProfileCut: "Heavy Eased" },
  { edgeProfileCut: "Bevel" },
  { edgeProfileCut: "Quarter Round" },
  { edgeProfileCut: "Half Round" },
];

const upgradeProfiles = [
  { edgeProfileCut: "Bullnose" },
  { edgeProfileCut: "Ogee" },
  { edgeProfileCut: "Triple Bullnose" },
  { edgeProfileCut: "Triple Stepped Bullnose" },
  { edgeProfileCut: "Rock Pitched" },
  { edgeProfileCut: "Eased with Laminate" },
  { edgeProfileCut: "Quarter Round with Laminate" },
  { edgeProfileCut: "Half Round with Laminate" },
  { edgeProfileCut: "Ogee with Laminate" },
  { edgeProfileCut: "Mitered Edge" },
  { edgeProfileCut: "Double Bevel with Laminate" },
  { edgeProfileCut: "Double Quarter Round with Laminate" },
  { edgeProfileCut: "Double Bullnose with Laminate" },
  { edgeProfileCut: "Stepped Ogee with Eased" },
  { edgeProfileCut: "Double Stepped with Ogee" },
];

const CreateInvoice = () => {
  const invoiceItemNameRef = useRef();
  const invoiceItemMeasurementRef = useRef();
  const invoiceItemWidthRef = useRef();
  const invoiceItemLengthRef = useRef();
  const invoiceItemAreaRef = useRef();
  const invoiceItemDepthRef = useRef();
  const invoiceItemPriceRef = useRef();
  const invoiceNoteRef = useRef();

  const [selectedOption, setSelectedOption] = useState("default");
  const [selectedProfile, setSelectedProfile] = useState(standardProfiles);
  const [selectedCut, setSelectedCut] = useState("");
  const edgeProfileMeasurementRef = useRef();

  const [data, setData] = useState({});

  const handleSelectedCut = event =>{
    setSelectedCut(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "Standard") {
      setSelectedProfile(standardProfiles);
    } else if (event.target.value === "Upgrade"){
      setSelectedProfile(upgradeProfiles);
    }
  };


  const invoiceItemId = 0;
  const invoiceId = 0;

  const addItemHandler = (event) => {
    event.preventDefault();

    const invoiceItemName = invoiceItemNameRef.current.value;
    const invoiceItemMeasurement = invoiceItemMeasurementRef.current.value;
    const invoiceItemWidth = invoiceItemWidthRef.current.value;
    const invoiceItemLength = invoiceItemLengthRef.current.value;
    const invoiceItemArea = invoiceItemAreaRef.current.value;
    const invoiceItemDepth = invoiceItemDepthRef.current.value;
    const invoiceItemPrice = invoiceItemPriceRef.current.value;

    const itemObjs = {
      invoiceItemId,
      invoiceItemName,
      invoiceItemMeasurement,
      invoiceItemWidth,
      invoiceItemLength,
      invoiceItemArea,
      invoiceItemDepth,
      invoiceItemPrice,
    };
    setData({...data,invoiceItemId, invoiceItemName,
      invoiceItemMeasurement,
      invoiceItemWidth,
      invoiceItemLength,
      invoiceItemArea,
      invoiceItemDepth,
      invoiceItemPrice,});
  };

  const addEdgeProfileHandler = (event) => {
    event.preventDefault();
    const edgeProfileMeasurement = edgeProfileMeasurementRef.current.value;
    const edgeProfileId = 0;
    const edgeProfileType = selectedOption;
    const edgeProfileCut = selectedCut

    const edgeProfile = {
      edgeProfileId,
      edgeProfileType,
      edgeProfileCut,
      edgeProfileMeasurement,
    };
    setData({...data, edgeProfile});
  };

  const addNotesHandler = (event) => {
    event.preventDefault();
    const invoiceItemNote = invoiceNoteRef.current.value;
    const invoiceItemNoteId = 0;

    const invoiceItemNotes = {
      invoiceItemNoteId,
      invoiceItemNote,
      invoiceItemId
    };
    setData({...data, invoiceItemNotes});
  };

  const createInvoiceHandler = async event => {
    event.preventDefault();
    setData({...data, invoiceId});
    console.log(data);
    try {
      const info = await CreateNewInvoiceItem(data);
    } catch(error) {
      console.error(error);
    }

    // delete later
    console.log(JSON.stringify(data));
  };

  return (
    <div className="createInvoiceItem">
      <CreateInvoiceItem
        invoiceItemNameRef={invoiceItemNameRef}
        invoiceItemMeasurementRef={invoiceItemMeasurementRef}
        invoiceItemWidthRef={invoiceItemWidthRef}
        invoiceItemLengthRef={invoiceItemLengthRef}
        invoiceItemAreaRef={invoiceItemAreaRef}
        invoiceItemDepthRef={invoiceItemDepthRef}
        invoiceItemPriceRef={invoiceItemPriceRef}
      />
      <Button onClick={addItemHandler} className={styles.button} type="submit">
        Add Item
      </Button>

      <EdgeProfile
        handleSelectChange={handleSelectChange}
        handleSelectedCut={handleSelectedCut}
        selectedProfile={selectedProfile}
        selectedOption={selectedOption}
        selectedCut={selectedCut}
        edgeProfileMeasurementRef={edgeProfileMeasurementRef}
      />
      <Button onClick={addEdgeProfileHandler} className={styles.button}>
        Add Edge Profile
      </Button>

      <CreateInvoiceNotes invoiceNoteRef={invoiceNoteRef} />
      <Button onClick={addNotesHandler} className={styles.button}>
        Add Notes
      </Button>

      <Button onClick={createInvoiceHandler} className={styles.button}>
        Create Invoice
      </Button>

    </div>
  );
};

export default CreateInvoice;
