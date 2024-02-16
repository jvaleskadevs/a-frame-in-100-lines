"use client"
import { useState, useEffect } from 'react';

export default function ResultsPage() {
  const [results, setResults] = useState([]);

  async function fecthResults() {
    const response = await fetch('api/results');
    const results = await response?.json();
    console.log(results);
    setResults(results ?? []);
  }
  
  useEffect(() => {
    fecthResults();
  }, []);
  
  return (
    <>
      <p>Results</p>
      { results && results.length > 0 && results.map((result) => (
          <>
          <p>{typeof result}</p>
          <p>{result}</p>
          <p>wowow: {(result as any)?.wowow}</p>  
          <p>meh: {(result as any)?.meh}</p> 
          </>   
      ))}
    </>
  );
}
