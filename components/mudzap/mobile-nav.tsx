"use client"

import { motion } from "framer-motion"
import { Home, Sparkles, Users, Trophy, Heart, HelpCircle } from "lucide-react"
import type { Screen } from "@/lib/mudzap-data"

interface MobileNavProps {
  currentScreen: Screen
  onNavigate: (screen: Screen) => void
}

const navItems = [
  { id: "home" as Screen, label: "Inicio", icon: Home },
  { id: "sistemas" as Screen, label: "Sistemas", icon: Sparkles },
  { id: "comunidade" as Screen, label: "Social", icon: Users },
  { id: "eventos" as Screen, label: "Eventos", icon: Trophy },
  { id: "apoiar" as Screen, label: "Apoiar", icon: Heart },
  { id: "ajuda" as Screen, label: "Ajuda", icon: HelpCircle },
]

export function MobileNav({ currentScreen, onNavigate }: MobileNavProps) {
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-secondary/98 backdrop-blur-xl border-t-2 border-border pb-safe"
    >
      <div className="flex items-center justify-around px-1 py-2">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all min-w-[52px] ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-bg"
                  className="absolute inset-0 bg-primary/10 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <motion.div
                animate={{
                  scale: isActive ? 1.15 : 1,
                  y: isActive ? -2 : 0,
                }}
                className="relative z-10 p-1"
              >
                <item.icon className={`w-5 h-5 ${isActive ? "drop-shadow-sm" : ""}`} />
              </motion.div>
              <span className={`relative z-10 text-[10px] font-bold ${isActive ? "text-primary" : ""}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-dot"
                  className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-primary"
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}
