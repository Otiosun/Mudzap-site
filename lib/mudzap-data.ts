import {
  Sparkles,
  TrendingUp,
  Swords,
  Coins,
  Trophy,
  Terminal,
  Users,
  Bell,
  Heart,
  Star,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type Screen =
  | "home"
  | "comecar"
  | "sistemas"
  | "como-funciona"
  | "comunidade"
  | "eventos"
  | "apoiar"
  | "ajuda"
  | "status"

export interface Sistema {
  id: string
  titulo: string
  descricao: string
  descricaoLonga: string
  icon: LucideIcon
  cor: string
  comandoExemplo?: string
}

export interface Evento {
  id: string
  titulo: string
  descricao: string
  status: "ativo" | "em-breve" | "encerrado"
  dataInicio: string
  dataFim: string
  recompensas: string[]
}

export interface PlanoApoio {
  id: string
  nome: string
  preco: string
  periodo: string
  beneficios: string[]
  destaque: boolean
  badge?: string
}

export interface FAQ {
  id: string
  pergunta: string
  resposta: string
  categoria: string
}

export interface MensagemWhatsApp {
  id: number
  remetente: "user" | "bot"
  mensagem: string
  hora: string
}

export const sistemas: Sistema[] = [
  {
    id: "colecao",
    titulo: "Coleção",
    descricao: "Colete personagens de vários universos",
    descricaoLonga:
      "No sistema de coleção do MUDZAP, você pode obter personagens de diversos universos como anime, games, filmes e mais. Cada personagem tem raridade, atributos e habilidades únicas. Complete coleções temáticas para desbloquear recompensas exclusivas!",
    icon: Sparkles,
    cor: "from-pink-500 to-rose-500",
    comandoExemplo: "!colecao",
  },
  {
    id: "evolucao",
    titulo: "Evolução",
    descricao: "Suba de nível e desbloqueie recursos",
    descricaoLonga:
      "Evolua seus personagens para aumentar seus poderes! Combine duplicatas, use itens especiais e participe de eventos para ganhar XP. Personagens evoluídos têm vantagens em rankings e eventos especiais.",
    icon: TrendingUp,
    cor: "from-amber-500 to-orange-500",
    comandoExemplo: "!evoluir",
  },
  {
    id: "eventos",
    titulo: "Eventos",
    descricao: "Participe de rankings e eventos",
    descricaoLonga:
      "Eventos temporários com recompensas exclusivas! Compita com outros jogadores, complete missões especiais e ganhe personagens raros. Novos eventos toda semana!",
    icon: Swords,
    cor: "from-red-500 to-pink-500",
    comandoExemplo: "!evento",
  },
  {
    id: "economia",
    titulo: "Economia",
    descricao: "Sistema de moedas e trocas",
    descricaoLonga:
      "Ganhe moedas completando atividades, vendendo duplicatas ou participando de eventos. Use suas moedas para comprar itens, personagens no mercado e muito mais!",
    icon: Coins,
    cor: "from-yellow-500 to-amber-500",
    comandoExemplo: "!saldo",
  },
  {
    id: "ranking",
    titulo: "Ranking",
    descricao: "Compita pelos melhores lugares",
    descricaoLonga:
      "Suba no ranking competindo com jogadores de todo o Brasil! Rankings semanais e mensais com recompensas para os melhores colocados. Sua posição reflete sua dedicação!",
    icon: Trophy,
    cor: "from-purple-500 to-pink-500",
    comandoExemplo: "!ranking",
  },
  {
    id: "comandos",
    titulo: "Comandos",
    descricao: "Lista completa de comandos",
    descricaoLonga:
      "O MUDZAP possui diversos comandos para você interagir. Desde comandos básicos de perfil até comandos avançados de batalha e economia. Use !ajuda para ver a lista completa!",
    icon: Terminal,
    cor: "from-cyan-500 to-blue-500",
    comandoExemplo: "!ajuda",
  },
  {
    id: "comunidade",
    titulo: "Comunidade",
    descricao: "Um projeto feito para jogadores",
    descricaoLonga:
      "Faça parte de uma comunidade ativa e engajada! Troque experiências, participe de discussões, sugira melhorias e ajude a moldar o futuro do MUDZAP. Juntos somos mais fortes!",
    icon: Users,
    cor: "from-green-500 to-emerald-500",
    comandoExemplo: "!comunidade",
  },
  {
    id: "novidades",
    titulo: "Novidades",
    descricao: "Fique por dentro das atualizações",
    descricaoLonga:
      "Acompanhe todas as novidades do MUDZAP! Novos personagens, sistemas, eventos e melhorias são anunciados constantemente. Ative as notificações para não perder nada!",
    icon: Bell,
    cor: "from-indigo-500 to-purple-500",
    comandoExemplo: "!novidades",
  },
]

export const eventos: Evento[] = [
  {
    id: "1",
    titulo: "Festival de Primavera",
    descricao: "Colete personagens temáticos de primavera e ganhe recompensas exclusivas!",
    status: "ativo",
    dataInicio: "01/05/2026",
    dataFim: "31/05/2026",
    recompensas: ["Personagem Exclusivo", "500 Moedas", "Badge Especial"],
  },
  {
    id: "2",
    titulo: "Torneio de Verão",
    descricao: "Prepare-se para o maior torneio do ano! Competições e prêmios incríveis.",
    status: "em-breve",
    dataInicio: "01/06/2026",
    dataFim: "30/06/2026",
    recompensas: ["Troféu Dourado", "1000 Moedas", "Título Exclusivo"],
  },
  {
    id: "3",
    titulo: "Caça aos Ovos",
    descricao: "Evento especial de Páscoa com personagens temáticos.",
    status: "encerrado",
    dataInicio: "01/04/2026",
    dataFim: "15/04/2026",
    recompensas: ["Personagem Coelho", "250 Moedas"],
  },
]

export const planosApoio: PlanoApoio[] = [
  {
    id: "basico",
    nome: "Apoio Básico",
    preco: "R$ 9,90",
    periodo: "/mês",
    beneficios: [
      "Badge de Apoiador",
      "Acesso antecipado a novidades",
      "Canal exclusivo na comunidade",
      "Agradecimento especial",
    ],
    destaque: false,
  },
  {
    id: "apoiador",
    nome: "Apoiador",
    preco: "R$ 19,90",
    periodo: "/mês",
    beneficios: [
      "Todos os benefícios básicos",
      "Personagem exclusivo mensal",
      "Bônus de moedas semanal",
      "Prioridade no suporte",
      "Nome nos créditos",
    ],
    destaque: true,
    badge: "Popular",
  },
  {
    id: "patrocinador",
    nome: "Patrocinador",
    preco: "R$ 49,90",
    periodo: "/mês",
    beneficios: [
      "Todos os benefícios anteriores",
      "Personagens exclusivos ilimitados",
      "Acesso VIP a eventos",
      "Sugestões prioritárias",
      "Moldura exclusiva no perfil",
      "Destaque na comunidade",
    ],
    destaque: false,
    badge: "Premium",
  },
]

export const faqs: FAQ[] = [
  {
    id: "1",
    pergunta: "O que é o MUDZAP?",
    resposta:
      "O MUDZAP é um bot de coleção e progressão para WhatsApp. Você pode colecionar personagens de diversos universos, evoluir, participar de eventos, competir em rankings e muito mais! É gratuito para jogar.",
    categoria: "Geral",
  },
  {
    id: "2",
    pergunta: "Como entro na comunidade?",
    resposta:
      "Para entrar na comunidade MUDZAP, clique no botão 'Entrar na Comunidade' no site ou use o link disponível em nossas redes sociais. Você será direcionado para nosso grupo/canal oficial no WhatsApp.",
    categoria: "Começar",
  },
  {
    id: "3",
    pergunta: "Como uso o bot no WhatsApp?",
    resposta:
      "Após entrar na comunidade, você pode usar os comandos do bot enviando mensagens que começam com '!' (exclamação). Por exemplo: !perfil, !colecao, !ajuda. O bot responderá automaticamente.",
    categoria: "Começar",
  },
  {
    id: "4",
    pergunta: "O bot é gratuito?",
    resposta:
      "Sim! O MUDZAP é totalmente gratuito para jogar. Todos os sistemas principais são acessíveis a todos os jogadores. Oferecemos opções de apoio para quem quiser ajudar o projeto, com benefícios extras.",
    categoria: "Geral",
  },
  {
    id: "5",
    pergunta: "Como apoiar o projeto?",
    resposta:
      "Você pode apoiar o MUDZAP através dos planos de apoio disponíveis no site. Cada plano oferece benefícios exclusivos e ajuda a manter o projeto funcionando e evoluindo!",
    categoria: "Apoio",
  },
  {
    id: "6",
    pergunta: "Como acompanho as atualizações?",
    resposta:
      "Fique de olho em nossa comunidade oficial e redes sociais! Anunciamos todas as novidades, eventos e atualizações por lá. Use o comando !novidades no bot para ver as últimas mudanças.",
    categoria: "Geral",
  },
  {
    id: "7",
    pergunta: "Como reporto um problema?",
    resposta:
      "Se encontrar algum bug ou problema, você pode reportar na comunidade oficial ou enviar uma mensagem para o suporte. Nossa equipe está sempre atenta para resolver qualquer questão!",
    categoria: "Suporte",
  },
]

export const etapasComoFunciona = [
  {
    id: 1,
    titulo: "Entrar",
    descricao: "Entre na comunidade oficial",
  },
  {
    id: 2,
    titulo: "Comando",
    descricao: "Use seu primeiro comando",
  },
  {
    id: 3,
    titulo: "Colecionar",
    descricao: "Receba seus personagens",
  },
  {
    id: 4,
    titulo: "Evoluir",
    descricao: "Evolua e fique mais forte",
  },
  {
    id: 5,
    titulo: "Competir",
    descricao: "Participe de eventos",
  },
]

export const conversasWhatsApp: Record<number, MensagemWhatsApp[]> = {
  1: [
    { id: 1, remetente: "bot", mensagem: "🎉 Bem-vindo ao MUDZAP!", hora: "14:30" },
    { id: 2, remetente: "bot", mensagem: "Use !ajuda para ver os comandos disponíveis.", hora: "14:30" },
  ],
  2: [
    { id: 1, remetente: "user", mensagem: "!perfil", hora: "14:31" },
    { id: 2, remetente: "bot", mensagem: "📊 *Seu Perfil MUDZAP*\n\n🎮 Nível: 1\n💰 Moedas: 100\n🃏 Cartas: 0\n⭐ Rank: Iniciante", hora: "14:31" },
  ],
  3: [
    { id: 1, remetente: "user", mensagem: "!colecao", hora: "14:32" },
    { id: 2, remetente: "bot", mensagem: "🎴 *Parabéns!* Você recebeu uma nova carta!\n\n⭐ **Sakura** (Raro)\n💫 Poder: 250\n🎯 Universo: Anime", hora: "14:32" },
  ],
  4: [
    { id: 1, remetente: "user", mensagem: "!evoluir Sakura", hora: "14:33" },
    { id: 2, remetente: "bot", mensagem: "✨ *Evolução Completa!*\n\n⭐ **Sakura** evoluiu!\n📈 Nível: 1 → 2\n💫 Poder: 250 → 320", hora: "14:33" },
  ],
  5: [
    { id: 1, remetente: "user", mensagem: "!evento", hora: "14:34" },
    { id: 2, remetente: "bot", mensagem: "🎊 *Evento Ativo!*\n\n🌸 Festival de Primavera\n⏰ Termina em: 5 dias\n🎁 Recompensas exclusivas!", hora: "14:34" },
  ],
}

export const indicadoresHome = [
  { label: "Comunidade", value: "Ativa", icon: Users, status: "online" },
  { label: "Eventos", value: "1 Ativo", icon: Swords, status: "active" },
  { label: "Coleções", value: "500+", icon: Sparkles, status: "info" },
  { label: "Comandos", value: "50+", icon: Terminal, status: "info" },
]

export const navegacaoHome = [
  { id: "comecar" as Screen, label: "Começar", icon: Zap, cor: "bg-gradient-to-br from-pink-500 to-rose-600" },
  { id: "sistemas" as Screen, label: "Sistemas", icon: Sparkles, cor: "bg-gradient-to-br from-purple-500 to-pink-600" },
  { id: "comunidade" as Screen, label: "Comunidade", icon: Users, cor: "bg-gradient-to-br from-green-500 to-emerald-600" },
  { id: "eventos" as Screen, label: "Eventos", icon: Swords, cor: "bg-gradient-to-br from-amber-500 to-orange-600" },
  { id: "apoiar" as Screen, label: "Apoiar", icon: Heart, cor: "bg-gradient-to-br from-red-500 to-pink-600" },
  { id: "ajuda" as Screen, label: "Ajuda", icon: Star, cor: "bg-gradient-to-br from-cyan-500 to-blue-600" },
]

export const passosIniciar = [
  {
    numero: 1,
    titulo: "Entrar na comunidade",
    descricao: "Acesse nosso canal ou grupo oficial do WhatsApp e faça parte da comunidade MUDZAP.",
    acao: "Entrar na Comunidade",
    link: "#", // Placeholder para link do WhatsApp
  },
  {
    numero: 2,
    titulo: "Adicionar o bot",
    descricao: "Solicite a ativação do bot no seu grupo ou interaja diretamente com ele na comunidade.",
    acao: "Solicitar Ativação",
    link: "#",
  },
  {
    numero: 3,
    titulo: "Usar o primeiro comando",
    descricao: "Envie !perfil para criar seu perfil e começar sua jornada no MUDZAP!",
    acao: "Ver Comandos",
    link: "#",
  },
  {
    numero: 4,
    titulo: "Colecionar e evoluir",
    descricao: "Use !colecao para ganhar personagens e !evoluir para ficar mais forte!",
    acao: "Ver Sistemas",
    link: "#",
  },
  {
    numero: 5,
    titulo: "Participar de eventos",
    descricao: "Fique de olho nos eventos ativos e participe para ganhar recompensas exclusivas!",
    acao: "Ver Eventos",
    link: "#",
  },
]

export const depoimentos = [
  {
    id: 1,
    nome: "Lucas M.",
    avatar: "L",
    mensagem: "O MUDZAP é muito viciante! Já tenho mais de 200 cartas coletadas 🎴",
    data: "Há 2 dias",
    etiqueta: "Top Colecionador",
  },
  {
    id: 2,
    nome: "Ana Carolina",
    avatar: "A",
    mensagem: "Melhor bot de WhatsApp que já usei! A comunidade é super ativa e divertida ✨",
    data: "Há 5 dias",
    etiqueta: "Membro Ativo",
  },
  {
    id: 3,
    nome: "Pedro H.",
    avatar: "P",
    mensagem: "Os eventos são incríveis, sempre tem algo novo para fazer. Parabéns ao time!",
    data: "Há 1 semana",
    etiqueta: "Apoiador",
  },
  {
    id: 4,
    nome: "Julia Santos",
    avatar: "J",
    mensagem: "Fiz muitos amigos na comunidade! O sistema de ranking é muito divertido 🏆",
    data: "Há 3 dias",
    etiqueta: "Membro Ativo",
  },
]

export const statusInfo = {
  status: "online",
  ultimaAtualizacao: "10/05/2026",
  versao: "2.5.0",
  avisosImportantes: [
    "Projeto em desenvolvimento ativo",
    "Novas funcionalidades em breve",
    "Feedback da comunidade sempre bem-vindo",
  ],
}
