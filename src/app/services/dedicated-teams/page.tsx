import { Metadata } from 'next'
import EngagementModelPage from '@/app/_components/engagement/engagement-model-page'
import { engagementModels } from '@/constants/engagement'

export const metadata: Metadata = {
  title: 'Dedicated Development Teams',
  description: engagementModels['dedicated-teams'].description,
}

export default function DedicatedTeamsPage() {
  return <EngagementModelPage content={engagementModels['dedicated-teams']} />
}
