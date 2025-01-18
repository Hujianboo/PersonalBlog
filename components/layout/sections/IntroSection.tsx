"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SelfDesc } from "@/components/units/SelfDesc";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkBtn } from "@/components/units/LinkBtn";

interface IntroSectionProps {
  className?: string;
}

export const IntroSection = ({ className }: IntroSectionProps) => {
  const { theme } = useTheme();
  return (
    <section className={cn("w-full h-screen", className)}>
      <div className=" w-full flex justify-center">
        <Card className="lg:w-1/3">
          <CardHeader></CardHeader>
          <CardContent></CardContent>
        </Card>
        <div className="w-2/3">
          <Card className="">
            <CardHeader>Shopee Seller Centre</CardHeader>
            <CardContent>sdf</CardContent>
          </Card>
          <Card className="">
            <CardHeader>Temu Translate Platform</CardHeader>
            <CardContent>sdf</CardContent>
          </Card>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <div className="w-2/3">
          <Card>
            <CardHeader>
              <CardTitle>I make activities for Bilibili</CardTitle>
            </CardHeader>
            <CardContent>
              <video
                src="/bwgz.mp4"
                poster="/bwgz.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  const video = e.currentTarget;
                  video.style.display = "none";
                  const img = document.createElement("img");
                  img.src = "/bwgz.jpg";
                  img.alt = "fallback image";
                  img.className = video.className;
                  video.parentNode?.insertBefore(img, video);
                }}
              />
              <video
                src="/bwpc.mp4"
                poster="/bwpc.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-lg mt-2"
                onError={(e) => {
                  const video = e.currentTarget;
                  video.style.display = "none";
                  const img = document.createElement("img");
                  img.src = "/bwpc.jpg";
                  img.alt = "fallback image";
                  img.className = video.className;
                  video.parentNode?.insertBefore(img, video);
                }}
              />
            </CardContent>
          </Card>
        </div>
        <div className="w-1/3">
          <Card className="">
            <CardContent>
              <LinkBtn href="https://quicksnap.app" />
              <Image
                src="/quicksnap_logo.png"
                alt="quickSnap"
                width={2206}
                height={1422}
              />
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader>Temu Translate Platform</CardHeader>
            <CardContent>sdf</CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
