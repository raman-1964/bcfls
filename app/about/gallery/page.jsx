import Image from "next/image";
import Link from "next/link";

const AboutGalleryPage = () => {
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
              Gallery
            </p>
          </div>
          <div className="md:pb-[112px] w-[1020px] max-w-full mx-auto">
            <h1 className=" text-5xl tracking-tight md:text-6.5xl w-full leading-tight max-w-[44rem] text-black/90 font-inter font-bold text-left drop-shadow-sm">
              India Centre for Policy Studies
            </h1>
          </div>
        </div>
        <div className="px-4 md:px-0 max-w-full w-[1020px] mx-auto mt-[2rem] md:-mt-[70px] relative md:rounded-2xl overflow-hidden">
          {/* <div className="animate-pulse absolute top-0 left-0 duration-50 w-[1020px] md:bg-gray-100 mx-auto rounded-2xl"></div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {[...Array(13).keys()].map((_, ind) => (
              <Link
                className="flex shadow-sm hover:scale-[1.01] hover:shadow-lg group border border-gray-300/70 mx-auto md:flex-col md:justify-start bg-white p-2 md:my-0 md:mt-0 lg:mb-0 lg:my-0  transition-all duration-300 rounded-2xl font-inter w-full max-w-[490px]"
                href={`/about/gallery/${ind + 3}`}
              >
                <div className="group-hover:scale-[1.01]  transition-all duration-700 md:inline-block my-auto md:my-0 shrink-0 w-full h-[164px] relative rounded-lg md:rounded-xl overflow-hidden border border-gray-100">
                  <Image
                    className="object-cover cursor-pointer"
                    layout="fill"
                    src={`/images/image${ind + 3}.jpg`}
                    alt="logo"
                  />
                </div>
              </Link>
              // <div className="flex group hover:shadow-lg hover:scale-[1.005] h-full sm:mt-0 flex-col hover:bg-white  transition-all duration-300 p-3 bg-white shadow-sm border border-gray-300/60 rounded-2xl font-inter w-full">
              //   <Image
              //     src={Img3}
              //     alt="logo"
              //     className="w-full shrink-0 h-[240px] max-w-full md:h-[240px] md:max-w-full relative rounded-xl overflow-hidden border border-gray-100"
              //   />
              //   <div className="mt-3 flex flex-col px-[10px] justify-between h-full">
              //     <h1 className="text-lg tracking-tight mb-3 font-medium leading-snug line-clamp-2">
              //       Foundation for Creative Social Research
              //     </h1>
              //     <p className="mb-6 text-gray-600 line-clamp-2">
              //       The Foundation Social Research is an academic initiative
              //       interdisciplinary exchange and collaboration amo luding
              //       scholars.
              //     </p>
              //     <div className="flex my-auto flex-wrap">
              //       <h2 className="line-clamp-1 my-auto font-regular text-sm">
              //         Seungmee Lee
              //       </h2>
              //       <div className="px-1 text-sm my-auto text-gray-500 font-bold hidden md:inline-block">
              //         ·
              //       </div>
              //       <p className="md:line-clamp-1 my-auto text-gray-500 text-sm hidden md:inline-block">
              //         <time
              //           datetime="1669025554408"
              //           className="text-xs text-gray-500 my-auto"
              //         >
              //           Nov 21
              //         </time>
              //       </p>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGalleryPage;
