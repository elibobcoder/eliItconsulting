import { Metadata } from 'next'
import TopTalentPage from './top-talent-page'

export const metadata: Metadata = {
  title: 'Our Vetting Standard',
  description:
    'Every engineer who joins a project goes through a rigorous, multi-stage vetting process for technical depth and reliable collaboration.',
}

export default function Page() {
  return <TopTalentPage />
}
