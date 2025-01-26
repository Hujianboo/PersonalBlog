"use client";
import { useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform,
  AnimatePresence,
  MotionValue 
} from "framer-motion";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { FaGithub, FaEnvelope, FaCopy } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from 'react';

interface RouteProps {
  href: string;
  label: string;
  newTab?: boolean;
}

const routeList: RouteProps[] = [
  {
    href: "https://blog-frontend-hujianboos-projects.vercel.app/tech",
    label: "Archive",
    newTab: true
  },
  {
    href: "#About",
    label: "About",
  },
  {
    href: "#Works",
    label: "Works",
  },
  {
    href: "#Art",
    label: "Art",
  },
];

const NavItem = ({
  mouseX,
  href,
  label,
  newTab
}: {
  mouseX: MotionValue;
  href: string;
  label: string;
  newTab?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-200, 0, 200], [100, 140, 100]);
  const scaleTransform = useTransform(distance, [-200, 0, 200], [1, 1.2, 1]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link 
          href={href} 
          {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <motion.div
            ref={ref}
            style={{ width, scale }}
            className="relative px-6 py-2 group hover:text-highlight"
            role="button"
          >
            <span role="button" className="relative z-10 font-alibaba text-lg whitespace-nowrap transition-colors font-bold">
              {label}
            </span>
          </motion.div>
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

interface DockIconProps {
  href: string;
  icon: React.ReactNode;
  isExternal?: boolean;
}

export const Navbar = () => {
  const mouseX = useMotionValue(0);
  const [copyStatusEmail, setCopyStatusEmail] = useState<'copy' | 'copied'>('copy');
  const [copyStatusGmail, setCopyStatusGmail] = useState<'copy' | 'copied'>('copy');
  const [hoveredEmail, setHoveredEmail] = useState<'email' | 'gmail' | null>(null);
  const email = "466636709@qq.com";
  const gmail = "hoodjann@gmail.com";



  const handleCopy = async (textToCopy: string, setCopyStatus: (status: 'copy' | 'copied') => void) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('copy'), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <header className="md:w-[70%] lg:w-[100%] flex justify-center items-center text-white shadow-xl fixed h-20 backdrop-blur-md bg-[#121718] z-50">
      <div className="w-full flex justify-between items-center mx-[20%]">
        <NavigationMenu className="hidden lg:block">
          <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
          >
            <NavigationMenuList className="flex items-center gap-4">
              {routeList.map((item) => (
                <NavItem
                  key={item.href}
                  mouseX={mouseX}
                  href={item.href}
                  label={item.label}
                  newTab={item.newTab}
                />
              ))}
            </NavigationMenuList>
          </motion.div>
        </NavigationMenu>

        <div className="flex items-center gap-12">
          <div 
            className="relative flex flex-col items-center group"
            onMouseEnter={() => setHoveredEmail('email')}
            onMouseLeave={() => {
              setTimeout(() => setHoveredEmail(null), 4000);
            }}
          >
            <Link 
              href={`mailto:${email}`}
              className="hover:text-highlight transition-colors duration-300"
            >
              <FaEnvelope className="w-6 h-6" />
            </Link>
            <AnimatePresence>
              {hoveredEmail === 'email' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 10, 
                    scale: 0.8,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  className="absolute top-8 transform -translate-y-1 
                            bg-gray-800/90 backdrop-blur-sm text-white text-sm rounded-md 
                            whitespace-nowrap cursor-pointer
                            flex items-center gap-2 overflow-hidden
                            border border-gray-700
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="px-3 py-2">{email}</span>
                  <div className="h-full w-px bg-gray-700" />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy(email, setCopyStatusEmail);
                    }}
                    className="px-3 py-2 hover:bg-gray-700/80 transition-colors
                              flex items-center justify-center group"
                    title={copyStatusEmail === 'copy' ? 'Copy to clipboard' : 'Copied!'}
                  >
                    <FaCopy 
                      className={`w-4 h-4 ${
                        copyStatusEmail === 'copied' ? 'text-green-400' : 'text-gray-400'
                      } group-hover:text-white transition-colors`}
                    />
                  </button>
                  <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-highlight to-transparent h-px" />
                  <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="relative flex flex-col items-center group"
            onMouseEnter={() => setHoveredEmail('gmail')}
            onMouseLeave={() => {
              setTimeout(() => setHoveredEmail(null), 4000);
            }}
          >
            <Link 
              href={`mailto:${gmail}`}
              className="hover:text-highlight transition-colors duration-300"
            >
              <BiLogoGmail className="w-6 h-6" />
            </Link>
            <AnimatePresence>
              {hoveredEmail === 'gmail' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 10, 
                    scale: 0.8,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  className="absolute top-8 transform -translate-y-1 
                            bg-gray-800/90 backdrop-blur-sm text-white text-sm rounded-md 
                            whitespace-nowrap cursor-pointer
                            flex items-center gap-2 overflow-hidden
                            border border-gray-700
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="px-3 py-2">{gmail}</span>
                  <div className="h-full w-px bg-gray-700" />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy(gmail, setCopyStatusGmail);
                    }}
                    className="px-3 py-2 hover:bg-gray-700/80 transition-colors
                              flex items-center justify-center group"
                    title={copyStatusGmail === 'copy' ? 'Copy to clipboard' : 'Copied!'}
                  >
                    <FaCopy 
                      className={`w-4 h-4 ${
                        copyStatusGmail === 'copied' ? 'text-green-400' : 'text-gray-400'
                      } group-hover:text-white transition-colors`}
                    />
                  </button>
                  <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-highlight to-transparent h-px" />
                  <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="https://github.com/YourGithubUsername" 
            target="_blank"
            className="hover:text-highlight transition-colors duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};
