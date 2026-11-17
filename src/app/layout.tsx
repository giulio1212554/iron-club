import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gym } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${gym.name} | Palestra Napoli`,
  description: gym.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="font-sans antialiased bg-iron text-snow">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
