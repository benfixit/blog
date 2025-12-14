//@ts-nocheck
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { PostsProvider } from "@/app/store/PostsProvider";
import { LangProvider } from "./store/LangProvider";
import ThemeWrapper from "./store/ThemeWrapper";
import { getBlogPosts } from "@/app/utils";
import "./globals.css";
import './stackoverflow-dark.min.css';

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
    <html lang="en">
      <body className={`antialiased`} suppressHydrationWarning>
        <ThemeWrapper>
          <LangProvider>
            <main className="global_wrapper">
                <Nav />
                <section>
                  {children}
                </section>
                <Footer />
            </main>
          </LangProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}