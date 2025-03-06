import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cn } from "../lib/cn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ajit Yadav | Software Engineer & AI Specialist",
  description:
    "Portfolio showcasing projects, skills, and professional journey",
  keywords: ["Software Engineer", "AI", "Cloud Security", "Next.js"],
  openGraph: {
    title: "Ajit Yadav Portfolio",
    description: "Explore my professional projects and expertise",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico", // Optional for Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} 
                    bg-black 
                    text-gray-300 
                    antialiased 
                    scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
