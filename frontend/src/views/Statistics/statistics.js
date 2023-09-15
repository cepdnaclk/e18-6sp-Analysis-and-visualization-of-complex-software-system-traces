import React from 'react';
import './TableDisplay.css'; // Import the CSS file for styling

import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';


const TableDisplay = () => {
  // Hardcoded table data
  const tableData = [
    {
      count: 1419.0,
      mean: 9.013249,
      std: 0.097684,
      min: 8.8,
      '25%': 8.9,
      '50%': 9.0,
      '75%': 9.1,
      max: 9.2,
    },
    {
      count: 1419.0,
      mean: 83.0,
      std: 0.0,
      min: 83.0,
      '25%': 83.0,
      '50%': 83.0,
      '75%': 83.0,
      max: 83.0,
    },
    {
      count: 1419.0,
      mean: 1.993658,
      std: 8.014397,
      min: 0.0,
      '25%': 0.0,
      '50%': 0.0,
      '75%': 2.0,
      max: 159.0,
    },
    {
      count: 1419.0,
      mean: 20.0,
      std: 0.0,
      min: 20.0,
      '25%': 20.0,
      '50%': 20.0,
      '75%': 20.0,
      max: 20.0,
    },
    {
      count: 1419.0,
      mean: 0.0,
      std: 0.0,
      min: 0.0,
      '25%': 0.0,
      '50%': 0.0,
      '75%': 0.0,
      max: 0.0,
    },
  ];

  return (
    <div>
      <h2>Table Data</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Count</th>
            <th>Mean</th>
            <th>Std</th>
            <th>Min</th>
            <th>25%</th>
            <th>50%</th>
            <th>75%</th>
            <th>Max</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, innerIndex) => (
                <td key={innerIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="image-container" >
                  <center>

      <img src={image1} alt="Description of the image" className="img-small" />
      <img src={image2} alt="Description of the image" className="img-small" />
      <img src={image3} alt="Description of the image" className="img-small"/>
      <img src={image4} alt="Description of the image" className="img-small"/>
                  </center>
      </div>

    </div>
  );
};

export default TableDisplay;
