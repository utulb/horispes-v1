import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "HORISPES | Premium Experiences",
  description: "Experience curated luxury with HORISPES.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} bg-primary-dark text-primary-light antialiased`}
        style={{ isolation: 'isolate' }}
      >
        {children}
      </body>
    </html>
  );
}
