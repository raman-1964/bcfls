"use client";
import { Oxygen } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const textFont = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const App = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={cn(textFont.className)}>
          <main>
            <Navbar />
            <div className="mt-14 bg-[#FBFCFF]">{children}</div>
            <Footer />
            <Toaster />
          </main>
        </body>
      </html>
    </QueryClientProvider>
  );
};

export default App;
