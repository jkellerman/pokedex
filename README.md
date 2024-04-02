# PokeApi App

Technical assignment using the pokèApi.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [Built with](#built-with)
- [My process](#my-process)
  - [Server actions with infinite scroll](server-actions-with-infinite-scroll)
  - [Searchable List](#searchable-list)
- [Improvements](#improvements)

## Overview

Assignment:

- Create a fresh clean UI displaying individual pokemon
- Be able to flick through them
- View them as a searchable list
- Be able to click into the pokemon and view their abilities
- Show ability to lazy load the pokemon
- Using Next.js, TailwindCSS & Radix UI

### 🔗&nbsp;Links

- Live Site: [Live](https://pokedex-jkellerman.vercel.app)

### 🧰&nbsp;Built with

- TypeScript
- Next.js 14
- TailwindCSS
- Radix UI
- Vercel

## 💭&nbsp;My process

It was really fun building this small app, brought back a lot of nostalgia 😄. My process began with creating some quick mock-ups in Figma to establish a clear vision of how I wanted the app to look. This preemptive step helped me avoid facing numerous design decisions while building the app. Following this, my main focus shifted towards optimising the app's performance and I settled on a few techniques which I will elaborate on.

### Server actions with infinite scroll

The app fetches the original 151 Pokémon, and I decided to fetch them in increments of 20 to reduce the initial server load, thereby achieving a faster initial render time. Users can request more Pokémon by clicking the "load more" button, which appends them to the original list. Since the first 20 Pokémon are fetched from the server, they are cached, eliminating the need for re-fetching and consequently enhancing the app's performance.

### Searchable list

There were a few approaches I considered when it came to searching for the pokèmon, including creating an autocomplete feature where a list of Pokémon appears as the user types, allowing them to select one to update the list. However, I ultimately opted for a more progressive, real-time search that updates the list as the user types. This approach minimises the number of steps required for users to retrieve the list of Pokémon. Implementing this approach effectively required addressing two key considerations for better user experience.

Firstly, creating a fallback for the cards as the user types to indicate that the list is being updated. My approach was retrieving a list of all the 151 pokèmon names and checking which names include the characters being typed. Matches trigger API calls to retrieve the corresponding Pokémon data and update the list accordingly. Additionally, this allowed me to determine the number of Pokémon being retrieved from the server to display an appropriate number of fallback cards, enhancing the experience of lazy-loading the cards.

Secondly, it was crucial to implement `debouncing` during the search to avoid making unnecessary API calls with each keystroke. Failure to do so would result in fetching lists of Pokémon prematurely, potentially leading to a poor user experience and slowing down the app due to frequent API calls.

## Improvements

Given more time, one area I would explore is utilising a library such as [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr). Currently, when users load more Pokémon, they are not cached, meaning they would have to fetch those Pokémon again if they navigate away from the page and return.

Additionally, I could potentially introduce `streaming` to the individual Pokémon page to load components in chunks and prevent lengthy data requests from blocking the page.
