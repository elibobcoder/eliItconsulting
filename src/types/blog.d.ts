declare global {
  interface IBlogPost {
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    content: string[]
    coverImage: string
  }

  interface IBlogPostSummary {
    slug: string
    title: string
    category: string
    readTime: string
  }
}

export {}
