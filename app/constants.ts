import fs from 'fs'
import path from 'path'

export const PACKAGE_JSON = fs.readFileSync(
  path.resolve(__dirname, '../package.json'),
  'utf8',
)
