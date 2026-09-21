import { Metadata } from 'next'
import LegalPage from '@/app/_components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Eli IT Consulting collects, uses, and protects your information.',
}

const SECTIONS = [
  {
    heading: 'Information we collect',
    body: 'When you fill out a form on this site, such as the contact form, we collect the information you provide, like your name, email address, company, and message. We may also collect basic technical information, like browser type and pages visited, to understand how the site is used.',
  },
  {
    heading: 'How we use your information',
    body: 'We use the information you provide to respond to inquiries, discuss potential engagements, and follow up on submitted forms. We do not sell your personal information to third parties.',
  },
  {
    heading: 'Client project data',
    body: 'Information shared with us as part of a client engagement is handled according to the confidentiality terms of that engagement’s written agreement, and is not used for any purpose outside that engagement.',
  },
  {
    heading: 'Cookies',
    body: 'This site may use basic cookies or local storage to remember preferences, such as your selected color theme. These do not track you across other websites.',
  },
  {
    heading: 'Data security',
    body: 'We take reasonable measures to protect information submitted through this site, including secure handling of code repositories and access management for client engagements.',
  },
  {
    heading: 'Your rights',
    body: 'You can request that we delete personal information you’ve submitted to us by contacting hello@eliitconsulting.com.',
  },
  {
    heading: 'Changes to this policy',
    body: 'We may update this Privacy Policy from time to time. Changes take effect once posted to this page.',
  },
  {
    heading: 'Contact',
    body: 'Questions about this policy can be sent to hello@eliitconsulting.com.',
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow='Legal'
      title='Privacy'
      titleAccent='Policy.'
      updated='Last updated September 2026'
      sections={SECTIONS}
    />
  )
}
