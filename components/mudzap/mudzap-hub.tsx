"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Screen } from "@/lib/mudzap-data"
import { Header } from "./header"
import { MobileNav } from "./mobile-nav"
import { HomeScreen } from "./screens/home-screen"
import { ComecarScreen } from "./screens/comecar-screen"
import { SistemasScreen } from "./screens/sistemas-screen"
import { ComoFuncionaScreen } from "./screens/como-funciona-screen"
import { ComunidadeScreen } from "./screens/comunidade-screen"
import { EventosScreen } from "./screens/eventos-screen"
import { ApoiarScreen } from "./screens/apoiar-screen"
import { AjudaScreen } from "./screens/ajuda-screen"
import { StatusScreen } from "./screens/status-screen"

const screenVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 },
}

export function MudzapHub() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen)
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen onNavigate={handleNavigate} />
      case "comecar":
        return <ComecarScreen onNavigate={handleNavigate} />
      case "sistemas":
        return <SistemasScreen />
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
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        {/* Bottom Left Glow */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        {/* Center Accent */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  )
}
