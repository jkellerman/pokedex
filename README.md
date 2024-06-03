# PokeApi App

Technical assignment using the PokéApi & YodaAPI.

## Table of contents

- [How to run the app](#how-to-run-the-app)
  - [Development](#development)
  - [Testing](#testing)
- [Overview](#overview)
  - [Links](#links)
  - [Built with](#built-with)
  - [Process](#process)

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

### Process

#### Tanstack Query/React Query

- Translating the effect from English to Yoda required fetching data on the client side. Despite the ability to use server actions in client components, I chose to use TanStack Query because it offers an excellent experience for data fetching and caching. Additionally, caching was crucial due to the rate limit of the Yoda API, which helps prevent unnecessary data requests.

#### Improvements

- One area I would like to explore is utilising TanStack Query for pagination with server components, as the initial Pokémon list data is rendered on the server. Currently, when users load more Pokémon, the data is not cached, meaning they would have to fetch those Pokémon again if they navigate away from the page and return.
