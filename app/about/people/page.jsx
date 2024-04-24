import React from "react";
import Deoraj from "../../../assets/image1.png";
import Parmod from "../../../assets/image2.png";
import Image from "next/image";

const AboutPeoplePage = () => {
  return (
    <div className="w-full mx-auto pb-5">
      <div className="mt-4 h-[60%] w-full bg-gradient-to-b from-blue-100/60 to-gray-100/20 absolute top-0 left-0"></div>
      <div className="max-w-[1320px] mx-auto">
        <div
          className="relative -mt-[96px] md:-mt-0 pt-[64px] md:pt-0 mx-auto w-[1301px] border-b border-b-indigo-500/20 border-r border-indigo-500/10 max-w-full px-6 md:px-3"
          style={{
            backgroundImage:
              "linear-gradient(rgba(32, 52, 144,0.10) 1px, transparent 1px), linear-gradient(to right, rgba(32, 52, 144,0.10) 1px, rgba(247, 247, 247,0.10) 1px)",
            backgroundSize: "26px 26px",
          }}
        >
          <div className="pt-4 w-[1020px] max-w-full mx-auto">
            <p className="text-left md:px-1 mt-3 md:mt-0 mb-3 text-base text-black/80">
              People
            </p>
          </div>
          <div className="pb-[112px]">
            <div className="w-[1020px] max-w-full mx-auto">
              <h1 className="text-5xl tracking-tight md:text-6.5xl w-full leading-tight max-w-[44rem] text-black/90 font-inter font-bold text-left drop-shadow-sm">
                Foundation for Creative Social Research
              </h1>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-0 max-w-full w-[1020px] mx-auto mt-[100px] md:-mt-[70px] relative md:rounded-2xl overflow-hidden">
          <div className="bg-white h-full p-3 border border-gray-300/50 shadow-sm group hover:shadow-lg hover:scale-[1.005] transition-all duration-300 rounded-2xl flex flex-col sm:flex-row  font-inter w-full ">
            <div className="lg:w-6/12 lg:h-[400px] h-[260px] w-full relative  rounded-xl overflow-hidden border border-gray-300/60">
              <Image
                className="object-cover cursor-pointer"
                layout="fill"
                src={Deoraj}
                alt="logo"
              />
            </div>
            <div className="lg:w-6/12 px-5 py-0 w-full  flex flex-col justify-between">
              <div className="flex flex-col">
                <h2 className="text-xl tracking-tight sm:text-2xl mt-1 font-semibold line-clamp-4">
                  Deoraj Singh
                </h2>

                <div className="mt-3 text-gray-500 line-clamp-6">
                  He is currently teaching in the department of Political
                  Science at Gargi College, University of Delhi
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-full p-3 border border-gray-300/50 shadow-sm group hover:shadow-lg hover:scale-[1.005] transition-all duration-300 rounded-2xl flex flex-col sm:flex-row  font-inter w-full mt-8">
            <div className="lg:w-6/12 px-5 py-0 w-full  flex flex-col justify-between">
              <div className="flex flex-col">
                <h2 className="text-xl tracking-tight sm:text-2xl mt-1 font-semibold line-clamp-4">
                  Parmod Kumar
                </h2>

                <div className="mt-3 text-gray-500 line-clamp-6">
                  He is currently teaching at department of English at
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 lg:h-[400px] h-[260px] w-full relative  rounded-xl overflow-hidden border border-gray-300/60">
              <Image
                className="object-cover cursor-pointer"
                layout="fill"
                src={Parmod}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPeoplePage;
