import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AIGEX Voice Agents - Never Miss a Call Again",
  description: "AI-powered voice agents for UK SMBs. Answer every call instantly, book appointments, qualify leads, and handle FAQs 24/7.",
  keywords: "AI voice agents, automated phone answering, UK SMB, appointment booking, lead qualification",
  openGraph: {
    title: "AIGEX Voice Agents - Never Miss a Call Again",
    description: "AI-powered voice agents for UK SMBs. Answer every call instantly, book appointments, qualify leads, and handle FAQs 24/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
