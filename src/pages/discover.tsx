import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import tmdb from "../services/tmdb";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY


const Discover: NextPage = () => {

  useEffect(() => {
    tmdb.get(`/discover/movie?api_key=${API_KEY}`)
    .then((res) =>{
      console.log(res.data)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Discover</title>
      </Head>
      discover
    </>
  );
};

export default Discover;
