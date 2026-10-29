import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({
  variable: "--font-main",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Алгоритмізація та основи програмування",
  description: "Лекції та практичні матеріали курсу",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={inter.variable}>
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
