interface iTmdbRequest{
    popularMovies:string,
    imageBase:string
}
let rooturl="https://api.themoviedb.org/3";
let apiKey="c86af509a87174fe97459cfc1b60996e";
const tmdbRequest:iTmdbRequest={
    popularMovies:`${rooturl}/movie/popular?api_key=${apiKey}`,
    imageBase:`https://image.tmdb.org/t/p`
}

export default tmdbRequest;