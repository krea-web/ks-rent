export const config = {
  matcher: '/((?!assets|_next|favicon).*)',
}

const PRERENDER_TOKEN = 'K117uki0UbcqG8PMiJyh'

const BOT_AGENTS = [
  'googlebot', 'bingbot', 'yandex', 'baiduspider',
  'facebookexternalhit', 'twitterbot', 'linkedinbot',
  'applebot', 'claudebot', 'gptbot', 'perplexitybot',
  'chatgpt-user', 'anthropic-ai', 'cohere-ai'
]

const EXTENSIONS_TO_IGNORE = [
  '.js', '.css', '.xml', '.png', '.jpg', '.jpeg',
  '.gif', '.pdf', '.ico', '.webp', '.svg', '.woff', '.woff2', '.ttf'
]

export default async function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') || ''
  const url = new URL(request.url)
  const path = url.pathname.toLowerCase()

  const isBot = BOT_AGENTS.some(bot => userAgent.toLowerCase().includes(bot))
  const isStatic = EXTENSIONS_TO_IGNORE.some(ext => path.endsWith(ext))

  if (!isBot || isStatic) return

  try {
    const prerenderUrl = `https://service.prerender.io/${request.url}`
    const response = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': PRERENDER_TOKEN,
        'User-Agent': userAgent,
      },
    })
    return new Response(response.body, {
      status: response.status,
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    })
  } catch {
    return
  }
}
