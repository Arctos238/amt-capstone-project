import React, { useState, useRef } from "react";

import CreateInvoiceItem from "./CreateInvoiceItem";
import EdgeProfile from "./EdgeProfile";
import Button from "../UI/Button";
import CreateInvoiceNotes from "./CreateInvoiceNotes";

import { CreateNewInvoiceItem } from "../../services/InvoiceItemServices";

import styles from "./CreateInvoice.module.css";

const standardProfiles = [
  {
    edgeProfileId: 1,
    edgeProfileType: "Standard",
    edgeProfileCut: "Minimal Eased",
    edgeProfileMeasurement: "3cm",
  },
  {
    edgeProfileId: 2,
    edgeProfileType: "Standard",
    edgeProfileCut: "Eased",
    edgeProfileMeasurement: "3cm",
  },
  {
    edgeProfileId: 3,
    edgeProfileType: "Standard",
    edgeProfileCut: "Heavy Eased",
    edgeProfileMeasurement: "3cm",
  },
  {
    edgeProfileId: 4,
    edgeProfileType: "Standard",
    edgeProfileCut: "Bevel",
    edgeProfileMeasurement: "3cm",
  },
  {
    edgeProfileId: 5,
    edgeProfileType: "Standard",
    edgeProfileCut: "Quarter Round",
    edgeProfileMeasurement: "3cm",
  },
  {
    edgeProfileId: 6,
    edgeProfileType: "Standard",
    edgeProfileCut: "Half Round",
    edgeProfileMeasurement: "3cm",
  },
];

const upgradeProfiles = [
  {
    edgeProfileId: 7,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Bullnose",
    edgeProfileMeasurement: "3cm",
  },
  {
    edgeProfileId: 8,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Ogee",
    edgeProfileMeasurement: "3cm",
  },
  {
    edgeProfileId: 9,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Eased With Laminate",
    edgeProfileMeasurement: "3cm x 3cm",
  },
  {
    edgeProfileId: 10,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Bevel With Laminate",
    edgeProfileMeasurement: "3cm x 3cm",
  },
  {
    edgeProfileId: 11,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Quater Round With Laminate",
    edgeProfileMeasurement: "3cm x 3cm",
  },
  {
    edgeProfileId: 12,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Half Round With Laminate",
    edgeProfileMeasurement: "3cm x 3cm",
  },
  {
    edgeProfileId: 13,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Ogee With With Laminate",
    edgeProfileMeasurement: "3cm x 3cm",
  },
  {
    edgeProfileId: 14,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Miltered Edge",
    edgeProfileMeasurement: "3cm x 3cm",
  },
  {
    edgeProfileId: 15,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Double Bevel With Laminate",
    edgeProfileMeasurement: "3cm x 3cm",
  },
  {
    edgeProfileId: 16,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Double Quarter Round With Laminate",
    edgeProfileMeasurement: "3cm x 3cm",
  },
  {
    edgeProfileId: 17,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Double Bullnose With Laminate",
    edgeProfileMeasurement: "3cm x 3cm",
  },
  {
    edgeProfileId: 18,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Double Ogee With Eased",
    edgeProfileMeasurement: "3cm x 3cm",
  },
  {
    edgeProfileId: 19,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Double Stepped With Ogee",
    edgeProfileMeasurement: "3cm x 3cm",
  },
  {
    edgeProfileId: 20,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Triple Stepped Bullnose",
    edgeProfileMeasurement: "3cm x 3cm x 3cm",
  },
  {
    edgeProfileId: 21,
    edgeProfileType: "Upgrade",
    edgeProfileCut: "Rock Pitched",
    edgeProfileMeasurement: "3cm x 3cm x 3cm",
  },
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

  const [data, setData] = useState({});

  const [selectedEdgeProfileType, setSelectedEdgeProfileType] = useState("");
  const [selectedEdgeProfileCut, setSelectedEdgeProfileCut] = useState("");
  const [selectedEdgeProfileMeasurement, setSelectedEdgeProfileMeasurement] =
    useState("");
  const [edgeProfileId, setEdgeProfileId] = useState();

  const handleEdgeProfileTypeChange = (event) => {
    setSelectedEdgeProfileType(event.target.value);
    setSelectedEdgeProfileCut("");
    setSelectedEdgeProfileMeasurement("");
    setEdgeProfileId(null);
  };

  const handleEdgeProfileCutChange = (event) => {
    setSelectedEdgeProfileCut(event.target.value);

    const edgeProfile =
      selectedEdgeProfileType === "Standard"
        ? standardProfiles.find(
            (profile) => profile.edgeProfileCut === event.target.value
          )
        : upgradeProfiles.find(
            (profile) => profile.edgeProfileCut === event.target.value
          );

    setSelectedEdgeProfileMeasurement(edgeProfile.edgeProfileMeasurement);
    setEdgeProfileId(edgeProfile.edgeProfileId);
  };

  const edgeProfileTypes = [
    { value: "Standard", label: "Standard" },
    { value: "Upgrade", label: "Upgrade" },
  ];

  const edgeProfileCuts = selectedEdgeProfileType
    ? selectedEdgeProfileType === "Standard"
      ? standardProfiles.map((profile) => profile.edgeProfileCut)
      : upgradeProfiles.map((profile) => profile.edgeProfileCut)
    : [];


  const addItemHandler = (event) => {
    event.preventDefault();

    const invoiceItemName = invoiceItemNameRef.current.value;
    const invoiceItemMeasurement = invoiceItemMeasurementRef.current.value;
    const invoiceItemWidth = invoiceItemWidthRef.current.value;
    const invoiceItemLength = invoiceItemLengthRef.current.value;
    const invoiceItemArea = invoiceItemAreaRef.current.value;
    const invoiceItemDepth = invoiceItemDepthRef.current.value;
    const invoiceItemPrice = invoiceItemPriceRef.current.value;

    setData({
      ...data,
      invoice: {
        invoiceId: 1,
      },
      invoiceItemName,
      invoiceItemMeasurement,
      invoiceItemWidth,
      invoiceItemLength,
      invoiceItemArea,
      invoiceItemDepth,
      invoiceItemPrice,
    });
  };

  const addEdgeProfileHandler = (event) => {
    event.preventDefault();
    const edgeProfileMeasurement = selectedEdgeProfileMeasurement;
    const profileId = edgeProfileId;
    const edgeProfileType = selectedEdgeProfileType;
    const edgeProfileCut = selectedEdgeProfileMeasurement;

    const edgeProfile = {
      edgeProfileId: profileId,
      edgeProfileType,
      edgeProfileCut,
      edgeProfileMeasurement,
    };
    setData({ ...data, edgeProfile });
  };

  const addNotesHandler = (event) => {
    event.preventDefault();
    const invoiceItemNote = invoiceNoteRef.current.value;

    const invoiceItemNotes = [
      {
        invoiceItemNote,
      },
    ];
    setData({ ...data, invoiceItemNotes });
  };

  const createInvoiceHandler = async (event) => {
    event.preventDefault();

    setData({
      ...data,
      invoice: {
        invoiceId: 1,
      },
    });

    try {
      const info = await CreateNewInvoiceItem(data);
    } catch (error) {
      console.error(error);
    }

    if(data != null) {
      alert("invoice created");
    }

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
        selectedEdgeProfileType={selectedEdgeProfileType}
        selectedEdgeProfileCut={selectedEdgeProfileCut}
        handleEdgeProfileTypeChange={handleEdgeProfileTypeChange}
        handleEdgeProfileCutChange={handleEdgeProfileCutChange}
        edgeProfileTypes={edgeProfileTypes}
        edgeProfileCuts={edgeProfileCuts}
        selectedEdgeProfileMeasurement={selectedEdgeProfileMeasurement}
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
