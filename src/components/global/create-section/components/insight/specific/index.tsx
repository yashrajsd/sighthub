import { Info, Plus, Sparkles, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import Metrics from './metrics'

type Props = {}

export type MetricProp = {
    icon:React.ReactNode,
    label:string
}

const Specific = (props: Props) => {
    const [metrics,setMetrics] = useState<MetricProp[]>([])
    const [selectingM,setSelectingM] = React.useState(false)
    return (
        <div className='border-[#47474D] overflow-hidden relative font-aeonik flex flex-col items-center justify-center rounded-lg border-[1px] py-4 px-6'>
            <div className='flex w-full justify-between items-center'>
                <span>
                    <div className='flex items-center gap-2'><Sparkles size={20} />Insights</div>
                    <p className='text-[0.9rem] text-[#C3C3C3]'>Get better insight about your content with the power of AI</p>
                </span>
                <Trash2 size={20} className='cursor-pointer'/>
            </div>
            <hr className='border-[#47474D] my-6 w-full'/>
            <div  className='w-full rounded-md'>
                <span className='text-white flex items-center gap-2 text-[0.8rem]'>
                   <Info size={19}/><p>The metrics simplifies the prompt and helps you to understand the content better</p>
                </span>
            </div>
            <div className='w-full mb-12 flex gap-4 flex-wrap'>
                {metrics.map((metric,index)=>(
                    <div key={index} className='flex items-center gap-2 mt-4'>
                        {metric.icon}
                        <span>{metric.label}</span>
                    </div>
                ))}
                <button className=' border-[1px]  flex items-center gap-2 border-[#47474D] border-dashed p-2 px-4 rounded-md mt-4' onClick={()=>setSelectingM(!selectingM)}>
                    <Plus size={19}/> Add metric                   
                </button>
            </div>
            <div className='flex w-full justify-end mt-4 '>
                <button className='border-[1px] border-[#47474D] p-2 px-4 rounded-md'>
                    Generate
                </button>
            </div>
            {selectingM && <Metrics setSelectingM={setSelectingM} setMetrics={setMetrics}/>}
        </div>
    )
}

export default Specific