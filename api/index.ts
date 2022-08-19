/**
 * @docs https://vercel.com/docs/runtimes#official-runtimes/node-js/using-type-script-with-the-node-js-runtime
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'

interface Item {
  name: string
  url: string
}
const list: Item[] = [
  {
    name: `HTML`,
    url: `html`,
  },
  {
    name: `JSON`,
    url: `json`,
  },
]

const createContent = () => {
  return `<ul>${list
    .map(v => `<li><a href="/api/${v.url}" target="_blank">${v.name}</a><li>`)
    .join(``)}</ul>`
}

const style = `padding: 40px 20px; max-width: 60ch; font-size: 1.2em; margin: 0 auto;`

const html = `
  <head>
    <title>vercel serverless</title>
  </head>
  <body>
    <div style="${style}">
    ${createContent()}
    </div>
  </body>
`

export default function (req: VercelRequest, res: VercelResponse) {
  res.send(html)
}
