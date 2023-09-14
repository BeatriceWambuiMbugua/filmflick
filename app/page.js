"use client"
import Card from "@/components/Card";
import { fetchTop10Movies } from "./api/items/route";
import Results from "@/components/Results";
import React, { useEffect, useState } from "react";



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
