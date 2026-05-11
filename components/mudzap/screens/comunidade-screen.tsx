"use client"

import { motion } from "framer-motion"
import { Users, MessageSquare, Bell, Heart, ExternalLink, Star, Check, Trophy, Sparkles } from "lucide-react"
import { depoimentos } from "@/lib/mudzap-data"
import { Button } from "@/components/ui/button"

export function ComunidadeScreen() {
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
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mb-6 shadow-xl"
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Nossa{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Comunidade
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Faça parte de uma comunidade ativa de colecionadores e jogadores!
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-10"
        >
          {[
            { label: "Membros Ativos", value: "25+", icon: Users, cor: "from-primary to-pink-600" },
            { label: "Mensagens/Dia", value: "2000+", icon: MessageSquare, cor: "from-blue-500 to-cyan-500" },
            { label: "Eventos Realizados", value: "50+", icon: Trophy, cor: "from-amber-500 to-orange-500" },
            { label: "Personagens Coletados", value: "1000+", icon: Heart, cor: "from-red-500 to-rose-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-card border-2 border-border rounded-2xl p-5 text-center hover:border-primary/30 transition-all panel-card"
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${stat.cor} flex items-center justify-center mb-3 shadow-lg`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-3xl lg:text-4xl font-black text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials - WhatsApp Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="text-xl font-bold text-center text-foreground flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              O que dizem sobre nós
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {depoimentos.map((depoimento, index) => (
              <motion.div
                key={depoimento.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
              >
                {/* WhatsApp style header */}
                <div className="bg-gradient-to-r from-[#1f2c33] to-[#2a3942] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {depoimento.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white text-sm truncate">{depoimento.nome}</p>
                      <p className="text-xs text-gray-400">{depoimento.data}</p>
                    </div>
                  </div>
                </div>

                {/* Message bubble style */}
                <div className="p-4 bg-[#0b141a]/5">
                  <div className="bg-card border border-border rounded-xl rounded-tl-sm p-3 shadow-sm">
                    <p className="text-sm text-foreground leading-relaxed">
                      {depoimento.mensagem}
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-border">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        {depoimento.etiqueta}
                      </span>
                      <span className="flex items-center text-xs text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-blue-500 mr-1" />
                        Verificado
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Área preparada para integração com feedback real da comunidade
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {/* Join Community */}
          <div className="bg-gradient-to-br from-primary/10 via-pink-500/5 to-transparent border-2 border-primary/20 rounded-3xl p-8 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center mb-5 shadow-lg glow-pink-sm">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black mb-2 text-foreground">Entrar na Comunidade</h3>
              <p className="text-muted-foreground mb-6">
                Junte-se a dezenas de jogadores na comunidade oficial do MUDZAP no WhatsApp.
              </p>
              <Button className="w-full bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 glow-pink-sm font-bold py-6">
                Entrar Agora
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Follow Updates */}
          <div className="bg-card border-2 border-border rounded-3xl p-8 relative overflow-hidden panel-card">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-5 shadow-lg glow-gold">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black mb-2 text-foreground">Acompanhe as Novidades</h3>
              <p className="text-muted-foreground mb-6">
                Siga nossas redes sociais para não perder nenhuma atualização ou evento.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 border-2 border-primary/30 hover:bg-primary hover:text-white font-bold py-6">
                  Instagram
                </Button>
                <Button variant="outline" className="flex-1 border-2 border-primary/30 hover:bg-primary hover:text-white font-bold py-6">
                  TikTok
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
