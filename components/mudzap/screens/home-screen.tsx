"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Zap, MessageCircle, ChevronRight, Play, Users, Sparkles, Trophy, Star, Gift, Crown } from "lucide-react"
import type { Screen } from "@/lib/mudzap-data"
import { navegacaoHome, indicadoresHome } from "@/lib/mudzap-data"
import { Button } from "@/components/ui/button"

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen pt-14 lg:pt-20 pb-28 lg:pb-8 bg-pattern overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-8 lg:mb-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative z-10"
          >
            {/* Top Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground border-2 border-primary/30">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-bold">BOT ONLINE</span>
              </div>
              
              {/* Dev Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 sticker">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-xs font-bold text-amber-600">EM DESENVOLVIMENTO</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-2">
                Bot de Coleção para WhatsApp
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 leading-[0.9]">
                <span className="block text-secondary text-shadow-dark">MUD</span>
                <span className="block bg-gradient-to-r from-primary via-pink-500 to-rose-500 bg-clip-text text-transparent text-shadow-pink">
                  ZAP
                </span>
              </h1>
              <div className="flex items-center gap-4 mt-4">
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                <p className="text-base sm:text-xl font-semibold text-foreground">
                  Seu mundo. Suas regras. <span className="text-primary">Suas coleções.</span>
                </p>
              </div>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {[
                { icon: Star, text: "500+ Cartas", cor: "bg-amber-500/10 text-amber-600 border-amber-500/30" },
                { icon: Trophy, text: "Rankings", cor: "bg-purple-500/10 text-purple-600 border-purple-500/30" },
                { icon: Gift, text: "Eventos", cor: "bg-green-500/10 text-green-600 border-green-500/30" },
                { icon: Users, text: "Comunidade", cor: "bg-blue-500/10 text-blue-600 border-blue-500/30" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${item.cor}`}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 glow-pink group font-bold badge-pulse w-full sm:w-auto"
                onClick={() => onNavigate("comecar")}
              >
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                COMEÇAR AGORA
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground text-base sm:text-lg px-6 py-6 sm:py-7 font-bold w-full sm:w-auto"
                onClick={() => onNavigate("comunidade")}
              >
                <Users className="w-5 h-5 mr-2" />
                Ver Comunidade
              </Button>
            </motion.div>

            {/* How it works link */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => onNavigate("como-funciona")}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              <span className="font-medium">Ver como funciona</span>
            </motion.button>
          </motion.div>

          {/* Right Content - Mascot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Shapes */}
              <div className="absolute inset-0 -m-8">
                {/* Pink glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/20 via-pink-500/15 to-transparent rounded-full blur-3xl" />
                {/* Gold accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-2xl" />
                {/* Decorative circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-primary/30" />
                  <div className="absolute bottom-20 left-5 w-3 h-3 rounded-full bg-amber-500/40" />
                  <div className="absolute top-1/3 left-0 w-2 h-2 rounded-full bg-pink-500/50" />
                </motion.div>
              </div>

              {/* Floating Stickers/Badges */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 left-4 lg:-left-4 z-20"
              >
                <div className="px-4 py-2 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold text-sm shadow-lg glow-gold sticker">
                  <Crown className="w-4 h-4 inline mr-1.5" />
                  500+ CARTAS
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-16 -right-2 lg:-right-8 z-20"
              >
                <div className="px-4 py-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-sm shadow-lg sticker">
                  <Sparkles className="w-4 h-4 inline mr-1.5" />
                  EVENTOS ATIVOS
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -left-2 lg:-left-8 z-20"
              >
                <div className="px-4 py-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white font-bold text-sm shadow-lg glow-pink-sm sticker">
                  <Trophy className="w-4 h-4 inline mr-1.5" />
                  RANKINGS
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-8 right-8 z-20"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-lg glow-red">
                  <span className="font-black text-lg">!</span>
                </div>
              </motion.div>

              {/* Mascot Frame/Panel */}
              <div className="relative mascot-container">
                {/* Decorative frame */}
                <div className="absolute inset-4 border-2 border-primary/20 rounded-[2rem] -z-10" />
                <div className="absolute inset-8 border border-amber-500/10 rounded-[1.5rem] -z-10" />
                
                {/* Mascot Image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Image
                    src="/images/mascot-chibi.png"
                    alt="MUDZAP Mascote"
                    width={500}
                    height={500}
                    className="w-full h-auto drop-shadow-2xl"
                    style={{ 
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
                      mixBlendMode: 'multiply'
                    }}
                    priority
                  />
                </motion.div>

                {/* Bottom panel */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-secondary/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl border border-primary/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-secondary-foreground font-bold text-sm">MUDZAP Bot</span>
                    </div>
                    <div className="text-xs text-muted-foreground bg-primary/20 px-2 py-1 rounded-full">
                      v1.0 Beta
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Indicators Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
        >
          {indicadoresHome.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border-2 border-border hover:border-primary/40 transition-all shadow-sm panel-card"
            >
              <div
                className={`p-2.5 rounded-xl ${
                  item.status === "online"
                    ? "bg-green-500/15 text-green-600"
                    : item.status === "active"
                    ? "bg-amber-500/15 text-amber-600"
                    : "bg-primary/15 text-primary"
                }`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                <p className="text-base font-bold text-foreground">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="text-xl font-bold text-center text-foreground px-4">
              Explore o MUDZAP
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
            {navegacaoHome.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(item.id)}
                className={`${item.cor} p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl text-white shadow-xl card-hover group relative overflow-hidden`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                
                {/* Diagonal decoration */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/10 rotate-45" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/30 transition-all">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-shadow-dark leading-tight text-center">{item.label}</span>
                </div>

                {/* Corner dot */}
                <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-white/40" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
