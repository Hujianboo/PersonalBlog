"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Key, useEffect, useState } from "react";
// import { formatDate } from 'pliny/utils/formatDate'
import Link from 'next/link'
import Tag from '@/components/units/Tag'
// import siteMetadata from '@/data/siteMetadata'

interface ArchiveSectionProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const ArchiveSection = ({ className, isOpen, onClose }: ArchiveSectionProps) => {
  const [searchValue, setSearchValue] = useState('')
  const posts = [] as any[]
  
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

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
            className="fixed inset-0 z-[48] bg-highlight"
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
            className="fixed inset-0 z-[49] bg-gray-200"
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
            <div className={cn("w-full h-full p-8 relative", className)}>
              <div className="absolute top-8 right-8">
                <button onClick={onClose} className={cn("w-10 h-10 bg-[#ffffff] group rounded-xl")}>
                  <div className="w-10 h-10 bg-highlight [transform:translate(-10%,-10%)] transition-transform group-hover:[transform:translate(0,0)] flex items-center justify-center rounded-xl">
                    <X className="w-1/2 h-1/2 text-black font-bold" />
                  </div>
                </button>
              </div>
              <div className="max-w-4xl mx-auto mt-20">
                <div className="relative mb-8">
                  <input
                    aria-label="搜索文章"
                    type="text"
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="搜索文章"
                    className="block w-full rounded-md border border-gray-600 bg-[#1e2122] px-4 py-2 text-white focus:border-highlight"
                  />
                  <svg
                    className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="space-y-8">
                  {!filteredBlogPosts.length && <div className="text-white">未找到文章</div>}
                  {filteredBlogPosts.map((post) => (
                    <article key={post.slug} className="space-y-2 border-b border-gray-700 pb-8">
                      <dl>
                        <dt className="sr-only">发布于</dt>
                        <dd className="text-base font-medium text-gray-400">
                          {/* <time dateTime={post.date}>{formatDate(post.date, siteMetadata.locale)}</time> */}
                        </dd>
                      </dl>
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          <Link href={`/blog/${post.slug}`} className="hover:text-highlight">
                            {post.title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {post.tags?.map((tag: Key | null | undefined) => (
                            <Tag key={tag} text={tag as string} />
                          ))}
                        </div>
                      </div>
                      <div className="prose text-gray-400 max-w-none">
                        {post.summary}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
