import type { Metadata } from "next";
import { Barlow, Roboto_Condensed } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/config/site";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "G&K Junk Removal Website Concept | Veriq",
    template: `%s | G&K Junk Removal Website Concept`,
  },
  description:
    "An unofficial website concept created by Veriq for G&K Junk Removal in the Des Moines, Iowa area.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "G&K Junk Removal Website Concept",
    description: "Unofficial demonstration concept created by Veriq.",
    siteName: "G&K Junk Removal Website Concept",
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "G&K Junk Removal Website Concept",
    description: "Unofficial demonstration concept created by Veriq.",
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
      className={`${barlow.variable} ${robotoCondensed.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
