import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatId(id: number) {
  const paddedId = String(id).padStart(4, "0");
  return `#${paddedId}`;
}
