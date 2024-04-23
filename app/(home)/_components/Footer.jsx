export default function Footer() {
  return (
    <div className="w-full bg-[#CCE6FF] relative h-auto sky-gradient ">
      <div className="w-full bg-[#fff] p-3 rounded-b-[40px] -translate-y-1"></div>
      <div className="px-5">
        <div className="absolute p-10 pointer-events-none z-[0]">
          <img
            className="w-full gm-added gm-observing gm-observing-cb"
            src="/svg/stars.svg"
            loading="lazy"
          />
        </div>

        <div className=" max-w-6xl mx-auto flex flex-col justify-center items-center  h-full">
          <div className="w-full flex flex-col space-y-4 items-center pt-32 pb-10 z-[1]">
            <h4 className="md:text-[60px] text-[40px] font-inter text-center font-semibold text-[#0F1F40] leading-[40px] md:leading-[70px] max-w-lg">
              Become a contributor
            </h4>
            <div>
              <a href="/apply/form">
                <button className="p-4 px-8 w-full max-w-[200px] text-[16px] rounded-full bg-[#195DE2] text-white font-medium font-inter border border-[#9DDBFD] border-opacity-40">
                  Apply to join
                </button>
              </a>
            </div>
          </div>
          <div className="">
            <img
              className="gm-added gm-observing gm-observing-cb"
              src="/earth.png"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
