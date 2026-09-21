import { Metadata } from 'next'
import EngagementModelPage from '@/app/_components/engagement/engagement-model-page'
import { engagementModels } from '@/constants/engagement'

export const metadata: Metadata = {
  title: 'Software Outsourcing Services',
  description: engagementModels['software-outsourcing'].description,
}

export default function SoftwareOutsourcingPage() {
  return <EngagementModelPage content={engagementModels['software-outsourcing']} />
}
