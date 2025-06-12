// In src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


// Murs Gothic font
const mursGothic = localFont({
  src: '../fonts/MursGothic.woff',
  variable: '--font-murs',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Abraham - Electrical Engineering Portfolio",
  description: "Portfolio showcasing electrical engineering projects and expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${mursGothic.variable} antialiased bg-gray-900 text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <FloatingActionButton />
      </body>
    </html>
  );
}