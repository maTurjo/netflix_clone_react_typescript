import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import tmdbRequest from "../apiEndPoints";
import singleMovie from "../models/featuredMovies";

interface Props {
  featuredMovies: singleMovie[],

}

const LoggedInHero = ({ featuredMovies }: Props) => {
  const [imageUrls, setimageUrls] = useState<singleMovie[]>([]);
  const [activeSlide, setactiveSlide] = useState(2);
  const variant = {
    show: { opacity: 1, transitionEnd: { display: "flex" } },
    hide: { opacity: 0, transitionEnd: { display: "none" } },
  };
  const changeSlide = (activeSlideNum: string) => {
    setactiveSlide(() => parseInt(activeSlideNum));
  };
  useEffect(() => {
    setimageUrls(() => featuredMovies);
 
  }, [featuredMovies]);

  return (
    <div className="">
      <AnimatePresence>
        {imageUrls.map((movieObject, index) => {
          if (index > 2) return null;
          return (
            <div key={index}>
              <motion.div
                variants={variant}
                transition={{ duration: 1 }}
                animate={index === activeSlide ? "show" : "hide"}
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, .2), rgba(0, 0, 0, 1)),url(${tmdbRequest.imageBase}/original${movieObject?.backdrop_path}`,
                }}
                key={movieObject?.id}
                className={`${index === activeSlide ? "" : "hidden"} flex items-end md:items-center text-white bg-no-repeat bg-cover md:bg-cover md:bg-center bg-gradient-to-b to-black text-5xl h-[80vw] bg-bottom  md:h-[90vh]  top-0 z-[-1]  w-full min-h-[200px] `}
              >
                <div className="hidden md:block min-w-full">
                  <div className="bg-slate-500/60 w-full md:min-w-[50%] md:w-[50%] py-5 px-10 h-[350px] absolute md:static bottom-[-350px] md:bottom-0 md:mt-0">
                    <div className="h-[100%] flex flex-col justify-between">
                      <h2 className="text-2xl md:text-5xl text-center md:text-left">
                        {movieObject?.original_title}
                      </h2>
                      <p className="text-base md:text-2xl line-clamp-3 my-2 text-center md:text-left ">
                        {movieObject?.overview}
                      </p>
                      <div className="flex justify-center md:block">
                        <button className="text-sm md:text-xl transition delay-75 bg-slate-300 border px-2 md:px-4 py-2 outline-1 outline-black mr-2 hover:bg-transparent">
                          Watch Trailer
                        </button>
                        <button className="text-sm md:text-xl transition delay-75 mx-2 border px-2 md:px-4 py-2 hover:bg-slate-300 hover:text-black ">
                          Watch Now
                        </button>
                      </div>
                      <div className={`flex justify-center md:justify-start mb-2 `}>
                        {imageUrls.map((item, ind) => {
                          if (ind > 2) return null;
                          return (
                            <button
                              key={ind}
                              className={`${
                                ind === activeSlide
                                  ? "border-slate-100"
                                  : "border-black"
                              } border-b-8 rounded-md w-6  md:w-12 mx-2 hover:border-slate-500 transition delay-75`}
                              value={ind}
                              onClick={(e) =>
                                changeSlide(
                                  (e.target as HTMLButtonElement).value
                                )
                              }
                            ></button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="md:hidden">
                <motion.div
                  variants={variant}
                  transition={{ duration: 1 }}
                  animate={index === activeSlide ? "show" : "hide"}
                  className={` bg-slate-500/60 w-full py-5 px-10   h-[250px] text-white ${index === activeSlide ? "" : "hidden"}`}
                >
                  <div className="h-[100%] flex flex-col justify-between">
                    <h2 className="text-2xl md:text-5xl text-center md:text-left">
                      {movieObject?.original_title}
                    </h2>
                    <p className="text-base md:text-2xl line-clamp-3 my-2 text-center md:text-left ">
                      {movieObject?.overview}
                    </p>
                    <div className="flex justify-center md:block">
                      <button className="text-sm md:text-xl transition delay-75 bg-slate-300 border px-2 md:px-4 py-2 outline-1 outline-black mr-2 hover:bg-transparent">
                        Watch Trailer
                      </button>
                      <button className="text-sm md:text-xl transition delay-75 mx-2 border px-2 md:px-4 py-2 hover:bg-slate-300 hover:text-black ">
                        Watch Now
                      </button>
                    </div>
                    <div className="flex justify-center md:justify-start my-5">
                      {imageUrls.map((item, ind) => {
                        if (ind > 2) return null;
                        return (
                          <button
                            key={ind}
                            className={`${
                              ind === activeSlide
                                ? "border-slate-100"
                                : "border-black"
                            } border-b-8 rounded-md w-6  md:w-12 mx-2 hover:border-slate-500 transition delay-75`}
                            value={ind}
                            onClick={(e) =>
                              changeSlide((e.target as HTMLButtonElement).value)
                            }
                          ></button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default LoggedInHero;
