import {NextRequest, NextResponse} from 'next/server';
import {algoliasearch} from 'algoliasearch';

// Initialize Algolia client
const algoliaClient = algoliasearch(
    process.env.ALGOLIA_APP_ID || 'your_app_id',
    process.env.ALGOLIA_API_KEY || 'your_api_key'
);

// Index name to search in
const INDEX_NAME = process.env.ALGOLIA_INDEX_NAME || 'documents';

export async function GET(request: NextRequest) {
  try {
    // Get the query parameter from the URL
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query') || '';

    // if (!query) {
    //   return NextResponse.json(
    //       {error: 'Query parameter is required'},
    //       {status: 400}
    //   );
    // }

    // Execute the search
    const searchResults = await algoliaClient.search({
      requests: [
        {
          indexName: INDEX_NAME,
          query
        }
      ]
    });

    // Return the raw Algolia search results
    return NextResponse.json(searchResults);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
        {error: `Failed to perform search: ${error instanceof Error ? error.message : String(error)}`},
        {status: 500}
    );
  }
}
