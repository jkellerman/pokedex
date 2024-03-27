import type { Metadata } from "next";
import { red_rose } from "./fonts";
import "./globals.css";
import Header from "./components/layout/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
