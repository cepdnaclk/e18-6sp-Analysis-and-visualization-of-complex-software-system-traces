import React from 'react'
// import data from './file_info.json'
import data from '../../logStat/file_info'

import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Dashboard = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <>
      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Github Repository</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  datasets: [
                    {
                      label: 'GitHub Commits',
                      backgroundColor: '#f87979',
                      data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                    },
                  ],
                }}
                labels="months"
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Log Types</CCardHeader>
            <CCardBody>
              <CChartLine
                data={{
                  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  datasets: [
                    {
                      label: 'INFO',
                      backgroundColor: 'rgba(220, 220, 220, 0.2)',
                      borderColor: 'rgba(220, 220, 220, 1)',
                      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                      pointBorderColor: '#fff',
                      data: [random(), random(), random(), random(), random(), random(), random()],
                    },
                    {
                      label: 'WARNING',
                      backgroundColor: 'rgba(151, 187, 205, 0.2)',
                      borderColor: 'rgba(151, 187, 205, 1)',
                      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                      pointBorderColor: '#fff',
                      data: [random(), random(), random(), random(), random(), random(), random()],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>All time log count</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                data={{
                  labels: ['TRACE', 'DEBUG', 'INFO', 'ERROR'],
                  datasets: [
                    {
                      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                      data: [40, 20, 80, 10],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Today log count</CCardHeader>
            <CCardBody>
              <CChartPie
                data={{
                  labels: ['WARN', 'ERROR', 'DEBUG'],
                  datasets: [
                    {
                      data: [300, 50, 100],
                      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
