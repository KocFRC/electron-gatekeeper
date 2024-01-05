import React from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function RWGateKeeper({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default RWGateKeeper
