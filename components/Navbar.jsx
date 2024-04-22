"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
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
        className={`w-full md:max-w-screen-xl ${
          isVisible
            ? "bg-opacity-[60%] bg-blue-50 mt-3 rounded-[1.2rem] px-6 shadow-sm md:w-[62rem]"
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
          <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
            <button className="border-none text-black outline-none">
              <Link href="/sign-in">Home</Link>
            </button>
            <button className="border-none text-black outline-none">
              <Link href="/sign-up">Articles</Link>
            </button>
            <button className="border-none text-black outline-none">
              <Link href="/sign-up">News</Link>
            </button>
            <button className="border-none text-black outline-none">
              <Link href="/sign-up">Events</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
