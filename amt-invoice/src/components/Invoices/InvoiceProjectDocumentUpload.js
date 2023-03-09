import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { CreateNewImage } from '../../services/ImageServices';

const DocumentUpload =(props) =>{
    const { projectId } = props;
    const [selectedFile, setSelectedFile] = useState(null);

    

  const fileSelectedHandler = useCallback(event => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }, []);

  const fileUploadHandler = async () =>{
        const fd = new FormData();
        fd.append('file', selectedFile)
        

        // axios.post('http://70.77.64.68:8083/api/images', fd)
        // .then(res => {
        //     console.log(res);
        // });
        const data = await CreateNewImage(fd)
        console.log(projectId);
        console.log(data)
  }

  return (
    <div>
      <input type="file" onChange={fileSelectedHandler} />
      <br/>
      <button onClick={fileUploadHandler}>Upload File</button>
    </div>
  );
}

export default DocumentUpload;