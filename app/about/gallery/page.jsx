"use client";
import Skeleton from "@/components/skeleton/Skeleton";
import { getGalleryApi } from "@/services/gallery.services";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const AboutGalleryPage = () => {
  const { isLoading, isRefetching, data } = useQuery({
    queryKey: ["Gallery"],
    enabled: true,
    queryFn: () => getGalleryApi(false),
  });

  return (
    <>
      <div className="w-full mx-auto pb-5">
        <div className="pt-4 h-[60%] w-full bg-gradient-to-b from-blue-100/60 to-gray-100/20 absolute top-0 left-0"></div>
        <div className="max-w-[1320px] mx-auto">
          <div
            className="relative -mt-[96px] md:-mt-0 pt-[64px] md:pt-0 mx-auto w-[1301px] border-b border-b-indigo-500/20 border-r border-indigo-500/10 max-w-full px-6 md:px-3"
            style={{
              backgroundImage:
                "linear-gradient(rgba(32, 52, 144,0.10) 1px, transparent 1px), linear-gradient(to right, rgba(32, 52, 144,0.10) 1px, rgba(247, 247, 247,0.10) 1px)",
              backgroundSize: "26px 26px",
            }}
          >
            <div className="pt-4 w-[1020px] max-w-full mx-auto">
              <p className="text-left md:px-1 mt-3 md:mt-0 mb-3 text-base text-black/80">
                Gallery
              </p>
            </div>
            <div className="md:pb-[112px] w-[1020px] max-w-full mx-auto">
              <h1 className=" text-5xl tracking-tight md:text-6.5xl w-full leading-tight max-w-[44rem] text-black/90 font-inter font-bold text-left drop-shadow-sm">
                India Centre for Policy Studies
              </h1>
            </div>
          </div>
          <div className="px-4 md:px-0 max-w-full w-[1020px] mx-auto mt-[2rem] md:-mt-[70px] relative md:rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
              {isLoading ? (
                <>
                  {[...Array(6).keys()].map(() => (
                    <Skeleton className="h-[25vh] rounded-2xl" />
                  ))}
                </>
              ) : (
                <>
                  {data.data.map((e, ind) => (
                    <Link
                      className="flex shadow-sm hover:scale-[1.01] hover:shadow-lg group border border-gray-300/70 mx-auto md:flex-col md:justify-start bg-white p-2 md:my-0 md:mt-0 lg:mb-0 lg:my-0  transition-all duration-300 rounded-2xl font-inter w-full max-w-[490px]"
                      href={`/about/gallery/${e.image.split("/")[5]}`}
                    >
                      <div className="group-hover:scale-[1.01]  transition-all duration-700 md:inline-block my-auto md:my-0 shrink-0 w-full h-[164px] relative rounded-lg md:rounded-xl overflow-hidden border border-gray-100">
                        <Image
                          className="object-cover cursor-pointer"
                          layout="fill"
                          src={e.image}
                          alt="logo"
                        />
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutGalleryPage;
