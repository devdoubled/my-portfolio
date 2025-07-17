import "../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "DuyLee | Portfolio",
  description: "Welcome to my personal portfolio website",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="page-wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
