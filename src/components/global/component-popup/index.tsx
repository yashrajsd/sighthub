import { Brain, ChartNoAxesCombined } from 'lucide-react'
import React from 'react'

type Props = {}

const ComponentPopup = (props: Props) => {
  return (
    <div className='absolute z-4'>
        <div className='bg-[#2F2F2F] font-aeonik rounded-md py-4 px-6'>
            <ul className='flex flex-col gap-4'>
                <li className='flex  flex-col gap-1 cursor-pointer p-2'>
                    <p className='flex items-center gap-2'><Brain color='#7112FF' size={19}/> AI Insight</p>
                    <p className='text-[#C3C3C3] text-[0.9rem]'>Generate AI-powered insights to uncover trends and improve performance</p>
                </li>
                <hr className='border-[#555555]'/>
                <li className='flex flex-col gap-2 cursor-pointer p-2'>
                    <p className='flex items-center gap-2'><ChartNoAxesCombined color='#12FFD8' size={19}/> Graph</p>

                    <p className='text-[#C3C3C3] text-[0.9rem]'>Visualize your data with dynamic, AI-driven graphs for better analysis.</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ComponentPopup