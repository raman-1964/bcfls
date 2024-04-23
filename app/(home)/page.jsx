import AboutUsCard from "@/app/(home)/_components/AboutUsCard";
import Carousel from "@/components/Carousel";
import NewsCard from "@/app/(home)/_components/NewsCard";
import Image from "next/image";
import Img3 from "../../assets/img3.jpg";
import RecentVideos from "@/app/(home)/_components/RecentVideos";

export default function Home() {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto">
        <Carousel
          showDots={true}
          data={[...Array(4).keys()].map(() => (
            <div className="min-w-0 flex-grow flex-shrink-0 w-full flex items-center justify-center">
              <Image
                layout="fixed"
                src={Img3}
                alt="logo"
                className="w-full h-[70vh] rounded-md"
              />
            </div>
          ))}
        />
      </div>

      <AboutUsCard />
      <NewsCard />
      <RecentVideos />
    </div>
  );
}
