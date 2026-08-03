import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const grotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whalesails Records LTD | Cinematic Sound. Timeless Vision.",
  description:
    "Whalesails Records LTD — a premium record label built on cinematic presentation, authentic artistry and enduring creative institutions. Home of Ario PaPa.",
  keywords: [
    "Whalesails Records",
    "record label",
    "Ario PaPa",
    "music label",
    "WHALES SOVEREIGN LTD",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${grotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
