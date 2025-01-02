import React from 'react'
import General from './general'
import Specific from './specific'

type Props = {
  topicType?:"general" | "specific"
}

const InsightCreate = ({topicType}: Props) => {
  return (
    <div>
        {
          topicType==="general"?(<General/>):(<Specific/>)
        }
    </div>
  )
}

export default InsightCreate