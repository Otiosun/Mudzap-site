"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { 
  MessageCircle, 
  UserPlus, 
  Terminal, 
  Sparkles, 
  Trophy,
  ChevronRight,
  Zap,
  Star,
  Users,
  Check,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Screen } from "@/lib/mudzap-data"
import { MUDZAP_COMMUNITY_URL, goToExternalLink } from "@/lib/mudzap-links"

interface ComecarScreenProps {
  onNavigate: (screen: Screen) => void
}

const passosAtivacao = [
  {
    id: 1,
    titulo: "Entrar na Comunidade",
    descricao: "Entre no grupo oficial do MUDZAP no WhatsApp",
    icon: Users,
    cor: "from-green-500 to-emerald-600",
    corBg: "bg-green-500/10",
    corTexto: "text-green-600",
    corBorda: "border-green-500/30",
    detalhes: {
      instrucao: "Clique no botao abaixo para entrar no grupo oficial",
      dica: "O grupo e moderado e segue regras de boa convivencia",
      acao: "Entrar no Grupo",
      link: MUDZAP_COMMUNITY_URL
    }
  },
  {
    id: 2,
    titulo: "Falar com o Bot",
    descricao: "Inicie uma conversa privada com o MUDZAP",
    icon: MessageCircle,
    cor: "from-primary to-pink-600",
    corBg: "bg-primary/10",
    corTexto: "text-primary",
    corBorda: "border-primary/30",
    detalhes: {
      instrucao: "Envie uma mensagem para o numero do bot",
      dica: "O bot responde automaticamente 24h por dia",
      acao: "Iniciar Conversa",
      link: MUDZAP_COMMUNITY_URL
    }
  },
  {
    id: 3,
    titulo: "Usar Primeiro Comando",
    descricao: "Envie !perfil para criar seu perfil de jogador",
    icon: Terminal,
    cor: "from-purple-500 to-violet-600",
    corBg: "bg-purple-500/10",
    corTexto: "text-purple-600",
    corBorda: "border-purple-500/30",
    detalhes: {
      instrucao: "Digite !perfil no chat para começar",
      dica: "Seu perfil guarda todas os seus personagens e conquistas",
      acao: "Ver Comandos",
      comando: "!perfil"
    }
  },
  {
    id: 4,
    titulo: "Ver Colecao",
    descricao: "Explore seus personagens e comece a colecionar",
    icon: Star,
    cor: "from-amber-500 to-orange-500",
    corBg: "bg-amber-500/10",
    corTexto: "text-amber-600",
    corBorda: "border-amber-500/30",
    detalhes: {
      instrucao: "Use !colecao para ver seus personagens",
      dica: "Ganhe personagens participando de eventos e atividades",
      acao: "Ver Sistemas",
      comando: "!colecao"
    }
  },
  {
    id: 5,
    titulo: "Participar de Evento",
    descricao: "Entre em eventos para ganhar Personagens raras",
    icon: Trophy,
    cor: "from-red-500 to-rose-600",
    corBg: "bg-red-500/10",
    corTexto: "text-red-600",
    corBorda: "border-red-500/30",
    detalhes: {
      instrucao: "Use !evento para ver eventos disponiveis",
      dica: "Eventos tem recompensas exclusivas e limitadas",
      acao: "Ver Eventos",
      comando: "!evento"
    }
  }
]

export function ComecarScreen({ onNavigate }: ComecarScreenProps) {
  const [passoAtivo, setPassoAtivo] = useState<number | null>(1)
  const passoSelecionado = passosAtivacao.find(p => p.id === passoAtivo)

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
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-pink-600 mb-6 glow-pink shadow-xl"
          >
            <Zap className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-balance">
            Painel de{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Ativacao
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete os passos abaixo para ativar sua conta e começar a colecionar!
          </p>
        </motion.div>

        {/* Main Panel Layout */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Steps Panel - Left Side */}
          <div className="lg:col-span-2 space-y-3">
            {passosAtivacao.map((passo, index) => (
              <motion.button
                key={passo.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => setPassoAtivo(passo.id)}
                className={`w-full text-left group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  passoAtivo === passo.id
                    ? `${passo.corBorda} ${passo.corBg} shadow-lg`
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                {/* Active indicator bar */}
                {passoAtivo === passo.id && (
                  <motion.div
                    layoutId="active-bar"
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${passo.cor}`}
                  />
                )}

                <div className="p-4 pl-5 flex items-center gap-4">
                  {/* Step number */}
                  <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg transition-all ${
                    passoAtivo === passo.id
                      ? `bg-gradient-to-br ${passo.cor} text-white shadow-lg`
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    {passo.id}
                    {/* Completion check - placeholder for future */}
                    {false && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-base truncate transition-colors ${
                      passoAtivo === passo.id ? passo.corTexto : "text-foreground"
                    }`}>
                      {passo.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {passo.descricao}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className={`w-5 h-5 transition-all ${
                    passoAtivo === passo.id 
                      ? `${passo.corTexto} translate-x-0` 
                      : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail Panel - Right Side */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {passoSelecionado && (
                <motion.div
                  key={passoSelecionado.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border-2 border-border rounded-3xl overflow-hidden shadow-xl panel-card"
                >
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${passoSelecionado.cor} p-6 lg:p-8`}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <passoSelecionado.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm font-medium mb-1">
                          Passo {passoSelecionado.id} de 5
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-black text-white">
                          {passoSelecionado.titulo}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 space-y-6">
                    {/* Instruction */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-lg ${passoSelecionado.corBg} ${passoSelecionado.corTexto} flex items-center justify-center flex-shrink-0`}>
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">Como fazer</h3>
                          <p className="text-muted-foreground">
                            {passoSelecionado.detalhes.instrucao}
                          </p>
                        </div>
                      </div>

                      {/* Command if exists */}
                      {passoSelecionado.detalhes.comando && (
                        <div className="bg-secondary/50 rounded-xl p-4 flex items-center justify-between">
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Comando</div>
                            <code className="text-xl font-mono font-bold text-primary">
                              {passoSelecionado.detalhes.comando}
                            </code>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary/30 text-primary hover:bg-primary hover:text-white"
                            onClick={() => navigator.clipboard.writeText(passoSelecionado.detalhes.comando || '')}
                          >
                            Copiar
                          </Button>
                        </div>
                      )}

                      {/* Tip */}
                      <div className={`rounded-xl border-2 ${passoSelecionado.corBorda} ${passoSelecionado.corBg} p-4`}>
                        <div className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${passoSelecionado.cor} flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-xs font-bold">!</span>
                          </div>
                          <p className="text-sm text-foreground">
                            <span className="font-bold">Dica:</span> {passoSelecionado.detalhes.dica}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      size="lg"
                      className={`w-full bg-gradient-to-r ${passoSelecionado.cor} hover:opacity-90 text-white font-bold py-6 glow-pink-sm`}
                      onClick={() => {
                        if (passoSelecionado.detalhes.link) goToExternalLink(passoSelecionado.detalhes.link)
                        else if (passoSelecionado.id === 3 || passoSelecionado.id === 4) onNavigate("sistemas")
                        else if (passoSelecionado.id === 5) onNavigate("eventos")
                      }}
                    >
                      {passoSelecionado.detalhes.acao}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>

                    {/* Progress indicator */}
                    <div className="flex items-center justify-center gap-2 pt-2">
                      {passosAtivacao.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setPassoAtivo(p.id)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            p.id === passoAtivo
                              ? `bg-gradient-to-r ${passoSelecionado.cor} w-8`
                              : "bg-border hover:bg-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <div className="bg-secondary rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-black text-secondary-foreground mb-2">
                  Pronto para começar?
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  Entre na comunidade oficial e comece sua jornada de colecao agora mesmo!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 text-lg px-8 glow-pink font-bold"
                  onClick={() => goToExternalLink(MUDZAP_COMMUNITY_URL)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Entrar na Comunidade
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white"
                  onClick={() => onNavigate("como-funciona")}
                >
                  Ver Como Funciona
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
