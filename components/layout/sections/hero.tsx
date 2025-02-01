"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { SelfDesc } from "@/components/units/SelfDesc";
import { cn } from "@/lib/utils";
import { ReactTyped } from "react-typed";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
  const { theme } = useTheme();
  return (
    <section className={cn("w-full", className)} data-aos="fade-up">
      <div className="w-full grid lg:grid-cols-2 h-[100vh] mb-12 items-center">
        <div className="col-span-1">
          <div className="text-white">
            <h1 className="text-4xl font-bold font-alibaba">
              <ReactTyped
                strings={[
                  "Hello, I&apos;m <span class='text-[#bcff06] text-6xl'>Hu Jianbo</span>,",
                ]}
                typeSpeed={10}
                showCursor={false}
              />
            </h1>
            <p className="text-xl mt-4 font-alibaba">
              <ReactTyped
                strings={[
                  "<span class='text-[#bcff06] text-6xl'>Frontend Engineer</span><br /><span class='text-white text-6xl'>&amp;</span><br /><span class='text-[#bcff06] text-6xl'>Art Enthusiast</span>",
                ]}
                typeSpeed={8}
                startDelay={800}
                showCursor={false}
              />
            </p>
          </div>
        </div>
        <div className="col-span-1" id="card">
          <div className="h-full flex items-center justify-center">
            <div className="z-10 relative" >
              {/* 绿色图形层 */}
              <div className="w-[1000px] h-[600px] bg-[#bcff06] -rotate-6" data-aos="flip-right"
              />
              {/* 黑色背景层 */}
              <div className="w-[800px] h-[450px] bg-[#121718] absolute top-0 rotate-[110deg] -translate-x-40" />
              <div data-aos="flip-left" className="absolute top-0 translate-x-10 -translate-y-20" >
              <Image src={'/selfimg.jpg'} width={450} height={800} alt="self" className=" rotate-[20deg] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
