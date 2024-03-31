import { children } from "@/app/types/pokemon";

export function CardGrid({ children }: children) {
  return (
    <ul className="grid grid-cols-12 justify-center mb-12 w-full gap-4 sm:gap-8">
      {children}
    </ul>
  );
}
export function CardListItem({ children }: children) {
  return (
    <li className="list-none col-span-6 md:col-span-4 lg:col-span-3">
      {children}
    </li>
  );
}
