import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  LinkedinLogo,
  TwitterLogo,
  FacebookLogo,
  TiktokLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col gap-8 md:gap-20 overflow-hidden p-8 md:p-24">
      <div className="flex w-full flex-col items-center text-center md:text-left md:items-start gap-4 md:gap-8 text-violet-200 md:text-violet-100/50 md:w-fit group hover:text-violet-200 transition-all duration-300 z-10">
        <motion.p
          className="text-xl md:text-2xl text-black bg-violet-200 md:bg-violet-100/50 group-hover:bg-violet-200 transition-all duration-300 px-2 md:px-4 py-1 md:py-2 rounded-lg w-fit font-medium font-funnel-sans pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Yo, Theo here!
        </motion.p>
        <div className="flex flex-col">
          <motion.p
            className="text-4xl md:text-8xl font-medium font-afacad-flux pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Web3 &amp; AI Builder;
          </motion.p>
          <motion.p
            className="text-4xl md:text-8xl font-medium font-afacad-flux pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Senior Engineer
          </motion.p>
          <motion.p
            className="text-lg mt-2 md:text-xl font-normal italic font-afacad-flux pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            10 years exp <span className="text-blue-300/50">|</span> 30+
            projects built <span className="text-blue-300/50">|</span> $20K+ in
            hackathons &amp; bounties{" "}
            <span className="text-blue-300/50">|</span> 1K+ devs mentored
          </motion.p>
        </div>
      </div>

      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-xl md:text-2xl font-afacad-flux">Contact:</div>
          <div className="text-xl md:text-2xl font-afacad-flux font-medium">
            <a href="mailto:theoroque95@gmail.com">theoroque95@gmail.com</a>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="text-xl md:text-2xl font-afacad-flux">Location:</div>
          <div className="text-xl md:text-2xl font-afacad-flux font-medium">
            Remote | Philippines
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-xl md:text-2xl font-afacad-flux">
            Availability:
          </div>
          <div className="text-xl md:text-2xl font-afacad-flux font-medium">
            Open to work
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col gap-4 md:gap-2">
            <div className="text-xl md:text-2xl font-afacad-flux">
              DYOR about me
            </div>
            <div className="flex items-center gap-8 md:gap-4 justify-center md:justify-start">
              <Link
                href="https://www.linkedin.com/in/theoroque/"
                target="_blank"
                passHref
              >
                <LinkedinLogo
                  size={24}
                  weight="fill"
                  className="text-violet-100/50 scale-125 md:scale-100 hover:text-violet-200 transition-all duration-300"
                />
              </Link>
              <Link
                href="https://www.x.com/theointech"
                target="_blank"
                passHref
              >
                <TwitterLogo
                  size={24}
                  weight="fill"
                  className="text-violet-100/50 scale-125 md:scale-100 hover:text-violet-200 transition-all duration-300"
                />
              </Link>
              <Link
                href="https://www.facebook.com/theointech"
                target="_blank"
                passHref
              >
                <FacebookLogo
                  size={24}
                  weight="fill"
                  className="text-violet-100/50 scale-125 md:scale-100 hover:text-violet-200 transition-all duration-300"
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@theointech"
                target="_blank"
                passHref
              >
                <TiktokLogo
                  size={24}
                  weight="fill"
                  className="text-violet-100/50 scale-125 md:scale-100 hover:text-violet-200 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="group absolute bottom-0 md:top-0 right-10 w-fit md:h-full z-0 border-2 border-transparent brightness-50 hover:brightness-125 active:brightness-125 hover:z-20 active:z-20 transition-all opacity-50 hover:translate-x-4 active:translate-x-4 duration-700 ease-in-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.8 }}
      >
        <Image
          src="/assets/nebula-ps-trans.png"
          alt="Nebula Parallel Syndicate"
          width={1000}
          height={1000}
          className="w-[60%] justify-self-center md:justify-self-end h-fit md:w-full md:h-full mix-blend-overlay"
        />
        <div className="absolute bottom-4 md:bottom-40 z-10 transition-all duration-600 opacity-80 right-10 hidden group-hover:block group-active:block text-black bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 px-2 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-lg font-afacad-flux before:content-[''] before:absolute before:top-0 before:left-4 before:-translate-y-full before:border-[10px] before:border-transparent before:border-b-purple-200">
          Build with me...
        </div>
      </motion.div>
    </section>
  );
};
