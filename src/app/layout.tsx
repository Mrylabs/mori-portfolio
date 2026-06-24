import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mori-portfolio-eta.vercel.app"),

  title: {
    default: "Morvarid Tahmasebi",
    template: "%s | Morvarid Tahmasebi",
  },

  description:
    "Composer and audiovisual storyteller creating cinematic sound worlds shaped by memory, identity, and cultural belonging.",

  icons: {
    icon: "/icon.svg",
  },

  openGraph: {
    title: "Morvarid Tahmasebi",
    description:
      "Composer and audiovisual storyteller creating cinematic sound worlds shaped by memory, identity, and cultural belonging.",
    url: "https://mori-portfolio-eta.vercel.app",
    siteName: "Morvarid Tahmasebi",
    type: "website",
    images: [
      {
        url: "/images/og/mori-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Morvarid Tahmasebi portfolio preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Morvarid Tahmasebi",
    description:
      "Composer and audiovisual storyteller creating cinematic sound worlds shaped by memory, identity, and cultural belonging.",
    images: ["/images/og/mori-og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
