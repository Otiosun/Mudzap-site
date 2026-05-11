"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Check, Zap, Terminal, Sparkles, Star, Trophy, Users, Heart, MessageCircle } from "lucide-react"
import { etapasComoFunciona, conversasWhatsApp } from "@/lib/mudzap-data"
import { Button } from "@/components/ui/button"
import type { Screen } from "@/lib/mudzap-data"

interface ComoFuncionaScreenProps {
  onNavigate: (screen: Screen) => void
}

// Comandos principais do bot
const comandosPrincipais = [
  { cmd: "!perfil", desc: "Ver seu perfil", icon: Users },
  { cmd: "!inventario", desc: "Ver seus personagens", icon: Star },
  { cmd: "!roll", desc: "Roletar personagens", icon: Trophy },
  { cmd: "!rank", desc: "Ver ranking", icon: Sparkles },
  { cmd: "!ajuda", desc: "Lista de comandos", icon: Heart },
]

export function ComoFuncionaScreen({ onNavigate }: ComoFuncionaScreenProps) {
  const [etapaAtiva, setEtapaAtiva] = useState(1)
  const mensagens = conversasWhatsApp[etapaAtiva] || []

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-24 lg:pb-8 bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 mb-6 shadow-xl"
          >
            <Terminal className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Como{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Funciona
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Veja como é fácil usar o MUDZAP! Clique nas etapas para ver o bot em ação.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-8">
          {/* WhatsApp Mockup - Center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="sticky top-20">
              {/* Phone Frame */}
              <div className="mx-auto max-w-[300px] sm:max-w-[340px]">
                <div className="relative bg-secondary rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border-4 border-secondary glow-pink-sm">
                  {/* Phone notch */}
                  <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-secondary rounded-full z-20" />
                  
                  {/* Phone Screen */}
                  <div className="bg-[#0b141a] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                    {/* WhatsApp Header */}
                    <div className="bg-[#1f2c33] px-4 py-3 flex items-center gap-3 pt-8">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center shadow-lg">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-bold text-sm">MUDZAP Bot</p>
                        <p className="text-green-400 text-xs flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          online
                        </p>
                      </div>
                      {/* Header icons placeholder */}
                      <div className="flex gap-4 text-gray-400">
                        <div className="w-5 h-5 rounded-full bg-gray-600/50" />
                        <div className="w-5 h-5 rounded-full bg-gray-600/50" />
                      </div>
                    </div>

                    {/* Messages Area */}
                    <div className="h-[360px] sm:h-[420px] p-3 sm:p-4 space-y-3 overflow-y-auto bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZjJjMzMiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={etapaAtiva}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-3"
                        >
                          {mensagens.map((msg, index) => (
                            <motion.div
                              key={msg.id}
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ delay: index * 0.15 }}
                              className={`flex ${msg.remetente === "user" ? "justify-end" : "justify-start"}`}
                            >
                              <div
                                className={`max-w-[85%] px-4 py-2.5 shadow-md ${
                                  msg.remetente === "user"
                                    ? "whatsapp-bubble-user text-white"
                                    : "whatsapp-bubble-bot text-white"
                                }`}
                              >
                                <p className="text-sm whitespace-pre-line leading-relaxed">{msg.mensagem}</p>
                                <p className="text-[10px] text-gray-400 text-right mt-1.5 flex items-center justify-end gap-1">
                                  {msg.hora}
                                  {msg.remetente === "user" && (
                                    <Check className="w-3.5 h-3.5 text-blue-400" />
                                  )}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Input Area */}
                    <div className="bg-[#1f2c33] p-3 flex items-center gap-2">
                      <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2.5 flex items-center gap-2">
                        <span className="text-gray-400 text-sm">Digite um comando...</span>
                      </div>
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center shadow-lg">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Steps & Commands */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <h2 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                Clique para ver em ação
              </h2>
              
              {etapasComoFunciona.map((etapa, index) => (
                <motion.button
                  key={etapa.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  onClick={() => setEtapaAtiva(etapa.id)}
                  className={`w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all ${
                    etapaAtiva === etapa.id
                      ? "bg-primary/10 border-primary shadow-lg shadow-primary/10"
                      : "bg-card border-border hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-base sm:text-lg transition-all ${
                        etapaAtiva === etapa.id
                          ? "bg-gradient-to-br from-primary to-pink-600 text-white shadow-lg"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {etapa.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold text-sm sm:text-base mb-0.5 ${
                        etapaAtiva === etapa.id ? "text-primary" : "text-foreground"
                      }`}>
                        {etapa.titulo}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                        {etapa.descricao}
                      </p>
                    </div>
                    {etapaAtiva === etapa.id && (
                      <motion.div
                        layoutId="active-dot"
                        className="w-3 h-3 rounded-full bg-primary animate-pulse flex-shrink-0"
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Commands Grid */}
            {/* Commands Grid */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
  className="bg-white border-2 border-pink-200 rounded-2xl p-5 shadow-lg"
>
  <h3 className="text-lg font-bold text-pink-500 mb-4 flex items-center gap-2">
    <Terminal className="w-5 h-5 text-pink-500" />
    Comandos Principais
  </h3>

  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
    {comandosPrincipais.map((cmd, index) => (
      <motion.div
        key={cmd.cmd}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 + index * 0.05 }}
        whileHover={{ scale: 1.05, y: -2 }}
        className="
          bg-white
          border
          border-pink-200
          rounded-xl
          p-3
          text-center
          hover:bg-pink-100
          hover:border-pink-300
          transition-all
          duration-300
          cursor-pointer
          group
          shadow-sm
          hover:shadow-lg
          hover:shadow-pink-200/50
        "
        onClick={() => navigator.clipboard.writeText(cmd.cmd)}
      >
        <cmd.icon
          className="
            w-5
            h-5
            text-pink-500
            mx-auto
            mb-2
            group-hover:text-pink-600
            group-hover:scale-110
            transition-all
            duration-300
          "
        />

        <code className="text-sm font-mono font-bold text-pink-500 block">
          {cmd.cmd}
        </code>

        <p className="text-xs text-pink-400 mt-1">
          {cmd.desc}
        </p>
      </motion.div>
    ))}
  </div>

  <p className="text-xs text-pink-400 text-center mt-4">
    Clique em um comando para copiar
  </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 glow-pink font-bold py-6"
                onClick={() => onNavigate("começar")}
              >
                <Zap className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
