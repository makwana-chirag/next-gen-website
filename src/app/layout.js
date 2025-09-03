import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { BottomSection } from "@/modules/BottomSection/BottomSection";
import FloatingImage from "@/components/FioatingImage";
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
          <main className="flex flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
          <BottomSection />
        </div>
        <FloatingImage
          src="/phone.svg"
          alt="Action"
          href="/"
          size={64}
          className="bottom-6 right-6"
        />
      </body>
    </html>
  );
}
