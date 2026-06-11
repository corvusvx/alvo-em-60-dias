import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";
import paivaAsset from "@/assets/paiva.jpeg.asset.json";
import {
  Crosshair,
  Target,
  Calendar,
  Brain,
  ArrowsClockwise,
  ListChecks,
  Strategy,
  MonitorPlay,
  WhatsappLogo,
  InstagramLogo,
  ArrowRight,
  Warning,
  CaretDown,
  Lightning,
  ShieldCheck,
  TrendUp,
  Quotes,
  Star,
  Fire,
  CheckCircle,
} from "@phosphor-icons/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alvo Policial — Bata o Edital da PMAL em 60 Dias" },
      { name: "description", content: "Método tático de 60 dias focado no que realmente cai na PMAL. Foco, disciplina e resultado." },
      { property: "og:title", content: "Alvo Policial — Bata o Edital da PMAL em 60 Dias" },
      { property: "og:description", content: "Método tático de 60 dias focado no que realmente cai na PMAL." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=558296878311&text=Quero%2520estudar%2520da%2520forma%2520correta%2520e%2520eficiente";
const MENTORIA_URL = "https://clkdmg.site/pay/paiva-somente-mentoria";
const PMAL_URL = "https://clkdmg.site/pay/mentoriapaiva";
const PMPE_URL = "https://clkdmg.site/pay/paiva-pmpe";
const PMBA_URL = "https://clkdmg.site/pay/paiva-pmba";
const PMSP_URL = "https://clkdmg.site/pay/paiva-pmesp";
const PREMIUM_URL = "https://clkdmg.site/pay/pm-premium-paiva";
const PLAN_PMAL_URL = MENTORIA_URL;
const INSTAGRAM_URL = "https://www.instagram.com/paiva.alvopolicial/";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoAsset.url} alt="Alvo Policial" className="h-9 md:h-10 w-auto" />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Método", href: "#metodo" },
    { label: "Planos", href: "#planos" },
    { label: "Feedbacks", href: "#feedbacks" },
    { label: "Paiva", href: "#paiva" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-[#2a2a2a]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#top"><Logo /></a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-[#a0a0a0] hover:text-white transition-colors uppercase tracking-wider">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#planos"
          className="hidden md:inline-flex items-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-semibold uppercase tracking-wider text-xs px-5 py-2.5 rounded-sm transition-colors"
        >
          Quero ser aprovado <ArrowRight size={14} weight="bold" />
        </a>
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#2a2a2a] bg-[#0a0a0a] px-4 py-6 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-[#a0a0a0] hover:text-white uppercase tracking-wider">
              {l.label}
            </a>
          ))}
          <a
            href="#planos"
            onClick={() => setOpen(false)}
            className="block text-center bg-[#cc1f1f] text-white font-semibold uppercase tracking-wider text-xs px-5 py-3 rounded-sm"
          >
            Quero ser aprovado
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] pt-16 overflow-hidden">
      {/* Red glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top left, #cc1f1f18 0%, transparent 55%), radial-gradient(ellipse at bottom right, #cc1f1f10 0%, transparent 50%)" }} />
      {/* Tactical grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-20 grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-[#cc1f1f]/40 bg-[#cc1f1f]/5 px-3 py-1.5 rounded-sm mb-8">
            <Target size={14} weight="fill" className="text-[#cc1f1f]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5f5f5]">Polícia Militar de Alagoas</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display font-extrabold uppercase tracking-tight text-white leading-[0.9] text-6xl md:text-8xl">
            Bata o edital
            <br />
            <span className="text-[#cc1f1f]">em 60 dias</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 text-lg md:text-xl text-[#a0a0a0] max-w-[55ch] leading-relaxed">
            Você não vai estudar todo o edital.
            <br className="hidden md:block" />
            <span className="text-white font-medium"> Vai estudar o que realmente importa.</span>
          </motion.p>

          <motion.p variants={fadeUp} className="mt-3 text-base text-[#606060] max-w-[55ch] leading-relaxed">
            O seu sonho é possível. O tempo é agora. Foco, disciplina e estratégia vencem.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={PLAN_PMAL_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-semibold uppercase tracking-wider text-sm px-8 py-4 rounded-sm transition-all active:scale-[0.98]"
            >
              Quero começar hoje <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#cc1f1f] text-[#cc1f1f] hover:bg-[#cc1f1f] hover:text-white font-semibold uppercase tracking-wider text-sm px-8 py-4 rounded-sm transition-all"
            >
              <WhatsappLogo size={16} weight="fill" /> Falar com o Paiva
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono uppercase tracking-widest text-[#606060]">
            <span className="flex items-center gap-2"><Target size={14} className="text-[#cc1f1f]" weight="fill" /> Foco</span>
            <span className="h-3 w-px bg-[#2a2a2a]" />
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#cc1f1f]" weight="fill" /> Disciplina</span>
            <span className="h-3 w-px bg-[#2a2a2a]" />
            <span className="flex items-center gap-2"><TrendUp size={14} className="text-[#cc1f1f]" weight="fill" /> Resultado</span>
          </motion.div>
        </motion.div>

        {/* Right visual — crosshair */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block relative aspect-square"
        >
          <div className="absolute inset-0 rounded-full border border-[#cc1f1f]/30 animate-pulse" />
          <div className="absolute inset-8 rounded-full border border-[#cc1f1f]/50" />
          <div className="absolute inset-20 rounded-full border-2 border-[#cc1f1f]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Crosshair size={120} weight="thin" className="text-[#cc1f1f]" />
          </div>
          {/* corner brackets */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#cc1f1f]" />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#cc1f1f]" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#cc1f1f]" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#cc1f1f]" />
          <div className="absolute top-1/2 -left-2 right-auto text-xs font-mono text-[#cc1f1f]">—</div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#606060]">
            Target: PMAL · 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricsStrip() {
  const items = [
    { n: "60", label: "Dias de cronograma" },
    { n: "100%", label: "Foco no que cai" },
    { n: "24h", label: "Acesso à mentoria" },
    { n: "1", label: "Objetivo: aprovação" },
  ];
  return (
    <section className="border-y border-[#1f1f1f] bg-[#0d0d0d]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1f1f1f]">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="px-4 md:px-8 py-8 text-center"
          >
            <div className="font-mono font-semibold text-3xl md:text-4xl text-white">{it.n}</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#606060]">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Deliverables() {
  const items = [
    { icon: Calendar, title: "Cronograma Completo", desc: "Dia 1 ao Dia 60. Você abre o app e sabe exatamente o que estudar." },
    { icon: Brain, title: "Método de Estudo Prático", desc: "Como estudar de verdade — não decorar, internalizar." },
    { icon: ArrowsClockwise, title: "Como Revisar", desc: "Sistema de revisão espaçada que fixa o conteúdo na memória de longo prazo." },
    { icon: ListChecks, title: "Como Fazer Questões", desc: "Treino direcionado à banca. Você aprende a interpretar antes de responder." },
    { icon: Strategy, title: "Estratégia de Prova", desc: "O que fazer no dia D: ordem, tempo, gestão emocional." },
    { icon: MonitorPlay, title: "Plataforma com Mentoria Gravada", desc: "Mentoria do Paiva disponível 24h, em qualquer dispositivo." },
  ];
  return (
    <section id="metodo" className="py-24 md:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ Você vai receber</span>
            <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-4xl md:text-5xl leading-[0.95]">
              Tudo que você precisa
              <br />
              <span className="text-[#cc1f1f]">para passar.</span>
            </h2>
            <p className="mt-6 text-[#a0a0a0] max-w-[40ch] leading-relaxed">
              Sem enrolação, sem material genérico. Cada peça do método foi construída para um único objetivo: te colocar no nome dos aprovados.
            </p>

            <div className="mt-8 border-l-2 border-[#cc1f1f] bg-[#cc1f1f]/5 px-5 py-4">
              <div className="flex items-start gap-3">
                <Warning size={20} weight="fill" className="text-[#cc1f1f] shrink-0 mt-0.5" />
                <p className="text-sm text-white leading-relaxed">
                  Você <span className="font-semibold">não vai estudar todo o edital</span> — vai estudar o que realmente importa.
                </p>
              </div>
            </div>
          </div>

          <div>
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-5 py-6 border-t border-[#2a2a2a] first:border-t-0"
                >
                  <div className="shrink-0 w-12 h-12 rounded-sm bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                    <Icon size={22} weight="duotone" className="text-[#cc1f1f]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#606060]">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-semibold text-lg text-white">{it.title}</h3>
                    </div>
                    <p className="mt-2 text-[#a0a0a0] leading-relaxed">{it.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

type ProductCorp = "PMAL" | "PMPE" | "PMBA" | "PMSP" | "PREMIUM";
type Product = {
  corp: ProductCorp;
  title: string;
  desc: string;
  price: string;
  installments: string;
  url: string;
};

const PRODUCTS: Product[] = [
  { corp: "PMAL", title: "Curso Completo — PMAL", desc: "Curso completo para a Polícia Militar de Alagoas com mentoria direta incluída.", price: "597", installments: "12x de R$ 59,70", url: PMAL_URL },
  { corp: "PMPE", title: "Curso Completo — PMPE", desc: "Curso completo para a Polícia Militar de Pernambuco com mentoria direta incluída.", price: "697", installments: "12x de R$ 69,70", url: PMPE_URL },
  { corp: "PMBA", title: "Curso Completo — PMBA", desc: "Curso completo para a Polícia Militar da Bahia com mentoria direta incluída.", price: "697", installments: "12x de R$ 69,70", url: PMBA_URL },
  { corp: "PMSP", title: "Curso Completo — PMSP", desc: "Curso completo para a Polícia Militar de São Paulo com mentoria direta incluída.", price: "697", installments: "12x de R$ 69,70", url: PMSP_URL },
  { corp: "PREMIUM", title: "Curso Premium — Todas as PMs", desc: "Acesso a todos os cursos de Polícia Militar do Brasil em um único plano, com mentoria direta incluída.", price: "797", installments: "12x de R$ 79,70", url: PREMIUM_URL },
];

function Pricing() {
  const [filter, setFilter] = useState<ProductCorp | "ALL">("ALL");
  const filtered = filter === "ALL" ? PRODUCTS : PRODUCTS.filter((p) => p.corp === filter);
  const corps: Array<ProductCorp | "ALL"> = ["ALL", "PMAL", "PMPE", "PMBA", "PMSP", "PREMIUM"];

  return (
    <section id="planos" className="py-24 md:py-32 bg-[#0d0d0d] border-y border-[#1f1f1f] relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center top, #cc1f1f15 0%, transparent 50%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ Hub de produtos</span>
          <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-4xl md:text-5xl leading-[0.95]">
            Escolha a mentoria certa<br />
            <span className="text-[#cc1f1f]">para o seu concurso.</span>
          </h2>
          <p className="mt-4 text-[#a0a0a0] max-w-2xl">
            Todos os planos incluem mentoria direta com Matheus Paiva. Filtre pela corporação do seu edital.
          </p>
        </div>

        {/* Featured card — Mentoria Individual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 relative rounded-sm overflow-hidden"
        >
          <div className="absolute inset-0 rounded-sm border-2 border-[#cc1f1f] animate-pulse pointer-events-none" style={{ boxShadow: "0 0 60px #cc1f1f40, inset 0 0 80px #cc1f1f10" }} />
          <div className="relative bg-gradient-to-br from-[#1a0a0a] via-[#140707] to-[#0d0d0d] border-2 border-[#cc1f1f] rounded-sm p-8 md:p-12">
            <div className="absolute -top-3 left-6 bg-[#cc1f1f] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm font-mono flex items-center gap-1.5">
              <Lightning size={12} weight="fill" /> Mais procurado
            </div>
            <div className="absolute top-6 right-6 hidden md:inline-flex text-[9px] font-mono uppercase tracking-[0.25em] text-[#cc1f1f] border border-[#cc1f1f]/60 px-2 py-1">
              Carro-Chefe
            </div>

            <div className="grid lg:grid-cols-[1.7fr_1fr] gap-8 lg:gap-12 items-center mt-4">
              <div>
                <h3 className="font-display font-extrabold text-3xl md:text-5xl uppercase text-white tracking-tight leading-[0.95]">
                  Mentoria Individual<br />
                  <span className="text-[#cc1f1f]">Até a Prova</span>
                </h3>
                <p className="mt-5 text-[#cfcfcf] leading-relaxed">
                  Acompanhamento direto com Matheus Paiva via WhatsApp. Cronograma montado para o SEU edital. Correção de simulados toda semana. Suporte completo até o dia da prova. Sem curso atrelado — ideal para quem já tem material.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Estratégia montada para o SEU edital específico",
                    "Acesso direto ao mentor via WhatsApp — sem intermediários",
                    "Correção de simulados semanais com feedback real",
                    "Suporte até o dia da prova, sem exceção",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-white">
                      <CheckCircle size={18} weight="fill" className="text-[#cc1f1f] shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:border-l lg:border-[#cc1f1f]/30 lg:pl-10 flex flex-col items-start lg:items-center text-left lg:text-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono text-[#a0a0a0]">R$</span>
                  <span className="font-display font-extrabold text-7xl text-white leading-none">497</span>
                </div>
                <div className="mt-2 text-xs font-mono uppercase tracking-widest text-[#a0a0a0]">
                  ou 12x de R$ 49,70 no cartão
                </div>
                <a
                  href={MENTORIA_URL}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-6 w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm transition-all active:scale-[0.98] shadow-lg shadow-[#cc1f1f]/40"
                >
                  Garantir minha mentoria <ArrowRight size={16} weight="bold" />
                </a>
                <p className="mt-3 text-[11px] text-[#909090] max-w-[28ch]">
                  A mesma mentoria que aprovou mais de 300 candidatos em 3 meses ou menos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mt-16 flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#606060] mr-2">Corporação:</span>
          {corps.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-sm border transition-all ${
                  active
                    ? "bg-[#cc1f1f] border-[#cc1f1f] text-white"
                    : "border-[#2a2a2a] text-[#a0a0a0] hover:border-[#cc1f1f] hover:text-white"
                }`}
              >
                {c === "ALL" ? "Todos" : c}
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <motion.div
              key={p.corp}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#111111] border border-[#2a2a2a] hover:border-[#cc1f1f]/60 rounded-sm p-7 flex flex-col transition-all hover:scale-[1.01]"
            >
              <span className="inline-block self-start text-[10px] font-bold uppercase tracking-[0.2em] text-[#cc1f1f] bg-[#cc1f1f]/10 border border-[#cc1f1f]/40 px-2.5 py-1 rounded-sm font-mono">
                {p.corp}
              </span>
              <h3 className="mt-5 font-display font-bold text-2xl md:text-3xl uppercase text-white tracking-tight leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-[#a0a0a0] leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-white">
                <Target size={14} weight="fill" className="text-[#cc1f1f]" />
                Mentoria direta com Matheus Paiva
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-mono text-[#a0a0a0]">R$</span>
                    <span className="font-display font-extrabold text-4xl text-white leading-none">{p.price}</span>
                  </div>
                  <div className="mt-1 text-[11px] font-mono uppercase tracking-wider text-[#606060]">{p.installments}</div>
                </div>
                <a
                  href={p.url}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-semibold uppercase tracking-wider text-xs px-5 py-3 rounded-sm transition-all active:scale-[0.98]"
                >
                  Comprar agora <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const pillars = [
    { icon: Target, title: "Foco", desc: "Você sabe exatamente o que estudar cada dia." },
    { icon: ShieldCheck, title: "Disciplina", desc: "O cronograma elimina a indecisão." },
    { icon: TrendUp, title: "Resultado", desc: "60 dias para transformar esforço em aprovação." },
  ];
  return (
    <section id="missao" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: "radial-gradient(ellipse at bottom right, #cc1f1f20 0%, transparent 60%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ O método</span>
            <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-4xl md:text-6xl leading-[0.95]">
              Disciplina hoje.
              <br />
              Nome na <span className="text-[#cc1f1f]">PMAL</span>
              <br />
              amanhã.
            </h2>
          </div>
          <div>
            <p className="text-[#a0a0a0] leading-relaxed text-lg border-l-2 border-[#cc1f1f] pl-6">
              A maioria dos candidatos reprova não por falta de inteligência, mas por <span className="text-white">falta de direção</span>. Estudam tudo sem foco, desperdiçam tempo, chegam na prova sem estratégia.
            </p>
            <p className="mt-6 text-[#a0a0a0] leading-relaxed text-lg pl-6">
              O Alvo Policial resolve isso: um cronograma tático de 60 dias que te coloca nos trilhos do edital, do primeiro ao último dia de preparação.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-5">
                    <Icon size={24} weight="duotone" className="text-[#cc1f1f]" />
                    <div className="mt-4 font-display font-bold uppercase tracking-wider text-white text-lg">{p.title}</div>
                    <div className="mt-1 text-xs text-[#a0a0a0] leading-relaxed">{p.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Funciona mesmo em 60 dias?", a: "O cronograma foi construído para cobrir exatamente o que o CEBRASPE cobra. Em 60 dias você terá estudado o que realmente cai — não o edital inteiro." },
    { q: "Posso acessar no celular?", a: "Sim, a plataforma funciona em qualquer dispositivo. Mentoria gravada disponível 24h." },
    { q: "E se eu não passar na primeira tentativa?", a: "O método te ensina a estudar, não só para uma prova. Você sai com ferramentas para qualquer edital futuro." },
    { q: "Qual a diferença do Combo Premium para o Plano PMAL?", a: "O Plano PMAL é foco total em Alagoas (60 dias). O Combo Premium inclui PMAL, PMPE, PMBA, PM Premium e PC Premium — ideal para quem quer ter mais opções de aprovação." },
    { q: "Como falo com o Paiva?", a: "Direto pelo WhatsApp: (82) 9 9687-8311" },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-[#0d0d0d] border-y border-[#1f1f1f]">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        <div className="text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ FAQ</span>
          <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-4xl md:text-5xl">
            Perguntas <span className="text-[#cc1f1f]">táticas</span>
          </h2>
        </div>
        <div className="mt-12 divide-y divide-[#2a2a2a] border-y border-[#2a2a2a]">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#606060]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-semibold text-white group-hover:text-[#cc1f1f] transition-colors">{f.q}</span>
                  </span>
                  <CaretDown size={18} className={`text-[#cc1f1f] shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="overflow-hidden">
                    <p className="pb-6 pl-10 text-[#a0a0a0] leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTABand({ headline, sub, button = "Quero começar agora" }: { headline: string; sub?: string; button?: string }) {
  return (
    <section className="relative border-y border-[#cc1f1f]/30 bg-gradient-to-r from-[#0a0a0a] via-[#1a0707] to-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(#cc1f1f 1px, transparent 1px), linear-gradient(90deg, #cc1f1f 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#cc1f1f]">
            <Fire size={14} weight="fill" /> Vagas limitadas · turma em andamento
          </div>
          <h3 className="mt-2 font-display font-extrabold uppercase tracking-tight text-white text-2xl md:text-3xl leading-tight">
            {headline}
          </h3>
          {sub && <p className="mt-2 text-[#a0a0a0] text-sm max-w-2xl">{sub}</p>}
        </div>
        <a
          href={PLAN_PMAL_URL}
          target="_blank" rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-bold uppercase tracking-wider text-sm px-7 py-4 rounded-sm transition-all active:scale-[0.98] shadow-lg shadow-[#cc1f1f]/30"
        >
          {button} <ArrowRight size={16} weight="bold" />
        </a>
      </div>
    </section>
  );
}

function AboutPaiva() {
  return (
    <section id="paiva" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at left, #cc1f1f15 0%, transparent 55%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-md mx-auto lg:mx-0 w-full"
        >
          <div className="absolute -inset-2 border border-[#cc1f1f]/40" />
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#cc1f1f]" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#cc1f1f]" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#cc1f1f]" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#cc1f1f]" />
          <img
            src={paivaAsset.url}
            alt="Paiva — Instrutor Alvo Policial"
            className="relative w-full aspect-[3/4] object-cover grayscale contrast-[1.05] brightness-90"
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono uppercase tracking-widest text-[10px] text-white">
            <span className="bg-[#cc1f1f] px-2 py-1">Paiva</span>
            <span className="bg-black/70 px-2 py-1">Instrutor · PM</span>
          </div>
        </motion.div>

        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ Quem te treina</span>
          <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-4xl md:text-5xl leading-[0.95]">
            Paiva. <span className="text-[#cc1f1f]">Policial</span><br />que já trilhou
            <br />o caminho.
          </h2>
          <p className="mt-6 text-[#a0a0a0] leading-relaxed text-lg">
            Quem te ensina precisa ter andado pelo mesmo terreno. Paiva é policial militar, criou o método <span className="text-white font-semibold">Alvo Policial</span> depois de descobrir, na própria pele, o que separa o aprovado do reprovado: <span className="text-white">direção, método e disciplina</span>.
          </p>
          <p className="mt-4 text-[#a0a0a0] leading-relaxed">
            Hoje, centenas de alunos seguem o cronograma de 60 dias e chegam à prova sabendo exatamente o que cai, como revisar e como executar no dia D.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={PLAN_PMAL_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-semibold uppercase tracking-wider text-sm px-7 py-3.5 rounded-sm transition-all active:scale-[0.98]"
            >
              Treinar com o Paiva <ArrowRight size={14} weight="bold" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#cc1f1f] text-[#cc1f1f] hover:bg-[#cc1f1f] hover:text-white font-semibold uppercase tracking-wider text-sm px-7 py-3.5 rounded-sm transition-all"
            >
              <WhatsappLogo size={16} weight="fill" /> Falar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feedbacks() {
  const items = [
    { name: "Joelma Albuquerque", corp: "PMPE", detail: "Aprovada — 27ª colocada", quote: "Cronograma cirúrgico e correção de simulado toda semana. Saí do zero e fui pra farda em sete meses." },
    { name: "Raimundo Leal", corp: "PMSP", detail: "Aprovado PMSP — chamada inicial", quote: "Eu já tinha tentado outros cursos, mas o Paiva foi o único que me mostrou o que a banca realmente cobra. Passei na primeira chamada." },
    { name: "Carlos Henrique", corp: "PMAL", detail: "Aprovado — 3º lugar", quote: "Com o plano do Paiva eu virei o jogo. Parei de estudar solto e me dediquei ao que era essencial. 3 meses depois estava no ranking." },
    { name: "Fernanda Souza", corp: "PMBA", detail: "Aprovada", quote: "A mentoria individual mudou tudo. Ele via onde eu errava e corrigia na raiz. Passei sem precisar repetir o ciclo de estudos." },
    { name: "Diego Mendonça", corp: "PMPE", detail: "Aprovado", quote: "Três meses de estudo focado com a mentoria do Matheus. Resultado: aprovado com sobra. O método funciona de verdade." },
    { name: "Larissa Mota", corp: "PMAL", detail: "Aprovada — chamada inicial", quote: "Nunca pensei que passaria na primeira tentativa. O diferencial foi ter alguém corrigindo meus simulados toda semana e ajustando a rota." },
  ];
  return (
    <section id="feedbacks" className="py-24 md:py-32 bg-[#0d0d0d] border-y border-[#1f1f1f] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, #cc1f1f15 0%, transparent 55%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ Aprovados</span>
          <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-4xl md:text-6xl leading-[0.9]">
            Eles estudaram.<br />
            Foram aprovados.<br />
            <span className="text-[#cc1f1f]">Vestiram a farda.</span>
          </h2>
          <p className="mt-6 text-[#a0a0a0] leading-relaxed text-lg">
            Feedbacks reais de alunos que passaram com a metodologia do Matheus Paiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="bg-[#1a1a1a] border border-white/10 rounded-sm p-6 flex flex-col hover:border-[#cc1f1f]/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#7a1010] flex items-center justify-center text-white font-display font-bold text-lg uppercase shrink-0">
                  {it.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold uppercase tracking-tight text-white text-sm">{it.name}</div>
                  <div className="mt-1 flex items-center gap-2 flex-wrap">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white bg-[#cc1f1f] px-2 py-0.5 rounded-sm font-mono">{it.corp}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#a0a0a0]">{it.detail}</span>
                  </div>
                </div>
              </div>
              <Quotes size={22} weight="fill" className="text-[#cc1f1f] mt-5" />
              <blockquote className="mt-2 text-[15px] text-white/80 leading-relaxed flex-1">
                "{it.quote}"
              </blockquote>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={13} weight="fill" className="text-[#cc1f1f]" />
                ))}
              </div>
            </motion.figure>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={MENTORIA_URL}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm transition-all active:scale-[0.98] shadow-lg shadow-[#cc1f1f]/30"
          >
            Eu também quero vestir a farda <ArrowRight size={16} weight="bold" />
          </a>
          <p className="mt-3 text-xs font-mono uppercase tracking-widest text-[#606060]">
            Acesso imediato · pagamento seguro
          </p>
        </div>
      </div>
    </section>
  );
}

function HeroCTABand() {
  return (
    <section className="relative bg-[#cc1f1f] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="font-display font-extrabold uppercase tracking-tight text-white text-3xl md:text-5xl leading-[0.95]">
            3 meses. Método certo.<br className="hidden md:block" /> Farda garantida.
          </h3>
          <p className="mt-3 text-white/85 text-base md:text-lg max-w-2xl">
            Mais de 300 candidatos aprovados com a mentoria direta do Matheus Paiva. Você pode ser o próximo.
          </p>
        </div>
        <a
          href={MENTORIA_URL}
          target="_blank" rel="noopener noreferrer"
          className="shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f5f5f5] text-[#cc1f1f] font-bold uppercase tracking-wider text-sm px-7 py-4 rounded-sm transition-all active:scale-[0.98] shadow-xl"
        >
          Quero minha vaga na mentoria <ArrowRight size={16} weight="bold" />
        </a>
      </div>
    </section>
  );
}

function UrgencyCTA() {
  const bullets = [
    "Estudo em 3 meses com cronograma do seu edital",
    "Correção de simulado toda semana — sem enrolação",
    "Acesso direto ao Matheus Paiva via WhatsApp",
    "Suporte até o dia da prova",
  ];
  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <div className="relative bg-[#111111] border border-[#cc1f1f]/40 rounded-sm p-8 md:p-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, #cc1f1f25 0%, transparent 60%)" }} />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#cc1f1f] border border-[#cc1f1f]/60 bg-[#cc1f1f]/10 px-3 py-1.5 rounded-sm font-mono">
              <Fire size={12} weight="fill" /> Vagas limitadas
            </span>
            <h2 className="mt-5 font-display font-extrabold uppercase tracking-tight text-white text-3xl md:text-5xl leading-[0.95] max-w-3xl">
              Não deixa o próximo concurso<br /><span className="text-[#cc1f1f]">passar em branco.</span>
            </h2>
            <p className="mt-5 text-[#a0a0a0] leading-relaxed text-lg max-w-2xl">
              A mentoria do Matheus Paiva é individual. Ele acompanha cada aluno de perto — por isso as vagas são limitadas. Se o edital saiu ou está prestes a sair, o momento de agir é agora.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white">
                  <Target size={18} weight="fill" className="text-[#cc1f1f] shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-mono text-[#a0a0a0]">R$</span>
                  <span className="font-display font-extrabold text-6xl text-white leading-none">497</span>
                </div>
                <div className="mt-1 text-xs font-mono uppercase tracking-widest text-[#a0a0a0]">
                  ou 12x de R$ 49,70
                </div>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <a
                  href={MENTORIA_URL}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-bold uppercase tracking-wider text-base px-8 py-5 rounded-sm transition-all active:scale-[0.98] shadow-xl shadow-[#cc1f1f]/40"
                >
                  Garantir minha mentoria agora <ArrowRight size={18} weight="bold" />
                </a>
                <p className="mt-3 text-xs text-[#909090]">
                  Acesso imediato após a confirmação do pagamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #cc1f1f25 0%, transparent 60%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 text-center">
        <Crosshair size={56} weight="thin" className="text-[#cc1f1f] mx-auto" />
        <h2 className="mt-8 font-display font-extrabold uppercase tracking-tight text-white text-5xl md:text-7xl leading-[0.95]">
          Disciplina hoje.
          <br />
          <span className="text-[#cc1f1f]">Nome na PMAL amanhã.</span>
        </h2>
        <p className="mt-8 text-[#a0a0a0] max-w-xl mx-auto text-lg">
          O edital não espera. Sua aprovação começa agora.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PLAN_PMAL_URL}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-semibold uppercase tracking-wider text-sm px-8 py-4 rounded-sm transition-all active:scale-[0.98]"
          >
            Garantir minha vaga <ArrowRight size={16} weight="bold" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#cc1f1f] text-[#cc1f1f] hover:bg-[#cc1f1f] hover:text-white font-semibold uppercase tracking-wider text-sm px-8 py-4 rounded-sm transition-all"
          >
            <WhatsappLogo size={16} weight="fill" /> Falar com o Paiva
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-[#a0a0a0] text-sm max-w-xs leading-relaxed">
            60 dias para transformar seus esforços em aprovação.
          </p>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#606060] font-mono">Navegação</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#metodo" className="text-[#a0a0a0] hover:text-white">Método</a></li>
            <li><a href="#planos" className="text-[#a0a0a0] hover:text-white">Planos</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] hover:text-white">WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#606060] font-mono">Contato</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#cc1f1f] flex items-center gap-2">
                <WhatsappLogo size={16} weight="fill" /> (82) 9 9687-8311
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#cc1f1f] flex items-center gap-2">
                <InstagramLogo size={16} weight="fill" /> @paiva.alvopolicial
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-6 text-xs text-[#606060] flex flex-col md:flex-row justify-between gap-2 font-mono uppercase tracking-widest">
          <span>© 2026 Alvo Policial. Todos os direitos reservados.</span>
          <span>Foco · Disciplina · Resultado</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#1ebe5d] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-black/40 transition-all active:scale-95"
      aria-label="WhatsApp"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}

function Index() {
  return (
    <div className="grain bg-[#0a0a0a] text-[#f5f5f5] min-h-[100dvh]">
      <Navbar />
      <main>
        <Hero />
        <MetricsStrip />
        <Deliverables />
        <CTABand
          headline="Pare de estudar no escuro. Comece hoje com cronograma pronto."
          sub="60 dias para virar o jogo. Cada dia que passa é um dia a menos até a prova."
          button="Garantir minha vaga"
        />
        <Pricing />
        <Feedbacks />
        <Mission />
        <AboutPaiva />
        <CTABand
          headline="O edital não espera. Seu concorrente também não."
          sub="Enquanto você decide, outro candidato já está estudando o que cai. Entre no Alvo Policial agora."
          button="Quero entrar agora"
        />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}
