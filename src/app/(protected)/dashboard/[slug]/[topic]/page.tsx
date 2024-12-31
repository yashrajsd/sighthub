'use client'
import TopicBar from '@/components/global/topicbar'
import React, { useState } from 'react'

type Props = {}

const Page = (props: Props) => {
    const [section,setSection] = useState([]);

    return (
        <div className='flex flex-1 flex-col'>
            <TopicBar />
            <span className={`w-full flex ${section.length<1 && ('flex-1 p-8')} justify-center items-center`}>
                <button className='w-full h-full flex items-center justify-center hover:bg-[#19191D] border-dashed gap-2 border-[#3F3F46] border-[1px] p-2 px-4 rounded-md'>
                    New Section
                </button>
            </span>
        </div>
    )
}

export default Page