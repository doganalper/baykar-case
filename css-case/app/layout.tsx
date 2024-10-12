import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const inter = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baykar Test Case",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
