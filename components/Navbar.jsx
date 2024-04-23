"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setVisible] = useState(false);
  const [blinkyOn, setBlinkyOn] = useState(false);

  const getScrollPercent = () => {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  };

  useEffect(() => {
    setBlinkyOn(true);
    setTimeout(() => {
      setBlinkyOn(false);
    }, 1000);
  }, [isVisible]);

  useEffect(() => {
    const scrollListener = () => {
      const p = getScrollPercent();

      if (p > 1) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 mx-auto z-50">
      <div
        className={`w-full md:max-w-[1320px] ${
          isVisible
            ? "bg-opacity-[88%] bg-white mt-3 rounded-[1.2rem] px-6 shadow-sm md:w-[70vw]"
            : "md:max-w-screen-xl"
        } transition transition-all duration-700 search-wide backdrop-blur-lg mx-auto p-1 px-1 pl-4`}
      >
        <div
          className={`mx-auto relative flex h-10 items-center justify-between `}
        >
          <Link href="/">
            <div className="items-center hover:opacity-75 transition gap-2 hidden md:flex">
              {/* <Image src="/logo.svg" alt="logo" height={30} width={30} /> */}
              <p className="text-lg text-neutral-700">BCFL</p>
            </div>
          </Link>
          <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
            <button
              className={`px-3 py-1 rounded-lg text-black outline-none hover:bg-[#eff6ff] hover:text-[#2352ba] ${
                pathname === "/"
                  ? "bg-[#eff6ff] border-blue-200 border-[1px] !text-[#2352ba]"
                  : ""
              }`}
            >
              <Link href="/">Home</Link>
            </button>
            <button
              className={`px-3 py-1 rounded-lg text-black outline-none hover:bg-[#eff6ff] hover:text-[#2352ba] ${
                pathname === "/about"
                  ? "bg-[#eff6ff] border-blue-200 border-[1px] !text-[#2352ba]"
                  : ""
              }`}
            >
              <Link href="/about">About us</Link>
            </button>
            <button
              className={`px-3 py-1 rounded-lg text-black outline-none hover:bg-[#eff6ff] hover:text-[#2352ba] ${
                pathname === "/news-events"
                  ? "bg-[#eff6ff] border-blue-200 border-[1px] !text-[#2352ba]"
                  : ""
              }`}
            >
              <Link href="/news-events">News/Events</Link>
            </button>
            <button
              className={`px-3 py-1 rounded-lg text-black outline-none hover:bg-[#eff6ff] hover:text-[#2352ba] ${
                pathname === "/opportunities"
                  ? "bg-[#eff6ff] border-blue-200 border-[1px] !text-[#2352ba]"
                  : ""
              }`}
            >
              <Link href="/opportunities">Opportunities</Link>
            </button>

            <button
              className={`px-3 py-1 rounded-lg text-black outline-none hover:bg-[#eff6ff] hover:text-[#2352ba] ${
                pathname === "/contact"
                  ? "bg-[#eff6ff] border-blue-200 border-[1px] !text-[#2352ba]"
                  : ""
              }`}
            >
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
