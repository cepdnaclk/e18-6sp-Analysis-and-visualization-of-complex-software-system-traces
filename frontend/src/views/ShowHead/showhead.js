import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowHead = () => {
  const { filename } = useParams(); // Extract filename from URL parameter
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    // Send a GET request to retrieve file data
    axios.get(`http://127.0.0.1:5000/head_of_file?filename=${filename}`)
      .then((response) => {
        // Handle the response data
        setFileData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching file data:', error);
      });
  }, [filename]);

  if (!fileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>File: {fileData.fileName}</h2>
      <table>
        <thead>
          <tr>
            <th>File Contents</th>
          </tr>
        </thead>
        <tbody>
          {fileData.lines.map((line, index) => (
            <tr key={index}>
              <td>{line}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowHead;
