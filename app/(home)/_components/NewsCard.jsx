import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import Img3 from "../../../assets/img3.jpg";

const NewsCard = () => {
  return (
    <div className="bg-[#f2f4fa] py-10">
      <div className="max-w-[1320px] mx-auto px-6 md:px-3">
        <Heading heading="News" href="/news" />
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
                <div class="flex my-auto flex-wrap">
                  <h2 class="line-clamp-1 my-auto font-regular text-sm">
                    Seungmee Lee
                  </h2>
                  <div class="px-1 text-sm my-auto text-gray-500 font-bold hidden md:inline-block">
                    ·
                  </div>
                  <p class="md:line-clamp-1 my-auto text-gray-500 text-sm hidden md:inline-block">
                    <time
                      datetime="1669025554408"
                      class="text-xs text-gray-500 my-auto"
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
    </div>
  );
};

export default NewsCard;
