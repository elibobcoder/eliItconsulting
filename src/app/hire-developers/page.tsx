import { Metadata } from 'next'
import HireDevelopersPage from './hire-developers-page'

export const metadata: Metadata = {
  title: 'Hire Software Developers',
  description:
    'Add senior software developers to your team through staff augmentation, a dedicated team, or a fully outsourced project.',
}

export default function Page() {
  return <HireDevelopersPage />
}
