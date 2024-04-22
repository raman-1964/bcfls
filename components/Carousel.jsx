"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButton";

const Carousel = ({ data }) => {
  const options = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 4000 }),
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

  return (
    <div className="relative my-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex w-full ">{data.map((e) => e)}</div>
      </div>

      <div className="embla__controls absolute bottom-5 left-[45%] bg-blue-50 rounded-[1.5rem]">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
