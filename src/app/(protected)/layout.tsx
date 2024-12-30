import Navbar from '@/components/global/navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className='w-full flex  flex-col min-h-screen'>
        {/* Navbar */}
        <Navbar/>
        <div className='flex flex-1'>
        {children}
        </div>
    </div>
  )
}

export default Layout