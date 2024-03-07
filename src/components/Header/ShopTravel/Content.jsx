"use client";
import {
  Cars,
  Cruses,
  Flight,
  Packages,
  Stays,
  ThingsTodo,
} from "@/components/Icons";
import Link from "next/link";
import { ArrowDownIcon } from "../../Icons";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();
  const variantsDropDown = {
    open: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        restDelta: 2,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className="relative sm:block hidden"
    >
      <motion.button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex justify-between items-center gap-2 font-semibold h-full hover:text-[#1668e3]"
      >
        <span className="text-xs">Shop travel</span>
        <ArrowDownIcon />
      </motion.button>
      <motion.div
        variants={variantsDropDown}
        className="w-[300px] h-auto rounded-lg drop-shadow-lg shadow-lg absolute border top-10 bg-white  flex-col"
      >
        <div className="flex flex-col w-full py-5">
          <Link
            href="/"
            className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
          >
            <Stays />
            <span className="text-sm">Stays</span>
          </Link>
          <Link
            href="/"
            className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
          >
            <Flight />
            <span className="text-sm">Flights</span>
          </Link>
          <Link
            href="/"
            className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
          >
            <Cars />
            <span className="text-sm">Cars</span>
          </Link>
          <Link
            href="/"
            className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
          >
            <Packages />
            <span className="text-sm">Packages</span>
          </Link>
          <Link
            href="/"
            className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
          >
            <ThingsTodo />
            <span className="text-sm">Things to do</span>
          </Link>
          <Link
            href="/"
            className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
          >
            <Cruses />
            <span className="text-sm">Cruises</span>
          </Link>

          <div className="w-full my-3 h-[1px] bg-slate-300" />

          <Link
            href="/"
            className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer"
          >
            <span className="text-sm">Expedia Magazines</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Content;
