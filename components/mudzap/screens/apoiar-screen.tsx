"use client"

import { motion } from "framer-motion"
import { Heart, Check, Star, Crown, Shield, CreditCard, QrCode, Sparkles, Zap, Gift } from "lucide-react"
import { planosApoio } from "@/lib/mudzap-data"
import { Button } from "@/components/ui/button"

export function ApoiarScreen() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-24 lg:pb-8 bg-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 mb-6 shadow-xl glow-red"
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Apoie o{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Projeto
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ajude o MUDZAP a crescer e ganhe beneficios exclusivos de apoiador!
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-xs font-bold text-green-600">100% Seguro</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
              <Star className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-bold text-amber-600">Projeto Oficial</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary">Apoio Direto</span>
            </div>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-5 mb-10">
          {planosApoio.map((plano, index) => {
            const icons = [Star, Heart, Crown]
            const Icon = icons[index]
            const gradients = [
              "from-pink-400 to-rose-500",
              "from-primary to-pink-600",
              "from-amber-400 to-orange-500"
            ]
            
            return (
              <motion.div
                key={plano.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative bg-card border-3 rounded-3xl overflow-hidden transition-all ${
                  plano.destaque
                    ? "border-primary shadow-xl shadow-primary/20 glow-pink-sm"
                    : "border-border hover:border-primary/40"
                }`}
              >
                {/* Top gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${gradients[index]}`} />
                
                {/* Badge */}
                {plano.badge && (
                  <div className={`absolute top-6 -right-8 px-10 py-1 text-xs font-black text-white transform rotate-45 ${
                    plano.destaque
                      ? "bg-gradient-to-r from-primary to-pink-600"
                      : "bg-gradient-to-r from-amber-500 to-orange-500"
                  }`}>
                    {plano.badge}
                  </div>
                )}

                <div className="p-6 lg:p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-black mb-2 text-foreground">{plano.nome}</h3>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-black text-foreground">{plano.preco}</span>
                    <span className="text-muted-foreground font-medium">{plano.periodo}</span>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {plano.beneficios.map((beneficio, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plano.destaque 
                            ? "bg-primary text-white" 
                            : `bg-gradient-to-br ${gradients[index]} text-white`
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-foreground">{beneficio}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full font-bold py-6 ${
                      plano.destaque
                        ? "bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 glow-pink-sm"
                        : `bg-gradient-to-r ${gradients[index]} hover:opacity-90`
                    } text-white`}
                  >
                    <Gift className="w-4 h-4 mr-2" />
                    Apoiar Agora
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card border-2 border-border rounded-3xl p-8 panel-card"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-black mb-2 text-foreground flex items-center justify-center lg:justify-start gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Metodos de Pagamento
              </h3>
              <p className="text-sm text-muted-foreground">
                Escolha a forma de pagamento mais conveniente para voce
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-colors">
                <QrCode className="w-5 h-5 text-green-600" />
                <span className="font-bold text-foreground">Pix</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-colors">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-foreground">Cartao</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-colors">
                <div className="w-5 h-5 rounded bg-[#00bcff] flex items-center justify-center text-white text-xs font-black">M</div>
                <span className="font-bold text-foreground">Mercado Pago</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-green-600">
              <Shield className="w-4 h-4" />
              <span className="font-bold">Pagamento 100% seguro</span>
            </div>
            <span className="text-muted-foreground">|</span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Integracao com gateway em breve</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
