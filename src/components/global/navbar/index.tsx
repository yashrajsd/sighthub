import React from 'react'
import {Bell, BookOpen, ChevronDown} from 'lucide-react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-full  border-b-[1px] border-b-[#3F3F46]'>
        <div className='flex justify-between items-center py-4 px-8 w-full'>
            <span className='flex items-center gap-6'>
                <span>
                    SH
                </span>
                <span className='h-[2rem] h-[2rem] border-[#3F3F46] border-[1px]'/>
                <span className='border-[1px] border-[#6B6B77] flex items-center gap-2 rounded-md text-[0.7rem] px-3 py-2 font-bold'>
                    <div className='rounded-full w-[1rem] h-[1rem] bg-white bg-gradient-to-b from-[#742AFF] to-[#C640FF]'/>
                    instagram / yashrajdeshmukh7
                    <ChevronDown/>
                </span>
            </span>
            <span className='flex items-center gap-6'>
                <span className='flex items-center gap-2'>
                        <BookOpen size={20}/>
                        <p className='text-[0.8rem] font-bold'>
                            docs
                        </p>
                </span>
                <span className='flex items-center gap-2'>
                    <Bell size={20}/>
                    <p className='text-[0.8rem] font-bold'>
                        notifications
                    </p>
                </span>
                <span className='h-[2rem] h-[2rem] border-[#3F3F46] border-[1px]'/>
                <span className='w-[2.5rem] h-[2.5rem] bg-[#D9D9D9] rounded-full'>

                </span>
            </span>
        </div>
    </div>
  )
}
export default Navbar