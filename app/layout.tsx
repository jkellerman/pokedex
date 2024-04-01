import type { Metadata } from "next";
import { red_rose } from "./fonts";
import "./globals.css";
import Header from "./components/ui/Header/Header";
import NextTopLoader from "nextjs-toploader";

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
      <body className={red_rose.className}>
        <NextTopLoader />
        <Header />
        {children}
      </body>
    </html>
  );
}
