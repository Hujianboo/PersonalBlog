"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Masonry from 'react-masonry-css';
import { useEffect, useRef, useState } from 'react';

interface ArtSectionProps {
  className?: string;
}
const artList = [
  {
    src: "/art/16.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/01.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/02.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/03.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/04.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/05.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/06.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/07.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/08.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/09.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/10.png",
    width: 1176,
    height: 528
  },
  {
    src: "/art/11.png",
    width: 1176,
    height: 528
  },
  {
    src: "/art/12.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/13.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/14.jpg",
    width: 1176,
    height: 528
  },
  {
    src: "/art/15.jpg",
    width: 1176,
    height: 528
  },


]
export const ArtSection = ({ className }: ArtSectionProps) => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef(null);
  
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting && !isLoading) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleItems(prev => Math.min(prev + 4, artList.length));
            setIsLoading(false);
          }, 0);
        }
      },
      {
        root: null,
        rootMargin: '300px',
        threshold: 0.01
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <section className={cn("w-full", className)} id="Art">
      <div className="w-full grid lg:grid-cols-2 h-1/4 mb-12">
        <div className="col-span-1 text-highlight">
          <span className="text-8xl">Art</span>
        </div>
        <div className="col-span-1">
          <div className="w-full text-white text-4xl leading-relaxed">
            I have a great passion for painting and love to record everything I see with my brush. Among all forms of art, urban sketching is my favorite - I thoroughly enjoy the process of drawing in the streets.
          </div>
        </div>
        <div className="col-span-1">
        </div>
      </div>

      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-full -ml-6"
        columnClassName="pl-6"
      >
        {artList.slice(0, visibleItems).map((art, index) => (
          <div 
            key={index} 
            className="mb-6 overflow-hidden rounded-lg transform transition-all duration-500"
            style={{
              opacity: 0,
              animation: `fadeIn 0.8s ease-out ${index * 150}ms forwards`
            }}
          >
            <Image
              src={art.src}
              alt={`Artwork ${index + 1}`}
              width={art.width}
              height={art.height}
              loading="lazy"
              className="w-full transition-all duration-500 ease-in-out 
                hover:scale-110 hover:rotate-1 hover:shadow-xl"
            />
          </div>
        ))}
      </Masonry>

      {visibleItems < artList.length && (
        <div 
          ref={observerRef}
          className="w-full h-10"
        />
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
