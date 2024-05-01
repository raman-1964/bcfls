"use client";
import Skeleton from "@/components/skeleton/Skeleton";
import { getNewsEventsApi } from "@/services/news-events.services";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NewsEventsPage = () => {
  const router = useRouter();
  const { isLoading, isRefetching, data } = useQuery({
    queryKey: ["Gallery"],
    enabled: true,
    queryFn: () => getNewsEventsApi(false),
  });

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {isLoading ? (
          <>
            {[...Array(6).keys()].map(() => (
              <Skeleton className="h-[32vh] rounded-2xl" />
            ))}
          </>
        ) : (
          <>
            {data.data.map((e) => (
              <div class="w-full">
                <div
                  class="flex group cursor-pointer hover:shadow-lg hover:scale-[1.005] h-full sm:mt-0 flex-col hover:bg-white transition transition-all duration-300 p-3 bg-white shadow-sm border border-gray-300/60 rounded-2xl font-inter w-full"
                  onClick={() => router.push(`news-events/${e.id}`)}
                >
                  <div class="w-full shrink-0 h-[240px] max-w-full md:h-[240px] md:max-w-full relative rounded-xl overflow-hidden border border-gray-100">
                    <Image
                      src={e.image}
                      alt="logo"
                      className="w-full shrink-0 h-[240px] max-w-full md:h-[240px] md:max-w-full relative rounded-xl overflow-hidden border border-gray-100"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="mt-3 flex flex-col px-[10px] justify-between h-full">
                    <div className="flex flex-col justify-start">
                      <h2 className="text-lg tracking-tight mb-3 font-medium leading-snug line-clamp-2">
                        {e.title}
                      </h2>
                      {/* <div className="mb-6 text-gray-600 line-clamp-2">
                        {e.description}
                      </div> */}
                      <div className="flex w-full my-auto flex-wrap items-start justify-start gap-2">
                        {e?.keynoteSpeaker?.map((sp) => (
                          <h2 className="capitalize inline-block text-[0.9rem] px-2 py-0.5 font-medium bg-[#ecf0f5] text-black/80 rounded-full">
                            {sp.name}
                          </h2>
                        ))}
                      </div>
                      <div className="flex w-full mt-4 flex-wrap items-center justify-between gap-4">
                        <p className="md:line-clamp-1 text-gray-500 text-sm">
                          {e.date}
                        </p>
                        <p className="md:line-clamp-1 text-gray-500 text-sm">
                          {e.mode}
                        </p>
                      </div>
                      <p className="md:line-clamp-1 text-gray-500 text-sm">
                        <span className="text-[1rem] text-black">venue: </span>{" "}
                        {e.venue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default NewsEventsPage;
