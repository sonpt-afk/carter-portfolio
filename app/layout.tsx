import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Home from "@/app/page";
import Footer from "@/components/ui/footer";
import { EmailProvider } from "@/components/EmailProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// const navItems = [
//   {
//     name: "Home",
//     link: "/",
//     icon: <Home className="h-10 w-10 text-neutral-500 dark:text-white" />,
//   },
//   {
//     name: "About",
//     link: "/about",
//   },
//   {
//     name: "Contact",
//     link: "/contact",
//   },
// ];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <EmailProvider>{children}</EmailProvider>
      </body>
    </html>
  );
}
