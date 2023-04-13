import React, { useState, useCallback } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import axios from "axios";
import classes from "../UI/CardWithRadius.module.css";
import CardWithRadius from "../UI/CardWithRadius";
import Typography from "@material-ui/core/Typography";
import { CreateNewImage } from "../../services/ImageServices";
import { saveAs } from "file-saver";
import FileUploadIcon from '@mui/icons-material/FileUpload';

const DocumentUpload = (props) => {
  const { projectId } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState();
  const [fileArray, setFileArray] = useState([]);

  const fileSelectedHandler = useCallback((event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    console.log(event.target.files[0]);
    const filename = event.target.files[0].name;
    console.log(filename);
    setFileArray((prevFiles) => [...prevFiles, filename]);
    setFile(URL.createObjectURL(event.target.files[0]));
  }, []);

  const fileUploadHandler = async () => {
    const fd = new FormData();
    fd.append("file", selectedFile);
    fd.append("projectId", projectId);

    const data = await CreateNewImage(fd);
  };

  const downloadImg = () => {
    saveAs();
  };

  const projectImages = JSON.parse(localStorage.getItem("project")).images;

  console.log();

  const existingFileComponents = projectImages.map((projectImage, index) => (
    <CardWithRadius key={index} className={classes.blueCard}>
      <Typography
        style={{ textAlign: "center", fontWeight: "bold", color: "white", position: "relative" }}
      >
        <a
          href={
            "http://70.77.64.68:8083/api/images/id/ " + projectImage.imageId
          }
        >

          <label style={{ color: "white" }}>{projectImage.imageName}</label>
          <Button style={{ color: "white", borderColor: "#fabd44" }} variant="outlined">
            Download
          </Button>

        </a>
      </Typography>
    </CardWithRadius>
  ));



  const fileComponents = fileArray.map((file, index) => (
    <CardWithRadius key={index} className={classes.blueCard}>
      <Typography style={{ textAlign: "center", fontWeight: "bold" }}>
        {file}
      </Typography>
      <Button onClick={() => downloadFile(file)}>Download</Button>
    </CardWithRadius>
  ));

  const downloadFile = async (index) => {
    console.log(index);
  };

  return (
    <div>
      <label style={{ color: 'black', textAlign: 'center' }}>Existing Documents:</label>
      {existingFileComponents}
      <br />
      <br />
      <Button
        variant="contained"
        component="label"
        style={{ backgroundColor: "#05516a" }}
      >
        Add Doc
        <input hidden type="file" onChange={fileSelectedHandler} />
        <PhotoCamera />
      </Button>
      <br />

      {fileComponents}

      <br />
      <Button
        variant="contained"
        component="label"
        style={{ backgroundColor: "#05516a" }} onClick={fileUploadHandler}>
        Upload Doc
        <FileUploadIcon />
      </Button>
    </div>
  );
};

export default DocumentUpload;
