import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FeedbackMasonry } from "@/components/feedback-masonry";
import { EASE_OUT, fadeUp, scaleIn, slideInLeft, slideInRight, stagger, viewport } from "@/lib/motion";
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
  Fire,
  ChatsCircle,
  CheckCircle,
} from "@phosphor-icons/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alvo Policial — Seja aprovado com o Paiva" },
      { name: "description", content: "Seja aprovado no concurso dos seus sonhos com o Paiva. Policial militar, aprovado aos 17, hoje ajuda milhares de candidatos com direção, material de qualidade e mentoria no WhatsApp." },
      { property: "og:title", content: "Alvo Policial — Seja aprovado com o Paiva" },
      { property: "og:description", content: "Concurso público exige direção e material de qualidade. O Paiva entrega os dois — cursos, simulados, bancos de questões e mentoria até a prova." },
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
const PLAN_PMAL_URL = PREMIUM_URL;
const INSTAGRAM_URL = "https://www.instagram.com/paiva.alvopolicial/";

const LOGO_SRC = "/logo.png";

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={LOGO_SRC}
        alt="Alvo Policial"
        width={160}
        height={40}
        fetchPriority="high"
        decoding="async"
        className="h-8 sm:h-9 md:h-10 w-auto"
      />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Método", href: "#metodo" },
    { label: "Planos", href: "#planos" },
    { label: "Feedbacks", href: "#feedbacks" },
    { label: "Paiva", href: "#paiva" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-40 backdrop-blur-xl border-b transition-all duration-500 ${scrolled ? "navbar-scrolled" : "bg-[#0a0a0a]/80 border-[#2a2a2a]"}`}>
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
          className="hidden sm:inline-flex items-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-semibold uppercase tracking-wider text-[10px] sm:text-xs px-3 sm:px-5 py-2.5 min-h-[44px] rounded-sm transition-all active:scale-[0.98]"
        >
          Ver planos <ArrowRight size={14} weight="bold" />
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
            Ver planos e mentoria
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section id="top" className="section-reveal relative min-h-[100dvh] pt-16 overflow-hidden pb-8 sm:pb-12">
      {/* Red glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top left, #cc1f1f18 0%, transparent 55%), radial-gradient(ellipse at bottom right, #cc1f1f10 0%, transparent 50%)" }} />
      {/* Tactical grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 pt-12 sm:pt-20 md:pt-28 grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-12 items-center">
        <motion.div initial="hidden" animate="show" variants={stagger(0.11)}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-[#cc1f1f]/40 bg-[#cc1f1f]/5 px-3 py-1.5 rounded-sm mb-6 sm:mb-8">
            <Target size={14} weight="fill" className="text-[#cc1f1f]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#f5f5f5]">Concursos públicos · Mentoria · Cursos</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display font-extrabold uppercase tracking-tight text-white leading-[0.92] text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Seja aprovado no concurso
            <br />
            dos seus sonhos
            <br />
            <span className="text-[#cc1f1f]">ainda esse ano, com o Paiva.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#a0a0a0] max-w-[55ch] leading-relaxed">
            <span className="text-white font-medium">Policial militar</span>, aprovado aos 17 anos — já passou pelo que você está passando. Hoje o Paiva ajuda <span className="text-white font-medium">milhares de candidatos</span> a conquistarem o sonho da aprovação com direção, material de qualidade e mentoria no WhatsApp.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-3 text-sm sm:text-base text-[#606060] max-w-[55ch] leading-relaxed">
            Concurso público exige direção e material de qualidade — é exatamente isso que ele entrega. Cronograma do seu edital, correção semanal e suporte até a prova.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#planos"
              className="cta-pulse inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-semibold uppercase tracking-wider text-sm px-8 py-4 min-h-[48px] rounded-sm transition-all active:scale-[0.98]"
            >
              Ver planos e mentoria <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#cc1f1f] text-[#cc1f1f] hover:bg-[#cc1f1f] hover:text-white font-semibold uppercase tracking-wider text-sm px-8 py-4 min-h-[48px] rounded-sm transition-all"
            >
              <WhatsappLogo size={16} weight="fill" /> Falar com o Paiva
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 sm:mt-12 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-3 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#606060]">
            <span className="flex items-center gap-2"><Target size={14} className="text-[#cc1f1f]" weight="fill" /> Concursos públicos</span>
            <span className="hidden sm:block h-3 w-px bg-[#2a2a2a]" />
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#cc1f1f]" weight="fill" /> Aprovado aos 17</span>
            <span className="hidden sm:block h-3 w-px bg-[#2a2a2a]" />
            <span className="flex items-center gap-2"><TrendUp size={14} className="text-[#cc1f1f]" weight="fill" /> Milhares de alunos</span>
          </motion.div>
        </motion.div>

        {/* Right visual — crosshair */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.88 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: EASE_OUT }}
          className="hidden lg:block relative aspect-square"
        >
          <div className="crosshair-ring absolute inset-0 rounded-full border border-[#cc1f1f]/30" />
          <div className="crosshair-ring absolute inset-8 rounded-full border border-[#cc1f1f]/50" style={{ animationDelay: "0.5s" }} />
          <div className="absolute inset-20 rounded-full border-2 border-[#cc1f1f]/80" />
          <div className="absolute inset-0 flex items-center justify-center crosshair-spin-slow">
            <Crosshair size={120} weight="thin" className="text-[#cc1f1f]" />
          </div>
          {/* corner brackets */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#cc1f1f]" />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#cc1f1f]" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#cc1f1f]" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#cc1f1f]" />
          <div className="absolute top-1/2 -left-2 right-auto text-xs font-mono text-[#cc1f1f]">—</div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#606060]">
            PM · Concursos públicos
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricsStrip() {
  const items = [
    { n: "17", label: "Anos — passou no concurso" },
    { n: "Milhares", label: "De alunos ajudados" },
    { n: "5+", label: "Planos da aprovação" },
    { n: "24h", label: "Suporte no WhatsApp" },
  ];
  return (
    <section className="section-reveal border-y border-[#1f1f1f] bg-[#0d0d0d]">
      <div className="max-w-[1280px] mx-auto px-2 sm:px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1f1f1f]">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewport}
            transition={{ delay: i * 0.08, duration: 0.55, ease: EASE_OUT }}
            className="px-3 sm:px-4 md:px-8 py-6 sm:py-8 text-center"
          >
            <div className="font-mono font-semibold text-2xl sm:text-3xl md:text-4xl text-white">{it.n}</div>
            <div className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#606060] leading-snug">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Deliverables() {
  const items = [
    { icon: Calendar, title: "Cronograma Personalizado", desc: "Montado para o SEU edital. Você abre e sabe exatamente o que estudar naquele dia." },
    { icon: Brain, title: "Método de Estudo Prático", desc: "Como estudar de verdade — não decorar, internalizar." },
    { icon: ArrowsClockwise, title: "Como Revisar", desc: "Sistema de revisão espaçada que fixa o conteúdo na memória de longo prazo." },
    { icon: ListChecks, title: "Como Fazer Questões", desc: "Treino direcionado à banca. Você aprende a interpretar antes de responder." },
    { icon: Strategy, title: "Estratégia de Prova", desc: "O que fazer no dia D: ordem, tempo, gestão emocional." },
    { icon: MonitorPlay, title: "Plataforma com Mentoria Gravada", desc: "Mentoria do Paiva disponível 24h, em qualquer dispositivo." },
  ];
  return (
    <section id="metodo" className="section-reveal py-16 sm:py-24 md:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ Você vai receber</span>
            <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-3xl sm:text-4xl md:text-5xl leading-[0.95]">
              Mentoria + material
              <br />
              <span className="text-[#cc1f1f]">de qualidade.</span>
            </h2>
            <p className="mt-6 text-[#a0a0a0] max-w-[40ch] leading-relaxed text-sm sm:text-base">
              Concurso público exige <span className="text-white">direção</span> e <span className="text-white">material de qualidade</span> — cursos, bancos de questões, simulados e mentoria com o Paiva no seu WhatsApp.
            </p>

            <div className="mt-8 border-l-2 border-[#cc1f1f] bg-[#cc1f1f]/5 px-5 py-4">
              <div className="flex items-start gap-3">
                <Warning size={20} weight="fill" className="text-[#cc1f1f] shrink-0 mt-0.5" />
                <p className="text-sm text-white leading-relaxed">
                  O Paiva passou no concurso aos 17 anos. Hoje ajuda milhares a passar pelo <span className="font-semibold">mesmo caminho</span> — com o que faltava na preparação dele.
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
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ delay: i * 0.07, duration: 0.55, ease: EASE_OUT }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-5 py-6 border-t border-[#2a2a2a] first:border-t-0 transition-colors hover:border-[#cc1f1f]/20"
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

type ProductCorp = "PMAL" | "PMPE" | "PMBA" | "PMSP";
type Product = {
  corp: ProductCorp;
  title: string;
  desc: string;
  fullPrice: string;
  installment: string;
  url: string;
};

const PM_PRODUCTS: Product[] = [
  { corp: "PMAL", title: "Curso Completo — PMAL", desc: "Curso completo para a Polícia Militar de Alagoas com mentoria direta incluída.", fullPrice: "597", installment: "12x de R$ 59,70", url: PMAL_URL },
  { corp: "PMPE", title: "Curso Completo — PMPE", desc: "Curso completo para a Polícia Militar de Pernambuco com mentoria direta incluída.", fullPrice: "697", installment: "12x de R$ 69,70", url: PMPE_URL },
  { corp: "PMBA", title: "Curso Completo — PMBA", desc: "Curso completo para a Polícia Militar da Bahia com mentoria direta incluída.", fullPrice: "697", installment: "12x de R$ 69,70", url: PMBA_URL },
  { corp: "PMSP", title: "Curso Completo — PMSP", desc: "Curso completo para a Polícia Militar de São Paulo com mentoria direta incluída.", fullPrice: "697", installment: "12x de R$ 69,70", url: PMSP_URL },
];

function PriceDisplay({ installment, fullPrice }: { installment: string; fullPrice: string }) {
  return (
    <div>
      <div className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-none tracking-tight">
        {installment}
      </div>
      <div className="mt-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#606060]">
        ou R$ {fullPrice} à vista
      </div>
    </div>
  );
}

function Pricing() {
  const [filter, setFilter] = useState<ProductCorp | "ALL">("ALL");
  const filtered = filter === "ALL" ? PM_PRODUCTS : PM_PRODUCTS.filter((p) => p.corp === filter);
  const corps: Array<ProductCorp | "ALL"> = ["ALL", "PMAL", "PMPE", "PMBA", "PMSP"];

  return (
    <section id="planos" className="section-reveal py-16 sm:py-24 md:py-32 bg-[#0d0d0d] border-y border-[#1f1f1f] relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center top, #cc1f1f15 0%, transparent 50%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ Planos da aprovação</span>
          <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-3xl sm:text-4xl md:text-5xl leading-[0.95]">
            Planos da aprovação.<br />
            <span className="text-[#cc1f1f]">Escolha o seu.</span>
          </h2>
          <p className="mt-4 text-[#a0a0a0] max-w-2xl text-sm sm:text-base">
            Concurso público exige direção e material de qualidade. Do plano mais completo ao curso da sua PM — todos com mentoria do Paiva no WhatsApp.
          </p>
        </div>

        {/* Featured card — Premium */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mt-12 relative rounded-sm overflow-hidden"
        >
          <div className="absolute inset-0 rounded-sm border-2 border-[#cc1f1f] animate-pulse pointer-events-none" style={{ boxShadow: "0 0 60px #cc1f1f40, inset 0 0 80px #cc1f1f10" }} />
          <div className="relative bg-gradient-to-br from-[#1a0a0a] via-[#140707] to-[#0d0d0d] border-2 border-[#cc1f1f] rounded-sm p-6 sm:p-8 md:p-12">
            <div className="absolute -top-3 left-6 bg-[#cc1f1f] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm font-mono flex items-center gap-1.5">
              <Lightning size={12} weight="fill" /> Mais completo
            </div>
            <div className="absolute top-6 right-6 hidden md:inline-flex text-[9px] font-mono uppercase tracking-[0.25em] text-[#cc1f1f] border border-[#cc1f1f]/60 px-2 py-1">
              Premium
            </div>

            <div className="grid lg:grid-cols-[1.7fr_1fr] gap-8 lg:gap-12 items-center mt-4">
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-5xl uppercase text-white tracking-tight leading-[0.95]">
                  Plano Premium<br />
                  <span className="text-[#cc1f1f]">Todas as PMs</span>
                </h3>
                <p className="mt-5 text-[#cfcfcf] leading-relaxed">
                  O plano mais completo do Alvo Policial. Tudo que você precisa para ser aprovado: cursos de todas as PMs do Brasil, bancos de questões, simulados e mentoria direta com o Paiva no WhatsApp.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Todos os cursos de Polícia Militar do Brasil",
                    "Bancos de questões para treino direcionado",
                    "Simulados com correção e feedback semanal",
                    "Mentoria direta com o Paiva até a prova",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-white">
                      <CheckCircle size={18} weight="fill" className="text-[#cc1f1f] shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:border-l lg:border-[#cc1f1f]/30 lg:pl-10 flex flex-col items-start lg:items-center text-left lg:text-center">
                <PriceDisplay installment="12x de R$ 79,70" fullPrice="797" />
                <a
                  href={PREMIUM_URL}
                  target="_blank" rel="noopener noreferrer"
                  className="cta-pulse mt-6 w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#cc1f1f]/40"
                >
                  Garantir o Premium <ArrowRight size={16} weight="bold" />
                </a>
                <p className="mt-3 text-[11px] text-[#909090] max-w-[28ch]">
                  Cursos + bancos de questões + simulados + mentoria — tudo em um plano.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PM courses */}
        <div className="mt-12 sm:mt-16">
          <h3 className="font-display font-bold uppercase tracking-tight text-white text-xl sm:text-2xl">
            Cursos por corporação
          </h3>
          <p className="mt-2 text-sm text-[#a0a0a0]">Curso completo da sua PM com mentoria direta incluída.</p>
        </div>

        <div className="mt-6 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap pb-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#606060] mr-1 sm:mr-2 shrink-0">Corporação:</span>
            {corps.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`text-xs font-semibold uppercase tracking-wider px-4 py-2.5 min-h-[44px] rounded-sm border transition-all shrink-0 ${
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
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <motion.div
              key={p.corp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-[#111111] border border-[#2a2a2a] hover:border-[#cc1f1f]/60 rounded-sm p-5 sm:p-7 flex flex-col transition-[border-color,box-shadow] hover:shadow-[0_12px_40px_rgba(204,31,31,0.08)]"
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
                Mentoria direta com o Paiva inclusa
              </div>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <PriceDisplay installment={p.installment} fullPrice={p.fullPrice} />
                <a
                  href={p.url}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-semibold uppercase tracking-wider text-xs px-5 py-3.5 min-h-[44px] rounded-sm transition-all active:scale-[0.98]"
                >
                  Comprar agora <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentoria Individual — secondary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="mt-10 bg-[#111111] border border-[#2a2a2a] hover:border-[#cc1f1f]/40 rounded-sm p-6 sm:p-8"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#606060] bg-[#1a1a1a] border border-[#2a2a2a] px-2.5 py-1 rounded-sm font-mono">
                Mentoria individual
              </span>
              <h3 className="mt-4 font-display font-bold text-xl sm:text-2xl uppercase text-white tracking-tight">
                Já tem material? Só precisa de direção.
              </h3>
              <p className="mt-3 text-sm text-[#a0a0a0] leading-relaxed max-w-2xl">
                Para qualquer concurso público. Acompanhamento direto com o Paiva no WhatsApp, cronograma do seu edital, correção semanal e suporte até a prova.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-4 shrink-0">
              <PriceDisplay installment="12x de R$ 49,70" fullPrice="497" />
              <a
                href={MENTORIA_URL}
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#cc1f1f] text-[#cc1f1f] hover:bg-[#cc1f1f] hover:text-white font-semibold uppercase tracking-wider text-xs px-5 py-3.5 min-h-[44px] rounded-sm transition-all active:scale-[0.98]"
              >
                Garantir mentoria <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-xs sm:text-sm text-[#606060] font-mono uppercase tracking-widest">
          Novos planos serão adicionados · acompanhe pelo{" "}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#cc1f1f] hover:underline">Instagram</a>
        </p>
      </div>
    </section>
  );
}

function Mission() {
  const pillars = [
    { icon: Target, title: "Foco", desc: "Você sabe exatamente o que estudar cada dia." },
    { icon: ShieldCheck, title: "Disciplina", desc: "O cronograma elimina a indecisão." },
    { icon: TrendUp, title: "Resultado", desc: "Estratégia que transforma esforço em evolução nos simulados." },
  ];
  return (
    <section id="missao" className="section-reveal py-16 sm:py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: "radial-gradient(ellipse at bottom right, #cc1f1f20 0%, transparent 60%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ O método</span>
            <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-3xl sm:text-4xl md:text-6xl leading-[0.95]">
              Estudar sozinho
              <br />
              custa <span className="text-[#cc1f1f]">caro.</span>
            </h2>
          </div>
          <div>
            <p className="text-[#a0a0a0] leading-relaxed text-base sm:text-lg border-l-2 border-[#cc1f1f] pl-4 sm:pl-6">
              Concurso público exige <span className="text-white">direção</span> e <span className="text-white">material de qualidade</span>. A maioria reprova não por falta de inteligência, mas por estudar sem cronograma, sem correção de simulado e sem ninguém ajustando a rota.
            </p>
            <p className="mt-6 text-[#a0a0a0] leading-relaxed text-base sm:text-lg pl-4 sm:pl-6">
              O Paiva passou no concurso aos 17 anos e hoje ajuda <span className="text-white">milhares de candidatos</span> a conquistarem o sonho da aprovação — com o que ele mesmo precisou na preparação.
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
    { q: "Qual a diferença entre os planos?", a: "O Premium é o mais completo: todos os cursos de PM, bancos de questões, simulados e mentoria. Os cursos por corporação (PMAL, PMPE, PMBA, PMSP) incluem curso completo + mentoria direta. A mentoria individual é para quem já tem material e só precisa de direção." },
    { q: "Posso estudar pelo celular?", a: "Sim. A plataforma funciona em qualquer dispositivo e o acompanhamento com o Paiva é direto no WhatsApp — onde a maioria dos alunos já interage." },
    { q: "Qual plano é ideal para mim?", a: "Quer tudo em um só lugar? Vá de Premium. Quer focar em uma PM específica? Escolha o curso da sua corporação. Já tem material de estudo? A mentoria individual serve para qualquer concurso público." },
    { q: "Vão ter planos para outras carreiras?", a: "Sim. Novos planos entram nos Planos da Aprovação conforme novos editais forem abrindo. A mentoria individual já atende qualquer concurso público." },
    { q: "O Paiva acompanha de perto mesmo?", a: "Sim. Policial militar, aprovado aos 17 anos — ele já passou pelo que você está passando. A mentoria é individual, com correção de simulado toda semana e suporte direto até o dia da prova." },
    { q: "Como falo com o Paiva?", a: "Direto pelo WhatsApp: (82) 9 9687-8311" },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="section-reveal py-16 sm:py-24 md:py-32 bg-[#0d0d0d] border-y border-[#1f1f1f]">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ FAQ</span>
          <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-4xl md:text-5xl">
            Perguntas <span className="text-[#cc1f1f]">táticas</span>
          </h2>
        </motion.div>
        <div className="mt-12 divide-y divide-[#2a2a2a] border-y border-[#2a2a2a]">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 py-5 sm:py-6 text-left group min-h-[56px]"
                >
                  <span className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="font-mono text-xs text-[#606060] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-semibold text-sm sm:text-base text-white group-hover:text-[#cc1f1f] transition-colors">{f.q}</span>
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
    <section id="paiva" className="section-reveal py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at left, #cc1f1f15 0%, transparent 55%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative max-w-md mx-auto lg:mx-0 w-full"
        >
          <div className="absolute -inset-2 border border-[#cc1f1f]/40" />
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#cc1f1f]" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#cc1f1f]" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#cc1f1f]" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#cc1f1f]" />
          <img
            src="/paiva.jpeg"
            alt="Paiva — Instrutor Alvo Policial"
            loading="lazy"
            decoding="async"
            className="relative w-full aspect-[3/4] object-cover object-top contrast-[1.05]"
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono uppercase tracking-widest text-[10px] text-white">
            <span className="bg-[#cc1f1f] px-2 py-1">Paiva</span>
            <span className="bg-black/70 px-2 py-1">Mentor · Concurso público</span>
          </div>
        </motion.div>

        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ Quem te treina</span>
          <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-3xl sm:text-4xl md:text-5xl leading-[0.95]">
            Paiva.<br /><span className="text-[#cc1f1f]">Policial militar.</span><br />Seu mentor.
          </h2>
          <p className="mt-6 text-[#a0a0a0] leading-relaxed text-base sm:text-lg">
            Aprovado no concurso aos <span className="text-white font-semibold">17 anos</span> — o Paiva já passou pelo que você está passando. Hoje, como policial militar, ajuda <span className="text-white font-semibold">milhares de candidatos</span> a conquistarem o sonho da aprovação com o que faltava na preparação dele: <span className="text-white">direção, material de qualidade e correção de rota</span>.
          </p>
          <p className="mt-4 text-[#a0a0a0] leading-relaxed text-sm sm:text-base">
            Cursos, bancos de questões, simulados e mentoria direta no WhatsApp — para você ser aprovado no concurso dos seus sonhos ainda esse ano.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-semibold uppercase tracking-wider text-sm px-7 py-3.5 min-h-[48px] rounded-sm transition-all active:scale-[0.98]"
            >
              Ver planos com o Paiva <ArrowRight size={14} weight="bold" />
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

const FEEDBACK_SCREENSHOTS = [
  { src: "/feedbacks/feedback-2.png", alt: "Aluno relata 99 acertos em simulado de 103 questões" },
  { src: "/feedbacks/feedback-5.png", alt: "Aluno relata melhora na memorização com as dicas da mentoria" },
  { src: "/feedbacks/feedback-6.png", alt: "Aluno comemora 84 pontos líquidos no simulado" },
  { src: "/feedbacks/feedback-1.png", alt: "Aluno relata resultados melhores com o acompanhamento" },
  { src: "/feedbacks/feedback-3.png", alt: "Aluno relata 81 pontos seguindo o cronograma da mentoria" },
  { src: "/feedbacks/feedback-4.png", alt: "Aluno agradece o Paiva pelo método de estudo" },
];

function Feedbacks() {
  return (
    <section id="feedbacks" className="section-reveal py-16 sm:py-24 md:py-32 bg-[#0d0d0d] border-y border-[#1f1f1f] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, #cc1f1f15 0%, transparent 55%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start mb-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={slideInLeft}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cc1f1f] font-mono">⊕ Na prática</span>
            <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-white text-3xl sm:text-4xl md:text-6xl leading-[0.9]">
              O que os alunos<br />
              mandam no<br />
              <span className="text-[#cc1f1f]">WhatsApp.</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={slideInRight}
          >
            <p className="text-[#a0a0a0] leading-relaxed text-lg border-l-2 border-[#cc1f1f] pl-6">
              Prints reais de quem já está na mentoria. Sem roteiro, sem depoimento fabricado — só o que chega no dia a dia do acompanhamento.
            </p>
            <div className="mt-6 flex items-center gap-3 pl-6">
              <ChatsCircle size={22} weight="duotone" className="text-[#cc1f1f] shrink-0" />
              <p className="text-sm text-[#606060] leading-relaxed">
                Clique em qualquer print para ampliar e ler a conversa completa.
              </p>
            </div>
          </motion.div>
        </div>

        <FeedbackMasonry shots={FEEDBACK_SCREENSHOTS} />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[#606060]">
          <span className="flex items-center gap-2"><WhatsappLogo size={14} weight="fill" className="text-[#25D366]" /> Conversas reais</span>
          <span className="hidden sm:block h-3 w-px bg-[#2a2a2a]" />
          <span className="flex items-center gap-2"><ShieldCheck size={14} weight="fill" className="text-[#cc1f1f]" /> Mentoria individual</span>
          <span className="hidden sm:block h-3 w-px bg-[#2a2a2a]" />
          <span className="flex items-center gap-2"><Target size={14} weight="fill" className="text-[#cc1f1f]" /> Feedback semanal</span>
        </div>

        <div className="mt-14 text-center">
          <a
            href={MENTORIA_URL}
            target="_blank" rel="noopener noreferrer"
            className="cta-pulse inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#cc1f1f]/30"
          >
            Quero esse acompanhamento <ArrowRight size={16} weight="bold" />
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
          <h3 className="font-display font-extrabold uppercase tracking-tight text-white text-2xl sm:text-3xl md:text-5xl leading-[0.95] text-balance">
            Concurso público exige direção<br className="hidden sm:block" /> e material de qualidade.
          </h3>
          <p className="mt-3 text-white/85 text-sm sm:text-base md:text-lg max-w-2xl">
            O Paiva entrega os dois — cursos, simulados, bancos de questões e mentoria até a prova.
          </p>
        </div>
        <a
          href="#planos"
          className="shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f5f5f5] text-[#cc1f1f] font-bold uppercase tracking-wider text-sm px-7 py-4 min-h-[48px] rounded-sm transition-all active:scale-[0.98] shadow-xl"
        >
          Escolher meu plano <ArrowRight size={16} weight="bold" />
        </a>
      </div>
    </section>
  );
}

function UrgencyCTA() {
  const bullets = [
    "Cursos, bancos de questões e simulados no Premium",
    "Correção de simulado toda semana — sem enrolação",
    "Acesso direto ao Paiva via WhatsApp",
    "Suporte até o dia da prova",
  ];
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <div className="relative bg-[#111111] border border-[#cc1f1f]/40 rounded-sm p-6 sm:p-8 md:p-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, #cc1f1f25 0%, transparent 60%)" }} />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#cc1f1f] border border-[#cc1f1f]/60 bg-[#cc1f1f]/10 px-3 py-1.5 rounded-sm font-mono">
              <Fire size={12} weight="fill" /> Vagas limitadas
            </span>
            <h2 className="mt-5 font-display font-extrabold uppercase tracking-tight text-white text-2xl sm:text-3xl md:text-5xl leading-[0.95] max-w-3xl">
              O edital não espera.<br /><span className="text-[#cc1f1f]">Escolha seu plano agora.</span>
            </h2>
            <p className="mt-5 text-[#a0a0a0] leading-relaxed text-base sm:text-lg max-w-2xl">
              Seja aprovado ainda esse ano — com direção, material de qualidade e o Paiva no WhatsApp. Vagas limitadas porque o acompanhamento é de perto, aluno por aluno.
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
                <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-none">
                  12x de R$ 79,70
                </div>
                <div className="mt-1 text-xs font-mono uppercase tracking-widest text-[#a0a0a0]">
                  ou R$ 797 à vista — Plano Premium
                </div>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <a
                  href={PREMIUM_URL}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-bold uppercase tracking-wider text-base px-8 py-5 rounded-sm transition-all active:scale-[0.98] shadow-xl shadow-[#cc1f1f]/40"
                >
                  Garantir o Premium agora <ArrowRight size={18} weight="bold" />
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
    <section id="contato" className="section-reveal py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #cc1f1f25 0%, transparent 60%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <Crosshair size={56} weight="thin" className="text-[#cc1f1f] mx-auto" />
        </motion.div>
        <h2 className="mt-8 font-display font-extrabold uppercase tracking-tight text-white text-3xl sm:text-5xl md:text-7xl leading-[0.95] text-balance">
          Seja aprovado
          <br />
          <span className="text-[#cc1f1f]">ainda esse ano.</span>
        </h2>
        <p className="mt-6 sm:mt-8 text-[#a0a0a0] max-w-xl mx-auto text-base sm:text-lg px-2">
          Com quem já passou pelo que você está passando. O Paiva — policial militar, aprovado aos 17 — no seu WhatsApp até a prova.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
          <a
            href="#planos"
            className="inline-flex items-center justify-center gap-2 bg-[#cc1f1f] hover:bg-[#e82222] text-white font-semibold uppercase tracking-wider text-sm px-8 py-4 min-h-[48px] rounded-sm transition-all active:scale-[0.98]"
          >
            Escolher meu plano <ArrowRight size={16} weight="bold" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#cc1f1f] text-[#cc1f1f] hover:bg-[#cc1f1f] hover:text-white font-semibold uppercase tracking-wider text-sm px-8 py-4 min-h-[48px] rounded-sm transition-all"
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
            Seja aprovado no concurso dos seus sonhos. Direção, material de qualidade e mentoria com o Paiva.
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
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: EASE_OUT }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] hover:bg-[#1ebe5d] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-black/40 safe-bottom"
      aria-label="WhatsApp"
    >
      <WhatsappLogo size={28} weight="fill" />
    </motion.a>
  );
}

function Index() {
  return (
    <div className="grain bg-[#0a0a0a] text-[#f5f5f5] min-h-[100dvh]">
      <Navbar />
      <main className="pb-20 sm:pb-0">
        <Hero />
        <MetricsStrip />
        <HeroCTABand />
        <Pricing />
        <Deliverables />
        <Feedbacks />
        <UrgencyCTA />
        <Mission />
        <AboutPaiva />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}
