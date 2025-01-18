"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

interface ArchiveSectionProps {
  className?: string;
}
export const ArchiveSection = ({ className }: ArchiveSectionProps) => {
  const { theme } = useTheme();
  return (
    <section id="Archive" className={cn(" w-full h-screen bg-[#30004d]", className)}>
      <div></div>
    </section>
  );
};
