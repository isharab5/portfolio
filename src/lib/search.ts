export type SearchDocument = {
  id: string
  title: string
  subtitle?: string
  category: string
  path: string
  searchText: string
}

export type SearchResult = SearchDocument & {
  score: number
  snippet: string
}

function normalize(text: string) {
  return text.toLowerCase()
}

export function collectText(value: unknown): string {
  if (typeof value === 'string') return value
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) return value.map(collectText).join(' ')
  if (value && typeof value === 'object') {
    return Object.values(value).map(collectText).join(' ')
  }
  return ''
}

function tokenize(query: string) {
  return normalize(query)
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length >= 2)
}

function buildSnippet(text: string, tokens: string[]) {
  const lower = normalize(text)
  for (const token of tokens) {
    const index = lower.indexOf(token)
    if (index === -1) continue

    const start = Math.max(0, index - 60)
    const end = Math.min(text.length, index + token.length + 80)
    const prefix = start > 0 ? '…' : ''
    const suffix = end < text.length ? '…' : ''
    return `${prefix}${text.slice(start, end).replace(/\s+/g, ' ').trim()}${suffix}`
  }

  return text.slice(0, 140).replace(/\s+/g, ' ').trim() + (text.length > 140 ? '…' : '')
}

export function searchDocuments(
  documents: SearchDocument[],
  query: string,
  limit = 12,
): SearchResult[] {
  const tokens = tokenize(query)
  if (tokens.length === 0) return []

  return documents
    .map((doc) => {
      const haystack = normalize(`${doc.title} ${doc.subtitle ?? ''} ${doc.searchText}`)
      let score = 0

      for (const token of tokens) {
        if (normalize(doc.title).includes(token)) score += 4
        if (doc.subtitle && normalize(doc.subtitle).includes(token)) score += 2
        if (haystack.includes(token)) score += 1
      }

      return {
        ...doc,
        score,
        snippet: buildSnippet(doc.searchText || doc.title, tokens),
      }
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit)
}
