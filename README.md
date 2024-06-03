# PokeApi App

Technical assignment using the PokéApi & YodaAPI.

## Table of contents

- [How to run the app](#how-to-run-the-app)
  - [Development](#development)
  - [Testing](#testing)
- [Overview](#overview)
  - [Links](#links)
  - [Built with](#built-with)

## 💭&nbsp;How to run the app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Development

To run this project on your local machine, follow these steps:

1. Clone this repository.
2. Open your terminal and navigate to the project directory.
3. Run the following commands:

```sh
npm install
npm run dev
```

This will start the application in development mode.

### Testing

To run the tests:

```sh
npm test
```

## Overview

Users should be able to:

- View all 151 original Pokémon in searchable list
- Paginate through list with load more button
- Click on any Pokémon and view their stats & abilities
- Navigate to previous and next Pokémon
- Translate the ability effects into yoda language and receive an error message when hitting the rate limit.

### 🔗&nbsp;Links

- Live Site: [Live](https://pokedex-jkellerman.vercel.app)

### 🧰&nbsp;Built with

- TypeScript
- Next.js 14
- TailwindCSS
- Radix UI
- TanStack Query
- Jest, React Testing Library
- Vercel
- [PokéAPI](https://pokeapi.co/docs/v2)
- [YodaAPI](https://funtranslations.com/api/yoda)
