import Footer from "@/components/Footer";
export const metadata = {
  title: "Home",
  description: "home",
};
export default function HomeLayout({ children }) {
  return (
    <div className="mt-16">
      {children}
      <Footer />
    </div>
  );
}
