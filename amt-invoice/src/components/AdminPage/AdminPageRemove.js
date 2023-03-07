import React, { useState, useEffect } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import Button from "../UI/Button";
import { GetAllEmployees } from "../../services/EmployeeServices";
import Stack from "@mui/material/Stack";
import Card from "../UI/Card";
import cardClass from "../UI/Card.module.css";
import SearchResult from "../Search/SearchResult";
import Grid from "@mui/material/Grid";
import styles from "./AdminPageRemove.module.css"
import classes from "../UI/CardWithRadius.module.css";
import Radio from "@mui/material/Radio";

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
            <h1>Remove User</h1>

            {results.map((results) => (
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
        </div>
    );
};

export default AdminPageRemove;