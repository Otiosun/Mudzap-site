"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import type { Screen } from "@/lib/mudzap-data"
import { useMotionMode } from "@/hooks/use-motion-mode"
import { Header } from "./header"
import { MobileNav } from "./mobile-nav"
import { HomeScreen } from "./screens/home-screen"

const ScreenFallback = () => <div className="min-h-screen pt-20 lg:pt-24 pb-24 lg:pb-8" />

const ComecarScreen = dynamic(
  () => import("./screens/comecar-screen").then((mod) => mod.ComecarScreen),
  { loading: ScreenFallback },
)
const SistemasScreen = dynamic(
  () => import("./screens/sistemas-screen").then((mod) => mod.SistemasScreen),
  { loading: ScreenFallback },
)
const ComoFuncionaScreen = dynamic(
  () => import("./screens/como-funciona-screen").then((mod) => mod.ComoFuncionaScreen),
  { loading: ScreenFallback },
)
const ComunidadeScreen = dynamic(
  () => import("./screens/comunidade-screen").then((mod) => mod.ComunidadeScreen),
  { loading: ScreenFallback },
)
const EventosScreen = dynamic(
  () => import("./screens/eventos-screen").then((mod) => mod.EventosScreen),
  { loading: ScreenFallback },
)
const ApoiarScreen = dynamic(
  () => import("./screens/apoiar-screen").then((mod) => mod.ApoiarScreen),
  { loading: ScreenFallback },
)
const AjudaScreen = dynamic(
  () => import("./screens/ajuda-screen").then((mod) => mod.AjudaScreen),
  { loading: ScreenFallback },
)
const StatusScreen = dynamic(
  () => import("./screens/status-screen").then((mod) => mod.StatusScreen),
  { loading: ScreenFallback },
)

const screenVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 },
}

export function MudzapHub() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")
  const { isMobile, reduceMotion } = useMotionMode()

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen)
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen onNavigate={handleNavigate} />
      case "come\u00e7ar":
        return <ComecarScreen onNavigate={handleNavigate} />
      case "sistemas":
        return <SistemasScreen onNavigate={handleNavigate} />
      case "como-funciona":
        return <ComoFuncionaScreen onNavigate={handleNavigate} />
      case "comunidade":
        return <ComunidadeScreen />
      case "eventos":
        return <EventosScreen />
      case "apoiar":
        return <ApoiarScreen />
      case "ajuda":
        return <AjudaScreen />
      case "status":
        return <StatusScreen />
      default:
        return <HomeScreen onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen bg-background bg-pattern">
      {/* Header */}
      <Header currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentScreen}
            variants={screenVariants}
            initial={reduceMotion ? false : "initial"}
            animate="animate"
            exit="exit"
            transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Mobile Navigation */}
      <MobileNav currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Top Right Glow */}
        <div className="absolute top-0 right-0 w-[320px] h-[320px] lg:w-[500px] lg:h-[500px] bg-primary/5 rounded-full blur-2xl lg:blur-3xl translate-x-1/2 -translate-y-1/2" />
        {/* Bottom Left Glow */}
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] lg:w-[600px] lg:h-[600px] bg-pink-500/5 rounded-full blur-2xl lg:blur-3xl -translate-x-1/2 translate-y-1/2" />
        {/* Center Accent */}
        {!isMobile && (
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        )}
      </div>
    </div>
  )
}
