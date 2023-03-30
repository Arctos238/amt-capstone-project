import React, { useState, useEffect } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import Button from "../UI/Button";
import { GetAllEmployees } from "../../services/EmployeeServices";
import styles from "./AdminPageRemove.module.css";
import classes from "../UI/CardWithRadius.module.css";
import Radio from "@mui/material/Radio";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { DeleteEmployeeByUsername } from "../../services/EmployeeServices";
import { Link } from "react-router-dom";

const AdminPageRemove = () => {
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);
    //const theme = useTheme();
    //const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };
    const handleDelete = async (username) => {
        console.log(username);
        await DeleteEmployeeByUsername(username);
        setOpen(false);
        setResults(results.filter((result) => result.employeeUsername !== username));
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetAllEmployees();
                console.log(data);
                setResults(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

  return (
    <div className={styles.center}>
      <h1>Employees</h1>

            {/* {results.map((results) => (
                <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>

                    <Stack direction="row" >
                        <Radio
                            sx={{
                                color: "white",
                                "&.Mui-checked": {
                                    color: "#fabd44",
                                },
                            }}
                        />
                        <Grid sx={{ textAlign: "left", "padding-left": "10px" }}
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <b>Name: {results.employeeLastName}&nbsp;{results.employeeFirstName}
                                </b>
                            </Grid>
                        </Grid>
                    </Stack>
                </CardWithRadius>
            ))}
            <Button type = "submit"
                value = "add" className={styles.button}>Remove User</Button>

                 */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TableContainer
                    component={Paper}
                    className={styles.center}
                    style={{ width: "80%", backgroundColor: "#05516a" }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold", color: "white" }}>
                                    Id
                                </TableCell>
                                <TableCell style={{ fontWeight: "bold", color: "white" }}>
                                    First Name
                                </TableCell>
                                <TableCell style={{ fontWeight: "bold", color: "white" }}>
                                    Last Name
                                </TableCell>
                                <TableCell style={{ fontWeight: "bold", color: "white" }}>
                                    User Name
                                </TableCell>
                                <TableCell style={{ fontWeight: "bold", color: "white" }}>
                                    Password
                                </TableCell>
                                <TableCell style={{ fontWeight: "bold", color: "white" }}>
                                    Role
                                </TableCell>
                                <TableCell style={{ fontWeight: "bold", color: "white" }}>
                                    Edit / Delete
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {results.map((row) => (
                                <TableRow
                                    key={row.employeeUsername}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell
                                        style={{ color: "white" }}
                                        component="th"
                                        scope="row"
                                    >
                                        {row.employeeId}
                                    </TableCell>
                                    <TableCell
                                        style={{ color: "white" }}
                                        component="th"
                                        scope="row"
                                    >
                                        {row.employeeFirstName}
                                    </TableCell>
                                    <TableCell
                                        style={{ color: "white" }}
                                        component="th"
                                        scope="row"
                                    >
                                        {row.employeeLastName}
                                    </TableCell>
                                    <TableCell
                                        style={{ color: "white" }}
                                        component="th"
                                        scope="row"
                                    >
                                        {row.employeeUsername}
                                    </TableCell>
                                    <TableCell
                                        style={{ color: "white" }}
                                        component="th"
                                        scope="row"
                                    >
                                        {row.employeePassword}
                                    </TableCell>
                                    <TableCell
                                        style={{ color: "white" }}
                                        component="th"
                                        scope="row"
                                    >
                                        {row.role.roleName}
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={2}>
                                            <Link to={"/AdminPageEdit"}
                                                state={row.employeeUsername}>
                                                <IconButton
                                                    variant="outlined"
                                                    type="submit"
                                                    value="add"
                                                    aria-label="add"
                                                    style={{ color: "#FFB900" }}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>

                                            <IconButton
                                                variant="outlined"
                                                type="submit"
                                                value="add"
                                                aria-label="add"
                                                style={{ color: "#FFB900" }}
                                                
                                            >
                                                <DeleteIcon onClick={() => handleDelete(row.employeeUsername)}/>
                                            </IconButton>
                                            {/* <Dialog
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">
                                                    {"Delete"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                        Are you sure?
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <button onClick={handleClose}>
                                                        No
                                                    </button>
                                                    <button onClick={() => handleDelete(row.employeeUsername)} autoFocus>
                                                        Yes
                                                    </button>
                                                </DialogActions>
                                            </Dialog> */}
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default AdminPageRemove;
