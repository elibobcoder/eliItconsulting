import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPost } from '@/constants/blog'
import BlogPostPage from './blog-post-page'

interface Params {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()
  return <BlogPostPage post={post} />
}
