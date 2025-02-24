"use client";

import { Afacad_Flux, Funnel_Sans } from "next/font/google";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { HeroSection } from "@/sections/hero";

const afacadFlux = Afacad_Flux({
  variable: "--font-afacad-flux",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      className={`${funnelSans.variable} ${afacadFlux.variable} font-[family-name:var(--font-funnel-sans)]`}
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
              }px, rgba(139, 92, 246, 0.25), transparent 80%),
            radial-gradient(800px at ${cursorPosition.x - 200}px ${
                cursorPosition.y + 200
              }px, rgba(236, 72, 153, 0.2), transparent 80%)
          `,
            }}
          />

          {/* Hero Section */}
          <HeroSection />
        </div>
      </main>
    </div>
  );
}
