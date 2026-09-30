declare global {
  interface IBlogSection {
    id: string
    heading: string
    paragraphs: string[]
    image?: {
      src: string
      alt: string
      caption?: string
    }
    diagramId?: string
  }

  interface IBlogPost {
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    content: string[]
    sections?: IBlogSection[]
    coverImage: string
  }

  interface IBlogPostSummary {
    slug: string
    title: string
    category: string
    readTime: string
    coverImage: string
  }
}

export {}
