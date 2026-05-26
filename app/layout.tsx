import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Fairyrealm",
  description: "fairyrealm.xyz — 技术实验领地",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geist.variable} min-h-screen bg-zinc-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
