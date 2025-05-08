import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/_Others/Footer";
import Header from "@/components/ui/_Others/Header";
import PageTransition from "@/components/ui/_Others/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wandiko",
  description: "Wandiko is a comprehensive academic writing and research development agency specializing in supporting students through their academic journey with ethical research assistance, language optimization, and capacity building workshops.",
  twitter: {
    card: "summary_large_image",
    description: "Wandiko is a comprehensive academic writing and research development agency specializing in supporting students through their academic journey with ethical research assistance, language optimization, and capacity building workshops.",
    title: "Wandiko",
  },

  classification: 'Academic Writing and Research Development Agency',
  authors: [{ name: 'Wandiko', url: 'https://wandiko.com' }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="w-full min-h-screen max-h-fit mx-auto flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>

        <Header />

        <Footer />
      </body>
    </html>
  );
}
