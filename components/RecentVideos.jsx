"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import Img3 from "../assets/img3.jpg";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButton";

const RecentVideos = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const onButtonAutoplayClick = useCallback(
    (callback) => callback(),
    [emblaApi]
  );
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="w-full mx-auto flex items-center flex-col py-10">
      <div className="max-w-[1320px] mx-auto px-6 md:px-3 ">
        <Image
          layout="fixed"
          src={Img3}
          alt="logo"
          className="w-full h-[30vh] rounded-md object-cover"
        />
        <div className="relative">
          <div className="overflow-hidden mt-5" ref={emblaRef}>
            <div className="flex w-full gap-5">{data.map((e) => e)}</div>
          </div>

          <div className="absolute w-full bottom-[40%]">
            <div className="embla__buttons !w-full !flex items-center !justify-between">
              <PrevButton
                className="!bg-[#ffff] !bg-opacity-[70%] !w-[2rem] !h-[2rem] rounded-full"
                onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                disabled={prevBtnDisabled}
              />
              <NextButton
                className="!bg-[#ffff] !bg-opacity-[70%] !w-[2rem] !h-[2rem] rounded-full"
                onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentVideos;
