import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--fonst-inter",
});


export const metadata: Metadata = {
  title: { template: "%s | PlayerHaven", default: "PlayerHaven" },
  description: "Bem-vindo ao PlayerHaven. Explore, jogue, conecte-se. O jogo só está começando!",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" className="bg-black w-full">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
