import SortBy from "./sortBy";

interface DiscoverFilter{
    sort_by?: string,
    with_genres?: string
    page?: number | 1
}

export default DiscoverFilter;