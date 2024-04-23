export default function Footer() {
  return (
    <>
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
      <footer className="bg-[#CCE6FF] ">
        <div className="max-w-[1320px] z-30 relative mx-auto px-6 md:px-3">
          <div className="w-full max-w-screen-xl relative mx-auto py-16">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12">
                <p className="text-xl tracking-tight font-semibold">
                  Get bcfls Weekly
                </p>
                <input className="hidden" value="hello@prototypr.io" />
                <p className="text-base mt-0 text-gray-700">
                  Top articles and news every week 💌
                </p>
                <div className="rounded-md mb-12 lg:mb-0">
                  <div>
                    <div className="flex flex-col">
                      <form className="sm:flex w-11/12 mt-5 mb-6">
                        <div className="sm:flex-1 sm:max-w-xs w-full">
                          <label for="Email" className="sr-only ">
                            Enter your email
                          </label>
                          <input
                            id="Email"
                            type="text"
                            placeholder="Enter your email"
                            name="emailRequired"
                            className="border-transparent border-solid border-2 border-gradient-br-blue-darkblue-gray-50 hover:border-gradient-tl-blue-darkblue-gray-50 gradient-border-3 w-full h-full p-3 text-gray-800 bg-white rounded-full"
                            style={{ fontSize: "0.875rem" }}
                          />
                        </div>
                        <div
                          className="hidden email-octopus-form-row-hp"
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="hp1cc5fdf6-63b5-11ea-a3d0-06b4694bee2a"
                            tabindex="-1"
                            autocomplete="nope"
                          />
                        </div>
                        <div className="flex flex-col md:ml-2">
                          <button
                            aria-label="Sign up for newsletter"
                            className="c-gSzqAS c-gSzqAS-gZwbYS-variant-confirm px-5 md:ml-2 mt-3 md:mt-0 rounded-full"
                            type=""
                            style={{ height: "47px" }}
                          >
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="px-1 w-10/12 mx-auto"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 font-semibold mt-2">
                  {" "}
                  © 2024 bcfls, All rights reserved.
                </p>
              </div>
              <div className="w-full md:w-6/12">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                    <span className="block uppercase text-gray-900 text-sm font-semibold mb-2 tracking-wide">
                      Social media
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://twitter.com/prototypr"
                          target="_blank"
                        >
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://instagram.com/prototyprio"
                          target="_blank"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://instagram.com/prototyprio"
                          target="_blank"
                        >
                          Facebook
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 ml-auto">
                    <span className="block uppercase text-gray-900 text-sm font-semibold mb-2 tracking-wide">
                      Navlink
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="/about"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="/news"
                        >
                          News/Events
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="/opportunities"
                        >
                          Opportunities
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="/contact"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
