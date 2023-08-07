import React from 'react'
import Head from 'next/head'

const HeadComp = ({title}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="BLOCKF3ST is an annual developers, creatives, digital creators, traders festival that caters to the Web3 community." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
    </Head>
  )
}

export default HeadComp
