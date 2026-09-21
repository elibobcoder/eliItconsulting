import { Metadata } from 'next'
import BlogIndexPage from './blog-index-page'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical writing on engagement models, team strategy, and AI adoption for growing businesses.',
}

export default function Page() {
  return <BlogIndexPage />
}
