import React from 'react'
import Head from 'next/head'

const HeadComp = ({title}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="Alchemy, Challenging the boundaries of possibilities with shameless brand positioning and skill presentation that drlivers extraordinary results" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        <link rel="icon" href="/logo.ico" />
    </Head>
  )
}

export default HeadComp
