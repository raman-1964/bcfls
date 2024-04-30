"use client";

import { postNewsLetterApi } from "@/services/news-letter.services";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const pathname = usePathname();

  const { mutate } = useMutation({
    mutationFn: (data) => postNewsLetterApi(data),
  });

  return (
    <>
      <footer className={`${pathname === "/" ? "bg-[#CCE6FF]" : "bg-white"}`}>
        <div className="max-w-[1320px] z-30 relative mx-auto px-6 md:px-3">
          <div className="w-full max-w-screen-xl relative mx-auto pb-5 pt-14">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12">
                <p className="text-xl tracking-tight font-semibold">
                  Get ICPS Weekly
                </p>
                <input className="hidden" value="hello@prototypr.io" />
                <p className="text-base mt-0 text-gray-700">
                  Top articles and news every week 💌
                </p>
                <div className="rounded-md mb-12 lg:mb-0">
                  <div>
                    <div className="flex flex-col">
                      <duv className="sm:flex w-11/12 mt-5 mb-6">
                        <div className="sm:flex-1 sm:max-w-xs w-full">
                          <label for="Email" className="sr-only ">
                            Enter your email
                          </label>
                          <input
                            id="Email"
                            type="email"
                            placeholder="Enter your email"
                            name="emailRequired"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            onClick={() => {
                              if (email) mutate({ email });
                              else toast.error("email field is mandatory");
                              setEmail("");
                            }}
                          >
                            Subscribe
                          </button>
                        </div>
                      </duv>
                    </div>
                    <div className="px-1 w-10/12 mx-auto"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 font-semibold mt-2">
                  © 2024 ICPS, All rights reserved.
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
                        <Link
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://twitter.com/Icpstudy2024"
                          target="_blank"
                        >
                          Twitter
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="https://www.facebook.com/indiacentreforpolicystudies/"
                          target="_blank"
                        >
                          Facebook
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 ml-auto">
                    <span className="block uppercase text-gray-900 text-sm font-semibold mb-2 tracking-wide">
                      Navlink
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        {" "}
                        <Link
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="/about/information"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="/news-events"
                        >
                          News/Events
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="/opportunities"
                        >
                          Opportunities
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                          rel="noreferrer"
                          href="/contact"
                        >
                          Contact Us
                        </Link>
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
