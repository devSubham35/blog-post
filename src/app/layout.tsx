import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog-Post",
  description: "CRUD blog post Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex justify-center">
          <div className="w-[90%] md:w-[80%] 2xl:w-[60%]">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
