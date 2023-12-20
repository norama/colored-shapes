# Colored Shapes Demo Project

This is a [Next.js](https://nextjs.org/) demo project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Demonstrated technologies:

- [NextJS app router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router)
- [Material UI library](https://mui.com/material-ui/)
- [Nano Stores state manager](https://github.com/nanostores/nanostores)

## Separating business and UI layers

The business (storage) layer is separated from the UI layer by event based communication,
orchestrated by a transmitter object, which dynamically imports the store accessor based
on environment configuration.

Demonstrated technologies:

- [Nano Events](https://github.com/ai/nanoevents)
- dynamic async javascript import depending on environment variable
  - `NEXT_PUBLIC_STORE`: `localStorage` | `default`

## Demo

The application is deployed on [Vercel](https://vercel.com/):

- [Colored Shapes Demo - production](https://colored-shapes.vercel.app/)
- [Colored Shapes Demo - localStorage transmitter](https://colored-shapes-git-events-noramamatema.vercel.app/)

## Local development

Run the development server:

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
