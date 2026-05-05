import type { Metadata } from "next";
import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { StoryAtmosphere } from "@/components/motion/StoryAtmosphere";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eternal Princess",
  description:
    "A soft cosmic garden landing experience for eternalPrincess.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <StoryAtmosphere />
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
