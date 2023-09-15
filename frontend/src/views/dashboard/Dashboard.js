import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CCard,
  CCardHeader,
  CCardBody,
} from '@coreui/react';
import { CChartBar } from '@coreui/react-chartjs';

const Dashboard = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // Make an HTTP GET request to fetch data from the API
    axios.get('http://127.0.0.1:5000/predictions')
      .then((response) => {
        const data = response.data; // Assuming this is your response JSON

        // Extract the first element from the data object
        const firstElement = Object.values(data)[0];

        // Format the data for the chart
        const labels = Object.keys(firstElement);
        const chartData = [{
          label: 'Similarity',
          backgroundColor: '#117E8E',
          data: Object.values(firstElement),
        }];

        // Update the chartData state with the formatted data
        setChartData({ labels, datasets: chartData });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <CCard className="mb-4" style={{ width: '80%' }}> {/* Adjust the width */}
        <CCardHeader>Log Clusters</CCardHeader>
        <CCardBody>
          <CChartBar
            data={chartData}
            labels="Similarity"
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Dashboard;
