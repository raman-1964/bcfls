"use client";
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButton";

const Carousel = ({ data, arrowBtnPlace }) => {
  const options = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 2000 }),
  ]);

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      //   const resetOrStop =
      //     autoplay.options.stopOnInteraction === false
      //       ? autoplay.reset
      //       : autoplay.stop;

      //   resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const [btnPlace, setbtnPlace] = useState(
    arrowBtnPlace === "mid"
      ? "absolute w-full bottom-[40%]"
      : "absolute bottom-5 left-[45%] bg-blue-50 rounded-[1.5rem]"
  );

  return (
    <div className="relative my-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex w-full py-3 gap-1">{data.map((e) => e)}</div>
      </div>

      <div className={btnPlace}>
        <div
          className={`embla__buttons ${
            arrowBtnPlace === "mid"
              ? "!w-full !flex items-center !justify-between"
              : ""
          }`}
        >
          <PrevButton
            className={` ${
              arrowBtnPlace === "mid"
                ? "!bg-[#ffff] !bg-opacity-[70%] !w-[2rem] !h-[2rem] rounded-full"
                : ""
            }`}
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className={` ${
              arrowBtnPlace === "mid"
                ? "!bg-[#ffff] !bg-opacity-[70%] !w-[2rem] !h-[2rem] rounded-full"
                : ""
            }`}
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
