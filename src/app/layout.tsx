import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shihab Ahammed | Cybersecurity & Computer Science",
  description:
    "Personal portfolio of Shihab Ahammed — Computer Science Student, Cybersecurity Enthusiast, Linux User, and AI Explorer.",
  keywords: [
    "Shihab Ahammed",
    "Cybersecurity",
    "Computer Science",
    "Portfolio",
    "Linux",
    "AI",
    "Ethical Hacking",
    "C++",
    "Python",
    "Bangladesh",
  ],
  authors: [{ name: "Shihab Ahammed" }],
  openGraph: {
    title: "Shihab Ahammed | Cybersecurity & CS Student",
    description: "Root access to knowledge, one shell at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrains.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className="bg-surface-obsidian font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-surface-obsidian min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full pt-16 bg-surface-obsidian">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
