import React from 'react'
import SubscriptionCard from '../subscription-card'

type Props = {
    slug?: string
}

const SideBar = ({slug}: Props) => {
  return (
    <div className='hidden lg:block w-64 p-4 border-r-[#3F3F46] flex flex-col justify-between border-r-[1px] h-full'>
        <div className='flex flex-col'>
            
        </div>
        <div>
            <SubscriptionCard/>
        </div>
    </div>
  )
}

export default SideBar