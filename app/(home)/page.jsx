"use client";
import AboutUsCard from "@/app/(home)/_components/AboutUsCard";
import Carousel from "@/components/Carousel";
import NewsCard from "@/app/(home)/_components/NewsCard";
import Image from "next/image";
import Img3 from "../../assets/img3.jpg";
import RecentVideos from "@/app/(home)/_components/RecentVideos";
import { useQuery } from "@tanstack/react-query";
import { getBannerApi } from "@/services/banner.services";

export default function Home() {
  const {
    isLoading,
    isRefetching,
    data: bannerData,
  } = useQuery({
    queryKey: ["Banner"],
    enabled: true,
    queryFn: () => getBannerApi(),
  });

  return (
    <>
      {isLoading ? null : (
        <>
          <div className="max-w-[1320px] px-2 mx-auto">
            <Carousel
              showDots={true}
              data={bannerData.data.map((e) => (
                <div className="min-w-0 flex-grow flex-shrink-0 w-full flex items-center justify-center">
                  <Image
                    src={e.image}
                    className="w-full object-cover h-[70vh] rounded-md"
                    width={1000}
                    height={1000}
                    alt="logo"
                  />
                </div>
              ))}
            />
          </div>
          <AboutUsCard />
          <NewsCard />
          <div class="py-16 pt-14  bg-[#ffffff] mx-auto px-6 md:px-3">
            <div class="max-w-[1320px] mx-auto">
              <div class=" flex-col grid gap-4 md:gap-6 grid-cols-12">
                <a class="col-span-12 lg:col-span-6" href="/opportunities">
                  <div class="flex h-[220px] bg-gray-50 group hover:scale-[1.005] hover:shadow-md transition transition-all duration-400 relative rounded-2xl shadow-sm border border-gray-300/60 w-full flex-col justify-center overflow-hidden p-6 py-0 md:py-6 md:p-6 text-white">
                    <img
                      src="/svg/jobs.svg"
                      class="w-1/2 -scale-x-100 group-hover:rotate-1 transition transition-all duration-400 h-auto absolute right-0 -mr-20 gm-added gm-observing gm-observing-cb"
                      loading="lazy"
                    />
                    <div class="max-w-[200px] sm:max-w-[280px]">
                      <h3 class="text-2xl tracking-tight text-black/90 font-semibold drop-shadow-sm">
                        Purpose of ICPS:
                      </h3>
                      <p class="text-base text-black/70 mt-1">
                        To ensure that each and every person receives the
                        benefit of the government policies.
                      </p>
                    </div>
                  </div>
                </a>
                <a class="col-span-12 lg:col-span-6" href="/opportunities">
                  <div class="flex h-[220px] bg-gray-50 group hover:scale-[1.005] hover:shadow-md transition transition-all duration-400 relative rounded-2xl shadow-sm border border-gray-300/60 w-full flex-col justify-center overflow-hidden p-6 py-0 md:py-6 md:p-6 text-white">
                    <img
                      src="/svg/botty.svg"
                      class="w-[400px] h-auto absolute right-0 mt-[40px] -mr-[124px] group-hover:-rotate-1 transition transition-all duration-400 gm-added gm-observing gm-observing-cb"
                      loading="lazy"
                    />
                    <div class="max-w-[200px] sm:max-w-[280px]">
                      <h3 class="text-2xl tracking-tight text-black/90 font-semibold drop-shadow-sm">
                        ICPS motto :
                      </h3>
                      <p class="text-base text-black/70 mt-1">
                        To move towards a strong nation in which all the
                        citizens can prosper.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <RecentVideos />
        </>
      )}
    </>
  );
}
