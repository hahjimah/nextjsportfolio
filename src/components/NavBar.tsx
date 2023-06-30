import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import React from "react";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="dark:bg-slate-800 p-0 sticky top-0 drop-shadow-2xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row ">
        <Link className="grid place-content-center" href="/">
          <Image
            className="hover:cursor-pointer flex justify-center items-center my-2"
            src="/images/logo-no-background.png"
            alt="profilelogo"
            width={150}
            height={150}
          />
        </Link>
        <div className="flex flow-row justify-center sm:justify-evenly align-middle items-center gap-5 mx-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-white/90 hover:Text-white"
            href="https://www.github.com/hahjimah"
          >
            <FaGithub size={50} />
          </Link>
          <Link
            className="text-white/90 hover:Text-white"
            href="https://www.linkedin.com/in/elliot-kim-943a42171/"
          >
            <FaLinkedin size={50} />
          </Link>
          <Link
            className="text-white/90 hover:Text-white"
            href="https://www.instagram.com/yy_jgj/"
          >
            <FaInstagram size={50} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
