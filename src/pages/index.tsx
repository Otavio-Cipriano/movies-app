import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
    </>
  )
}

export default Home
