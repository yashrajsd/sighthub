import { Brain, ChartNoAxesCombined, EqualApproximately } from "lucide-react"
import { v4 as uuid } from 'uuid'

// props
type sectiontypeprops = {
    id: string
    label: string
    type: string
    icon: React.ReactNode
    description: string
}


export type component = {
    id: string,
    type: string,
    data: JSON
}


export const SECTION_TYPES: sectiontypeprops[] = [
    {
        id: uuid(),
        label: "AI Insight",
        description: "Generate AI-powered insights to uncover trends and improve performance",
        type: "insight",
        icon: <Brain size={19} color='#7112FF' />
    },
    {
        id: uuid(),
        label: "Graph",
        type: "graph",
        description: "Visualize your data with dynamic, AI-driven graphs for better analysis",
        icon: <ChartNoAxesCombined color='#12FFD8' size={19}/>
    },
    {
        id: uuid(),
        label: "Saved",
        type: "saved",
        description: "Add already saved components to the section",
        icon: <EqualApproximately color='#483FFF' size={19}/>
    }
]