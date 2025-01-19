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
const works = [
  {
    title: "QuickSnap",
    description: "A chrome extension that can help you take screenshots and save them to your computer.",
    href: "https://chromewebstore.google.com/detail/quicksnap/jdingmaikfocglolanbkekkiaiakjoln?hl=zh-CN&utm_source=ext_sidebar",
    tags: ["React", "Typescript","chrome extension"],
    img: {
      src: "/quicksnap_logo.png",
      width: 1176,
      height: 528
    }
  },
  {
    title: "XT International App",
    description: "XT International is a company that provides international payment services.",
    href: "https://play.google.com/store/apps/details?id=com.xtapp.xtransfer&hl=en",
    tags: ["React Native", "Typescript"],
    img: {
      src: "/xtverify.jpg",
      width: 600,
      height: 600
    }
  },
  {
    title: "XT International PC",
    description: "XT International is a company that provides international payment services.",
    href: "https://www.xtransfer.com",
    tags: ["React", "Typescript","qiankun"],
    img: {
      src: "/xtverifypc.jpg",
      width: 1176,
      height: 528
    }
  },
  {
    title: "Shopee SC",
    description: "Shopee SC is a company that provides international payment services.",
    href: "https://seller.shopee.ph",
    tags: ["React", "Typescript","chrome extension"],
    img: {
      src: "/shopeesc.png",
      width: 1176,
      height: 528
    }
  },
  {
    title: "BILIBILI WORLD 2020 GUANGZHOU",
    description: "BILIBILI WORLD 2020 GUANGZHOU is a company that provides international payment services.",
    href: "https://bw.bilibili.com/2020/index.html#/bwgz",
    tags: ["React", "Typescript","chrome extension"],
    img: {
      src: "/bwgz.mp4",
    }
  },
  {
    title: "BILIBILI WORLD 2021 SHANGHAI",
    description: "BILIBILI WORLD 2021 SHANGHAI is a company that provides international payment services.",
    href: "https://bw.bilibili.com/2021/index.html#/Home",
    tags: ["React", "Typescript","chrome extension"],
    img: {
      src: "/bwpc.mp4",
    }
  }
]

export const IntroSection = ({ className }: IntroSectionProps) => {
  const { theme } = useTheme();
  return (
    <section className={cn("w-full", className)} >
      <div className="w-full grid lg:grid-cols-2 h-1/4 mb-12">
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
      <div className=" w-full grid lg:grid-cols-4 gap-10" data-aos="fade-up">
        {
          works.slice(0,4).map((work,index)=>(
            <div className="col-span-1 flex justify-center" key={work.title}>
              <CodeCard 
              title={work.title}
              description={work.description}
              href={work.href}
              tags={work.tags}>
                <Image src={work.img.src} alt={work.title} width={work.img.width} height={work.img.height} className="object-contain"/>
              </CodeCard>
            </div>
          ))
        }
        {/* 视频展示 */}
        {/* <div className="col-span-2 flex justify-center"> */}
          {
            works.slice(4,6).map((work,index)=>(
              <div className="col-span-2 flex justify-center" key={work.title}>
                <CodeCard 
                title={work.title} 
                description={work.description}
                href={work.href}
                heightClass="h-96"
                tags={work.tags}>
                    <video src={work.img.src} autoPlay loop muted className="w-full h-full object-cover"/>
                </CodeCard>
              </div>
            ))
          }
      </div>
      
    </section>
  );
};
