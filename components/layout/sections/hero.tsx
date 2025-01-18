"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { SelfDesc } from "@/components/units/SelfDesc";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
  const { theme } = useTheme();
  return (
    <section className={cn("w-full h-screen relative", className)}>
      <div className="absolute top-[30%] left-[5%] w-[30%]">
        <SelfDesc />
      </div>
    </section>
  );
};
