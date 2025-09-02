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
      <body>
        <div className="w-full px-4">
          <Navbar />
          <main className="flex flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
          <BottomSection />
        </div>
      </body>
    </html>
  );
}
