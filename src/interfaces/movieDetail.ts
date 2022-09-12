import Company from "./company";
import Country from "./countries";
import Genre from "./genre";
import Language from "./language";

interface MovieDetail{
    adult?: boolean,
    backdrop_path?: string | null,
    belongs_to_collection?: null | object,
    budget?: number,
    genres?: Genre[],
    homepage?: string | null,
    id?: number,
    imdb_id?: string | null,
    original_language?: string,
    original_title?: string,
    overview?: string | null,
    popularity?: number,
    poster_path?: string | null,
    production_companies?: Company[],
    production_countries?: Country[],
    release_date?: string,
    revenue?: number,
    runtime?: number | null,
    spoken_languages?: Language[],
    status?: string,
    tagline: string | null,
    title?: string,
    video?: boolean,
    vote_average?: number,
    vote_count?: number
}

export default MovieDetail;