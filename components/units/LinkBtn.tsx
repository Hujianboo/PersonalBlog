import { cn } from "@/lib/utils";

interface LinkBtnProps {
  href: string;
  className?: string;
}

export const LinkBtn = ({ href, className }: LinkBtnProps) => {
  return (
    <div className="flex items-center justify-center">
      <a
        href={href}
        className={cn("w-10 h-10 bg-[#121718] group rounded-xl", className)}
        target="_blank"
      >
        <div role="button" className="w-10 h-10 bg-highlight [transform:translate(-10%,-10%)] transition-transform group-hover:[transform:translate(0,0)] flex items-center justify-center rounded-xl">
          <img src="/works/redirect.svg" className="w-1/2 h-1/2 rounded-xl"  alt="导向" width={100} height={100}  role="button"/>
        </div>
      </a>
    </div>
  );
};
