"use client";
import React, { useCallback, useEffect, useState } from "react";
import Img3 from "../assets/img3.jpg";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";

const Carousel = () => {
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

  //   const scrollPrev = useCallback(() => {
  //     if (emblaApi) emblaApi.scrollPrev();
  //   }, [emblaApi]);

  //   const scrollNext = useCallback(() => {
  //     if (emblaApi) emblaApi.scrollNext();
  //   }, [emblaApi]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative my-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex w-full ">
          <div className="min-w-0 flex-grow flex-shrink-0 w-full flex items-center justify-center">
            <Image src={Img3} alt="logo" className="w-[70%] rounded-md" /> 1
          </div>
          <div className="min-w-0 flex-grow flex-shrink-0 w-full flex items-center justify-center">
            <Image src={Img3} alt="logo" className="w-[70%] rounded-md" /> 2
          </div>
          <div className="min-w-0 flex-grow flex-shrink-0 w-full flex items-center justify-center">
            <Image src={Img3} alt="logo" className="w-[70%] rounded-md" /> 3
          </div>
        </div>
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
    // <div className="overflow-hidden">
    //   <div className="embla__viewport" ref={emblaRef}>
    //     <div className="flex">
    //       <div className="min-w-0 flex-grow flex-shrink-0 w-full">
    //         <Image src={Img3} alt="logo" className="w-[70vw] rounded-sm" /> 1
    //       </div>
    //       <div className="min-w-0 flex-grow flex-shrink-0 w-full">
    //         <Image src={Img3} alt="logo" className="w-[70vw] rounded-sm" /> 2
    //       </div>
    //       <div className="min-w-0 flex-grow flex-shrink-0 w-full">
    //         <Image src={Img3} alt="logo" className="w-[70vw] rounded-sm" /> 3
    //       </div>
    //     </div>
    //   </div>
    //   <button className="embla__prev" onClick={scrollPrev}>
    //     Prev
    //   </button>
    //   <button className="embla__next" onClick={scrollNext}>
    //     Next
    //   </button>
    // </div>
  );
};

const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
};

const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

export default Carousel;
