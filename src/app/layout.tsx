import type { Metadata } from "next";
import { Bebas_Neue, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Whalesails Records | Cinematic Sound. Timeless Vision.",
  description:
    "Whalesails Records — a premium record label built on cinematic presentation, authentic artistry and enduring creative institutions.",
  keywords: ["Whalesails Records", "record label", "music label", "Ario PaPa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} ${instrumentSerif.variable} h-full antialiased overflow-x-none`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
