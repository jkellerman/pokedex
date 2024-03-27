import { lalezar } from "@/app/fonts";

export default function Header() {
  return (
    <>
      <header>
        <h1
          className={`${lalezar.className} flex justify-center text-4xl py-4 md:py-8`}
        >
          Pokèdex
        </h1>
        <div className=" h-16 lg:h-24 bg-gradient-to-r from-primary to-secondary"></div>
      </header>
    </>
  );
}
