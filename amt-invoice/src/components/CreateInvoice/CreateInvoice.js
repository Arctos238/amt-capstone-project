import React, { useState, useRef, useEffect } from "react";

import CreateInvoiceItem from "./CreateInvoiceItem";
import EdgeProfile from "./EdgeProfile";
import Button from "../UI/Button";
import CreateInvoiceNotes from "./CreateInvoiceNotes";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CreateInvoiceCart from "./CreateInvoiceCart";
import { Link } from "react-router-dom";
import { CreateNewInvoice } from "../../services/InvoiceServices";

import styles from "./CreateInvoice.module.css";
import { style } from "@mui/system";
import { useLocation, useSearchParams } from "react-router-dom";

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

  const currentProjectId = localStorage.getItem("currentProjectId");

  const [invoiceItem, setInvoiceItem] = useState([{}]);
  const [previousInvoiceItems, setPreviousInvoiceItems] = useState([]);
  const [invoiceItemNotes, setInvoiceItemNotes] = useState([{}]);
  const [previousInvoiceItemNotes, setPreviousInvoiceItemNotes] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  let data = {};
  // const location = useLocation();
  // if(location.state.currentInvoiceItems != null) {
  //   console.log(location.state.currentInvoiceItems);
  // }

  const [itemAdded, setItemAdded] = useState(false);
  const [noteAdded, setNoteAdded] = useState(false);
  const [noteEmpty, setNoteEmpty] = useState(false);
  const [isInvoiceAdded, setIsInvoiceAdded] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [isInvoiceItemsEmpty, setIsInvoiceItemsEmpty] = useState(false);



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInvoiceItemsEmpty(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isInvoiceItemsEmpty]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInputEmpty(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isInputEmpty]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setItemAdded(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [itemAdded]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNoteEmpty(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [noteEmpty]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNoteAdded(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [noteAdded]);

  useEffect(() => {
    setPreviousInvoiceItems((previousInvoiceItems) => [
      ...previousInvoiceItems,
      invoiceItem,
    ]);
    if (
      previousInvoiceItems.length > 0 &&
      Array.isArray(previousInvoiceItems[0])
    ) {
      delete previousInvoiceItems[0];
      previousInvoiceItems.shift();
    }
  }, [invoiceItem]);

  useEffect(() => {
    setPreviousInvoiceItemNotes((previousInvoiceItemNotes) => [
      ...previousInvoiceItemNotes,
      invoiceItemNotes,
    ]);

    if (
      previousInvoiceItemNotes.length > 0 &&
      Array.isArray(previousInvoiceItemNotes[0])
    ) {
      delete previousInvoiceItemNotes[0];
      previousInvoiceItemNotes.shift();
    }
  }, [invoiceItemNotes]);

  const [selectedEdgeProfileType, setSelectedEdgeProfileType] = useState("");
  const [selectedEdgeProfileCut, setSelectedEdgeProfileCut] = useState("");
  const [selectedEdgeProfileMeasurement, setSelectedEdgeProfileMeasurement] =
    useState("");
  const [edgeProfileId, setEdgeProfileId] = useState(null);

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

  const addItemHandler = () => {
    const invoiceItemName = invoiceItemNameRef.current.value;
    const invoiceItemMeasurement = invoiceItemMeasurementRef.current.value;
    const invoiceItemWidth = invoiceItemWidthRef.current.value;
    const invoiceItemLength = invoiceItemLengthRef.current.value;
    const invoiceItemArea = invoiceItemAreaRef.current.value;
    const invoiceItemDepth = invoiceItemDepthRef.current.value;
    const invoiceItemPrice = invoiceItemPriceRef.current.value;

    const edgeProfileMeasurement = selectedEdgeProfileMeasurement;
    const profileId = edgeProfileId;
    const edgeProfileType = selectedEdgeProfileType;
    const edgeProfileCut = selectedEdgeProfileMeasurement;

    if (
      previousInvoiceItems.length > 0 &&
      Array.isArray(previousInvoiceItems[0])
    ) {
      delete previousInvoiceItems[0];
      previousInvoiceItems.shift();
    }

    if (
      previousInvoiceItemNotes.length > 0 &&
      Array.isArray(previousInvoiceItemNotes[0])
    ) {
      delete previousInvoiceItemNotes[0];
      previousInvoiceItemNotes.shift();
    }
    if (
      invoiceItemName === null ||
      invoiceItemName === "" ||
      invoiceItemMeasurement === null ||
      invoiceItemMeasurement === "" ||
      invoiceItemWidth === null ||
      invoiceItemWidth === "" ||
      invoiceItemLength === null ||
      invoiceItemLength === ""||
      invoiceItemArea === null ||
      invoiceItemArea === ""||
      invoiceItemDepth === null ||
      invoiceItemDepth === ""||
      invoiceItemPrice === null ||
      invoiceItemPrice === ""||
      edgeProfileMeasurement === null ||
      edgeProfileMeasurement === ""||
      profileId === null ||
      profileId === ""||
      edgeProfileType === null ||
      edgeProfileType === ""||
      edgeProfileCut === null ||
      edgeProfileCut === ""
    ) {
      setIsInputEmpty(true);
    } else {
      setInvoiceItem({
        invoiceItemName,
        invoiceItemMeasurement,
        invoiceItemWidth,
        invoiceItemLength,
        invoiceItemArea,
        invoiceItemDepth,
        invoiceItemPrice,
        edgeProfile: {
          edgeProfileId: profileId,
          edgeProfileType,
          edgeProfileCut,
          edgeProfileMeasurement,
        },
        invoiceItemNotes: previousInvoiceItemNotes,
      });

      setTotalPrice(Number(totalPrice) + Number(invoiceItemPrice));
      setItemAdded(true);
    }
  };

  const addNotesHandler = () => {
    const invoiceItemNote = invoiceNoteRef.current.value;

    setNoteAdded(true);
    setInvoiceItemNotes({ invoiceItemNote: invoiceItemNote });
  };

  const createInvoiceHandler = async () => {
    if(previousInvoiceItems.length < 0 || previousInvoiceItems[0].length === 1) {
      setIsInvoiceItemsEmpty(true);
    } else {
      data = {
        invoiceTotalPrice: totalPrice,
        project: {
          projectId: currentProjectId,
        },
        invoiceItems: previousInvoiceItems,
      };
  
      try {
        const info = await CreateNewInvoice(data);
      } catch (error) {
        console.error(error);
      }
  
      if (data != null) {
        setIsInvoiceAdded(true);
      }
    }
    
  };

  return (
    <div className="createInvoiceItem">
      <h1 className={styles.title}>Create Invoice</h1>
      {itemAdded ? (
        <div className={styles.errorBox}>
          <Stack sx={{ width: 1100, margin: "auto" }} spacing={2}>
            <Alert severity="success">
              {invoiceItemNameRef.current.value} - item added!
            </Alert>
          </Stack>
        </div>
      ) : (
        <></>
      )}
      {isInvoiceAdded ? (
        <div className={styles.errorBox}>
          <Stack sx={{ width: 1100, margin: "auto" }} spacing={2}>
            <Alert severity="success">
              Invoice Created!{" "}
              <Link to={"/invoices"}>Go back to Invoice Page</Link>
            </Alert>
          </Stack>
        </div>
      ) : (
        <></>
      )}
      {noteAdded ? (
        <div className={styles.errorBox}>
          <Stack sx={{ width: 1100, margin: "auto" }} spacing={2}>
            <Alert severity="success">Note added!</Alert>
          </Stack>
        </div>
      ) : (
        <></>
      )}
      {noteEmpty ? (
        <div className={styles.errorBox}>
          <Stack sx={{ width: 1100, margin: "auto" }} spacing={2}>
            <Alert severity="error">Note empty - please type your notes</Alert>
          </Stack>
        </div>
      ) : (
        <></>
      )}
      {isInputEmpty ? (
        <div className={styles.errorBox}>
          <Stack sx={{ width: 1100, margin: "auto" }} spacing={2}>
            <Alert severity="error">Please fill up the form</Alert>
          </Stack>
        </div>
      ) : (
        <></>
      )}
      {isInvoiceItemsEmpty ? (
        <div className={styles.errorBox}>
          <Stack sx={{ width: 1100, margin: "auto" }} spacing={2}>
            <Alert severity="error">No Invoice Items Added - Please add items</Alert>
          </Stack>
        </div>
      ) : (
        <></>
      )}
      <CreateInvoiceItem
        invoiceItemNameRef={invoiceItemNameRef}
        invoiceItemMeasurementRef={invoiceItemMeasurementRef}
        invoiceItemWidthRef={invoiceItemWidthRef}
        invoiceItemLengthRef={invoiceItemLengthRef}
        invoiceItemAreaRef={invoiceItemAreaRef}
        invoiceItemDepthRef={invoiceItemDepthRef}
        invoiceItemPriceRef={invoiceItemPriceRef}
      />

      <EdgeProfile
        selectedEdgeProfileType={selectedEdgeProfileType}
        selectedEdgeProfileCut={selectedEdgeProfileCut}
        handleEdgeProfileTypeChange={handleEdgeProfileTypeChange}
        handleEdgeProfileCutChange={handleEdgeProfileCutChange}
        edgeProfileTypes={edgeProfileTypes}
        edgeProfileCuts={edgeProfileCuts}
        selectedEdgeProfileMeasurement={selectedEdgeProfileMeasurement}
      />

      <CreateInvoiceNotes
        invoiceNoteRef={invoiceNoteRef}
        addNotesHandler={addNotesHandler}
      />

      {/* <Button onClick={showInvoiceItemHandler} className={styles.button}>
        Show Invoice Item
      </Button> */}
      <div className={styles.createInvoiceButton}>
        <Button onClick={addItemHandler} className={styles.button}>
          Add Item
        </Button>
      </div>
      <div className={styles.createInvoiceButton}>
        <Button onClick={createInvoiceHandler} className={styles.button}>
          Create Invoice
        </Button>
      </div>

      <CreateInvoiceCart invoiceItem={previousInvoiceItems} />
    </div>
  );
};

export default CreateInvoice;
