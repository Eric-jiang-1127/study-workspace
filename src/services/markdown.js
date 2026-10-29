import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})

// 外部链接在新标签页打开，并增加安全属性。
const defaultLinkOpen =
  md.renderer.rules.link_open ??
  ((tokens, idx, options, env, self) =>
    self.renderToken(tokens, idx, options))

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx]
  const href = token.attrGet('href') ?? ''

  if (/^https?:\/\//i.test(href)) {
    token.attrSet('target', '_blank')
    token.attrSet('rel', 'noopener noreferrer')
  }

  return defaultLinkOpen(tokens, idx, options, env, self)
}

export function renderMarkdown(content) {
  return md.render(content)
}
