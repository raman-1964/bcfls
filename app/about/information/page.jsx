import Image from "next/image";
import React from "react";
import Img3 from "../../../assets/img3.jpg";

const AboutInfoPage = () => {
  return (
    <div className="w-full mx-auto pb-5">
      <div className="pt-4 h-[60%] w-full bg-gradient-to-b from-blue-100/60 to-gray-100/20 absolute top-0 left-0"></div>
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
              Information
            </p>
          </div>
          <div className="pb-[112px]">
            <div className="w-[1020px] max-w-full mx-auto">
              <h1 className="text-5xl tracking-tight md:text-6.5xl w-full leading-tight max-w-[44rem] text-black/90 font-inter font-bold text-left drop-shadow-sm">
                India Centre for Policy Studies
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-0 max-w-full w-[1020px] md:bg-blue-50 mx-auto mt-[120px] md:-mt-[100px] relative md:rounded-2xl md:shadow-md md:outline md:outline-1 outline-gray-300/20 overflow-hidden">
          <img
            loading="lazy"
            width="1020"
            height="550"
            decoding="async"
            data-nimg="1"
            src="https://prototyprio.gumlet.io/wp-content/uploads/2021/02/Frame-21.png?w=2048&amp;q=75&amp;format=webp&amp;compress=true&amp;dpr=2"
          />
        </div>

        <div className="relative px-6 md:px-0 max-w-full w-[1020px] mx-auto py-10">
          <p className="mb-3">
            India Centre for Policy Studies (ICPS) is a growing network of
            academicians, researchers, civil societal and social activists,
            think-tank, institutes, advocates and students belonging to
            different fields. ICPS includes all the sections of the society and
            work for their empowerment, it is dedicated to achieving "inclusive
            development".
          </p>
          <p className="mb-3">
            ICPS was established on 14th April 2018, after few days it started
            working for its goals and targets. With the help of various
            participants like- academician, research scholars, social activist,
            advocates, civil society etc, it is growing day-by-day. ICPS studies
            and analyses different policies of the government to find out how
            these policies are effecting people? How they are including them?
            Which society they have in their focus? Which society or its part
            they should focus?
          </p>
          <p className="mb-3">
            ICPS discuss the policies, amendments, activeness, awareness about
            everything whatever we get from our representatives or from elected
            people. By holding round table discussion we get feedback or
            suggestions from every part of the society, where each and every one
            has a voice for them, they listen carefully, they understand things
            from the experts in the fields then they speak for them or for all
            related to their section or class or caste or from their religion
            etc. We get everything from everywhere possible, acceptable, logical
            suggestions use to forward to the concerning person, institution/s
            or authority/s.
          </p>
          <p className="mb-1">
            Purpose of ICPS: To ensure that each and every person receives the
            benefit of the government policies
          </p>
          <p className="mb-3">
            ICPS motto : To move towards a strong nation in which all the
            citizens can prosper
          </p>
          <div className="my-auto mx-auto text-center pt-12">
            <div className="text-xs uppercase mb-4 mx-auto font-medium text-gray-600">
              Share to your friends
            </div>
            <div className="my-auto px-1 grid grid-cols-2 gap-4 w-[fit-content] mx-auto">
              <div>
                <a target="_blank" href="https://twitter.com/Icpstudy2024">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <path
                      d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://www.facebook.com/indiacentreforpolicystudies/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></circle>
                    <path
                      d="M168,88H152a23.9,23.9,0,0,0-24,24V224"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                    <line
                      x1="96"
                      y1="144"
                      x2="160"
                      y2="144"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                  </svg>
                </a>
              </div>
              {/* <div>
                <a target="_blank" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <rect
                      x="36"
                      y="36"
                      width="184"
                      height="184"
                      rx="8"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></rect>
                    <line
                      x1="120"
                      y1="112"
                      x2="120"
                      y2="176"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <line
                      x1="88"
                      y1="112"
                      x2="88"
                      y2="176"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <path
                      d="M120,140a28,28,0,0,1,56,0v36"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                    <circle cx="88" cy="80" r="12"></circle>
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfoPage;
