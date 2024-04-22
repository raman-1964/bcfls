import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import Img3 from "../assets/img3.jpg";

const AboutUsCard = () => {
  return (
    <div className="max-w-[1320px] mx-auto py-10 ">
      <Heading heading="About Us" href="/about" />
      <div className="relative w-full shadow-sm border border-gray-300/50  flex h-full bg-[#eef2ff] lg:mt-8 rounded-3xl p-6">
        <Image
          src={Img3}
          alt="logo"
          className="md:w-[45%] md:h-[320px] w-full relative h-[240px] sm:h-[224px] rounded-xl overflow-hidden border border-gray-300/60 z-10"
        />
        <div className="md:w-[65%] px-5 py-0 w-full  flex flex-col gap-4 z-10">
          <h1 className="text-xl tracking-tight sm:text-2xl mt-1 font-semibold line-clamp-4">
            Foundation for creative social research{" "}
          </h1>
          <p className="text-black text-[1rem] font-normal">
            The Foundation for Creative Social Research is an academic
            initiative that actively promotes interdisciplinary exchange and
            collaboration among diverse intellectuals, including scholars,
            authors, artists, poets, activists, and policymakers.
          </p>
        </div>
        <div
          class="absolute w-full h-full rounded-3xl bg-[url('/svg/gridSquare.svg')]  inset-0 [mask-image:linear-gradient(0deg,#eef2ff,rgba(238,242,255,0.8))]"
          style={{ backgroundPosition: "10px 10px" }}
        ></div>
      </div>
    </div>
  );
};

export default AboutUsCard;
