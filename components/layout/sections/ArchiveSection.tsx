"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { ArticleList } from "@/components/ArticleList";

interface ArchiveSectionProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const ArchiveSection = ({ className, isOpen, onClose }: ArchiveSectionProps) => {
  const [posts, setPosts] = useState<Array<{ title: string; path: string }>>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/archives');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose?.();
      }
    };

    // 添加滚动锁定逻辑
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
      // 清理滚动锁定
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%", transition: {
              type: "spring",
              damping: 60,
              stiffness: 700,
              mass: 1,
              delay: 0.1
            }}}
            transition={{ 
              type: "spring", 
              damping: 60,
              stiffness: 700,
              mass: 1
            }}
            className="fixed inset-0 z-[48] bg-highlight overflow-y-auto"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%", transition: {
              type: "spring",
              damping: 60,
              stiffness: 700,
              mass: 1,
              delay: 0.05
            }}}
            transition={{ 
              type: "spring", 
              damping: 60,
              stiffness: 700,
              mass: 1,
              delay: 0.05
            }}
            className="fixed inset-0 z-[49] bg-[#243219]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%", transition: {
              type: "spring",
              damping: 60,
              stiffness: 700,
              mass: 1,
            }}}
            transition={{ 
              type: "spring", 
              damping: 60,
              stiffness: 700,
              mass: 1,
              delay: 0.1
            }}
            className="fixed inset-0 z-50 bg-[#121718]"
          >
            <div className={cn("w-full h-full p-8 relative overflow-scroll", className)}>
              <div className="absolute top-8 right-8">
                <button onClick={onClose} className={cn("w-10 h-10 bg-[#ffffff] group rounded-xl")}>
                  <div className="w-10 h-10 bg-highlight [transform:translate(-10%,-10%)] transition-transform group-hover:[transform:translate(0,0)] flex items-center justify-center rounded-xl">
                    <X className="w-1/2 h-1/2 text-black font-bold" />
                  </div>
                </button>
              </div>
              <div className="max-w-4xl mx-auto mt-20">
                <ArticleList posts={posts} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
