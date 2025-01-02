import { AtSign, Brain, ChartNoAxesCombined, EqualApproximately, ThumbsUp} from "lucide-react"
import { v4 as uuid } from 'uuid'
import { 
  Box, 
  Calendar, 
  Hash, 
  MessageCircle, 
  Layers, 
  Sliders, 
  Heart, 
  Share2, 
  Save, 
  Eye, 
  TrendingUp, 
  BarChart2, 
  Video, 
  Percent, 
  Smile, 
  Compass, 
  MapPin, 
  Activity, 
  Image, 
  Mic, 
  Headphones, 
  MousePointer 
} from 'lucide-react';


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


export const METRICS_CATEGORIES = {
  GeneralInputs: [
    { id: "post_id", label: "Post/Reel ID", icon: <Box size={16} /> ,type:"free"},
    { id: "post_type", label: "Post Type", icon: <Layers size={16} /> ,type:"free"},
    { id: "posting_date", label: "Date of Posting", icon: <Calendar size={16} /> ,type:"free"},
    { id: "caption", label: "Caption", icon: <MessageCircle size={16} /> ,type:"free"},
    { id: "hashtags", label: "Hashtags", icon: <Hash size={16} /> ,type:"free"},
    { id: "mentions", label: "Mentions", icon: <AtSign size={16} /> ,type:"free"},
    { id: "post_category", label: "Post Category", icon: <MapPin size={16} /> ,type:"free"},
    { id: "post_objective", label: "Post Objective", icon: <Sliders size={16} /> ,type:"free"},
  ],
  PerformanceMetrics: [
    { id: "likes", label: "Likes", icon: <Heart size={16} /> , type:"free"},
    { id: "comments", label: "Comments", icon: <MessageCircle size={16} /> , type:"free"},
    { id: "shares", label: "Shares", icon: <Share2 size={16} /> , type:"free"},
    { id: "saves", label: "Saves", icon: <Save size={16} /> , type:"free"},
    { id: "reach", label: "Reach", icon: <Eye size={16} /> , type:"free"},
    { id: "impressions", label: "Impressions", icon: <TrendingUp size={16} /> , type:"free"},
    { id: "engagement_rate", label: "Engagement Rate", icon: <BarChart2 size={16} /> , type:"free"},
    { id: "video_views", label: "Video Views", icon: <Video size={16} /> , type:"free"},
    { id: "completion_rate", label: "Completion Rate", icon: <Percent size={16} /> , type:"free"},
  ],
  AudienceInformation: [
    { id: "audience_age", label: "Audience Age Group", icon: <Smile size={16} /> , type:"premium"},
    { id: "geographic_region", label: "Geographic Region", icon: <Compass size={16} /> , type:"premium"},
    { id: "audience_interests", label: "Audience Interests", icon: <Activity size={16} /> , type:"premium"},
    { id: "audience_behavior", label: "Audience Behavior", icon: <TrendingUp size={16} /> , type:"premium"},
  ],
  ContentAnalysis: [
    { id: "visual_details", label: "Visual Content Details", icon: <Image size={16} /> , type:"premium"},
    { id: "tone_style", label: "Tone and Style", icon: <Mic size={16} /> , type:"premium"},
    { id: "audio_usage", label: "Audio Usage", icon: <Headphones size={16} /> , type:"premium"},
    { id: "call_to_action", label: "Call to Action", icon: <MousePointer size={16} /> , type:"premium"},
    { id: "sentiment", label: "Audience Sentiment", icon: <Smile size={16} /> , type:"premium"},
    { id: "kpi_priority", label: "KPI Prioritization", icon: <Sliders size={16} /> , type:"premium"},
  ],
};
