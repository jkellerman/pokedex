import { lalezar } from "@/app/fonts";
import Pill from "../Pill/Pill";

interface PokemonWeaknessesProps {
  weaknesses: string[];
}

export default function PokemonWeaknesses({
  weaknesses,
}: PokemonWeaknessesProps) {
  return (
    <div className="max-w-[350px] xl:max-w-[400px]">
      <h2 className={`${lalezar.className} text-2xl mb-4 md:mb-8 text-end`}>
        Weaknesses
      </h2>
      <div className="flex flex-wrap justify-end gap-2">
        {weaknesses.map((item: string, i: number) => {
          return <Pill key={i} type={item} />;
        })}
      </div>
    </div>
  );
}
