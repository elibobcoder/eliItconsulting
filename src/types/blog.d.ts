declare global {
  interface IBlogPost {
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    content: string[]
  }
}

export {}
