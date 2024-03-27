import React, { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <p>{children}</p>;
}
