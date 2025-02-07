# Nuxt Minimal Starter

- Built with : Vite, TypeScript, Vue3, Nuxt3, Pinia, Google Fonts, 
- Getting started :
1/ Clone repository `git clone $repository`
2/ run `npm install` in the cloned directory root
3/ run `npm run dev` to the development server on `http://localhost:3000`:
- Features : Header (home button), SearchBar (filters the image list), Image List (image with text overlay), Load More button (adds 20 more images, spinner on load), Back To Top button, Error page (description + back to home button)
- License

Additional notes :
- Normaly we don't upload .env as it's a file containing secret keys to not expose to the client, but here for the sake of smooth installation it will be pushed to git
- Could have done a "auto load more" on scroll reaching bottom, but following the guidelines we will leave the "Load More" button
- Made use of /server folder to use correctly useRuntimeConfig for secret security
- Could have added a "clear filter" button (in this version clicking home logo or making an empty research resets to the default first 20)
- We could have implemented a store using Pinia here, but compare to what needed to be done it felt like an over-engineering
- could have used masonry to have a better redenring on img tag (setting both height and width slows the page), it would be good looking but not really matching the wireframes

/* singleImage et image height et width */

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
