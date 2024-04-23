"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";
import {
  DotButton,
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarouselButton";

const Carousel = ({ data, arrowBtnPlace = "mid", showDots = false }) => {
  const options = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 4000 }),
  ]);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [btnPlace, setbtnPlace] = useState(
    arrowBtnPlace === "mid"
      ? "absolute w-full bottom-[40%]"
      : "absolute bottom-5 left-[45%] bg-blue-50 rounded-[1.5rem]"
  );

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
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    // setPrevBtnEnabled(emblaApi.canScrollPrev());
    // setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

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
      {showDots ? (
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
