This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## GitHub Repository Sync

This project includes a script (`sync.py`) that:

1. Fetches README files from GitHub repositories
2. Uses OpenAI to generate 20-word and 50-word summaries
3. Uploads the data to Algolia for search functionality

### Setup for Sync Script

1. Create a `.env` file based on `.env.example`:

   ```
   cp .env.example .env
   ```

2. Fill in your API keys in the `.env` file:

   ```
   ALGOLIA_APP_ID=your_app_id
   ALGOLIA_ADMIN_API_KEY=your_admin_api_key
   ALGOLIA_INDEX_NAME=github_repos
   OPENAI_API_KEY=your_openai_api_key
   GITHUB_TOKEN=your_github_token  # Optional but recommended
   ```

3. Set up a Python virtual environment and install dependencies:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. Run the sync script:
   ```bash
   python sync.py
   ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
