import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import './FileUploadPage.css' // Import your custom CSS for styling
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FileUploadPage = () => {
  const navigate = useNavigate()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailMessage, setShowFailMessage] = useState(false)

  const onDrop = useCallback(
    async (acceptedFiles) => {
      // Handle the uploaded files here
      console.log('Accepted files:', acceptedFiles)

      // Create a FormData object to append files
      const formData = new FormData()

      // Append each accepted file to the FormData object
      acceptedFiles.forEach((file) => {
        formData.append('file', file)
      })

      try {
        // Make an HTTP POST request to your backend to upload the files
        const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
          },
        })

        // Handle the response from the server
        console.log('Server response:', response.data)

        // Check the response and navigate to a new page if needed
        if (response.data.success) {
          // Show the success message and hide other elements
          setShowSuccessMessage(true)
          document.querySelector('.dropzone').style.display = 'none'

          // Hide the success message and navigate after 3 seconds
          setTimeout(() => {
            setShowSuccessMessage(false)
            navigate(`/showhead/${response.data.filename}`)
          }, 3500)
        } else {
          // Show the success message and hide other elements
          setShowFailMessage(true)
          document.querySelector('.dropzone').style.display = 'none'
          // Hide the success message and navigate after 3 seconds
          setTimeout(() => {
            setShowFailMessage(false)
            document.querySelector('.dropzone').style.display = 'block'
          }, 3500)
        }
      } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error uploading files:', error)
      }
    },
    [navigate],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.log, .txt, .csv', // Define accepted file types
  })

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
      {showSuccessMessage && (
        <div className="success-message">
          <p style={{ backgroundColor: 'green', color: 'white' }}><h2>Upload successful!</h2></p>
        </div>
      )}
      {showFailMessage && (
        <div className="success-message">
          <p style={{ backgroundColor: 'red', color: 'white' }}><h2>Upload Fail! Invalid File Type</h2></p>
        </div>
      )}
    </div>
  )
}

export default FileUploadPage
