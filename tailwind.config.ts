import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        tertiary: "hsl(var(--tertiary))",
        quaternary: "hsl(var(--quaternary))",
        quinary: "hsl(var(--quinary))",
        "quinary-light": "hsl(var(--quinary-light))",
        "quinary-dark": "hsl(var(--quinary-dark))",
        normal: {
          DEFAULT: "hsl(var(--normal))",
          foreground: "hsl(var(--foreground))",
          light: "hsl(var(--normal-light))",
        },
        fighting: {
          DEFAULT: "hsl(var(--fighting))",
          foreground: "hsl(var(--foreground))",
          light: "hsl(var(--fighting-light))",
        },
        flying: {
          DEFAULT: "hsl(var(--flying))",
          foreground: "hsl(var(--foreground))",
          light: "hsl(var(--flying-light))",
        },
        poison: {
          DEFAULT: "hsl(var(--poison))",
          foreground: "hsl(var(--background))",
          light: "hsl(var(--poison-light))",
        },
        ground: {
          DEFAULT: "hsl(var(--ground))",
          foreground: "hsl(var(--foreground))",
          light: "hsl(var(--ground-light))",
        },
        rock: {
          DEFAULT: "hsl(var(--rock))",
          foreground: "hsl(var(--background))",
          light: "hsl(var(--rock-light))",
        },
        bug: {
          DEFAULT: "hsl(var(--bug))",
          foreground: "hsl(var(--background))",
          light: "hsl(var(--bug-light))",
        },
        ghost: {
          DEFAULT: "hsl(var(--ghost))",
          foreground: "hsl(var(--background))",
          light: "hsl(var(--ghost-light))",
        },
        steel: {
          DEFAULT: "hsl(var(--steel))",
          foreground: "hsl(var(--foreground))",
          light: "hsl(var(--steel-light))",
        },
        fire: {
          DEFAULT: "hsl(var(--fire))",
          foreground: "hsl(var(--background))",
          light: "hsl(var(--fire-light))",
        },
        water: {
          DEFAULT: "hsl(var(--water))",
          foreground: "hsl(var(--background))",
          light: "hsl(var(--water-light))",
        },
        grass: {
          DEFAULT: "hsl(var(--grass))",
          foreground: "hsl(var(--foreground))",
          light: "hsl(var(--grass-light))",
        },
        electric: {
          DEFAULT: "hsl(var(--electric))",
          foreground: "hsl(var(--foreground))",
          light: "hsl(var(--electric-light))",
        },
        psychic: {
          DEFAULT: "hsl(var(--psychic))",
          foreground: "hsl(var(--background))",
          light: "hsl(var(--psyshic-light))",
        },
        ice: {
          DEFAULT: "hsl(var(--ice))",
          foreground: "hsl(var(--foreground))",
          light: "hsl(var(--ice-light))",
        },
        dragon: {
          DEFAULT: "hsl(var(--dragon))",
          foreground: "hsl(var(--background))",
          light: "hsl(var(--dragon-light))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark))",
          foreground: "hsl(var(--background))",
          light: "hsl(var(--dark-light))",
        },
        fairy: {
          DEFAULT: "hsl(var(--fairy))",
          foreground: "hsl(var(--foreground))",
          light: "hsl(var(--fairy-light))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
