'use client'
import ComponentPopup from '@/components/global/component-popup'
import CreateSection from '@/components/global/create-section'
import TopicBar from '@/components/global/topicbar'
import { Info, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'

type Props = {}

const Page = (props: Props) => {
    const [section, setSection] = useState<React.ReactNode[]>([]);
    const [addSection,setAddSection] = useState(false);
    const [creating,setCreating] = useState(false);
    const [sectionType,setSectionType] = useState<string>('')

    useEffect(()=>{
        if(sectionType){
            setCreating(true)
        }
    },[sectionType])

    return (
        <div className='flex flex-1 flex-col'>
            <TopicBar />
            {
                (!(section.length > 0) && !creating) && (
                    <div className='w-full px-8'>
                        <div className='bg-[#3B0764] flex items-center gap-3 text-[0.9rem] mt-4 border-[2px] border-[#5C1499] p-4 rounded-md text-white'>
                           <Info size={21}/> Get started by adding your first section
                        </div>
                    </div>
                )
            }
            {
                creating && (
                    <CreateSection sectionType={sectionType}/>
                )
            }
            <span className={`w-full relative flex ${(section.length < 1 && !creating) && ('flex-1 ')} px-8 py-4 justify-center items-center`}>
                <button disabled={creating} className='w-full h-full  flex p-4 items-center justify-center hover:bg-[#19191D] border-dashed gap-2 border-[#3F3F46] border-[1px] p-2 px-4 rounded-md' onClick={() => setAddSection(!addSection)}>
                   <Plus size={19}/> New Section
                </button>
                {!creating &&(<>{addSection && <ComponentPopup setSectionType={setSectionType}/>}</>)}
            </span>
        </div>
    )
}

export default Page