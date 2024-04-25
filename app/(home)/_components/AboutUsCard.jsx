import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import Img3 from "../../../assets/img3.jpg";

const AboutUsCard = () => {
  return (
    <div className="max-w-[1320px] mx-auto py-10 ">
      <Heading heading="About Us" href="/about/information" />
      <div className="relative w-full shadow-sm border border-gray-300/50  flex h-full bg-[#eef2ff] lg:mt-8 rounded-3xl p-6">
        <Image
          src={Img3}
          alt="logo"
          className="md:w-[45%] md:h-[320px] w-full relative h-[240px] sm:h-[224px] rounded-xl overflow-hidden border border-gray-300/60 z-10"
        />
        <div className="md:w-[65%] px-5 py-0 w-full  flex flex-col gap-4 z-10">
          <h1 className="text-xl tracking-tight sm:text-2xl mt-1 font-semibold line-clamp-4">
          India Centre for Policy Studies
          </h1>
          <p className="text-black text-[1rem] font-normal">
            India Centre for Policy Studies (ICPS) is a dynamic network of
            scholars, activists, and experts across diverse sectors, committed
            to inclusive development. Established in April 2018, ICPS actively
            engages with policymakers to analyze the impact of government
            policies on society. Through round table discussions and
            collaboration with various stakeholders, including academia and
            civil society, ICPS seeks to gather feedback and offer constructive
            recommendations for policy improvement. With a focus on empowerment
            and social justice, ICPS strives to foster dialogue and influence
            positive change for all sections of society.
          </p>
        </div>
        <div
          className="absolute w-full h-full rounded-3xl bg-[url('/svg/gridSquare.svg')]  inset-0 [mask-image:linear-gradient(0deg,#eef2ff,rgba(238,242,255,0.8))]"
          style={{ backgroundPosition: "10px 10px" }}
        ></div>
      </div>
    </div>
  );
};

export default AboutUsCard;
