import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GroupFound — Social Built for Growth",
  description:
    "The social platform built for founders, creators, and people who take growth seriously. Connect through shared purpose, not vanity metrics.",
  keywords: [
    "social platform",
    "founders",
    "networking",
    "circles",
    "growth",
    "habits",
    "AI",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "GroupFound — Social Built for Growth",
    description:
      "Connect through shared purpose, not vanity metrics. Join Circles, track habits, and grow with people who push you forward.",
    url: "https://groupfound.com",
    siteName: "GroupFound",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GroupFound — Social Built for Growth",
    description:
      "Connect through shared purpose, not vanity metrics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
