"use client";

import { HambergerMenu } from "iconsax-react";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  const [menuActive, setMenuActive] = React.useState(false);
  return (
    <nav
      className={`w-screen z-20 flex-col items-center flex justify-start fixed ease-linear duration-300 top-0 backdrop-blur-sm bg-white/10 ${
        menuActive ? "h-[256px]" : "h-[90px]"
      } `}
    >
      <ul className="flex flex-row items-center justify-between w-4/5 max-w-7xl">
        <Image
          alt="Logomarca Manu"
          src={"/icons/logo.svg"}
          width={100}
          height={120}
        />

        <div className="hidden lg:flex flex-row items-center gap-12">
          <li>
            <a
              href="#hero"
              className="text-sm text-white/80 group hover:text-white ease-in duration-300 flex flex-col items-center justify-center"
            >
              Início
              <div className="flex opacity-0 group-hover:opacity-100 ease-in duration-300 bg-main-100 h-[1px] w-4/5 -mb-1"></div>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-sm text-white/80 group hover:text-white ease-in duration-300 flex flex-col items-center justify-center"
            >
              Sobre mim
              <div className="flex opacity-0 group-hover:opacity-100 ease-in duration-300 bg-main-100 h-[1px] w-4/5 -mb-1"></div>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-sm text-white/80 group hover:text-white ease-in duration-300 flex flex-col items-center justify-center"
            >
              Projetos
              <div className="flex opacity-0 group-hover:opacity-100 ease-in duration-300 bg-main-100 h-[1px] w-4/5 -mb-1"></div>
            </a>
          </li>
        </div>

        <button
          className="flex lg:hidden"
          onClick={() => setMenuActive((current) => !current)}
        >
          <HambergerMenu size="32" color="#FFF" variant="TwoTone" />
        </button>
      </ul>

      <div
        className={`flex bg-white absolute flex-col h-[164px] items-center justify-evenly w-full ease-in duration-300 ${
          menuActive ? "opacity-100 top-[92px]" : "opacity-0 top-[-150px]"
        }`}
      >
        <li className="text-main w-full flex items-center justify-center">
          <a href="#hero" onClick={() => setMenuActive(false)}>
            Início
          </a>
        </li>
        <li className="text-main w-full flex items-center justify-center">
          <a href="#about" onClick={() => setMenuActive(false)}>
            Sobre mim
          </a>
        </li>
        <li className="text-main w-full flex items-center justify-center">
          <a href="#projects" onClick={() => setMenuActive(false)}>
            Projetos
          </a>
        </li>
      </div>
    </nav>
  );
}
