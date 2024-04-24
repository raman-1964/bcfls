import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import Img3 from "../../../assets/img3.jpg";
import Link from "next/link";

const NewsCard = () => {
  return (
    <>
      <section className="bg-gray-100 relative">
        <hr className="border-accent-2" />
        <img
          src="/svg/squares2.svg"
          className="w-full h-[100%] absolute object-cover opacity-20"
          loading="lazy"
        ></img>
        <div className="max-w-[1320px] mx-auto  pb-20 relative z-10 mt-20">
          <Heading heading="News" href="/news-events" />
          <div className="flex gap-3 w-full">
            {[...Array(3).keys()].map(() => (
              <div className="flex group hover:shadow-lg hover:scale-[1.005] h-full sm:mt-0 flex-col hover:bg-white  transition-all duration-300 p-3 bg-white shadow-sm border border-gray-300/60 rounded-2xl font-inter w-full">
                <Image
                  src={Img3}
                  alt="logo"
                  className="w-full shrink-0 h-[240px] max-w-full md:h-[240px] md:max-w-full relative rounded-xl overflow-hidden border border-gray-100"
                />
                <div className="mt-3 flex flex-col px-[10px] justify-between h-full">
                  <h1 className="text-lg tracking-tight mb-3 font-medium leading-snug line-clamp-2">
                    Foundation for Creative Social Research
                  </h1>
                  <p className="mb-6 text-gray-600 line-clamp-2">
                    The Foundation Social Research is an academic initiative
                    interdisciplinary exchange and collaboration amo luding
                    scholars.
                  </p>
                  <div className="flex my-auto flex-wrap">
                    <h2 className="line-clamp-1 my-auto font-regular text-sm">
                      Seungmee Lee
                    </h2>
                    <div className="px-1 text-sm my-auto text-gray-500 font-bold hidden md:inline-block">
                      ·
                    </div>
                    <p className="md:line-clamp-1 my-auto text-gray-500 text-sm hidden md:inline-block">
                      <time
                        datetime="1669025554408"
                        className="text-xs text-gray-500 my-auto"
                      >
                        Nov 21
                      </time>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsCard;
