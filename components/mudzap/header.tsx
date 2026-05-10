"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Zap, Users, Sparkles } from "lucide-react"
import { useState } from "react"
import type { Screen } from "@/lib/mudzap-data"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  currentScreen: Screen
  onNavigate: (screen: Screen) => void
}

const navItems: { id: Screen; label: string }[] = [
  { id: "home", label: "Inicio" },
  { id: "sistemas", label: "Sistemas" },
  { id: "como-funciona", label: "Como Funciona" },
  { id: "eventos", label: "Eventos" },
  { id: "ajuda", label: "Ajuda" },
  { id: "status", label: "Status" },
]

export function Header({ currentScreen, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center glow-pink-sm shadow-lg">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl lg:text-2xl font-black tracking-tight">
                <span className="text-secondary">MUD</span>
                <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">ZAP</span>
              </span>
              <span className="text-[9px] lg:text-[10px] text-muted-foreground font-bold uppercase tracking-widest -mt-0.5 hidden sm:block">
                Central Oficial
              </span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all relative ${
                  currentScreen === item.id
                    ? "bg-primary text-primary-foreground shadow-lg glow-pink-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentScreen === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-foreground"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-2 border-primary/40 text-primary hover:bg-primary hover:text-white font-bold"
              onClick={() => onNavigate("comunidade")}
            >
              <Users className="w-4 h-4 mr-2" />
              Comunidade
            </Button>
            <Button
              className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 glow-pink-sm font-bold"
              onClick={() => onNavigate("comecar")}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Comecar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b-2 border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    onNavigate(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full px-4 py-3.5 rounded-xl text-left font-bold transition-all ${
                    currentScreen === item.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-4 flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-primary/40 text-primary font-bold py-6"
                  onClick={() => {
                    onNavigate("comunidade")
                    setMobileMenuOpen(false)
                  }}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Comunidade
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-primary to-pink-600 font-bold py-6"
                  onClick={() => {
                    onNavigate("comecar")
                    setMobileMenuOpen(false)
                  }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Comecar
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
