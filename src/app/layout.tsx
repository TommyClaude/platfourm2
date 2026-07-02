import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://tommyclaude.github.io/platfourm2/yaycommerce";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "YayCommerce – WooCommerce Plugins That Help You Sell More",
  description:
    "Lightweight, easy-to-use WooCommerce plugins powering 100,000+ websites. Customize emails, automate pricing, sell in any currency, and more.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "YayCommerce",
    title: "YayCommerce – WooCommerce Plugins That Help You Sell More",
    description:
      "Lightweight, easy-to-use WooCommerce plugins powering 100,000+ websites. Customize emails, automate pricing, sell in any currency, and more.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "YayCommerce – WooCommerce Plugins That Help You Sell More",
    description:
      "Lightweight, easy-to-use WooCommerce plugins powering 100,000+ websites.",
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
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
