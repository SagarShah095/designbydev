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

export const metadata = {
  title: "Dominion Studio | Websites Designed to Grow Your Business",
  description:
    "We build high-converting, modern digital experiences and websites designed to scale ambitious businesses.",
  keywords: ["Website Design", "Web Development", "Next.js", "Conversion Rate", "Landing Page"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#030303] text-white flex flex-col">{children}</body>
    </html>
  );
}
