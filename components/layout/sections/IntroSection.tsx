"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SelfDesc } from "@/components/units/SelfDesc";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkBtn } from "@/components/units/LinkBtn";
import { CodeCard } from "@/components/units/CodeCard";
import { CardContainer,CardItem,CardBody } from "@/components/ui/ThreeCard";
interface IntroSectionProps {
  className?: string;
}

export const IntroSection = ({ className }: IntroSectionProps) => {
  const { theme } = useTheme();
  return (
    <section className={cn("w-full", className)}>
      <div className="w-full grid lg:grid-cols-2 h-1/4">
        <div className="col-span-1 text-highlight">
          <span className="text-8xl">Selected Works</span>
        </div>
        <div className="col-span-1">
          <div className="w-full text-white text-4xl leading-relaxed">
            These are some of my code works which can be seen on the internet. I really enjoy making amazing interactive projects.
          </div>
        </div>
      </div>

      {/* 具体展示 */}
      <div className=" w-full grid lg:grid-cols-4 lg:grid-rows-2 gap-4">
        <div className="col-span-1 flex justify-center">
          <CodeCard 
        title="QuickSnap" 
        description="A chrome extension that can help you take screenshots and save them to your computer."
        href="/"
        tags={["React", "Typescript","chrome extension"]}>
          <div className="relative mx-auto flex justify-center items-center">
            <Image src="/quicksnap_logo.png" alt="XTransfer" width={1176} height={528} className="w-96 h-auto"/>
          </div>
        </CodeCard>
        </div>
        <div className="col-span-1 flex justify-center">
        <CodeCard 
        title="XT International App" 
        description="XT International is a company that provides international payment services."
        href="/"
        tags={["React Native", "Typescript"]}>
            <Image src="/xtverify.jpg" alt="XTransfer" width={600} height={600} className="w-full h-full object-contain"/>
       </CodeCard>
   
        </div>
        <div className="col-span-1 flex justify-center">
        <CodeCard 
        title="XT International PC" 
        description="XT International is a company that provides international payment services."
        href="/"
        tags={["React", "Typescript","qiankun"]}>
            <Image src="/xtverifypc.jpg" alt="XTransfer" width={1176} height={528} className="w-96 h-auto"/>
      </CodeCard>
        </div>
        <div className="col-span-1 flex justify-center">
        <CodeCard 
        title="Shopee SC" 
        description="A chrome extension that can help you take screenshots and save them to your computer."
        href="/"
        tags={["React", "Typescript","chrome extension"]}>
              <Image 
                src="/shopeesc.png" 
                alt="XTransfer" 
                width={1176} 
                height={528} 
                className="w-full h-full object-contain"
              />
        </CodeCard>
        </div>
        
        <div className="col-span-2 flex justify-center">
          <CodeCard 
        title="BILIBILI WORLD 2020 GUANGZHOU" 
        description="A chrome extension that can help you take screenshots and save them to your computer."
        href="/"
        heightClass="h-96"
        tags={["React", "Typescript","chrome extension"]}>
            <video src="/bwgz.mp4" autoPlay loop muted className="w-full h-full object-cover"/>
        </CodeCard>
        </div>
        <div className="col-span-2 flex justify-center">
          <CodeCard 
        title="BILIBILI WORLD 2021 SHANGHAI" 
        description="A chrome extension that can help you take screenshots and save them to your computer."
        href="/"
        tags={["React", "Typescript","chrome extension"]}>
            <video src="/bwpc.mp4" autoPlay loop muted className="w-full h-full object-cover"/>
        </CodeCard>
        </div>
      </div>
      <CardContainer>
        <CardItem>
          <CardBody>
            <span className="text-white">BILIBILI WORLD 2020 GUANGZHOU</span>
          </CardBody>
        </CardItem>
      </CardContainer>
      
    </section>
  );
};
