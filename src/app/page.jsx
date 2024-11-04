"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/anime.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Web Designer, Content Creator
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Saya Lahir di Bogor pada tanggal 18 Januari 2003, btw saya
            laki-laki, tinggi badan saya pokonya dibawah 2 meter dah, oh iya
            untuk masalah berat badan lupa lagi cuy, status saya lajang boro
            boro nikah , yumekmistrong18@gmail.com
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <a href="/hobbies">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Hobbies
              </button>
            </a>
            <a href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
