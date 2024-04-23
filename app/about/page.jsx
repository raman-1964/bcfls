import React from "react";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import Img3 from "../../assets/img3.jpg";
import Header from "./_components/Header";

const AboutPage = () => {
  return (
    <div className="w-full mx-auto pb-5">
      <div className="max-w-[1320px] mx-auto">
        <Carousel
          arrowBtnPlace="mid"
          data={[...Array(4).keys()].map(() => (
            <div className="min-w-0 flex-grow flex-shrink-0 w-full flex items-center justify-center">
              <Image
                layout="fixed"
                src={Img3}
                alt="logo"
                className="w-full h-[70vh] rounded-md"
              />
            </div>
          ))}
        />

        <div className="w-full my-8">
          <Header
            heading="About"
            subHeading="Foundation for Creative Social Research"
          />
          <div className="mx-auto w-[80%] flex items-start gap-4 mt-4">
            <Image
              src={Img3}
              layout="fixed"
              alt="logo"
              className="w-[40%] h-[15rem] rounded-md"
            />
            <div className="flex items-start gap-3 flex-col">
              <p>
                The Foundation for Creative Social Research is an academic
                initiative that actively promotes interdisciplinary exchange and
                collaboration among diverse intellectuals, including scholars,
                authors, artists, poets, activists, and policymakers. At its
                core, the Foundation's mission is to inspire and cultivate
                innovation in academia by encouraging researchers to explore new
                areas of inquiry and to foster networks that facilitate the
                exchange of a wide range of intellectual and societal
                perspectives.
              </p>
              <p>
                Through its unwavering commitment to nurturing creativity and
                critical thinking, the Foundation actively supports myriad
                initiatives to stimulate intellectual growth and exploration.
                One of its key strategies involves convening thematic working
                groups that provide fertile grounds for lively discussions,
                research collaborations, and the dissemination of knowledge
                through various publications.
              </p>
              <button className="py-1.5 bg-[#a5673f] text-center w-full rounded-sm mt-2 text-[#fff]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full my-8">
          <Header
            heading="Groups"
            subHeading="Various research groups under the umbrella of FCSR"
          />
          <div className="mt-[-2rem]">
            <Carousel
              arrowBtnPlace="mid"
              data={[...Array(5).keys()].map(() => (
                <div
                  style={{
                    boxShadow: "0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5",
                  }}
                  className="min-w-0 py-2 flex-grow flex-shrink-0 w-[31%] ml-5 rounded"
                >
                  <div className="flex px-5 flex-col my-2 items-start">
                    <h1 className="mb-2 text-[#000000d9] text-[1.3em] font-bold text-ellipsis overflow-hidden whitespace-nowrap w-full">
                      Creative Theory Group Creative Theory Group
                    </h1>

                    <p className="text-[#000000ad] text-[0.95em] w-full">
                      The essence of Creative Theory lies in recognising and
                      harnessing the innate creative potential of human beings.
                      It acknowledges that humans possess a distinctive quality
                      as a species, characterised by their capacity for
                      generalisation and their ability to engage in theoretical
                      thinking. This form of thinking arises from their .
                    </p>
                  </div>
                  <button className="border-t-[1px] px-5 py-1.5 w-full text-[#2185d0] text-left border-t-[#0000000d]">
                    Learn More
                  </button>
                </div>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
