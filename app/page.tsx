"use client";
import { Card } from "@/app/components/card";
import { SetStateAction, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

// Define the type for Algolia search results
interface AlgoliaHit {
  objectID: string;
  [key: string]: any; // For any other fields in the hit
}

interface AlgoliaSearchResponse {
  hits: AlgoliaHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  query: string;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [searchResponse, setSearchResponse] =
    useState<AlgoliaSearchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Debounce function to prevent too many API calls
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return function (...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Fetch search results when query changes
  const fetchSearchResults = async (searchQuery: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Always make the API call, even with empty query
      const response = await fetch(
        `/search?query=${encodeURIComponent(searchQuery.trim())}`
      );

      if (!response.ok) {
        throw new Error(`Search failed with status: ${response.status}`);
      }

      const data: { results: [AlgoliaSearchResponse] } = await response.json();
      setSearchResponse(data.results[0]);
    } catch (err) {
      console.error("Search error:", err);
      setError("Failed to fetch search results. Please try again.");
      setSearchResponse(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounced search function
  const debouncedSearch = debounce(fetchSearchResults, 300);

  // Handle search input change
  const handleSearchQuery = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    const newQuery = e.target.value as string;
    setQuery(newQuery);
    router.replace(newQuery ? `/?q=${encodeURIComponent(newQuery)}` : "/");
    debouncedSearch(newQuery);
  };

  // Initial search on page load if query parameter exists
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get("q");

    if (queryParam) {
      setQuery(queryParam);
    }

    // Always fetch results on initial load, even with empty query
    fetchSearchResults(queryParam || "");
  }, []);

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <div className={"flex relative justify-center w-2/3 mb-16"}>
        <input
          className={
            "flex h-10 rounded-md border px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full pl-10 py-5 text-md bg-white border-gray-200"
          }
          type="search"
          autoFocus
          placeholder="Search MCP servers"
          value={query}
          onChange={handleSearchQuery}
        />
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="flex justify-center items-center mb-8">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          <span className="ml-2 text-gray-500">Searching...</span>
        </div>
      )}

      {/* Error message */}
      {error && <div className="text-red-500 text-center mb-8">{error}</div>}

      {/* Search stats */}
      {searchResponse && searchResponse.nbHits > 0 && (
        <div className="text-gray-500 text-center mb-4">
          Found {searchResponse.nbHits} results in{" "}
          {searchResponse.processingTimeMS}ms
        </div>
      )}

      {/* No results message */}
      {!isLoading &&
        query &&
        searchResponse &&
        searchResponse.nbHits === 0 &&
        !error && (
          <div className="text-gray-500 text-center mb-8">
            No results found for {query}
          </div>
        )}

      {/* Search results */}
      <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
        {searchResponse?.hits.map((hit) => (
          <Card
            key={hit.objectID}
            title={hit.title || hit.name || "Untitled"}
            description={
              hit.summary_20 || hit.summary_50 || "No description available"
            }
            urlx={hit.url}
            id={hit.objectID}
            tags={hit.tags}
          />
        ))}

        {/* Show placeholder cards if no search results are available yet */}
        {/*{!searchResponse && !isLoading && (*/}
        {/*  <>*/}
        {/*    <Card />*/}
        {/*    <Card />*/}
        {/*    <Card />*/}
        {/*    <Card />*/}
        {/*    <Card />*/}
        {/*    <Card />*/}
        {/*  </>*/}
        {/*)}*/}
      </div>
    </div>
  );
}
