import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
} from '@coreui/react';
import { CChartBar, CChartScatter } from '@coreui/react-chartjs';

const Dashboard = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [scatterData, setScatterData] = useState({ datasets: [] });

  useEffect(() => {
    // Make an HTTP GET request to fetch data from the API
    axios
      .get('http://127.0.0.1:5000/predictions')
      .then((response) => {
        if (response && response.data) {
          const data = response.data;
          const firstElement = Object.values(data)[0];

          if (firstElement) {
            const labels = Object.keys(firstElement);
            const chartData = [
              {
                label: 'Similarity',
                backgroundColor: '#117E8E',
                data: Object.values(firstElement),
              },
            ];

            setChartData({ labels, datasets: chartData });

            const scatterDataset = {
              label: 'Cluster Visualization',
              backgroundColor: '#FF6384',
              data: [{ x: 1, y: 2 }, { x: 5, y: 7 }], // Your scatter data points
            };

            setScatterData({ datasets: [scatterDataset] });
          } else {
            console.error('No data available in the response.');
          }
        } else {
          console.error('Invalid response format.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <CRow>
        <CCol md={6}>
          <CCard className="mb-4">
            <CCardHeader>Log Clusters (Bar Chart)</CCardHeader>
            <CCardBody>
              <CChartBar data={chartData} labels="Similarity" />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md={6}>
          <CCard className="mb-4">
            <CCardHeader>Cluster Visualization (Scatter Plot)</CCardHeader>
            <CCardBody>
              <CChartScatter data={scatterData} labels="Scatter Data" />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
