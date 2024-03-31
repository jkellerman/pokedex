import clsx from "clsx";
import { pillTheme } from "../themes";

interface PillProps {
  type: string;
}

export default function Pill({ type }: PillProps) {
  return (
    <span
      className={clsx(
        `py-1 px-2 sm:py-2 sm:px-4 rounded-[10px] capitalize min-w-6 text-xs sm:text-base font-bold`,
        pillTheme(type)
      )}
    >
      {type}
    </span>
  );
}
