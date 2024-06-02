import { lalezar } from "@/app/fonts";
import Pill from "../Pill/Pill";

interface PokemonTypesProps {
  typeNames: string[];
}

export default function PokemonTypes({ typeNames }: PokemonTypesProps) {
  return (
    <div>
      <h2 className={`${lalezar.className} text-2xl mb-4 md:mb-8`}>Type</h2>
      <div className="flex gap-2">
        {typeNames.map((item: string, i: number) => {
          return <Pill key={i} type={item} />;
        })}
      </div>
    </div>
  );
}
