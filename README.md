# toilet-rater-frontend
### An app to allow users to rate bathrooms in public spaces and view ratings by others.
### The link to the current server for this is [toilet-rater-backend](https://github.com/samsonhumber/toilet-rater-backend). As of 14/09/2022, neither has been deployed yet

### MVP plan:
- The main thing is Next.js, because routing is easier
- A basic review consists of a number 0.5-5.0 (star rating) for 3 categories (aesthetics, cleanliness, and experience), the name of the toilets reviewed, an optional grid reference (later to be assigned under-the-hood using Google Maps or some other method), a username (or anonymous) and a text comment.
- The name of the toilets reviewed can be put into a database, and brought back by backend API to let users quickly select it and avoid duplication.
- A basic toilet profile generated by dynamic routing - include name, optional grid reference, average rating.
- Put the backend on Node, but the database on Couchbase, so I can do the task for Perry Krug << CANCELLED >> (will be done on AWS instead - Couchbase is still too confusing and the Capella free trial has run out!)

### Front-end plan:
- Set up Next.js app << DONE >>
- Set up a navbar, footer, and basic styling to an example toilet page << DONE >>
- Make review card, using star rating component << DONE >>
- Functionality on reviews for one page, multiple reviews, using local data << DONE >>
- Fetches data from backend for reviews on one page << DONE >>
- Modal form to submit review << IN PROGRESS >>
- Posting review to the backend and database operational
  - Frontend must also update when possible
- Delete review component made
- Landing page up and displaying locally stored toilets
- Landing page gets database-stored toilets and allows submitting a new toilet to database
- Dynamic routing to make new page for a new toilet
  - Might need to be a server get-by-id request

### Little stretch goals:
- Search input field made to allow user to narrow down toilets on home page
- Add cost information for toilet profile
- Add female/male specific or everyone for toilet profile (or perhaps review)
- Add authentication to reduce troll/astroturf tactics
- Add image uploading support

### Research:
- The 'toiletinspector.com' site rates toilets by ODOUR, CLEANLINESS, RUNNING WATER, HAND WASH, TOILET PAPER, HAND DRYER, FLOOR STATE, OVERALL SCORE


# Next app documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
