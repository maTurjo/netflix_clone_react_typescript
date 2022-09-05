import React, { useEffect, useState } from 'react'
import tmdbRequest from '../apiEndPoints'
import LoggedInHero from '../components/LoggedInHero';
import MovieCollectionSlider from '../components/MovieCollectionSlider';
import singleMovie from '../models/featuredMovies';

const Homepage = () => {

  const [featuredMovies, setfeaturedMovies] = useState<singleMovie[]>([]);
  const [popularMovies, setpopularMovies] = useState<singleMovie[]>([]);
  const popularMovieRequest=async ()=>{
    const response=await fetch(tmdbRequest.popularMovies,{
      method:'GET'
    });
    return response.json();
  }
  useEffect(() => {
    popularMovieRequest()
    .then((res)=>{
      setpopularMovies(()=>res.results as singleMovie[] );
    });
  }, [])
  useEffect(() => {
    let shuffledMovies:singleMovie[]=[...popularMovies].sort( () => .5 - Math.random() );
    setfeaturedMovies(()=>[...shuffledMovies]);
  }, [popularMovies])
  console.log(featuredMovies);
  return (
    <div >
        <LoggedInHero featuredMovies={[...featuredMovies]}/>
        <MovieCollectionSlider/>
    </div>
  )
}

export default Homepage