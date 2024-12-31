import { Share } from 'lucide-react'
import React from 'react'

type Props = {}

const TopicBar = (props: Props) => {
  return (
    <div className='flex justify-between items-center font-aeonik w-full h-fit border-b-[1px] border-b-[#3F3F46] py-4 px-8'>
        <span >
            {/* title here */}
            <p>
            Reel insight
            </p>
            <p className='text-[0.8rem] mt-1 text-[#C3C3C3]'>
                created at 23/2/2024
            </p>
        </span>
        <span>
            <button className='flex items-center text-[0.8rem] gap-2 bg-[#483FFF] p-2 px-4 rounded-md'>
                <Share size={18}/> Share
            </button>
        </span>
    </div>
  )
}

export default TopicBar