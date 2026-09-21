import { Metadata } from 'next'
import FaqPage from './faq-page'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Answers to common questions about working with Eli IT Consulting.',
}

export default function Page() {
  return <FaqPage />
}
