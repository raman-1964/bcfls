import AboutUsCard from "@/components/AboutUsCard";
import Carousel from "@/components/Carousel";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";
import Img3 from "../../assets/img3.jpg";
import RecentVideos from "@/components/RecentVideos";

export default function Home() {
  return (
    <div>
      <Carousel
        data={[...Array(4).keys()].map(() => (
          <div className="min-w-0 flex-grow flex-shrink-0 w-full flex items-center justify-center">
            <Image
              layout="fixed"
              src={Img3}
              alt="logo"
              className="w-[85%] h-[70vh] rounded-md"
            />
          </div>
        ))}
      />

      <AboutUsCard />
      <NewsCard />
      <RecentVideos
        data={[...Array(5).keys()].map(() => (
          <div className="min-w-0 flex-grow flex-shrink-0 w-[31%] flex items-center justify-center">
            <Image
              layout="fixed"
              src={Img3}
              alt="logo"
              className="h-[20vh] rounded-md"
            />
          </div>
        ))}
      />
    </div>
  );
}
