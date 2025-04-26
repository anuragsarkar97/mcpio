import { NextRequest, NextResponse } from 'next/server';
import { algoliasearch } from 'algoliasearch';

// Initialize Algolia client
const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APP_ID || 'your_app_id',
  process.env.ALGOLIA_API_KEY || 'your_api_key'
);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Extract the required fields
    const { email, companyName, githubRepo, serverUrl } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Create the record to be stored in Algolia
    const record = {
      email,
      companyName: companyName || null,
      githubRepo: githubRepo || null,
      serverUrl: serverUrl || null,
      timestamp: new Date().toISOString(),
      objectID: `${email}-${Date.now()}`, // Create a unique ID
    };
    // Save the record to Algolia
    await algoliaClient.saveObject({
      indexName: process.env.ALGOLIA_INTENT_INDEX_NAME || '',
      body: record,
    });

    // Return success response
    return NextResponse.json(
      { success: true, message: 'User intent stored successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error storing user intent:', error);

    // Return error response
    return NextResponse.json(
      {
        error: 'Failed to store user intent',
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
