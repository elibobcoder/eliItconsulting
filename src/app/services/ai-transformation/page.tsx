import { Metadata } from 'next'
import EngagementModelPage from '@/app/_components/engagement/engagement-model-page'
import { engagementModels } from '@/constants/engagement'

export const metadata: Metadata = {
  title: 'AI Transformation Services',
  description: engagementModels['ai-transformation'].description,
}

export default function AiTransformationPage() {
  return <EngagementModelPage content={engagementModels['ai-transformation']} />
}
