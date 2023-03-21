import React, { useState, useEffect } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import Button from "../UI/Button";
import { GetAllEmployees } from "../../services/EmployeeServices";
import styles from "./AdminPageRemove.module.css"
import classes from "../UI/CardWithRadius.module.css";
import Radio from "@mui/material/Radio";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AdminPageRemove = () => {

    const [results, setResults] = useState([]);

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
            <h1>Employee Table</h1>

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
            <TableContainer component={Paper} className={styles.center}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>LastName</TableCell>
                            <TableCell>FirstName</TableCell>
                            <TableCell>UserName</TableCell>
                            <TableCell>Password</TableCell>
                            <TableCell>Role name</TableCell>
                            <TableCell>button</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {results.map((row) => (
                            <TableRow
                                key={row.employeeUsername}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" >
                                    {row.employeeId}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.employeeLastName}
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    {row.employeeFirstName}
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    {row.employeeUsername}
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    {row.employeePassword}
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    {row.role.roleName}
                                </TableCell>
                                <TableCell >
                                    <button type="submit"
                                        value="add" >Edit</button>
                                    <button type="submit"
                                        value="add" >Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AdminPageRemove;