const WORDS_PER_MINUTE = 200

export const calculateReadTime = (post: { content: string[]; sections?: IBlogSection[] }): string => {
  const paragraphs = post.sections
    ? post.sections.flatMap((section) => [section.heading, ...section.paragraphs])
    : post.content
  const wordCount = paragraphs.reduce((total, paragraph) => total + paragraph.trim().split(/\s+/).length, 0)
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
  return `${minutes} min read`
}
