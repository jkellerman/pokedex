import type { Metadata } from "next";
import { red_rose, lalezar } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokèdex",
  description: "Pokèmon test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lalezar.className}>{children}</body>
    </html>
  );
}
