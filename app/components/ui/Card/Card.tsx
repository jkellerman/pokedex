import Image from "next/image";
import Link from "next/link";
import { PokemonList } from "@/app/types/pokemon";
import { lalezar } from "@/app/fonts";
import { formatId } from "@/app/utils/utils";
import clsx from "clsx";
import { cardPillTheme } from "../themes";
import Logo from "../../Logo/Logo";

export default function Card({ name, url, id, type }: PokemonList) {
  return (
    <Link
      href={`/${name}`}
      className={`${lalezar.className} block overflow-hidden min-h-[130px] max-h-[130px] p-4 list-none rounded-2xl capitalize font-bold text-xl shadow-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1) bg-[#ececec]`}
    >
      <span className="flex flex-col gap-4">
        <span>{name}</span>
        <span className="flex items-center justify-between relative bg-transparent">
          <span
            className={clsx(
              `py-1 px-2  rounded-[10px] capitalize text-xs sm:text-base font-bold z-10`,
              cardPillTheme(type)
            )}
          >
            {formatId(id)}
          </span>
          <span className="absolute bottom-[-70px] right-[-30px] md:bottom-[-60px] md:right-[-20px]">
            <Logo />
            <Image
              src={url}
              alt={name}
              objectFit="cover"
              width={75}
              height={75}
              className="absolute top-0 left-0"
            />
          </span>
        </span>
      </span>
    </Link>
  );
}
