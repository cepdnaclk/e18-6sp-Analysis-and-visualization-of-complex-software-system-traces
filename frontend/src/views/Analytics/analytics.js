import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CCard, CCardHeader, CCardBody, CRow, CCol } from '@coreui/react'
import { CChartBar, CChartScatter } from '@coreui/react-chartjs'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import image1 from './image1.png'
import image4 from './image4.png'

import './analytics.css' // Import a CSS file for custom styles

const DescriptionComponent = () => {
  return (
    <div className="description">
      <p>
        This approach represents an intermediate step between log hashing and regular expressions.{' '}
      </p>
    </div>
  )
}

const DescriptionComponent2 = () => {
  return (
    <div className="description">
      <p>
        Employing a brute-force string comparison method, comparing each log message with others.,
        two messages are considered part of different templates if they differ by at least 20% of
        their content, determined by the total length of common non-intersecting substrings larger
        than three characters{' '}
      </p>
    </div>
  )
}

const Dashboard = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] })
  const [scatterData, setScatterData] = useState({ datasets: [] })

  useEffect(() => {
    // Make an HTTP GET request to fetch data from the API
    axios
      .get('http://127.0.0.1:5000/predictions')
      .then((response) => {
        if (response && response.data) {
          const data = response.data
          const firstElement = Object.values(data)[0]

          if (firstElement) {
            const labels = Object.keys(firstElement)
            const chartData = [
              {
                label: 'Similarity',
                backgroundColor: '#117E8E',
                data: Object.values(firstElement),
              },
            ]

            setChartData({ labels, datasets: chartData })

            const scatterDataset = {
              label: 'Cluster Visualization',
              backgroundColor: '#FF6384',
              data: [
                { x: -0.16628224576531744, y: -0.46752753839620764 },
                { x: 0.021862855125790885, y: 0.4416279852040878 },
                { x: 0.5298954069774545, y: -0.001482104970024194 },
                { x: -0.5492630085936232, y: 0.573742695464002 },
                { x: -0.44202036535002687, y: -0.5339749522107007 },
                { x: 0.6058073576057241, y: -0.012386085091157536 },
              ],
            }

            setScatterData({ datasets: [scatterDataset] })
          } else {
            console.error('No data available in the response.')
          }
        } else {
          console.error('Invalid response format.')
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <>
      <CRow>
        <CCol md={12}>
          <div className="topic-heading-fancy">Template Based Approach</div>
          <center>
            <Link to="/template">
              <button className="route-button">Go to Template</button>
            </Link>
          </center>
          <DescriptionComponent />
        </CCol>
      </CRow>
      <CRow>
        <center>
          <CCol md={9}>
            <CCard className="mb-4" style={{ height: '500px' }}>
              <CCardHeader>Log Clusters</CCardHeader>
              <CCardBody>
                <CChartBar data={chartData} labels="Similarity" />
              </CCardBody>
            </CCard>
          </CCol>
        </center>
      </CRow>
      <DescriptionComponent2 />

      <CRow>
        <center>
          <CCol md={9}>
            <center>
              <img src={image1} alt="Description of the " />
              <h2>Template Dendogram</h2>
              <img src={image4} alt="Description of the" className="img-small" />
            </center>
          </CCol>
        </center>
      </CRow>
    </>
  )
}

export default Dashboard
