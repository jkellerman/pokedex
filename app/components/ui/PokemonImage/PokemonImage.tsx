import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

interface PokemonImageProps {
  src: string;
  name: string;
}

export default async function PokemonImage({ src, name }: PokemonImageProps) {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);
  return (
    <Image
      src={src}
      alt={name}
      placeholder="blur"
      blurDataURL={base64}
      objectFit="cover"
      width={512}
      height={512}
    />
  );
}
