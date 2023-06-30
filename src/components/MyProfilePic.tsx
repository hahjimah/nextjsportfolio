import React from "react";
import Image from "next/image";
import Link from "next/link";

export const MyProfilePic = () => {
  return (
    <section className="flex justify-center w-full mx-auto">
      <Link href="/resume">
        <Image
          className=" border-4 border-white dark:border-slate-500 drop-shadow-xl shadow-black rounded-full max-auto mt-8"
          src="/images/picture.png"
          alt="profilepic"
          width={170}
          height={170}
          priority={true}
        />
      </Link>
    </section>
  );
};
