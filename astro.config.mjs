// @ts-check
import { shell } from '@chirag127/astro-shell/shell'

export default shell({
  site: 'https://janaushdhi.oriz.in',
  base: process.env.PUBLIC_BASE_PATH ?? '/',
  includeMdx: false,
})
