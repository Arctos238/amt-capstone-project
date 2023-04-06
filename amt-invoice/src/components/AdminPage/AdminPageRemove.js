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
                            {results.map((row,idx) => (
                                <TableRow
                                    key={row.employeeUsername+row.employeeId}
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
                                                <EditIcon
                                                    variant="outlined"
                                                    type="submit"
                                                    value="add"
                                                    aria-label="add"
                                                    style={{ color: "#FFB900" }}
                                                >

                                                </EditIcon>
                                            </Link>

                                            <DeleteIcon
                                                variant="outlined"
                                                type="submit"
                                                value="add"
                                                aria-label="add"
                                                style={{ color: "#FFB900" }}
                                                onClick={() => handleDelete(row.employeeUsername)}
                                            >

                                            </DeleteIcon>

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
