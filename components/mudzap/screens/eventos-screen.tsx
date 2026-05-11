"use client"

import { motion } from "framer-motion"
import { Calendar, Gift, Clock, CheckCircle, AlertCircle, ChevronRight, Trophy, Star, Sparkles } from "lucide-react"
import { eventos } from "@/lib/mudzap-data"
import { MUDZAP_COMMUNITY_URL, goToExternalLink } from "@/lib/mudzap-links"
import { Button } from "@/components/ui/button"

const statusConfig = {
  ativo: {
    label: "ATIVO",
    icon: CheckCircle,
    cor: "bg-green-500",
    textCor: "text-green-600",
    bgCor: "bg-green-500/10",
    borderCor: "border-green-500/40",
    gradient: "from-green-500 to-emerald-600",
  },
  "em-breve": {
    label: "EM BREVE",
    icon: Clock,
    cor: "bg-amber-500",
    textCor: "text-amber-600",
    bgCor: "bg-amber-500/10",
    borderCor: "border-amber-500/40",
    gradient: "from-amber-500 to-orange-500",
  },
  encerrado: {
    label: "ENCERRADO",
    icon: AlertCircle,
    cor: "bg-gray-500",
    textCor: "text-gray-500",
    bgCor: "bg-gray-500/10",
    borderCor: "border-gray-500/40",
    gradient: "from-gray-400 to-gray-500",
  },
}

export function EventosScreen() {
  const eventosAtivos = eventos.filter((e) => e.status === "ativo")
  const eventosEmBreve = eventos.filter((e) => e.status === "em-breve")
  const eventosEncerrados = eventos.filter((e) => e.status === "encerrado")

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
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 mb-6 shadow-xl glow-gold"
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Eventos
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participe dos eventos para ganhar recompensas exclusivas!
          </p>
        </motion.div>

        {/* Active Events */}
        {eventosAtivos.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-bold text-green-600">Eventos Ativos</span>
              </div>
            </div>
            <div className="grid gap-5">
              {eventosAtivos.map((evento, index) => (
                <EventoCard key={evento.id} evento={evento} index={index} featured />
              ))}
            </div>
          </motion.section>
        )}

        {/* Coming Soon Events */}
        {eventosEmBreve.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
                <Clock className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-bold text-amber-600">Em Breve</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {eventosEmBreve.map((evento, index) => (
                <EventoCard key={evento.id} evento={evento} index={index} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Past Events */}
        {eventosEncerrados.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-500/10 border border-gray-500/30">
                <AlertCircle className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-bold text-gray-500">Encerrados</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {eventosEncerrados.map((evento, index) => (
                <EventoCard key={evento.id} evento={evento} index={index} compact />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  )
}

interface EventoCardProps {
  evento: (typeof eventos)[0]
  index: number
  featured?: boolean
  compact?: boolean
}

function EventoCard({ evento, index, featured, compact }: EventoCardProps) {
  const status = statusConfig[evento.status]
  const StatusIcon = status.icon

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        className="bg-card border-2 border-border rounded-xl p-4 opacity-60 hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className={`px-2.5 py-1 rounded-full ${status.bgCor} ${status.textCor} text-xs font-bold flex items-center gap-1`}>
            <StatusIcon className="w-3 h-3" />
            {status.label}
          </div>
        </div>
        <h3 className="font-bold text-sm mb-1 text-foreground">{evento.titulo}</h3>
        <p className="text-xs text-muted-foreground">
          {evento.dataInicio} - {evento.dataFim}
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      whileHover={{ y: -4 }}
      className={`relative bg-card border-3 ${status.borderCor} rounded-2xl overflow-hidden transition-all hover:shadow-xl ${
        featured ? "lg:flex lg:items-stretch" : ""
      } panel-card`}
    >
      {/* Top bar for featured */}
      {featured && (
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${status.gradient}`} />
      )}
      
      {/* Icon Section */}
      <div className={`${featured ? "lg:w-48 p-6 lg:p-0 lg:flex lg:items-center lg:justify-center" : "p-6 pb-0"} ${
        featured ? `bg-gradient-to-br ${status.gradient}` : ""
      }`}>
        <div className={`${featured ? "lg:w-24 lg:h-24 w-16 h-16" : "w-14 h-14"} rounded-2xl ${
          featured ? "bg-white/20 backdrop-blur-sm" : `bg-gradient-to-br ${status.gradient}`
        } flex items-center justify-center ${featured ? "glow-gold shadow-xl" : "shadow-lg"}`}>
          <Trophy className={`${featured ? "lg:w-12 lg:h-12 w-8 h-8" : "w-7 h-7"} text-white`} />
        </div>
      </div>

      <div className="flex-1 p-6">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${status.bgCor} border ${status.borderCor}`}>
            <StatusIcon className={`w-3.5 h-3.5 ${status.textCor}`} />
            <span className={`text-xs font-black ${status.textCor}`}>{status.label}</span>
          </div>
          {featured && (
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
            </div>
          )}
        </div>

        {/* Title & Description */}
        <h3 className={`font-black mb-2 text-foreground ${featured ? "text-2xl" : "text-lg"}`}>
          {evento.titulo}
        </h3>
        <p className="text-muted-foreground mb-4">{evento.descricao}</p>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 bg-secondary/50 rounded-lg px-3 py-2 w-fit">
          <Calendar className="w-4 h-4" />
          <span className="font-medium">{evento.dataInicio} - {evento.dataFim}</span>
        </div>

        {/* Rewards */}
        <div className="mb-5">
          <div className="flex items-center gap-2 text-sm font-bold mb-3">
            <Gift className="w-4 h-4 text-primary" />
            <span className="text-foreground">Recompensas</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {evento.recompensas.map((recompensa, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/10 to-pink-500/10 border border-primary/20 text-primary text-xs font-bold"
              >
                <Sparkles className="w-3 h-3 inline mr-1" />
                {recompensa}
              </span>
            ))}
          </div>
        </div>

        {/* Action */}
        {evento.status === "ativo" && (
          <Button
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-5 px-6"
            onClick={() => goToExternalLink(MUDZAP_COMMUNITY_URL)}
          >
            Participar Agora
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        )}
        {evento.status === "em-breve" && (
          <Button
            variant="outline"
            className="border-2 border-amber-500/40 text-amber-600 hover:bg-amber-500 hover:text-white font-bold py-5"
            onClick={() => goToExternalLink(MUDZAP_COMMUNITY_URL)}
          >
            <Clock className="w-4 h-4 mr-2" />
            Lembrar-me
          </Button>
        )}
      </div>
    </motion.div>
  )
}
