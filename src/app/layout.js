import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BottomSection } from "@/modules/BottomSection/BottomSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Gen Website",
  description: "Next Gen Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="max-w-[1367.6px] mx-auto antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BottomSection />
      </body>
    </html>
  );
}
