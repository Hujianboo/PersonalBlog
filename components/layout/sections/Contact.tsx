'use client'

import { cn } from "@/lib/utils";

interface ContactSectionProps {
  className?: string;
}

export const ContactSection = ({ className }: ContactSectionProps) => {
  return (
    <section className={cn("w-full text-white", className)} id="Contact">
      I'm collaborating with individuals from diverse fields, which is precisely why I created this website.Feel free to contact me.
    </section>
  );
};