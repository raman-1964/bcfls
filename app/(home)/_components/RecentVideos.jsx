"use client";

import Image from "next/image";
import React from "react";
import Carousel from "../../../components/Carousel";
import { useQuery } from "@tanstack/react-query";
import { getGalleryApi } from "@/services/gallery.services";
import Skeleton from "@/components/skeleton/Skeleton";

const RecentVideos = () => {
  const { isLoading, isRefetching, data } = useQuery({
    queryKey: ["Home_Gallery"],
    enabled: true,
    queryFn: () => getGalleryApi(true),
  });

  return (
    <div className="w-full mx-auto flex items-center flex-col py-10">
      <div className="max-w-[1320px] mx-auto px-6 md:px-3 w-full">
        {!isLoading ? (
          <>
            <Image
              src={data?.data?.[0].image}
              alt="logo"
              className="!w-full mb-10 !h-[30vh] rounded-md object-cover"
              width={1000}
              height={1000}
            />
            <Carousel
              data={data?.data?.map((e, ind) => {
                if (ind !== 0)
                  return (
                    <div className="min-w-0 flex-grow flex-shrink-0 w-full sm:w-[49%] md:w-[31%] ml-5 flex items-center justify-center">
                      <Image
                        src={e.image}
                        alt="logo"
                        className="!h-[20vh] rounded-md"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  );
                return null;
              })}
            />
          </>
        ) : (
          <Skeleton className="h-[30vh] w-full rounded-md" />
        )}
      </div>
    </div>
  );
};

export default RecentVideos;
