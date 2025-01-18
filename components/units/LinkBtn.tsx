import { cn } from "@/lib/utils";

interface LinkBtnProps {
  href: string;
  className?: string;
}

export const LinkBtn = ({ href, className }: LinkBtnProps) => {
  return (
    <div className="flex items-center justify-center">
      <a href={href} className={cn("w-10 h-10 bg-[#121718] ", className)}>
        <div className="w-10 h-10 bg-[#bcff06] translate-x-1/2 translate-y-1/2"></div>
      </a>
    </div>
  );
};
