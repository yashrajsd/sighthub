import React from 'react'
import SubscriptionCard from '../subscription-card'
import { Bot, ChartNoAxesColumn } from 'lucide-react'

type Props = {
    slug?: string
}

const SideBar = ({slug}: Props) => {
  return (
    <div className='hidden lg:block w-64 font-aeonik relative border-r-[#3F3F46] h-full flex flex-col justify-between border-r-[1px] '>
        <div className='flex flex-col mb-[2rem] p-4'>
            <h3 className='font-bold '>Dashboard</h3>
            <ul className='flex flex-col gap-3 py-[1rem] text-[0.9rem]'>
                <li className='hover:bg-[#2D2D36] cursor-pointer transition duration-300 rounded-full py-2'>
                    <span className='flex items-center gap-1 px-2'>
                    <ChartNoAxesColumn size={21}/>
                    <p className='px-2'>Insights</p>
                    </span>
                </li>
                <li className='hover:bg-[#2D2D36] cursor-pointer px-2 transition duration-300  rounded-full py-2'>
                    <span className='flex items-center gap-1'>
                        <Bot  size={21}/>
                        <p className='px-2'>Chatbot</p>
                    </span>
                </li>
            </ul>
        </div>
        <div className='absolute bottom-0 flex-1 p-4 flex justify-center items-center'>
        <SubscriptionCard/>
        </div>
    </div>
  )
}

export default SideBar