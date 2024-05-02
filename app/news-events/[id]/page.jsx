"use client";
import Skeleton from "@/components/skeleton/Skeleton";
import Image from "next/image";
import { getSingleNewsEventsApi } from "@/services/news-events.services";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const SingleNewsEvents = () => {
  const params = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["SingleNewsEvents", params.id],
    enabled: !!params.id,
    queryFn: () => getSingleNewsEventsApi(params.id),
  });

  return (
    <>
      {isLoading ? (
        <Skeleton className="max-w-[1320px] mx-auto h-[40vh]" />
      ) : (
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
              <div className="md:pb-[112px] w-[1020px] max-w-full mx-auto">
                <h1 className=" text-5xl tracking-tight md:text-6.5xl w-full leading-tight max-w-[44rem] text-black/90 font-inter font-bold text-left drop-shadow-sm">
                  {data.data[0].title}
                </h1>
              </div>
            </div>

            <div className="px-4 md:px-0 max-w-full w-[1020px] md:bg-blue-50 mx-auto mt-[3rem] md:-mt-[100px] relative md:rounded-2xl md:shadow-md md:outline md:outline-1 outline-gray-300/20 overflow-hidden">
              <Image
                src={data.data[0].image}
                className="w-full object-cover h-[40vh] rounded-md"
                width={1000}
                height={1000}
                alt="logo"
              />
            </div>

            <div className="relative px-6 md:px-0 max-w-full w-[1020px] mx-auto pt-4 pb-10">
              <p className="mb-3">{data.data[0].description}</p>
              <span className="text-md font-semibold text-black/80">
                Keynote Speaker:
              </span>
              <div className="relative mt-2 flex flex-col gap-4 mb-4">
                {data.data[0]?.keynoteSpeaker?.map((sp, index) => (
                  <div className="flex items-center gap-x-4">
                    <h2 className="h-10 w-10 flex items-center justify-center capitalize  font-medium bg-[#ecf0f5] text-black/80 rounded-full">
                      {index + 1}
                    </h2>
                    {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {sp.name}
                      </p>
                      <p className="text-gray-600">{sp.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <span className="text-md font-semibold text-black/80">
                Program Coordinator:
              </span>
              <div className="relative mt-2 flex flex-col gap-4 mb-4">
                {data.data[0]?.programCoordinator?.map((sp, index) => (
                  <div className="flex items-center gap-x-4">
                    <h2 className="h-10 w-10 flex items-center justify-center capitalize  font-medium bg-[#ecf0f5] text-black/80 rounded-full">
                      {index + 1}
                    </h2>
                    {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {sp.name}
                      </p>
                      <p className="text-gray-600">{sp.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <span className="text-md font-semibold text-black/80">
                Chair Person:
              </span>
              <div className="relative mt-2 flex flex-col gap-4 mb-4">
                {data.data[0]?.chairPerson?.map((sp, index) => (
                  <div className="flex items-center gap-x-4">
                    <h2 className="h-10 w-10 flex items-center justify-center capitalize  font-medium bg-[#ecf0f5] text-black/80 rounded-full">
                      {index + 1}
                    </h2>
                    {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {sp.name}
                      </p>
                      <p className="text-gray-600">{sp.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex w-full mt-2 flex-wrap gap-3 items-center">
                <p className="text-md font-semibold text-black/80">Mode:</p>
                <h2 className="capitalize inline-block text-md px-2 py-0.5 font-medium text-black/80 ">
                  {data.data[0].mode}
                </h2>
              </div>
              <div className="flex w-full mt-2 flex-wrap gap-3 items-center">
                <p className="text-md font-semibold text-black/80">Venue:</p>
                <h2 className="capitalize inline-block text-md px-2 py-0.5 font-medium text-black/80 ">
                  {data.data[0].venue}
                </h2>
              </div>
              <div className="flex w-full mt-2 flex-wrap gap-3 items-center">
                <p className="text-md font-semibold text-black/80">Date:</p>
                <h2 className="capitalize inline-block text-md px-2 py-0.5 font-medium text-black/80 ">
                  {data.data[0].date}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleNewsEvents;
