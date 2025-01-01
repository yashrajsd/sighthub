import { SECTION_TYPES } from '@/constants/components'
import { Brain, ChartNoAxesCombined, EqualApproximately } from 'lucide-react'
import React from 'react'

type Props = {
    setSectionType: React.Dispatch<React.SetStateAction<string>>
}

const ComponentPopup = ({ setSectionType }: Props) => {
    return (
        <div className='absolute z-4'>
            <div className='bg-[#2A2A2F] shadow-xl font-aeonik rounded-lg py-4 px-6'>
                <ul className='flex flex-col gap-4'>
                    {SECTION_TYPES.map((section, index) => (
                        <React.Fragment key={section.id}>
                            <li
                                id={section.id}
                                className='flex flex-col gap-1 transition duration-300 hover:bg-[#26262D] rounded-lg cursor-pointer p-3'
                                onClick={() => setSectionType(section.type)}
                            >
                                <p className='flex items-center gap-2'>
                                    {section.icon} {section.label}
                                </p>
                                <p className='text-[#C3C3C3] text-[0.9rem]'>
                                    {section.description}
                                </p>
                            </li>
                            {index < SECTION_TYPES.length - 1 && (
                                <hr className='border-[#47474D]' />
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ComponentPopup
