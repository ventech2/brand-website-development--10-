# Brand Website Development

This project is a React + Vite brand website for Beccaknotery.

## Blog and Admin Flow

### Blog
- `/blog` displays a list of posts.
- `/blog/:slug` shows individual post details.
- Post data is stored in `src/constants.ts` under `INSIGHT_POSTS`.

### Basic Admin/Update Flow Outline

1. Data source
   - Start with a JSON file (`src/data/posts.json`) or a simple API endpoint.
   - For local editing, use a JSON file or Markdown files.

2. Admin interface
   - Create an admin page under `src/pages/Admin.tsx`.
   - Add form fields for `title`, `category`, `excerpt`, `content`, `cover`, and `slug`.
   - Use a `Preview` section to show how the post will look.

3. Save updates
   - For static sites: update the JSON/Markdown source and rebuild.
   - For dynamic sites: add a backend with an API to save posts.
     - Example stack: Node.js + Express + SQLite or MongoDB.
     - Add routes: `GET /api/posts`, `POST /api/posts`, `PUT /api/posts/:slug`, `DELETE /api/posts/:slug`.

4. Authentication
   - Protect the admin page with a simple login.
   - For a small project, use a password stored in environment variables.
   - For production, integrate with a proper auth provider.

5. Deployment
   - Static site: deploy to Vercel, Netlify, or GitHub Pages.
   - Backend: deploy Node API to Heroku, Fly.io, or Vercel Serverless.

### Recommended next step
- Add `src/pages/Admin.tsx` and `src/api/posts.json`.
- Change `Blog.tsx` to load posts from the JSON file or API instead of `constants.ts`.
- Add a simple save function in the backend that updates the JSON file or database.
