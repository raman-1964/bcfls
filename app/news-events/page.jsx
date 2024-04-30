"use client";
import { getNewsEventsApi } from "@/services/news-events.services";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const NewsEventsPage = () => {
  const { isLoading, isRefetching, data } = useQuery({
    queryKey: ["Gallery"],
    enabled: true,
    queryFn: () => getNewsEventsApi(false),
  });

  console.log(data?.data);

  return (
    <div class="w-full my-8 p-6 pt-0 pb-0 z-10 relative max-w-[1320px] px-6 md:px-3 mx-auto backdrop-blur-sm backdrop-opacity-20 h-full">
      <div className="flex gap-5 items-center justify-start">
        <button class="inline-block text-base px-3 cursor-pointer bg-[#ecf0f5] hover:bg-gray-200 text-zinc-600 font-medium hover:text-zinc-900 rounded-full tracking-tight h-10 transition transition-all duration-400">
          Past
        </button>
        <button class="inline-block text-base px-3 cursor-pointer bg-[#ecf0f5] hover:bg-gray-200 text-zinc-600 font-medium hover:text-zinc-900 rounded-full tracking-tight h-10 transition transition-all duration-400">
          Ongoing
        </button>
        <button class="inline-block text-base px-3 cursor-pointer bg-[#ecf0f5] hover:bg-gray-200 text-zinc-600 font-medium hover:text-zinc-900 rounded-full tracking-tight h-10 transition transition-all duration-400">
          Upcoming
        </button>
      </div>

      <div class="inline-flex mt-4 mb-12">
        <h2 class="mt-2 text-black/90 text-5xl font-semibold tracking-tighter xl:text-[48px] lg:leading-tight md:leading-tight capitalize drop-shadow-sm ">
          News/Events
        </h2>
      </div>

      {isLoading ? null : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
          {data.data.map((e) => (
            <div class="w-full">
              <div class="flex group hover:shadow-lg hover:scale-[1.005] h-full sm:mt-0 flex-col hover:bg-white transition transition-all duration-300 p-3 bg-white shadow-sm border border-gray-300/60 rounded-2xl font-inter w-full">
                <div class="w-full shrink-0 h-[240px] max-w-full md:h-[240px] md:max-w-full relative rounded-xl overflow-hidden border border-gray-100">
                  <img
                    alt="Touch-First Cursor: Round Pointers vs. Mouse Arrows"
                    loading="lazy"
                    class="object-cover absolute w-full h-full group-hover:scale-[1.03] transition transition-all duration-700 cursor-pointer"
                    sizes="100vw"
                    src="https://prototyprio.gumlet.io/strapi/4b5c24a0784944388b876737b92d9f1a.png?w=3840&amp;q=75&amp;format=webp&amp;compress=true&amp;dpr=2"
                    style={{
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                  <Image
                    src={e.image}
                    alt="logo"
                    className="w-full shrink-0 h-[240px] max-w-full md:h-[240px] md:max-w-full relative rounded-xl overflow-hidden border border-gray-100"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div class="mt-3 flex flex-col px-[10px] justify-between h-full">
                  <div class="flex flex-col justify-start">
                    <h2 class="text-lg tracking-tight mb-3 font-medium leading-snug line-clamp-2">
                      {e.title}
                    </h2>
                    <div class="mb-6 text-gray-600 line-clamp-2">
                      {e.description}
                    </div>
                    <div class="mb-3.5">
                      <div class="flex font-inter w-full max-w-[300px]">
                        <div class="pl-1.5 flex my-auto flex-wrap">
                          <h2 class="line-clamp-1 my-auto font-regular text-sm">
                            Rohan Kumar{" "}
                          </h2>
                          <div class="px-1 text-sm my-auto text-gray-500 font-bold hidden md:inline-block">
                            ·
                          </div>
                          <p class="md:line-clamp-1 my-auto text-gray-500 text-sm hidden md:inline-block">
                            <time
                              datetime="1655679600000"
                              class="text-xs text-gray-500 my-auto"
                            >
                              Jun 20
                            </time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex text-xs">
                    <div class=" capitalize inline-block text-xs px-2 py-0.5 font-medium bg-[#ecf0f5] text-black/80 rounded-full mr-2">
                      product design
                    </div>

                    <div class=" capitalize inline-block text-xs px-2 py-0.5 font-medium bg-[#ecf0f5] text-black/80 rounded-full mr-2">
                      product build
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsEventsPage;
