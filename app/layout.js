import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/config/site";

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
      <body className={inter.className}>
        <Navbar />
        <div className="mt-16">{children}</div>
      </body>
    </html>
  );
}
