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
  title: "Sai Chaitanya Maddula | Portfolio",
  description: "Power Platform Solution Architect and AI/Governance admin with 8+ years of experience leading enterprise-grade digital transformation initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="relative bg-background text-foreground antialiased min-h-screen">
        <div className="fixed inset-0 mesh-bg -z-10" />
        {children}
      </body>
    </html>
  );
}
