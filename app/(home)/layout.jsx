import Footer from "./_components/Footer";

export const metadata = {
  title: "Home",
  description: "home",
};

export default function HomeLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
