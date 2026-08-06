import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone, Search, ShieldCheck, ShoppingCart, Truck, Zap } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import { produtos, categorias } from "@/data/products";
import { EMPRESA, ENDERECO, WHATSAPP_EXIBICAO, waLink } from "@/data/contato";
import { ProductCard } from "@/components/catalogo/ProductCard";
import { CartProvider, useCart } from "@/components/catalogo/CartContext";
import { CartDrawer } from "@/components/catalogo/CartDrawer";
import { SoundToggle } from "@/components/catalogo/SoundToggle";
import { playSound } from "@/lib/ui-sound";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NewConnection — Catálogo de Eletrônicos no Centro do Rio" },
      {
        name: "description",
        content:
          "Catálogo NewConnection: fones, caixas de som, carregadores, cabos e acessórios eletrônicos com preços de atacado. Peça pelo WhatsApp (21) 99088-0131.",
      },
      { property: "og:title", content: "NewConnection — Catálogo de Eletrônicos no Centro do Rio" },
      {
        property: "og:description",
        content:
          "Catálogo NewConnection: fones, caixas de som, carregadores, cabos e acessórios eletrônicos com preços de atacado. Peça pelo WhatsApp (21) 99088-0131.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const diferenciais = [
  { icon: Zap, titulo: "Entrega rápida", texto: "Retirada na loja ou envio no mesmo dia para todo o Rio." },
  { icon: ShieldCheck, titulo: "Produtos garantidos", texto: "Marcas conhecidas e garantia contra defeitos de fábrica." },
  { icon: Truck, titulo: "Atacado e varejo", texto: "Preços especiais para revendedores e compras em quantidade." },
];

function Index() {
  return (
    <CartProvider>
      <Catalogo />
      <CartDrawer />
    </CartProvider>
  );
}

function BotaoCarrinho({ className = "" }: { className?: string }) {
  const { totalItens, setAberto } = useCart();
  return (
    <button
      type="button"
      onClick={() => {
        playSound("chime");
        setAberto(true);
      }}
      aria-label="Abrir pedido"
      className={`btn-3d btn-3d-whatsapp relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-whatsapp-foreground ${className}`}
    >
      <ShoppingCart className="h-4 w-4" aria-hidden="true" />
      Meu pedido
      {totalItens > 0 && (
        <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
          {totalItens}
        </span>
      )}
    </button>
  );
}

function HeaderLogo() {
  const [giro, setGiro] = useState(0);

  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    let dir: "up" | "down" | null = null;
    let girando = false;

    const onScroll = () => {
      const y = window.scrollY;
      const novaDir = y > lastY && y > 10 ? "down" : y < lastY ? "up" : dir;
      lastY = y;



      if (!novaDir || novaDir === dir || girando) {
        dir = novaDir ?? dir;
        return;
      }
      dir = novaDir;
      girando = true;
      // volta sempre múltiplo de 360° → posição normal
      setGiro((g) => g + (novaDir === "down" ? 360 : -360));
      window.setTimeout(() => {
        girando = false;
      }, 200);
    };


    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ perspective: "1000px" }}>
      <a
        href="#topo"
        className="block font-display text-xl font-extrabold tracking-tight transform-gpu"
        style={{
          transform: `rotateX(${giro}deg)`,
          transition: "transform 0.2s linear",
          transformStyle: "preserve-3d",
        }}
      >
        <span className="text-foreground">New</span>
        <span className="text-gradient-brand">Connection</span>
      </a>
    </div>
  );
}


function Catalogo() {
  const [busca, setBusca] = useState("");


  const filtrados = useMemo(() => {
    const q = slug(busca);
    if (!q) return produtos;
    return produtos.filter((p) => slug(`${p.nome} ${p.descricao} ${p.categoria}`).includes(q));
  }, [busca]);

  const secoes = categorias
    .map((cat) => ({ cat, itens: filtrados.filter((p) => p.categoria === cat) }))
    .filter((s) => s.itens.length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Topbar */}
      <div className="bg-gradient-brand text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-2 text-xs sm:flex-row sm:text-[13px]">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {ENDERECO}
          </span>
          <a href={waLink("Olá! Vim pelo catálogo NewConnection.")} className="inline-flex items-center gap-2 font-semibold">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" /> WhatsApp {WHATSAPP_EXIBICAO}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-3">
          <HeaderLogo />

          <nav className="order-3 flex w-full gap-2 overflow-x-auto pb-1 text-sm md:order-2 md:w-auto md:flex-1 md:justify-center md:overflow-visible md:pb-0">
            {categorias.map((c) => (
              <a
                key={c}
                href={`#${slug(c)}`}
                onClick={() => playSound("tap")}
                className="whitespace-nowrap rounded-xl border border-border bg-gradient-soft px-3 py-1.5 font-semibold text-foreground shadow-card transition-all hover:-translate-y-0.5 hover:bg-gradient-brand hover:text-primary-foreground hover:shadow-glow"
              >
                {c}
              </a>
            ))}
          </nav>

          <div className="order-2 ml-auto flex items-center gap-2 md:order-3">
            <SoundToggle />
            <BotaoCarrinho />
          </div>


        </div>
      </header>

      {/* Hero */}
      <section id="topo" className="relative overflow-hidden bg-gradient-hero text-deep-foreground">
        <img
          src={heroImg}
          alt="Acessórios eletrônicos da NewConnection sobre fundo azul"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-[1.618fr_1fr] md:py-28">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
              Centro do Rio · Atacado e Varejo
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              Tecnologia que conecta você ao melhor preço
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-deep-foreground/80 sm:text-lg">
              Fones, caixas de som, carregadores, cabos e acessórios com qualidade garantida.
              Escolha no catálogo e finalize o pedido direto pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink("Olá NewConnection! Quero fazer um pedido pelo catálogo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 font-semibold text-whatsapp-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Comprar pelo WhatsApp
              </a>
              <a
                href="#catalogo"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-semibold backdrop-blur transition-colors hover:bg-white/20"
              >
                Ver catálogo completo
              </a>
            </div>
            <dl className="mt-10 flex flex-wrap gap-8">
              <div>
                <dt className="text-xs uppercase tracking-wider text-deep-foreground/70">Produtos</dt>
                <dd className="font-display text-2xl font-bold">{produtos.length}+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-deep-foreground/70">Categorias</dt>
                <dd className="font-display text-2xl font-bold">{categorias.length}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-deep-foreground/70">A partir de</dt>
                <dd className="font-display text-2xl font-bold">R$ 9,00</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-gradient-soft">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-3">
          {diferenciais.map(({ icon: Icon, titulo, texto }) => (
            <div key={titulo} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
              <span className="rounded-xl bg-gradient-brand p-2.5 text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Catálogo */}
      <main id="catalogo" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Catálogo <span className="text-gradient-brand">completo</span>
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Navegue pelas seções e peça o que quiser diretamente pelo WhatsApp.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar produto..."
              aria-label="Buscar produto no catálogo"
              className="w-full rounded-xl border border-input bg-card py-3 pl-10 pr-4 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {secoes.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">
            Nenhum produto encontrado. Fale conosco no WhatsApp {WHATSAPP_EXIBICAO}.
          </p>
        )}

        {secoes.map(({ cat, itens }) => (
          <section key={cat} id={slug(cat)} className="mt-16 scroll-mt-32">
            <div className="mb-6 flex items-center gap-4">
              <h3 className="font-display text-2xl font-bold text-foreground">{cat}</h3>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {itens.length} itens
              </span>
              <span className="h-px flex-1 bg-gradient-brand opacity-40" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {itens.map((p) => (
                <ProductCard key={p.id} produto={p} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* CTA final */}
      <section className="bg-gradient-hero text-deep-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Não achou o que procura?</h2>
          <p className="mx-auto mt-3 max-w-xl text-deep-foreground/80">
            Chame no WhatsApp: temos novidades chegando toda semana e condições especiais para revenda.
          </p>
          <a
            href={waLink("Olá NewConnection! Estou procurando um produto específico.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-7 py-4 font-semibold text-whatsapp-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Falar com um atendente
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-extrabold">
              <span className="text-foreground">New</span>
              <span className="text-gradient-brand">Connection</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Eletrônicos e acessórios para celular, informática e casa. Atacado e varejo no Centro do Rio.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Endereço</h3>
            <p className="mt-3 inline-flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {ENDERECO}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Contato</h3>
            <a
              href={waLink("Olá NewConnection!")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp {WHATSAPP_EXIBICAO}
            </a>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {EMPRESA}. Todos os direitos reservados.
        </div>
      </footer>

      {/* Botões flutuantes */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        <a
          href={waLink("Olá NewConnection! Quero tirar uma dúvida.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </a>
        <BotaoCarrinho className="h-14 shadow-glow" />
      </div>

    </div>
  );
}
