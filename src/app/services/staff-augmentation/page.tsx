import { Metadata } from 'next'
import EngagementModelPage from '@/app/_components/engagement/engagement-model-page'
import { engagementModels } from '@/constants/engagement'

export const metadata: Metadata = {
  title: 'Staff Augmentation Services',
  description: engagementModels['staff-augmentation'].description,
}

export default function StaffAugmentationPage() {
  return <EngagementModelPage content={engagementModels['staff-augmentation']} />
}
