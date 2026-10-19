import "./globals.css";

export const metadata = {
  title: "DesignbyDev | Websites Designed to Grow Your Business",
  description:
    "We build high-converting, modern digital experiences and websites designed to scale ambitious businesses.",
  keywords: ["Website Design", "Web Development", "Next.js", "Conversion Rate", "Landing Page"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Manrope:wght@200..800&family=Aboreto&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#030303] text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
