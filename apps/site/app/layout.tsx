import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Landing Page",
  description: "Generated landing page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
