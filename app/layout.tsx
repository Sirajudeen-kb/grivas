import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grivas Technologies - Leading Home Automation Solutions",
  description:
    "Discover Grivas Technologies, your expert in smart home solutions. Enhance your living space with advanced automation systems for security, lighting, climate control, and more.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
