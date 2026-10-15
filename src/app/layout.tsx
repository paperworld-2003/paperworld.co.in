import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
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

const trench = localFont({
  src: "./fonts/trench100free.otf",
  variable: "--font-trench",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paperworld.co.in"),
  title: "Paper World - Premium Eco-Friendly Paper Bags Manufacturer",
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
      "Premium eco-friendly shopping paper bags manufactured in Bangalore, India. 23+ years of manufacturing quality packaging.",
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

/* Inline script to apply saved theme before first paint – defaults to light theme on landing on any desktop */
const themeScript = `(function(){try{var userSelected=sessionStorage.getItem('pw-theme-user-choice');var t=userSelected?localStorage.getItem('pw-theme'):'light';if(!t){t='light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${trench.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="pw-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
