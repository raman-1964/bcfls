"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Hamburger from "../assets/hamburger.jpg";
import Close from "../assets/close.png";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setVisible] = useState(false);
  const [blinkyOn, setBlinkyOn] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  const getScrollPercent = () => {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  };

  const navigationBar = () => {
    return (
      <>
        <button
          className={`px-3 py-1 w-full md:w-auto rounded-lg text-black outline-none hover:bg-[#eff6ff] hover:text-[#2352ba] ${
            pathname === "/"
              ? "bg-[#eff6ff] border-blue-200 border-[1px] !text-[#2352ba]"
              : ""
          }`}
          onClick={() => {
            router.push("/");
            setShowNavigation(false);
          }}
        >
          Home
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className={`px-3 w-full md:w-auto py-1 rounded-lg text-black outline-none hover:bg-[#eff6ff] hover:text-[#2352ba] ${
                pathname.startsWith("/about")
                  ? "bg-[#eff6ff] border-blue-200 border-[1px] !text-[#2352ba]"
                  : ""
              }`}
            >
              About us
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="z-[1000] p-4 min-w-[220px] mt-2 bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              sideOffset={5}
            >
              <Link href={"/about/information"}>
                <DropdownMenu.Item
                  className="p-2 rounded-lg select-none outline-none  cursor-pointer font-medium leading-[1.2] text-[rgb(16,29,70)] mb-[5px] hover:bg-[rgb(240,244,255)] hover:text-[rgb(52,81,178)]"
                  onClick={() => setShowNavigation(false)}
                >
                  Information
                </DropdownMenu.Item>
              </Link>
              <Link href={"/about/people"}>
                <DropdownMenu.Item
                  className="p-2 rounded-lg select-none outline-none  cursor-pointer font-medium leading-[1.2] text-[rgb(16,29,70)] mb-[5px] hover:bg-[rgb(240,244,255)] hover:text-[rgb(52,81,178)]"
                  onClick={() => setShowNavigation(false)}
                >
                  People
                </DropdownMenu.Item>
              </Link>
              <Link href={"/about/gallery"}>
                <DropdownMenu.Item
                  className="p-2 rounded-lg select-none outline-none  cursor-pointer font-medium leading-[1.2] text-[rgb(16,29,70)] mb-[5px] hover:bg-[rgb(240,244,255)] hover:text-[rgb(52,81,178)]"
                  onClick={() => setShowNavigation(false)}
                >
                  Gallery
                </DropdownMenu.Item>
              </Link>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <button
          className={`px-3 w-full md:w-auto py-1 rounded-lg text-black outline-none hover:bg-[#eff6ff] hover:text-[#2352ba] ${
            pathname === "/news-events"
              ? "bg-[#eff6ff] border-blue-200 border-[1px] !text-[#2352ba]"
              : ""
          }`}
          onClick={() => {
            router.push("/news-events");
            setShowNavigation(false);
          }}
        >
          News/Events
        </button>
        <button
          className={`px-3 w-full md:w-auto py-1 rounded-lg text-black outline-none hover:bg-[#eff6ff] hover:text-[#2352ba] ${
            pathname === "/opportunities"
              ? "bg-[#eff6ff] border-blue-200 border-[1px] !text-[#2352ba]"
              : ""
          }`}
          onClick={() => {
            router.push("/opportunities");
            setShowNavigation(false);
          }}
        >
          Opportunities
        </button>
        <button
          className={`px-3 w-full md:w-auto py-1 rounded-lg text-black outline-none hover:bg-[#eff6ff] hover:text-[#2352ba] ${
            pathname === "/contact"
              ? "bg-[#eff6ff] border-blue-200 border-[1px] !text-[#2352ba]"
              : ""
          }`}
          onClick={() => {
            router.push("/contact");
            setShowNavigation(false);
          }}
        >
          Contact Us
        </button>
      </>
    );
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
    <nav className="fixed w-full top-2 mx-auto z-50">
      <div
        className={`w-full md:max-w-[1320px] ${
          isVisible
            ? "bg-opacity-[88%] bg-white mt-3 rounded-[1.2rem] px-6 shadow-sm w-[90vw] lg:w-[70vw]"
            : "md:max-w-screen-xl"
        } transition transition-all duration-700 search-wide backdrop-blur-lg mx-auto p-1 px-1 pl-4`}
      >
        <div
          className={`mx-auto relative flex h-10 items-center justify-between`}
        >
          <button
            className="items-center border-none outline-none hover:opacity-75 transition gap-2"
            onClick={() => {
              router.push("/");
              setShowNavigation(false);
            }}
          >
            <Image src="/logo.svg" alt="logo" height={40} width={40} />
          </button>
          <div className="space-x-4 md:w-auto items-center justify-between w-full hidden md:flex">
            {navigationBar()}
          </div>
          {showNavigation ? (
            <Image
              onClick={() => setShowNavigation(false)}
              src={Close}
              alt="close"
              width={20}
              height={20}
              className="cursor-pointer md:hidden"
            />
          ) : (
            <Image
              onClick={() => setShowNavigation(true)}
              src={Hamburger}
              alt="hamburger"
              width={60}
              height={60}
              className="mr-[-1.2rem] cursor-pointer md:hidden"
            />
          )}

          {showNavigation ? (
            <div className="flex flex-col gap-3 items-center justify-between w-full px-3 absolute top-10 bg-white rounded-[1.2rem] py-2 mt-2 shadow-sm md:hidden">
              {navigationBar()}
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
