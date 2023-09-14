import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <main className="bg-[url(/Poster.svg)] w-full h-screen bg-no-repeat bg-cover">
        <Navbar/>
        <div className="flex items-center justify-center h-screen">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col  ">
          <h1 className=" w-[404px] text-white text-5xl font-bold tracking-wide leading-[56px]">
            John Wick 3 : Parabellum
          </h1>
          <div className="flex gap-10 my-4">
            <div className="flex gap-2">
              <Image src="/imdb.svg" alt="Imdb logo" width={35} height={17} />
              <p className="text-white">86.0 / 100</p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/rottentomato.svg"
                alt="Imdb logo"
                width={16}
                height={17}
              />
              <p className="text-white">97%</p>
            </div>
          </div>
          <p className="text-white w-[302px] text-sm font-semibold leading-[18px] tracking-normal">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>

          <div className="flex gap-2 flex-wrap">
            <Link
              href=""
              type="button"
              className="bg-red px-2 py-3 mt-4 flex rounded-md"
            >
              <BsFillPlayFill size={20} className="text-white mr-2" />
              <p className="text-white uppercase font-semibold">
                Watch Trailer
              </p>
            </Link>
          </div>
        </div>
        <div className=" text-white bg-transparent mx-auto mr-10 flex content-start">
          <ul className="list-none">
            <li>
              <Link
                href=""
                aria-label="headline 1"
                className="text-gray-400 text-20 font-bold leading-14 flex gap-10 items-center"
              >
                <div className="w-20 h-3 flex-shrink-0 rounded-6 bg-white opacity-0" />{" "}
                1
              </Link>
            </li>
            <li>
              <Link
                href=""
                aria-label="headline 2"
                className="text-gray-400 text-20 font-bold leading-14 flex gap-10 items-center"
              >
                <div className="w-20 h-3 flex-shrink-0 rounded-6 bg-white opacity-0" />{" "}
                2
              </Link>
            </li>
            <li>
              <Link
                href=""
                aria-label="headline 3"
                className="text-white font-bold leading-14 flex gap-10 items-center"
              >
                <div className="w-20 h-1 flex-shrink-0 rounded-6 bg-white opacity-1" />
                3
              </Link>
            </li>
            <li>
              <Link
                href=""
                aria-label="headline 4"
                className="text-gray-400 text-20 font-bold leading-14 flex gap-10 items-center"
              >
                <div className="w-20 h-3 flex-shrink-0 rounded-6 bg-white opacity-0" />{" "}
                4
              </Link>
            </li>
            <li>
              <Link
                href=""
                aria-label="headline 5"
                className="text-gray-400 text-20 font-bold leading-14 flex gap-10 items-center"
              >
                <div className="w-20 h-3 flex-shrink-0 rounded-6 bg-white opacity-0" />{" "}
                5
              </Link>
            </li>
          </ul>
        </div>
      </div>
        </div>
     
    </main>
  );
}
