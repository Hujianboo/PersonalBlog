"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const ArtSection = () => {
  const { theme } = useTheme();
  return (
    <section id="Art" className=" w-full h-screen bg-[#25003c]">
      <div></div>
    </section>
  );
};
