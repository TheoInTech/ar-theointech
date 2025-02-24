"use client";

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="">
        <div
          ref={containerRef}
          className="relative min-h-screen bg-black text-white overflow-hidden"
        >
          {/* Ambient background effect */}
          <div
            className="fixed inset-0 pointer-events-none"
            style={{
              background: `
            radial-gradient(600px at ${cursorPosition.x}px ${
                cursorPosition.y
              }px, rgba(139, 92, 246, 0.15), transparent 80%),
            radial-gradient(800px at ${cursorPosition.x - 200}px ${
                cursorPosition.y + 200
              }px, rgba(236, 72, 153, 0.1), transparent 80%)
          `,
            }}
          />

          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2 }}
                className="relative w-full h-full"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nebula-ps-wY6Y4GpFi959NIk4muHrZjHDNznEiy.png"
                  alt="Theo's avatar"
                  fill
                  className="object-contain mix-blend-luminosity"
                  style={{
                    filter: "blur(1px)",
                    maskImage:
                      "radial-gradient(circle at center, black 30%, transparent 70%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10 text-center px-4 max-w-7xl mx-auto"
            >
              <h1 className="text-8xl md:text-[12rem] font-bold mb-8 leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-purple-200 to-transparent">
                theo
              </h1>
              <p className="text-2xl md:text-4xl text-purple-200/80 font-light max-w-4xl mx-auto leading-relaxed">
                {
                  "You know that feeling when you're deep into coding, 4 cups of coffee in, and you realize you've accidentally built something revolutionary?"
                }
              </p>
            </motion.div>
          </section>

          {/* Organizations Section */}
          <section className="relative min-h-screen py-32 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-32"
              >
                <h2 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-24">
                  organizations
                </h2>

                <div className="space-y-32">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative"
                  >
                    <h3 className="text-5xl md:text-7xl font-bold text-purple-300/90 mb-6">
                      Parallel Syndicate
                    </h3>
                    <p className="text-2xl md:text-3xl text-purple-200/60 font-light max-w-4xl">
                      An exclusive DAO for elite individuals in the blockchain
                      space
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-right"
                  >
                    <h3 className="text-5xl md:text-7xl font-bold text-blue-300/90 mb-6">
                      Arweave Philippines
                    </h3>
                    <p className="text-2xl md:text-3xl text-blue-200/60 font-light ml-auto max-w-4xl">
                      Building and nurturing the Web3 developer community in the
                      Philippines
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Current Work Section */}
          <section className="relative min-h-screen py-32 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-24">
                  current work
                </h2>

                <div className="space-y-32">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <h3 className="text-5xl md:text-7xl font-bold text-pink-300/90 mb-6">
                      The Howdy Studios
                    </h3>
                    <p className="text-2xl md:text-3xl text-pink-200/60 font-light max-w-4xl">
                      The Future of Outsourcing, Redefined. AI-enhanced,
                      globally competitive solutions.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-right"
                  >
                    <h3 className="text-5xl md:text-7xl font-bold text-purple-300/90 mb-6">
                      HawkFi
                    </h3>
                    <p className="text-2xl md:text-3xl text-purple-200/60 font-light ml-auto max-w-4xl">
                      Leading development on the liquidity yield optimizer &
                      aggregator on Solana.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="relative min-h-screen py-32 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-24">
                  achievements
                </h2>

                <div className="space-y-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="group"
                  >
                    <h3 className="text-4xl md:text-6xl font-light text-blue-200/60 group-hover:text-blue-200/90 transition-colors duration-500">
                      Local Track Winner
                    </h3>
                    <p className="text-2xl md:text-3xl text-blue-300/90 font-bold">
                      Solana Renaissance Hackathon 2024
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="group"
                  >
                    <h3 className="text-4xl md:text-6xl font-light text-purple-200/60 group-hover:text-purple-200/90 transition-colors duration-500">
                      DAO Track Winner
                    </h3>
                    <p className="text-2xl md:text-3xl text-purple-300/90 font-bold">
                      Solana Hyperdrive Hackathon 2023
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="group"
                  >
                    <h3 className="text-4xl md:text-6xl font-light text-pink-200/60 group-hover:text-pink-200/90 transition-colors duration-500">
                      Core Member
                    </h3>
                    <p className="text-2xl md:text-3xl text-pink-300/90 font-bold">
                      Superteam Philippines
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="relative min-h-screen py-32 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-16">
                  let&apos;s connect
                </h2>
                <p className="text-2xl md:text-4xl text-purple-200/60 font-light max-w-4xl mx-auto mb-16">
                  When I&apos;m not debugging my own existence, I&apos;m
                  mentoring devs, scaling startups, and helping web3 communities
                  thrive.
                </p>
                <div className="flex justify-center gap-8">
                  {[
                    {
                      name: "linkedin",
                      url: "https://linkedin.com/in/theoroque",
                    },
                    { name: "twitter", url: "https://twitter.com/theointech" },
                    { name: "youtube", url: "#" },
                    { name: "tiktok", url: "#" },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <img
                        src={`/${social.name}.svg`}
                        alt={social.name}
                        className="w-12 h-12"
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
