import React from "react";
import Card from "./Card";
import {BiChevronRight} from "react-icons/bi"
import Link from "next/link";

export default function Results({ results }) {
  return (
    <div className="container mx-auto">
      <div className="justify-between items-center flex pt-4">
        <h1 className="text-black text-4xl font-bold">
          Featured Movie
        </h1>
        <Link href="" className="flex justify-start items-center gap-2 text-red ">
          <p className="text-rose-700 text-lg font-normal  leading-normal">See More</p>
          <BiChevronRight className="w-5 h-5 relative"/>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-2 py-4 ">
        {results.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
