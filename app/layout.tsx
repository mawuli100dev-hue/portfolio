import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Configuration de la police Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hénoc AMAVIGAN | Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description:
    "Portfolio de Hénoc AMAVIGAN - Développeur Fullstack & Data Scientist",
  keywords: [
    "Hénoc AMAVIGAN",
    "Portfolio",
    "Développeur Web",
    "Développeur Fullstack",
    "Data Scientist",
    // ... vos autres keywords
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {" "}
      {/* Changé en français */}
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
