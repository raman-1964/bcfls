import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/config/site";

import { Oxygen } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const textFont = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: {
    default: siteConfig.name,
    template: ` ${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(textFont.className)}>
        <Navbar />
        <div className="mt-14 bg-[#FBFCFF]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
