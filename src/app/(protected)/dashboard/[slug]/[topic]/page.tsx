import TopicBar from '@/components/global/topicbar'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='flex flex-1 flex-col'>
        <TopicBar/>
    </div>
  )
}

export default Page