"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, Terminal, ChevronRight, Sparkles, Star, Zap } from "lucide-react"
import { sistemas } from "@/lib/mudzap-data"
import { Button } from "@/components/ui/button"

interface SistemaModalProps {
  sistema: (typeof sistemas)[0] | null
  onClose: () => void
}

function SistemaModal({ sistema, onClose }: SistemaModalProps) {
  if (!sistema) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card border-2 border-border rounded-3xl max-w-lg w-full shadow-2xl relative overflow-hidden"
      >
        {/* Header with gradient */}
        <div className={`bg-gradient-to-r ${sistema.cor} p-6`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.1 }}
              className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
            >
              <sistema.icon className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-bold">
                  SISTEMA
                </span>
              </div>
              <h2 className="text-2xl font-black text-white">{sistema.titulo}</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-muted-foreground leading-relaxed">
            {sistema.descricaoLonga}
          </p>

          {/* Command Example */}
          {sistema.comandoExemplo && (
            <div className="bg-secondary rounded-xl p-4 border-2 border-primary/20">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Terminal className="w-4 h-4" />
                <span className="font-medium">Comando de exemplo</span>
              </div>
              <div className="flex items-center justify-between">
                <code className="text-xl font-mono font-bold text-primary">
                  {sistema.comandoExemplo}
                </code>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary hover:text-white"
                  onClick={() => navigator.clipboard.writeText(sistema.comandoExemplo || '')}
                >
                  Copiar
                </Button>
              </div>
            </div>
          )}

          <Button
            className={`w-full bg-gradient-to-r ${sistema.cor} text-white font-bold py-6`}
            onClick={onClose}
          >
            Entendido
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function SistemasScreen() {
  const [selectedSistema, setSelectedSistema] = useState<(typeof sistemas)[0] | null>(null)

  // Category colors for visual variety
  const getCategoryStyle = (index: number) => {
    const styles = [
      { badge: "bg-primary/10 text-primary border-primary/30", corner: "bg-primary" },
      { badge: "bg-amber-500/10 text-amber-600 border-amber-500/30", corner: "bg-amber-500" },
      { badge: "bg-green-500/10 text-green-600 border-green-500/30", corner: "bg-green-500" },
      { badge: "bg-purple-500/10 text-purple-600 border-purple-500/30", corner: "bg-purple-500" },
      { badge: "bg-blue-500/10 text-blue-600 border-blue-500/30", corner: "bg-blue-500" },
      { badge: "bg-red-500/10 text-red-600 border-red-500/30", corner: "bg-red-500" },
      { badge: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30", corner: "bg-cyan-500" },
      { badge: "bg-pink-500/10 text-pink-600 border-pink-500/30", corner: "bg-pink-500" },
    ]
    return styles[index % styles.length]
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-24 lg:pb-8 bg-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 mb-6 glow-pink shadow-xl"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Sistemas do{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              MUDZAP
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore todos os recursos disponiveis. Clique em um card para ver mais detalhes!
          </p>
        </motion.div>

        {/* Systems Grid - Card Game Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {sistemas.map((sistema, index) => {
            const categoryStyle = getCategoryStyle(index)
            
            return (
              <motion.button
                key={sistema.id}
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: 0.1 + index * 0.05, type: "spring" }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedSistema(sistema)}
                className="group relative text-left"
              >
                {/* Card */}
                <div className="relative bg-card border-3 border-border rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-xl group-hover:shadow-primary/15">
                  {/* Top gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${sistema.cor}`} />
                  
                  {/* Corner decoration */}
                  <div className={`absolute top-0 right-0 w-12 h-12 ${categoryStyle.corner} opacity-10 -translate-y-6 translate-x-6 rotate-45`} />
                  
                  {/* Glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sistema.cor} opacity-0 group-hover:opacity-5 transition-opacity`} />

                  <div className="relative z-10 p-5">
                    {/* Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sistema.cor} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                        <sistema.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Badge */}
                      <div className={`px-2 py-1 rounded-full border text-xs font-bold ${categoryStyle.badge}`}>
                        <Star className="w-3 h-3 inline mr-1" />
                        ATIVO
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {sistema.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {sistema.descricao}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver detalhes
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                      
                      {/* Dots decoration */}
                      <div className="flex gap-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${categoryStyle.corner} opacity-60`} />
                        <div className={`w-1.5 h-1.5 rounded-full ${categoryStyle.corner} opacity-40`} />
                        <div className={`w-1.5 h-1.5 rounded-full ${categoryStyle.corner} opacity-20`} />
                      </div>
                    </div>
                  </div>

                  {/* Corner fold effect */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-muted to-transparent opacity-50" />
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <div className="bg-white/80 border border-pink-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Precisa de ajuda?</p>
                <p className="text-sm text-muted-foreground">
                  Use <code className="px-2 py-0.5 rounded bg-primary/10 text-primary font-mono">!ajuda</code> no WhatsApp
                </p>
              </div>
            </div>
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white">
              Ver Todos os Comandos
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSistema && (
          <SistemaModal
            sistema={selectedSistema}
            onClose={() => setSelectedSistema(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
