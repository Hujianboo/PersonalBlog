"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {ArticleContent} from "@/components/ArticleContent";
import { useState } from "react";

interface ArticleListProps {
  posts: Array<{ title: string; path: string }>;
  disabled?: boolean;
}

export const ArticleList = ({ posts, disabled }: ArticleListProps) => {

    const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
    const [isArticleOpen, setIsArticleOpen] = useState(false);
    const handleArticleClick = (title: string) => {
      setSelectedArticle(title);
      setIsArticleOpen(true);
    };
  
    const handleCloseArticle = () => {
      setIsArticleOpen(false);
      setTimeout(() => setSelectedArticle(null), 300); // 等待动画结束后清除选中的文章
    };

  return (
    <>
    <motion.div 
      className="relative m-12 p-10 rounded-2xl flex flex-col items-center justify-center group"
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      {/* Border animation container */}
      <div className="absolute inset-[30px] pointer-events-none">
        <div className="w-full h-full">
          {/* Top and bottom borders */}
          <div className="absolute inset-x-0 h-[1px] bg-white/80 opacity-0 group-hover:opacity-100 group-hover:animate-scale-x transition-all duration-300"
            style={{
              top: 0,
              transformOrigin: 'center',
            }}
          />
          <div className="absolute inset-x-0 h-[1px] bg-white/80 opacity-0 group-hover:opacity-100 group-hover:animate-scale-x transition-all duration-300"
            style={{
              bottom: 0,
              transformOrigin: 'center',
            }}
          />
          
          {/* Left and right borders */}
          <div className="absolute inset-y-0 w-[1px] bg-white/80 opacity-0 group-hover:opacity-100 group-hover:animate-scale-y transition-all duration-300"
            style={{
              left: 0,
              transformOrigin: 'center',
            }}
          />
          <div className="absolute inset-y-0 w-[1px] bg-white/80 opacity-0 group-hover:opacity-100 group-hover:animate-scale-y transition-all duration-300"
            style={{
              right: 0,
              transformOrigin: 'center',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center w-full">
        {posts.map((post, index) => (
            <div
              className="my-6 text-xl font-bold italic text-white hover:-translate-y-1 transition-transform duration-200 hover:text-highlight" role="button"
              onClick={() => handleArticleClick(post.title)}
              key={post.title}
            >
              {post.title}
            </div>
        ))}
      </div>
    </motion.div>
    {/* Article Content Slide */}
    <ArticleContent
        title={selectedArticle || ''}
        isOpen={isArticleOpen}
        onClose={handleCloseArticle}
      />
    </>
  );
}; 