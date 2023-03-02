import React, { useState, useCallback } from 'react';

const DocumentUpload =() =>{
    const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = useCallback(event => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }, []);

  return (
    <div>
      <input type="file" onChange={fileSelectedHandler} />
    </div>
  );
}

export default DocumentUpload;