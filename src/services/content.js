import YAML from 'yaml'

// Vite 在构建时自动发现所有 Markdown 文件。
// eager: true 表示在模块加载时直接获取文件内容。
const modules = import.meta.glob('../posts/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parseMarkdownFile(path, raw) {
  const match = raw.match(
    /^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/
  )

  const metadata = match ? YAML.parse(match[1]) ?? {} : {}
  const content = match ? raw.slice(match[0].length) : raw

  const filename = path.split('/').pop()
  const slug = filename.replace(/\.md$/i, '')

  return {
    slug,
    title: metadata.title ?? slug,
    date: metadata.date ?? '',
    category: metadata.category ?? '未分类',
    tags: Array.isArray(metadata.tags) ? metadata.tags : [],
    description: metadata.description ?? '',
    published: metadata.published !== false,
    content,
  }
}

export const posts = Object.entries(modules)
  .map(([path, raw]) => parseMarkdownFile(path, raw))
  .filter(post => post.published)
  .sort((a, b) => String(b.date).localeCompare(String(a.date)))

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug)
}

export function getPostsByCategory(category) {
  return posts.filter(post => post.category === category)
}

export function getCategories() {
  return [...new Set(posts.map(post => post.category))]
}
