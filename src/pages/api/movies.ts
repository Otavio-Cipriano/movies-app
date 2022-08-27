import type { NextApiRequest, NextApiResponse } from 'next'
import tmdb from '../../services/tmdb'

const API_KEY = process.env.API_KEY

const movies = (req: NextApiRequest, res: NextApiResponse) => {
   try{
    tmdb
    .get(`/discover/movie?api_key=${API_KEY}`)
   }catch(err){}
}

export default movies