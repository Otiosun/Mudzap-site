"use client"

import { motion } from "framer-motion"
import {
  Shield,
  CheckCircle,
  Clock,
  AlertTriangle,
  ExternalLink,
  FileText,
  Lock,
  RefreshCw,
  Instagram,
  Github,
  Zap,
} from "lucide-react"
import { statusInfo } from "@/lib/mudzap-data"
import { Button } from "@/components/ui/button"

export function StatusScreen() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-24 lg:pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mb-6 shadow-lg"
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Status &{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Confiança
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Informações sobre o status do bot e transparência do projeto
          </p>
        </motion.div>

        {/* Main Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border-2 border-green-500/30 rounded-3xl p-8 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-500 font-bold text-xl uppercase tracking-wider">
                  Bot Online
                </span>
              </div>
              <p className="text-muted-foreground">
                Todos os sistemas funcionando normalmente
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm text-muted-foreground mb-1">Versão atual</p>
              <p className="text-2xl font-bold text-foreground font-mono">
                v{statusInfo.versao}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {/* Last Update */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Última atualização</p>
                <p className="font-semibold">{statusInfo.ultimaAtualizacao}</p>
              </div>
            </div>
          </motion.div>

          {/* Uptime */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Disponibilidade</p>
                <p className="font-semibold">99.9% uptime</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Notices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-500 mb-3">Avisos Importantes</h3>
              <ul className="space-y-2">
                {statusInfo.avisosImportantes.map((aviso, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {aviso}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Links & Legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {[
            { title: "Termos de Uso", icon: FileText, desc: "Regras e condições" },
            { title: "Privacidade", icon: Lock, desc: "Política de dados" },
            { title: "Segurança", icon: Shield, desc: "Como protegemos você" },
          ].map((item, index) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border rounded-2xl p-5 text-left hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <item.icon className="w-5 h-5 text-primary" />
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Official Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-card border border-border rounded-3xl p-8 text-center"
        >
          <h3 className="text-xl font-bold mb-6">Links Oficiais</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Zap className="w-4 h-4 mr-2 text-primary" />
              WhatsApp
            </Button>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Use apenas links oficiais. Não clique em links suspeitos.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
