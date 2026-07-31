import { MessageCircle } from "lucide-react";
import type { Produto } from "@/data/products";
import { waLink } from "@/data/contato";

export function ProductCard({ produto }: { produto: Produto }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative h-1.5 w-full bg-gradient-brand" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="w-fit rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary-foreground">
          {produto.categoria}
        </span>
        <h3 className="text-base font-semibold leading-snug text-foreground">{produto.nome}</h3>
        {produto.descricao && (
          <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
            {produto.descricao}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <span className="text-2xl font-bold text-gradient-brand font-display">{produto.preco}</span>
        </div>
        <a
          href={waLink(`Olá NewConnection! Tenho interesse no produto: ${produto.nome} (${produto.preco}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Comprar pelo WhatsApp
        </a>
      </div>
    </article>
  );
}
