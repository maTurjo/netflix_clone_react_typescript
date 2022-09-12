import React, { useState, useEffect } from "react";
import singleMovie from "../models/featuredMovies";
import tmdbRequest from "../apiEndPoints";

interface Props {
  featuredMovies: singleMovie[];
  collectionName: string;
}
const MovieCollectionSlider = ({ featuredMovies, collectionName }: Props) => {
  const [movieCol, setmovieCol] = useState<singleMovie[]>([]);
  const scrollLeft = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let parentElement = event?.currentTarget.parentElement;
    if (parentElement !== null) {
      parentElement.scrollLeft = parentElement.scrollLeft - 300;
    }
  };

  useEffect(() => {
    setmovieCol(() => featuredMovies);
  }, [featuredMovies]);

  const scrollRight = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let parentElement = event?.currentTarget.parentElement;
    if (parentElement !== null) {
      parentElement.scrollLeft = parentElement.scrollLeft + 300;
    }
  };

  const likeMovie = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    let modMovieList = [...movieCol];
    modMovieList[index].liked = true;
    setmovieCol(modMovieList);
  };

  const unlikeMovie = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    let modMovieList = [...movieCol];
    modMovieList[index].liked = false;
    setmovieCol(modMovieList);
  };
  return (
    <div className="text-white md:my-1">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-5xl md:my-5 mx-2">
          {collectionName ? collectionName : "Collection"}
        </h1>
        <h4 className="text-base md:text-xl md:my-5 mx-2 cursor-pointer hover:text-2xl">
          See all <i className="bi bi-chevron-right"></i>
        </h4>
      </div>

      <div className="relative">
        <div className="flex overflow-x-scroll w-full scrollbar-hide scroll-smooth px-2 items-center min-h-[190px] md:min-h-[240px] lg:min-h-[300px] ">
          <i
            onClick={(event) => scrollLeft(event)}
            className="text-2xl md:text-4xl absolute top-[40%] bi bi-arrow-left-circle-fill cursor-pointer hover:opacity-100 hover:scale-110 opacity-50 z-20"
          ></i>
          {movieCol.map((movieObject, index) => {
            return (
              <div
                key={index}
                className=" min-w-[200px] md:min-w-[350px] lg:min-w-[400px] mx-2 relative cursor-pointer transition-[min-width] hover:min-w-[250px] hover:md:min-w-[400px] hover:lg:min-w-[450px]"
              >
                <img
                  className="w-full h-auto block"
                  src={`${tmdbRequest.imageBase}/original${movieObject?.backdrop_path}`}
                  alt="11"
                />
                <div className="h-1/3 md:h-full w-full bg-slate-500  absolute bottom-0 md:top-0  md:opacity-0  md:hover:opacity-80 md:flex md:flex-col justify-center items-center md:px-7 hidden  ">
                  <div className="md:absolute top-0 left-0 px-2 md:py-2">
                    <i
                      className={`bi bi-heart ${
                        movieObject.liked ? "hidden" : ""
                      } text-base md:text-2xl `}
                      onClick={(e) => likeMovie(e, index)}
                    ></i>
                    <i
                      className={`bi bi-heart-fill text-red-800 ${
                        movieObject.liked ? "" : "hidden"
                      } text-base md:text-2xl`}
                      onClick={(e) => unlikeMovie(e, index)}
                    ></i>
                  </div>
                  <h3 className="text-base md:text-4xl text-white line-clamp-1">
                    {movieObject.original_title}
                  </h3>
                  <p className="hidden md:block md:text-center">
                    {movieObject.overview}
                  </p>
                </div>
                <h3 className="my-2 md:hidden line-clamp-1">{movieObject.original_title}</h3>
              </div>
            );
          })}
          <i
            onClick={(event) => scrollRight(event)}
            className="text-2xl md:text-4xl absolute right-0 top-[40%] bi bi-arrow-right-circle-fill cursor-pointer hover:opacity-100 hover:scale-110 opacity-50"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default MovieCollectionSlider;
