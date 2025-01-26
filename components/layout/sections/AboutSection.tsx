"use client";
import { cn } from "@/lib/utils";
import { OrbitingCircles } from "@/components/units/OribitingCircles";
import { TypingAnimation } from "@/components/units/TypingAnimation";
import { ReactTyped } from "react-typed";
import { LinkPreview } from "@/components/ui/LinkPreview";
import {Icons} from "@/components/ui/Icons";
interface AboutSectionProps {
  className?: string;
}

export const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section className={cn("w-full", className)} id="About" data-aos="fade-up">
      <div className="w-full grid lg:grid-cols-2 h-1/4 mb-12">
        <div className="col-span-1">
        <div className="w-full  text-3xl leading-relaxed text-white">
                
                I graduated with a bachelor's degree from 
                <LinkPreview url="https://en.nwpu.edu.cn/" className="font-bold text-[#0056a1]" imageSrc="/about/NWPU.png" isStatic={true} > NWPU </LinkPreview>
                in 2018 and obtained my master's degree from the 
                <LinkPreview url="https://en.ustc.edu.cn/" className="font-bold text-[#034ea2]" imageSrc="/about/USTC.png" isStatic={true} > USTC </LinkPreview>
                 in 2021. As a professional frontend engineer with five years of experience, I have worked at 
                 <LinkPreview url="https://www.bilibili.com/" className="font-bold text-[#fb7299]" imageSrc="/about/BILIBILI.png" isStatic={true} > Bilibili </LinkPreview>
                 , <LinkPreview url="https://www.shopee.com/" className="font-bold text-[#ee4d2d]" imageSrc="/about/SHOPEE.png" isStatic={true} > Shopee </LinkPreview>
                 , and <LinkPreview url="https://www.xtransfer.com/" className="font-bold text-[#cf5300]" imageSrc="/about/XT.png" isStatic={true} > XTransfer </LinkPreview>. I am highly proficient in <span className="font-bold text-[#61dafb]"> React </span>, <span className="font-bold"> Next.js </span>, and <span className="text-[#3178c6] font-bold"> TypeScript </span>, and have extensive knowledge of design tools such as <span className="font-bold text-[#30a8ff]"> Photoshop </span> and <span className="font-bold text-[#fe9a07]"> Adobe Illustrator </span>. I have been working in Shanghai for the past few years and currently reside in Ningbo.
      </div>
        </div>
        <div className="col-span-1">
        <OrbitingCirclesDemo />
          
        </div>
      </div>
    </section>
  );
};




export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex w-full h-[650px] flex-col items-center justify-center overflow-hidden rounded-lg border-none" >
         <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Skills
      </span>
      <OrbitingCircles iconSize={100} radius={300} speed={2}>
        <Icons.ai/>
        <Icons.ps/>
      </OrbitingCircles>
      <OrbitingCircles iconSize={150} radius={150} reverse speed={2}>
        <Icons.react/>
        <Icons.ts/>
        <Icons.next/>
      </OrbitingCircles>
    </div>
  );
}
