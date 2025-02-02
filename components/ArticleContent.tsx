"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { marked } from 'marked';
import { IoClose } from "react-icons/io5";
import { X } from "lucide-react";

interface ArticleContentProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleContent = ({ title, isOpen, onClose }: ArticleContentProps) => {
  const [content, setContent] = useState('');
  const [publishDate, setPublishDate] = useState<string | null>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        event.stopPropagation();
        onClose?.();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscKey, true);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey, true);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && title) {
      fetch(`/api/article/${encodeURIComponent(title)}`)
        .then(res => res.text())
        .then(markdown => {
          if (typeof markdown === 'string') {
            const dateMatch = markdown.match(/date:\s*'(\d{8})'/);
            if (dateMatch) {
              const rawDate = dateMatch[1];
              const formattedDate = `${rawDate.slice(0,4)}-${rawDate.slice(4,6)}-${rawDate.slice(6,8)}`;
              setPublishDate(formattedDate);
            }
            
            const htmlContent = marked(markdown);
            setContent(htmlContent as string);
          } else {
            setContent('Invalid article content');
          }
        })
        .catch(error => {
          console.error('Error loading article:', error);
          setContent('Failed to load article content');
        });
    }
  }, [isOpen, title]);
  return (
    <AnimatePresence>
    {
        isOpen && (
            <>
        <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        exit={{ y: "100%", transition: {
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
          mass: 1,
        }}
        className="fixed inset-0 z-[49] bg-highlight rounded-t-3xl"
      />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        exit={{ y: "100%", transition: {
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
        className="fixed inset-0 z-[49] bg-[#243219] rounded-t-3xl"
      />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        exit={{ y: "100%", transition: {
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
        className="fixed inset-0 z-50 bg-[#121718] rounded-t-3xl"
      >
        <div className="relative w-full h-full">
          
          <button onClick={onClose} className={"absolute top-8 right-8 w-10 h-10 bg-[#ffffff] group rounded-xl"}>
                  <div className="w-10 h-10 bg-highlight [transform:translate(-10%,-10%)] transition-transform group-hover:[transform:translate(0,0)] flex items-center justify-center rounded-xl">
                    <X className="w-1/2 h-1/2 text-black font-bold" />
                  </div>
                </button>


          <div className="w-full h-full overflow-y-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-8 text-white">{title}</h1>
              {publishDate && (
                <p className="text-gray-400 mb-4">发布日期: {publishDate}</p>
              )}
              <article 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </motion.div>
      </>
      )
    }
    </AnimatePresence>
  );
}; 

