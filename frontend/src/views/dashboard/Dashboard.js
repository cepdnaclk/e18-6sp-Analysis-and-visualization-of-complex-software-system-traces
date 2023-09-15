import React from 'react'
// import data from './file_info.json'
import data from '../../logStat/file_info'

import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <>
      <CRow>
        <center>
      <CCol xs={8}>
        <CCard className="mb-4">
          <CCardHeader>Number of Data Frames in Each Cluster</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Cluster 5', 'Cluster 6'],
                datasets: [
                  {
                    label: 'Number of Data Frames',
                    backgroundColor: '#008080',
                    data: [28,10,12,13,15,9,12],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      </center>
<CTable align="middle" className="mb-0 border" hover responsive>
  <CTableHead color="light">
    <CTableRow>
      <CTableHeaderCell>File Name</CTableHeaderCell>
      <CTableHeaderCell>Number of Columns</CTableHeaderCell>
      <CTableHeaderCell>Size</CTableHeaderCell>
      <CTableHeaderCell>Line Count</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {data.map((item, index) => (
      <CTableRow
        key={index}
        style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }} // Alternate row colors
      >
        <CTableDataCell>
          <div>{item.name}</div>
        </CTableDataCell>
        <CTableDataCell>
          <div>{item.columns}</div>
        </CTableDataCell>
        <CTableDataCell>
          <div>{item.size}</div>
        </CTableDataCell>
        <CTableDataCell>
          <div>{item.line_count}</div>
        </CTableDataCell>
      </CTableRow>
    ))}
  </CTableBody>
</CTable>

      </CRow>
    </>
  )
}

export default Dashboard
