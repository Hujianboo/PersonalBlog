import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { LinkBtn } from "./LinkBtn";

interface CardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
  tags?: string[];
  children?: React.ReactNode;
  heightClass?: string;
}

const Tag = ({ tag }: { tag: string }) => {
  return <span className="text-white">{tag}</span>;
};

export const CodeCard = ({ title, description, href, tags, children, heightClass }: CardProps) => {
  return (
    <div className="w-full">
      <h3
        className={cn(
          "text-2xl font-semibold leading-none tracking-tight text-white pb-0.5"
        )}
      >
        {title}
      </h3>
      <div className={cn("bg-white/10 backdrop-blur-sm rounded-xl w-full h-96 flex justify-center items-center", heightClass)}>
      <div className="w-[90%] h-[90%] flex justify-center items-center bg-white rounded-xl overflow-hidden relative">
        {children}
        <LinkBtn href={href} className="absolute top-0 right-0 rounded-ml -translate-x-[10%] translate-y-[15%]"></LinkBtn>
      </div>
      </div>
      <div className="text-white">
        <div>{description}</div>
        <div className="mt-4 flex flex-wrap gap-2">{tags?.map((tag) => <div key={tag} className="rounded-md bg-white px-2 py-1 text-black inline-block">{tag} </div>)}</div>
      </div>
    </div>
  );
};

