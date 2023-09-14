import HeroSection from '@/components/HeroSection';
import Results from '@/components/Results';
import React from 'react'

export default async function SearchPage({params}) {
    const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
		);

        if(!res.ok){
            throw new Error("Error fetching movie");
        }
        const data = await res.json();
        const results = data.results;
  return (
		<div>
			 <HeroSection/>
			{results && results.length === 0 && (
				<h1 className="text-center pt-6">No results found</h1>
			)}

			{results && <Results results={results} />}
		</div>
	);
}