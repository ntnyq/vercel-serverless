/**
 * @docs https://vercel.com/docs/runtimes#official-runtimes/node-js/using-type-script-with-the-node-js-runtime
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import { PACKAGE_JSON } from '../app/constants'

export default function (req: VercelRequest, res: VercelResponse) {
  res.json(PACKAGE_JSON)
}
