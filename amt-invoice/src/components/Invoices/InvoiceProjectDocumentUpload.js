import React, { useState, useCallback } from 'react';
import axios from 'axios';

const DocumentUpload =(props) =>{
    const { projectId } = props;
    const [selectedFile, setSelectedFile] = useState(null);

    

  const fileSelectedHandler = useCallback(event => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }, []);

  const fileUploadHandler = () =>{
        const fd = new FormData();
        fd.append('file', selectedFile)
        

        axios.post('http://70.77.64.68:8083/api/images', fd)
        .then(res => {
            console.log(res);
        });
        console.log(projectId);
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