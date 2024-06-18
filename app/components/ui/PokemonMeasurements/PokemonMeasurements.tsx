interface PokemonMeasurementsProps {
  height: number;
  weight: number;
}

export default function PokemonMeasurements({
  height,
  weight,
}: PokemonMeasurementsProps) {
  return (
    <div className="flex flex-col xl:items-end">
      <div>
        <span className="font-bold">Weight: </span>
        <span>{weight.toFixed(1)}kg</span>
      </div>
      <div>
        <span className="font-bold">Height: </span>
        <span>{height.toFixed(1)}m</span>
      </div>
    </div>
  );
}
