import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import React from "react";

const API_KEY = "3ee86b4ec4f2b377f10fc63491417289";
async function getMovie(movieId) {
 
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    
  );
  return await res.json();
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div>
     
      <div className="w-full">
        <div className="p-4 md:p-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            width={500}
            height={300}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            alt="Movie Poster"
            className="rounded-lg"
            placeholder="blur"
            blurDataURL="/spinner.svg"
          ></Image>
          <div className="p-2">
            <h2 className="text-lg font-bold mb-3" data-testid = "movie-title">
              {movie.title || movie.name}
            </h2>
            <p className=" mb-3 font-semibold mr-1">
            Overview:
              <span className="font-normal" data-testid =  "movie-overview">  {movie.overview}</span>{" "}
             
            </p>
            <p className="mb-3 font-semibold mr-1">
            Date Released:
              <span className="font-normal" data-testid = "movie-release-date"> {movie.release_date || movie.first_air_date}</span>{" "}
              
            </p>
            <p className="mb-3 font-semibold mr-1">
            Runtime: 
              <span className="font-normal" data-testid = "movie-runtime"> {movie.runtime}</span>{" "}
              mins
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
