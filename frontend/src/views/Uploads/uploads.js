import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import './FileUploadPage.css'; // Import your custom CSS for styling
import axios from 'axios';

const FileUploadPage = () => {
  const onDrop = useCallback(async (acceptedFiles) => {
    // Handle the uploaded files here
    console.log('Accepted files:', acceptedFiles);

    // Create a FormData object to append files
    const formData = new FormData();

    // Append each accepted file to the FormData object
    acceptedFiles.forEach((file) => {
      formData.append('file', file);
    });

    try {
      // Make an HTTP POST request to your backend to upload the files
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
        },
      });

      // Handle the response from the server
      console.log('Server response:', response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error uploading files:', error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.log, .txt, .csv', // Define accepted file types
  });

  return (
    <div className="file-upload-page">
      <div className={`dropzone ${isDragActive ? 'active' : ''}`} {...getRootProps()}>
        <input {...getInputProps()} />
        <FontAwesomeIcon icon={faFileUpload} className="upload-icon" />
        {isDragActive ? (
          <p>Drop the files here</p>
        ) : (
          <p>
            Drag & drop files here or <span>click</span> to select files
          </p>
        )}
      </div>
    </div>
  );
};

export default FileUploadPage;
