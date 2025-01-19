"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      // 你的 AOS 配置
      once: true,
      duration: 800,
      easing: 'ease-out',
    })
  }, [])

  return <>{children}</>
} 