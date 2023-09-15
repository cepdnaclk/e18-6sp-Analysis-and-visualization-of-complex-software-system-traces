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
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow>
              {/* <CTableHeaderCell className="text-center">
                <CIcon icon={cilPeople} />
              </CTableHeaderCell> */}
              <CTableHeaderCell>File Name</CTableHeaderCell>
              <CTableHeaderCell>Number of Columns</CTableHeaderCell>
              <CTableHeaderCell>Size</CTableHeaderCell>
              <CTableHeaderCell>Line Count</CTableHeaderCell>
              {/* <CTableHeaderCell>Activity</CTableHeaderCell> */}
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.map((item, index) => (
              <CTableRow v-for="item in tableItems" key={index}>
                {/* <CTableDataCell className="text-center">
                  <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                </CTableDataCell> */}
                <CTableDataCell>
                  <div>{item.name}</div>
                  {/* <div className="small text-medium-emphasis">
                    <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                    {item.user.registered}
                  </div> */}
                </CTableDataCell>
                <CTableDataCell>
                  <div>{item.columns}</div>
                  {/* <CIcon size="xl" icon={item.country.flag} title={item.country.name} /> */}
                </CTableDataCell>
                <CTableDataCell>
                  <div>{item.size}</div>
                  {/* <div className="clearfix">
                    <div className="float-start">
                      <strong>{item.usage.value}%</strong>
                    </div>
                    <div className="float-end">
                      <small className="text-medium-emphasis">{item.usage.period}</small>
                    </div>
                  </div> */}
                  {/* <CProgress thin color={item.usage.color} value={item.usage.value} /> */}
                </CTableDataCell>
                <CTableDataCell>
                  <div>{item.line_count}</div>
                  {/* <CIcon size="xl" icon={item.payment.icon} /> */}
                </CTableDataCell>
                {/* <CTableDataCell>
                  <div className="small text-medium-emphasis">Last login</div>
                  <strong>{item.activity}</strong>
                </CTableDataCell> */}
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CRow>
    </>
  )
}

export default Dashboard
