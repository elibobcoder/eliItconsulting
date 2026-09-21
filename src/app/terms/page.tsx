import { Metadata } from 'next'
import LegalPage from '@/app/_components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern use of the Eli IT Consulting website and services.',
}

const SECTIONS = [
  {
    heading: 'Agreement to terms',
    body: 'By accessing this website or engaging Eli IT Consulting for services, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site or our services.',
  },
  {
    heading: 'Services',
    body: 'Eli IT Consulting provides software development and IT consulting services, including staff augmentation, dedicated teams, software outsourcing, and related engagements. The specific scope, deliverables, timeline, and fees for any engagement are defined in a separate written agreement (a statement of work or contract) between Eli IT Consulting and the client.',
  },
  {
    heading: 'Use of this website',
    body: 'This website and its content are provided for general informational purposes. You agree not to misuse the site, attempt to gain unauthorized access to it, or use it in a way that could damage, disable, or impair its functioning.',
  },
  {
    heading: 'Intellectual property',
    body: 'Unless otherwise agreed in writing, all content on this website, including text, graphics, logos, and design, is the property of Eli IT Consulting and may not be reproduced or used without permission. Intellectual property created during a client engagement is governed by the terms of that engagement’s written agreement.',
  },
  {
    heading: 'Confidentiality',
    body: 'We treat client information shared during an engagement as confidential and typically formalize this through a mutual non-disclosure agreement (NDA) prior to the start of any project.',
  },
  {
    heading: 'Limitation of liability',
    body: 'This website and its content are provided "as is" without warranties of any kind. To the fullest extent permitted by law, Eli IT Consulting is not liable for any indirect, incidental, or consequential damages arising from use of this website.',
  },
  {
    heading: 'Changes to these terms',
    body: 'We may update these Terms of Service from time to time. Changes take effect once posted to this page.',
  },
  {
    heading: 'Contact',
    body: 'Questions about these terms can be sent to hello@eliitconsulting.com.',
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow='Legal'
      title='Terms of'
      titleAccent='Service.'
      updated='Last updated September 2026'
      sections={SECTIONS}
    />
  )
}
