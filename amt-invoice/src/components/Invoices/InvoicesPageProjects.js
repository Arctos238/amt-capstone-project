import React from "react";
import { useState, useEffect } from "react";
import InvoiceProject from "./InvoiceProject";
import { GetProjectById } from "../../services/ProjectServices";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { GetInvoiceItemsByInvoiceId } from "../../services/InvoiceItemServices";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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
const InvoicesPageProject = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const invoiceItems = props.invoiceInfo;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      {/* <Button onClick={props.handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Invoice
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
                    {Array.isArray(invoiceItems) ? (invoiceItems.map((invoiceItems) => (
                      <TableRow>
                        <TableCell>{invoiceItems.invoiceItemName}</TableCell>
                        <TableCell>
                          {invoiceItems.invoiceItemMeasurement}
                        </TableCell>
                        <TableCell>{invoiceItems.invoiceItemWidth}</TableCell>
                        <TableCell>{invoiceItems.invoiceItemLength}</TableCell>
                        <TableCell>{invoiceItems.invoiceItemArea}</TableCell>
                        <TableCell>{invoiceItems.invoiceItemDepth}</TableCell>
                        <TableCell>{invoiceItems.invoiceItemPrice}</TableCell>
                        <TableCell>
                          {invoiceItems.edgeProfile.edgeProfileType}
                        </TableCell>
                        <TableCell>
                          {invoiceItems.edgeProfile.edgeProfileCut}
                        </TableCell>
                        <TableCell>
                          {invoiceItems.edgeProfile.edgeProfileMeasurement}
                        </TableCell>
                      </TableRow>
                    ))) : <></>}
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
        </Box>
      </Modal>
    </div>
  );
};

export default InvoicesPageProject;
