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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="VqDjHSD5Dsh6TKeQYN_PM4sHbCvDNlOJR1d-j8jY8DA" />
      </head>
      <body
        className={`${montserrat.variable} ${playfair.variable} bg-primary-dark text-primary-light antialiased`}
        style={{ isolation: 'isolate' }}
      >
        {children}
      </body>
    </html>
  );
}
