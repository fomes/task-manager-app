import type, { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import TaskInput from "@/components/TaskInput";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
