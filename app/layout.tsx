import { Metadata } from "next";
import { EmailProvider } from "@/components/EmailProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Son Pham | Full Stack Developer",
  description: "Creative full-stack developer crafting modern web experiences with React, Node.js, and cutting-edge tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <EmailProvider>{children}</EmailProvider>
      </body>
    </html>
  );
}
