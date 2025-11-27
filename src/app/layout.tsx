import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "The King - O Rei do iPhone | Assistência Técnica",
  description: "Especialistas em reparo de iPhone e produtos Apple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-gray-50 dark:bg-dark-950">
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}