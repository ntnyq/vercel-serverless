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
    .map(v => `<li><a href="/api/${v.url}" target="_blank">${v.name}</a></li>`)
    .join(``)}</ul>`
}

const style = `
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.container ul {
  position: relative;
  padding: 30px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
}
`

const html = `
  <head>
    <title>vercel serverless</title>
    <style>${style}</style>
  </head>
  <body>
    <div class="container">
      ${createContent()}
    </div>
  </body>
`

export default function (req: VercelRequest, res: VercelResponse) {
  res.send(html)
}
