"use client"

import { createContext, useContext, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | null>(null)

const assets = [
  "/about/ai.svg",
  "/about/BILIBILI.png",
  "/about/next.svg",
  "/about/NWPU.png",
  "/about/ps.svg",
  "/about/react.svg",
  "/about/SHOPEE.png",
  "/about/ts.svg",
  "/about/USTC.png",
  "/about/XT.png",
  "/art/01.jpg",
  "/art/02.jpg",
  "/art/03.jpg",
  "/art/04.jpg",
  "/art/05.jpg",
  "/art/06.jpg",
  "/art/07.jpg",
  "/art/08.jpg",
  "/art/09.jpg",
  "/art/10.png",
  "/art/11.png",
  "/art/12.jpg",
  "/art/13.jpg",
  "/art/14.jpg",
  "/art/15.jpg",
  "/art/16.jpg",
  "/cursors/cursor-face.png",
  "/cursors/cursor-point.png",
  "/selfimg.jpg",
  "/works/bwgz.jpg",
  "/works/bwgz.mp4",
  "/works/bwpc.jpg",
  "/works/bwpc.mp4",
  "/works/demo-img.jpg",
  "/works/quicksnap_logo.png",
  "/works/redirect.svg",
  "/works/shopeesc.png",
  "/works/xtransfer.svg",
  "/works/xtverify.jpg",
  "/works/xtverifypc.jpg"
]



export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showSplit, setShowSplit] = useState(false)
  const [showChildren, setShowChildren] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setShowChildren(false)

      const loadPublicAssets = async () => {
        try {
          // 获取 public 目录资源列表
          const response = await fetch('/api/public-assets')
          const { assets } = await response.json()

          let loadedCount = 0
          const totalAssets = assets.length

          const updateProgress = () => {
            loadedCount++
            const newProgress = Math.floor((loadedCount / totalAssets) * 100)
            setProgress(newProgress)
          }

          const loadPromises = assets.map((asset: string) => {
            return new Promise((resolve) => {
              if (asset.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
                // 加载图片
                const img = new Image()
                img.onload = () => {
                  updateProgress()
                  resolve(null)
                }
                img.onerror = () => {
                  updateProgress()
                  resolve(null)
                }
                img.src = asset
              } else if (asset.match(/\.(mp4|webm)$/i)) {
                // 加载视频
                fetch(asset, { method: 'HEAD' })
                  .then(response => {
                    const videoElement = document.createElement('video')
                    videoElement.preload = 'metadata'
                    
                    videoElement.onloadedmetadata = () => {
                      updateProgress()
                      resolve(null)
                    }
                    
                    videoElement.onerror = () => {
                      updateProgress()
                      resolve(null)
                    }
                    
                    videoElement.src = asset
                  })
                  .catch(() => {
                    updateProgress()
                    resolve(null)
                  })
              } else {
                // 其他资源
                fetch(asset)
                  .then(() => {
                    updateProgress()
                    resolve(null)
                  })
                  .catch(() => {
                    updateProgress()
                    resolve(null)
                  })
              }
            })
          })

          await Promise.all(loadPromises)
          
          // 所有资源加载完成后
          setProgress(100)
          setShowSplit(true)
          setTimeout(() => {
            setIsLoading(false)
            setTimeout(() => {
              setShowChildren(true)
            }, 500)
          }, 600)
        } catch (error) {
          console.error('Error loading assets:', error)
          setProgress(100)
          setShowSplit(true)
          setTimeout(() => {
            setIsLoading(false)
            setTimeout(() => {
              setShowChildren(true)
            }, 500)
          }, 600)
        }
      }

      loadPublicAssets()
    }
  }, [isLoading])

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <AnimatePresence mode="wait">
        {(isLoading) && (
          <>
            <motion.div
              initial={{ opacity: 1 }}
              exit={showSplit ? { y: "-100%" } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121718] backdrop-blur-sm"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
            >
              <motion.div 
                className="text-[20vw] font-bold"
                initial={{ scale: 0.5, opacity: 0, color: "#FFFFFF" }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  color: ["#FFFFFF", "hsl(73, 100%, 51%)"]
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  scale: { duration: 0.3 },
                  opacity: { duration: 0.3 },
                  color: { 
                    duration: 1,
                    times: [0, 1]
                  }
                }}
              >
                {progress}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 1 }}
              exit={showSplit ? { y: "100%" } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121718] backdrop-blur-sm"
              style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" }}
            >
              <motion.div 
                className="text-[20vw] font-bold"
                initial={{ scale: 0.5, opacity: 0, color: "#FFFFFF" }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  color: ["#FFFFFF", "hsl(73, 100%, 51%)"]
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  scale: { duration: 0.3 },
                  opacity: { duration: 0.3 },
                  color: { 
                    duration: 1,
                    times: [0, 1]
                  }
                }}
              >
                {progress}
              </motion.div>
            </motion.div>
            {showSplit && (
              <>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-1/2 left-1/2 w-[50%] h-[2px] bg-white z-[101] transform origin-left"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-1/2 right-1/2 w-[50%] h-[2px] bg-white z-[101] transform origin-right"
                />
              </>
            )}
          </>
        )}
        {showChildren && children}
      </AnimatePresence>
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}