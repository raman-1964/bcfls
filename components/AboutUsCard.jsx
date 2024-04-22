import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import Img3 from "../assets/img3.jpg";

const AboutUsCard = () => {
  return (
    <div className="w-full md:max-w-screen-xl mx-auto px-4">
      <Heading heading="About Us" href="/about" />
      <div className="flex items-start gap-3">
        <Image
          src={Img3}
          alt="logo"
          className="w-[700px] h-[180px] rounded-lg"
        />
        <div>
          <h1 className="text-black text-xl font-normal">
            Foundation for Creative Social Research
          </h1>
          <p className="text-black text-[1rem] font-normal">
            The Foundation for Creative Social Research is an academic
            initiative that actively promotes interdisciplinary exchange and
            collaboration among diverse intellectuals, including scholars,
            authors, artists, poets, activists, and policymakers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
