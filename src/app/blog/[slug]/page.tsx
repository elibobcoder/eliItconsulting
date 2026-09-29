import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPost } from '@/constants/blog'
import { calculateReadTime } from '@/utils/read-time'
import BlogPostPage from './blog-post-page'

interface Params {
  params: Promise<{ slug: string }>
}

const TRENDING_COUNT = 5
const RELATED_COUNT = 4

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

  const toSummary = (p: IBlogPost) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    readTime: calculateReadTime(p.content),
  })

  const trendingPosts = [...blogPosts]
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, TRENDING_COUNT)
    .map(toSummary)

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, RELATED_COUNT)
    .map(toSummary)

  return (
    <BlogPostPage
      post={post}
      readTime={calculateReadTime(post.content)}
      trendingPosts={trendingPosts}
      relatedPosts={relatedPosts}
    />
  )
}
