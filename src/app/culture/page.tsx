import { Metadata } from 'next'
import CulturePage from './culture-page'

export const metadata: Metadata = {
  title: 'Company Culture',
  description: 'How we work at Eli IT Consulting.',
}

export default function Page() {
  return <CulturePage />
}
