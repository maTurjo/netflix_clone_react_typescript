interface iTmdbRequest{
    popularMovies:string,
    upcomingMovies:string,
    topRated:string,
    latest:string,
    imageBase:string
}
let rooturl="https://api.themoviedb.org/3";
let apiKey="c86af509a87174fe97459cfc1b60996e";
const tmdbRequest:iTmdbRequest={
    popularMovies:`${rooturl}/movie/popular?api_key=${apiKey}`,
    imageBase:`https://image.tmdb.org/t/p`,
    upcomingMovies:`${rooturl}/movie/upcoming?api_key=${apiKey}`,
    topRated:`${rooturl}/movie/top_rated?api_key=${apiKey}`,
    latest:`${rooturl}/movie/now_playing?api_key=${apiKey}`
}

export default tmdbRequest;