import type { Metadata } from "next";
import "./globals.css";

import { Header, Footer } from "@/components/Site";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://my-portfolio.vercel.app",
  ),

  title: {
    default: "Wahab O. Badmus | Research, Software & AI Governance",
    template: "%s | Wahab O. Badmus",
  },

  description:
    "The professional portfolio of Wahab Opeyemi Badmus. Software projects, AI governance research, public-policy analysis and ongoing learning.",

  keywords: [
    "Wahab Opeyemi Badmus",
    "Wahab O. Badmus",
    "Software Development",
    "AI Governance",
    "AI Ethics",
    "Public Policy",
    "Research",
    "African Technology",
    "Python",
    "TypeScript",
    "FastAPI",
    "Next.js",
  ],

  authors: [
    {
      name: "Wahab Opeyemi Badmus",
    },
  ],

  creator: "Wahab Opeyemi Badmus",

  openGraph: {
    type: "website",
    title: "Wahab O. Badmus",
    description: "I Build. I Research. I Prompt. Welcome to my world.",
    images: [
      {
        url: "/images/wahab-cover.webp",
        width: 1200,
        height: 1500,
        alt: "Wahab Opeyemi Badmus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wahab O. Badmus",
    description: "I Build. I Research. I Prompt. Welcome to my world.",
    images: ["/images/wahab-cover.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-base focus:p-4"
        >
          Skip to content
        </a>

        <Header />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
