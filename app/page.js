import AboutUsCard from "@/components/AboutUsCard";
import Carousel from "@/components/Carousel";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Carousel />
      <AboutUsCard />
      <NewsCard />
    </div>
  );
}
