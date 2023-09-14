
import React from "react";
import Card from "./Card";


export default function Results({ results }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl gap-2 mx-auto py-4 ">
      {results.map((movie) => (
        <Card key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}
