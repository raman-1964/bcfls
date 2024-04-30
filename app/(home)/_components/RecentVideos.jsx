"use client";
// import useEmblaCarousel from "embla-carousel-react";
// import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButton";

import Image from "next/image";
import React from "react";
import Img3 from "../../../assets/img3.jpg";
import Carousel from "../../../components/Carousel";
import { useQuery } from "@tanstack/react-query";
import { getGalleryApi } from "@/services/gallery.services";

const RecentVideos = () => {
  // const [emblaRef, emblaApi] = useEmblaCarousel();
  // const onButtonAutoplayClick = useCallback(
  //   (callback) => callback(),
  //   [emblaApi]
  // );
  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  const { isLoading, isRefetching, data } = useQuery({
    queryKey: ["Home_Gallery"],
    enabled: true,
    queryFn: () => getGalleryApi(true),
  });

  return (
    <>
      {!isLoading ? (
        <div className="w-full mx-auto flex items-center flex-col py-10">
          <div className="max-w-[1320px] mx-auto px-6 md:px-3 ">
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
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RecentVideos;
