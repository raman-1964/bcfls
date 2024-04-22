import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import Img3 from "../assets/img3.jpg";

const NewsCard = () => {
  return (
    <div className="w-full mx-auto p-4 my-6 bg-[#f2f4fa] ">
      <div className="md:max-w-screen-xl mx-auto">
        <Heading heading="News" href="/news" />
        <div className="flex gap-5">
          {[...Array(4).keys()].map(() => (
            <div className="flex bg-white rounded-md p-2 flex-col items-start gap-3">
              <Image
                src={Img3}
                alt="logo"
                className="w-[400px] h-[220px] rounded-lg"
              />
              <div>
                <h1 className="text-black text-[1.3rem] font-semibold">
                  Foundation for Creative Social Research
                </h1>
                <p className="text-gray-400 text-[0.9rem] font-normal">
                  The Foundation Social Research is an academic initiative
                  interdisciplinary exchange and collaboration amo luding
                  scholars.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
