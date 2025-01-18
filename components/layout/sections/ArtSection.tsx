"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

interface ArtSectionProps {
  className?: string;
}
export const ArtSection = ({ className }: ArtSectionProps) => {
  const { theme } = useTheme();
  return (
    <section id="Art" className={cn(" w-full h-screen bg-[#30004d]", className)}>
      <div></div>
    </section>
  );
};
