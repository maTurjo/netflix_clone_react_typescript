import React, { useEffect, useState } from 'react'
import tmdbRequest from '../apiEndPoints'
import LoggedInHero from '../components/LoggedInHero';
import MovieCollectionSlider from '../components/MovieCollectionSlider';
import singleMovie from '../models/featuredMovies';

const Homepage = () => {

  const [featuredMovies, setfeaturedMovies] = useState<singleMovie[]>([]);
  const [popularMovies, setpopularMovies] = useState<singleMovie[]>([]);
  const [upcomingMovies, setupcomingMovies] = useState<singleMovie[]>([]);
  const [topRatedMovies, settopRatedMovies] = useState<singleMovie[]>([]);
  const [latestMovies, setlatestMovies] = useState<singleMovie[]>([]);
  
  const popularMovieRequest=async ()=>{
    const response=await fetch(tmdbRequest.popularMovies,{
      method:'GET'
    });
    return response.json();
  }
  const latestMovieRequest=async ()=>{
    const response=await fetch(tmdbRequest.latest,{
      method:'GET'
    });
    return response.json();
  }

  const topRatedMovieRequest=async()=>{
    const response=await fetch(tmdbRequest.topRated,{method:"GET"});
    return response.json();
  }

  const upcomingMovieRequest=async()=>{
    const response=await fetch(tmdbRequest.upcomingMovies,{method:"GET"});
    return response.json();
  }
  useEffect(() => {
    popularMovieRequest()
    .then((res)=>{
      setpopularMovies(()=>res.results as singleMovie[] );
    });
    latestMovieRequest()
    .then((res)=>{
      console.log(res);
      setlatestMovies(()=>res.results as singleMovie[] );
    });
    upcomingMovieRequest()
    .then((res)=>{
      setupcomingMovies(()=>res.results as singleMovie[]);
    })
    topRatedMovieRequest()
    .then((res)=>{
      settopRatedMovies(()=>res.results as singleMovie[])
    })
  }, [])
  useEffect(() => {
    let shuffledMovies:singleMovie[]=[...popularMovies].sort( () => .5 - Math.random() );
    setfeaturedMovies(()=>[...shuffledMovies]);
    console.log(` latest movies ${latestMovies}`);
  }, [popularMovies,latestMovies])
  // console.log(featuredMovies);
  return (
    <div >
        <LoggedInHero featuredMovies={[...featuredMovies]}/>
        <div className='md:mx-5'>
        <MovieCollectionSlider collectionName="Latest" featuredMovies={[...latestMovies]}/>
        <MovieCollectionSlider collectionName="Popular" featuredMovies={[...featuredMovies]}/>
        <MovieCollectionSlider collectionName="Upcoming" featuredMovies ={[...upcomingMovies]}/>
        <MovieCollectionSlider collectionName="Top Rated" featuredMovies ={[...topRatedMovies]}/>
        </div>
    </div>
  )
}

export default Homepage