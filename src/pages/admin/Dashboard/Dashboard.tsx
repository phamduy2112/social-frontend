import React from 'react'
import FeatureAdmin from './component/FeatureAdmin'
import DashboardCharts from './component/ChartDashboard'
import { TableDemo } from './component/Table'

function Dashboard() {
  return (
    <div>
         <FeatureAdmin/>
    <DashboardCharts/>
    <TableDemo/>
    </div>
  )
}

export default Dashboard