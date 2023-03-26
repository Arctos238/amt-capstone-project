import React, { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from 'axios';
import classes from "../UI/CardWithRadius.module.css";
import CardWithRadius from "../UI/CardWithRadius";
import Typography from '@material-ui/core/Typography';
import { CreateNewImage } from '../../services/ImageServices';
import { saveAs } from 'file-saver';

const DocumentUpload = (props) => {
  const { projectId } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState();
  const [fileArray, setFileArray] = useState([]); 

  console.log(file);

  const fileSelectedHandler = useCallback(event => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    console.log(event.target.files[0].url);
    const filename = event.target.files[0].name;
    console.log(filename);
    setFileArray(prevFiles => [...prevFiles, filename]); 
    setFile(URL.createObjectURL(event.target.files[0]));
  }, []);

  const fileUploadHandler = async () => {
    const fd = new FormData();
    fd.append('file', selectedFile);

    const data = await CreateNewImage(fd);
    console.log(projectId);
    console.log(data);
  };

  const donwloadImg =() => {
    saveAs()
  }

  const fileComponents = fileArray.map((file, index) => (
    <CardWithRadius key={index} className={classes.blueCard} onClick={() => downloadFile(file)}>
      <Typography style={{ textAlign: 'center', fontWeight: 'bold' }}>{file}</Typography>
    </CardWithRadius>
  ));

  const downloadFile = async (filename) => {
    try {
      const response = await axios.get(`/files/${filename}`, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button variant="contained" component="label" style={{ backgroundColor: '#05516a' }}>
        Add Image
        <input hidden type="file" onChange={fileSelectedHandler} />
        <img></img>
        <PhotoCamera />
      </Button>
      <br />

      {fileComponents}
      

      <br />
      <button onClick={fileUploadHandler}>Upload Image</button>
    </div>
  );
};

export default DocumentUpload;
