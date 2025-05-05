import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Busconecta",
  description:
    "Compre suas passagens de ônibus de forma rápida e segura com a Busconecta. Compare preços, horários e rotas de diversas viações em um só lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
