import "./globals.css";
import { siteConfig } from "@/config/site";
import App from "./app";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: ` ${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return <App children={children} />;
}

{
  /* <QueryClientProvider client={queryClient}>
  <html lang="en">
    <body className={cn(textFont.className)}>
      <Navbar />
      <div className="mt-14 bg-[#FBFCFF]">{children}</div>
      <Footer />
    </body>
  </html>
</QueryClientProvider>; */
}
