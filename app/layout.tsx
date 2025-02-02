import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { AOSProvider } from "@/components/providers/aos-provider"
import { ArchiveProvider } from "@/components/layout/archive-provider";
import { LoadingProvider } from "@/components/layout/loading-provier";
const inter = Inter({ subsets: ["latin"] });
const alibaba = localFont({
  src: [
    {
      path: "../public/fonts/Alibaba-PuHuiTi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Alibaba-PuHuiTi-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-alibaba",
});

export const metadata: Metadata = {
  title: "Hujianbo blog",
  description: "Hujianbo blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/avatar-back.png" type="image/png" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background",
          inter.className,
          alibaba.variable,
          "bg-[#121718]"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <ArchiveProvider>
              <AOSProvider>
                <Navbar />
                {children}
              </AOSProvider>
            </ArchiveProvider>
          </LoadingProvider>

        </ThemeProvider>
      </body>
    </html>
  );
}
