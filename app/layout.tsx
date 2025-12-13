//@ts-nocheck
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { PostsProvider } from "@/app/store/PostsProvider";
import { LangProvider } from "./store/LangProvider";
import { getBlogPosts } from "@/app/utils";
import "./globals.css";
import './stackoverflow-dark.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devemeka Blog",
  description: "Here, I talk about things that I learned.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getBlogPosts();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning
      >
        <ThemeProvider>
          <LangProvider>
            <main className="global_wrapper">
                <Nav />
                <section>
                  {children}
                </section>
                <Footer />
            </main>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}