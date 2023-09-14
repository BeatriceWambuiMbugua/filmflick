"use client"
import Results from "@/components/Results";
import { useEffect, useState } from "react";
import { fetchTop10Movies } from "./api/route";



export default async function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTop10Movies();
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
