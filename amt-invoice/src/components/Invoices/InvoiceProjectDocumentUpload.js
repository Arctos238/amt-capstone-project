import React, { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { CreateNewImage } from '../../services/ImageServices';

const DocumentUpload = (props) => {
  const { projectId } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState();
  const [files, setFiles] = useState(""); // create state variable for files

  const fileSelectedHandler = useCallback(event => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    console.log(event.target.files[0].name);
    const filename = event.target.files[0].name;
    console.log(filename);
    setFiles(filename); // update the state variable with the filename
    setFile(URL.createObjectURL(event.target.files[0]));
  }, []);

  const fileUploadHandler = async () => {
    const fd = new FormData();
    fd.append('file', selectedFile);

    const data = await CreateNewImage(fd);
    console.log(projectId);
    console.log(data);
  };

  return (
    <div>
      <Button variant="contained" component="label">
        Add Image
        <input hidden type="file" onChange={fileSelectedHandler} />
        <PhotoCamera />
      </Button>
      <br />

      <Typography>{files}</Typography>

      <br />
      <button onClick={fileUploadHandler}>Upload Image</button>
    </div>
  );
};

export default DocumentUpload;
