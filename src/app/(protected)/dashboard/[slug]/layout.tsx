import SideBar from '@/components/global/sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className='w-full flex flex-1'>
        {/* sidebar */}
        <SideBar/>
        {/* main */}
        {children}
    </div>
  )
}

export default Layout