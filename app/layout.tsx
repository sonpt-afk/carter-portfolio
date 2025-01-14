import { Noto_Sans } from "next/font/google";
import { Metadata } from "next";
import { EmailProvider } from "@/components/EmailProvider";
import "./globals.css";
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Son Pham Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={notoSans.className} suppressHydrationWarning>
        <EmailProvider>{children}</EmailProvider>
      </body>
    </html>
  );
}
