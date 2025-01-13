# What is this?

This is an extremely basic Next.js app. I created it to bootstrap the basic
tech stack for our senior project: a Next.js app that uses Cloudscape
components, TypeScript, and useSWR to make frontend development simple. We are
definitely backend-inclined developers, so it is important to me that the
frontend tech stack will not be a concern.

# Usage

Fork this repository and get working. There are some concerns I have with this,
mainly that the source code is not all inside an src directory. When running
the `create-next-app` command, I had to use an older version of the script to
make it compatible with the Cloudscape components.

# Notes

I had to use an older version of `create-next-app` to make it compatible with
the Cloudscape components. I also had to include
`"@cloudscape-design/components"` and `"@cloudscape-design/component-toolkit"`
in the `transpilePackages` list in `next.config.mjs` to get the Cloudscape
components to work correctly.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
