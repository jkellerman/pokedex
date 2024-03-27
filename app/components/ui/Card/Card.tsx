import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

export default function Card({ name, url }: Pokemon) {
  return (
    <Link href={`/${name}`}>
      <li className="list-none py-4 px-4 border-2 rounded-md border-tertiary capitalize">
        {name}
      </li>
    </Link>
  );
}
