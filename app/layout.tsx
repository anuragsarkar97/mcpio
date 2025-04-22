import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Header} from "@/app/components/header";
import {Footer} from "@/app/components/footer";
import { Analytics } from "@vercel/analytics/react"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MCP Registry ORG",
  description: "Model context protocol server registry",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" data-theme="light">
      <body>
      <Header/>
      <div>
        <div className={"flex-1 pt-16"}>
          <div className={"min-h-screen bg-white"}>
            <div className={"container mx-auto py-6 px-6"}>
              <div className={"flex flex-col gap-4 max-w-5xl mx-auto"}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </body>
      </html>
  );
}
