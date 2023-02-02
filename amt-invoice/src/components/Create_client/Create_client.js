import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./Create_client.css"

const createClient =() =>{

return (
    <form >
        <div>
            <Card className="card form_floating">
            <label>Client Name:</label>
            <input 
            type = "text" 
            className="inputbox"
            />
            </Card>
        </div>
        <div>
            <Card className="card form_floating">
            <label>Email Personal:</label>
            <input 
            type = "text" 
            className="inputbox"
            />
            </Card>
        </div>
        <div>
            <Card className="card form_floating">
            <label>Email Business:</label>
            <input 
            type = "text" 
            className="inputbox"
            />
            </Card>
        </div>
        <div>
            <Card className="card form_floating">
            <label>Phone Number:</label>
            <input 
            type = "text" 
            className="inputbox"
            />
            </Card>
        </div>
        <div className="create-client-button">
        <Button className="button login-button" type="submit" onClick="">
          Create Client
        </Button>
      </div>
    </form>
);
};

export default createClient;