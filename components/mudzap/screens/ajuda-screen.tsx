"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { HelpCircle, Search, ChevronDown, MessageCircle, Mail } from "lucide-react"
import { faqs } from "@/lib/mudzap-data"
import { Button } from "@/components/ui/button"

export function AjudaScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("Todos")

  const categories = ["Todos", ...Array.from(new Set(faqs.map((faq) => faq.categoria)))]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.pergunta.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.resposta.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "Todos" || faq.categoria === activeCategory
    return matchesSearch && matchesCategory
  })

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
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-lg"
          >
            <HelpCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Central de{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Ajuda
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para suas dúvidas sobre o MUDZAP
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-8"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar dúvidas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg glow-pink-sm"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-primary font-medium mb-1 block">
                        {faq.categoria}
                      </span>
                      <span className="font-semibold text-foreground">
                        {faq.pergunta}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="pl-12 text-muted-foreground leading-relaxed">
                          {faq.resposta}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhuma pergunta encontrada para &quot;{searchQuery}&quot;
              </p>
            </div>
          )}
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-primary/10 via-pink-500/5 to-transparent border border-primary/20 rounded-3xl p-8 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Não encontrou sua resposta?</h3>
          <p className="text-muted-foreground mb-6">
            Entre em contato com nosso suporte através da comunidade ou envie uma mensagem direta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 glow-pink-sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar na Comunidade
            </Button>
            <Button variant="outline" className="border-primary/30">
              <Mail className="w-4 h-4 mr-2" />
              Enviar Mensagem
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
