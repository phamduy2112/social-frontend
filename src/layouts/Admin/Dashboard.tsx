import { AppSidebar } from '@/components/app-sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import ManageComments from '@/pages/admin/AdminComment/AdminComment'
import AdminReport from '@/pages/admin/AdminReport/AdminReport'
import AdminUser from '@/pages/admin/AdminUser/AdminUser'
import DashboardCharts from '@/pages/admin/Dashboard/component/ChartDashboard'
import FeatureAdmin from '@/pages/admin/Dashboard/component/FeatureAdmin'
import { TableDemo } from '@/pages/admin/Dashboard/component/Table'
import React from 'react'

function Dashboard() {
  return (
    <SidebarProvider >
    <AppSidebar />
    <main className=' w-[100%] h-[100vh]'>
      <div className='bg-zinc-900 border-b border-white w-[100%] h-[3.5rem]'>
      <div className='py-[.5rem] px-[3rem] text-white flex justify-between items-center'>
        <SidebarTrigger />
      <div>
      </div>
      
      <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      </div>
        </div>
    <div className='bg-zinc-800 border border-zinc-600 w-[100%] h-[100%]  px-[2rem] py-[2rem]'>
    {/* <Dashboard/>
     */}
     <ManageComments/>
    </div>
    </main>
  </SidebarProvider>
  )
}

export default Dashboard