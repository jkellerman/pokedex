"use client";
import React from "react";
import * as Progress from "@radix-ui/react-progress";
import clsx from "clsx";
import { progressTheme } from "../themes";
interface ProgressBarProps {
  stat: number;
  primaryType: string;
}
export default function ProgressBar({ stat, primaryType }: ProgressBarProps) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(stat), 500);
    return () => clearTimeout(timer);
  }, [stat]);

  return (
    <Progress.Root
      className=" relative overflow-hidden bg-quinary-dark rounded-full w-[250px] h-[15px]"
      value={progress}
    >
      <Progress.Indicator
        className={clsx(
          `w-full h-full transition duration-[600] rounded-full ease-[cubic-bezier(0.65, 0, 0.35, 1)]`,
          progressTheme(primaryType)
        )}
        style={{
          transform: `translateX(-${
            progress === 250
              ? 250 - progress
              : progress >= 150
              ? 180 - progress
              : 140 - progress
          }%)`,
          // For accurate representation of stats in progress bar, otherwise some stats won't show
        }}
      />
    </Progress.Root>
  );
}
