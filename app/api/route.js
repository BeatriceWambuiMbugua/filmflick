require("dotenv").config();
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// const API_KEY = "3ee86b4ec4f2b377f10fc63491417289";

export async function fetchTop10Movies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&results=10`
  );

  console.log(res)

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results.slice(0, 10);

  console.log(data);

  return results;
}
