# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Additional Notes

### Moved Nuxt3 sources to ./src

### Modified nuxt.confi.ts

```typescript
import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  rootDir: "src",
})
```

### Added NPM packages

```bash
yarn add -D vuetify@next vite-plugin-vuetify sass sass-loader@10
yarn add -D @mdi/js @mdi/font @fortawesome/fontawesome-free
yarn add -D theoplayer
```

### Added vuetify.ts
