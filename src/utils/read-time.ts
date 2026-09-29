const WORDS_PER_MINUTE = 200

export const calculateReadTime = (content: string[]): string => {
  const wordCount = content.reduce((total, paragraph) => total + paragraph.trim().split(/\s+/).length, 0)
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
  return `${minutes} min read`
}
