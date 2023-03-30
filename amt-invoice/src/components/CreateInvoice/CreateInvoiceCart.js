import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "../UI/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import buttonStyle from "../UI/Button.module.css";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];
const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const CreateInvoiceCart = (props) => {
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [isInvoiceItemsEmpty, setIsInvoiceItemsEmpty] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setInvoiceItems(props.invoiceItem);
    console.log(invoiceItems[0]);
    if(invoiceItems.length > 0) {
      setIsInvoiceItemsEmpty(false);
    } else {
      setIsInvoiceItemsEmpty(true);
    }
  };
  const handleClose = () => setOpen(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="Modal">
      <Button className={buttonStyle.cart} onClick={handleOpen}>
        <ShoppingCartIcon sx={{ mt: 1 }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* Insert invoice info
            {invoiceItems.map((invoiceItems) => (
              <p>{invoiceItems.invoiceItemName}</p>
            ))} */}
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableCell>Item</TableCell>
                    <TableCell>Measurement</TableCell>
                    <TableCell>Width</TableCell>
                    <TableCell>Length</TableCell>
                    <TableCell>Area</TableCell>
                    <TableCell>Depth</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Edge Profile Type</TableCell>
                    <TableCell>Edge Profile Cut</TableCell>
                    <TableCell>Edge Profile Measurement</TableCell>
                  </TableHead>
                  <TableBody>
                    {!isInvoiceItemsEmpty ? invoiceItems.map((invoiceItems) => (
                      <TableRow>
                        <TableCell>{invoiceItems.invoiceItemName}</TableCell>
                        <TableCell>{invoiceItems.invoiceItemMeasurement}</TableCell>
                        <TableCell>{invoiceItems.invoiceItemWidth}</TableCell>
                        <TableCell>{invoiceItems.invoiceItemLength}</TableCell>
                        <TableCell>{invoiceItems.invoiceItemArea}</TableCell>
                        <TableCell>{invoiceItems.invoiceItemDepth}</TableCell>
                        <TableCell>{invoiceItems.invoiceItemPrice}</TableCell>
                        <TableCell>{invoiceItems.edgeProfile.edgeProfileType}</TableCell>
                        <TableCell>{invoiceItems.edgeProfile.edgeProfileCut}</TableCell>
                        <TableCell>{invoiceItems.edgeProfile.edgeProfileMeasurement}</TableCell>


                      </TableRow>
                    )) : "Empty"}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateInvoiceCart;
