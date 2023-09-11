import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import './FileUploadPage.css'; // Import your custom CSS for styling

const FileUploadPage = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded files here
    console.log('Accepted files:', acceptedFiles);
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
