import { Pencil, Plus, Settings2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const sampleData=[
  {id:1,topic:'Topic 1',description:'This is a description of topic 1',date:'2021-09-01'},
  {id:2,topic:'Topic 2',description:'This is a description of topic 2',date:'2021-09-02'},
  {id:3,topic:'Topic 3',description:'This is a description of topic 3',date:'2021-09-03'},
]

const Page = (props: Props) => {
  return (
    <div className='flex flex-1 flex-col w-full font-aeonik p-10'>
      <div className='flex justify-between h-fit items-center w-full'>
      <h1 className='text-[2rem]'>
        Insights
      </h1>
      <Link href={'/dashboard/yashrajsd/sjdkeuj'} className='bg-white flex items-center gap-2 text-[0.8rem] text-black px-6 py-3 rounded-md'>
        <Plus size={21}/> New topic
      </Link>
      </div>
      <div className='w-full flex flex-col  mt-5'>
        {sampleData.map((data)=>(
          <div key={data.id} className='border-b-[1px] border-b-[#47474D] py-7 w-[100%]  flex  w-1/3'>
            <span className='w-[50%] flex flex-col gap-2'>
              <h1 className='text-[1.2rem] font-bold'>{data.topic}</h1>
              <p className='text-[0.8rem]'>{data.description}</p>
            </span>
            <span className='w-[50%] h-full flex justify-end items-center gap-5'>
              <button>
              <Pencil size={19}/>
              </button>
              <div className='h-[50%] border-[1px] border-[#47474D]'/>
              <button>
              <Settings2 size={19}/>
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page