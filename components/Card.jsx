import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";

export default function Card({ movie }) {
  return (
    <div
      className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
      data-testid="movie-card"
    >
      {movie.id && (
        <Link href={`/movie/${movie.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            width={500}
            height={300}
            style={{
              maxWidth: "100%",
              maxHeight: "auto",
            }}
            alt="Image is not found"
            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 h-[350px] object-cover"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            data-testid="movie-poster"
          ></Image>
          <div className="p-2">
            <p className="line-clamp-2">{movie.overview}</p>
            <h2
              className="truncate font-bold text-lg"
              data-testid="movie-title"
            >
              {movie.title || movie.name}
            </h2>
            <p className="flex items-center" data-testid="movie-release-date">
              {movie.release_date} <FaRegThumbsUp className="h-5 mr-1 ml-3" />{" "}
              {movie.vote_count}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
