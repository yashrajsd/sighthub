import { Bot, ChartNoAxesColumn } from 'lucide-react'
import {v4 as uuid} from 'uuid'

type SidebarProps={
    id:string,
    label:string,
    icon:React.ReactNode
}


export const SIDEBAR_MENU:SidebarProps[]=[
    {
        id:uuid(),
        label:'Insight',
        icon:<ChartNoAxesColumn size={21}/>
    },
    {
        id:uuid(),
        label:'Chatbot',
        icon:<Bot size={21}/>
    }
]