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

          <h2>Box Plot of outliers</h2>
          <img src={image1} alt="Description of the image" className="img-small" />
          <p style={{ textAlign: 'justify' }}>
            The &apos;Box Plot of Outliers&apos; graphically represents data for five categories on the x-axis: &apos;ProcessMEM,&apos; &apos;ProcessJAVA,&apos; &apos;ProcessJavaCPU,&apos; &apos;ProcessJavaPR,&apos; and &apos;ProcessJavaW.&apos; The y-axis covers a range from 0 to 160 in increments of 20, indicating data values within this specific numerical range. This plot uses a box-and-whisker format to visualize data distribution and identify potential outliers.
          </p>

          <h2>\Process(java)\MEM vs Date</h2>
          <img src={image2} alt="Description of the image" className="img-small" />
          <p style={{ textAlign: 'justify' }}>A memory usage plot depicting the performance of a Java process over time, with associated dates, offers a comprehensive view of the applications memory management. By analyzing this plot, one can discern patterns in memory consumption, pinpoint potential memory leaks through sudden and persistent spikes, and recognize the effects of garbage collection events on memory utilization. This visualization is instrumental in assessing the overall health and efficiency of the Java application, aiding in the identification and resolution of memory-related issues.</p>

          <h2>\Process(java)\CPU vs Date</h2>
          <img src={image3} alt="Description of the image" className="img-small" />
          <p style={{ textAlign: 'justify' }}>A CPU usage plot, accompanied by timestamps, provides a valuable perspective on the performance of a Java process. This plot allows for the analysis of CPU utilization trends over time, offering insights into how efficiently the Java application utilizes computational resources. By examining this plot, one can identify patterns in CPU usage, such as periods of high or low activity, potential bottlenecks, or excessive resource consumption. This visualization is instrumental in evaluating the applications overall computational efficiency and assists in diagnosing and optimizing performance-related issues.</p>

          <h2>K-Means Clustering</h2>
          <img src={image4} alt="Description of the image" className="img-small" />
        </center>
      </div>

    </div>
  );
};

export default TableDisplay;
