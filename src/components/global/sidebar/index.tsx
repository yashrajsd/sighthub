import React from 'react'
import SubscriptionCard from '../subscription-card'
import { Bot, ChartNoAxesColumn } from 'lucide-react'
import { SIDEBAR_MENU } from '@/constants/pageconst'
import Link from 'next/link'

type Props = {
    slug?: string
}

const SideBar = ({ slug }: Props) => {
    return (
        <div className='hidden lg:block w-64 font-aeonik relative border-r-[#3F3F46] h-full flex flex-col justify-between border-r-[1px] '>
            <div className='flex flex-col p-4'>
                <h3 className='font-bold '>Dashboard</h3>
                <ul className='flex flex-col gap-3 py-[1rem] text-[0.9rem]'>
                    {
                        SIDEBAR_MENU.map((item) => (
                            (
                                <Link href={`/dashboard/yashrajsd`} key={item.id} className='hover:bg-[#2D2D36] cursor-pointer transition duration-300 rounded-full py-2'>
                                    <span className='flex items-center gap-1 px-3'>
                                        {item.icon}
                                        <p className='px-2'>{item.label}</p>
                                    </span>
                                </Link>
                            )
                        ))
                    }
                </ul>
            </div>
            <div className='px-2 flex justify-center items-center'>
                <hr className='w-[80%] border-[#3F3F46]' />
            </div>
            <div className='absolute bottom-0 flex-1 p-4 flex justify-center items-center'>
                <SubscriptionCard />
            </div>
        </div>
    )
}

export default SideBar