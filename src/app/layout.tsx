import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import GlobalBackground from "@/components/layout/GlobalBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paper World",
  description:
    "Premium eco-friendly shopping paper bags manufactured in Bangalore, India. Customizable size, thickness (GSM), handles, and finishes for retail, food, luxury, and gifting brands.",
  keywords: [
    "paper bag manufacturer",
    "custom paper bags",
    "eco-friendly packaging",
    "paper bags bangalore",
    "luxury shopping bags",
    "wholesale paper bags",
  ],
  authors: [{ name: "Paper World" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://paperworld.co.in",
    title: "Paper World",
    description:
      "Premium eco-friendly shopping paper bags manufactured in Bangalore, India. 17+ years of manufacturing quality packaging.",
    siteName: "Paper World",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper World",
    description:
      "Premium eco-friendly shopping paper bags manufactured in Bangalore, India.",
  },
  icons: {
    icon: "/logo.png",
  },
};

/* Inline script to apply saved theme before first paint – prevents flash */
const themeScript = `(function(){try{var t=localStorage.getItem('pw-theme');if(!t){t=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
