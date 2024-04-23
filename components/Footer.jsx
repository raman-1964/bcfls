"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <>
      <footer className={`${pathname === "/" ? "bg-[#CCE6FF]" : "bg-white"}`}>
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
                            className="border-transparent border-solid border-2 border-gradient-br-blue-darkblue-gray-50 hover:border-gradient-tl-blue-darkblue-gray-50 gradient-border-3 w-full h-full p-3 text-gray-800 bg-white rounded-full text-[0.875rem]"
                            style={
                              pathname !== "/"
                                ? {
                                    background:
                                      "linear-gradient(90deg, #f9fafb, #f9fafb), linear-gradient(to bottom right, #1e3a8a, #3b82f6)",
                                    backgroundClip: "padding-box , border-box",
                                  }
                                : null
                            }
                          />
                        </div>

                        <div className="flex flex-col md:ml-2">
                          <button
                            className="px-5 md:ml-2 mt-3 md:mt-0 rounded-full h-[47px]"
                            style={
                              pathname !== "/"
                                ? {
                                    background: "#006adc",
                                    color: "#fff",
                                  }
                                : null
                            }
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
                          href="/news-events"
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
