'use client'
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { LinkBtn } from "./LinkBtn";
import { useRef, useState } from "react";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
  heightClass?: string;
}

const Tag = ({ tag }: { tag: string }) => {
  return <span className="text-white">{tag}</span>;
};

export const ArtCard = ({   children, heightClass }: CardProps) => {

  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 50;
    const y = (e.clientY - top - height / 2) / 50;
    containerRef.current.style.transform = `scale(1.05) rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div className="w-full" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
      <div className={cn("bg-white/10 backdrop-blur-sm rounded-xl w-full h-96 flex justify-center items-center", heightClass)}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
        style={{
          transform: isMouseEntered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease-out',
        }}
       
      >
        <div className="w-[90%] h-[90%] flex justify-center items-center bg-white rounded-xl overflow-hidden relative"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

