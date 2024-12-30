import { Sparkles } from 'lucide-react'
import React from 'react'

type Props = {

}

const SubscriptionCard = (props: Props) => {
  return (
    <div className='border-[1px] border-[#3F3F46] flex flex-col gap-3 rounded-lg p-4'>
        <div className='flex gap-2 items-center'>
            <Sparkles className='text-[#483FFF]' size={18}/>
            <p className='text-sm font-bold'>Upgrade to premium</p>
        </div>
        <p className='text-[0.6rem]'>
        Get advance ai features for chatbots and better insights
        </p>
        <button className='rounded-full w-full p-2 text-black bg-white font-semibold text-[0.8rem]'>
            Upgrade now
        </button>
    </div>
  )
}

export default SubscriptionCard