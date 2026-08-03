import { ShoppingCart } from "lucide-react";
import type { Produto } from "@/data/products";
import { imagensPorProduto } from "@/data/imagens";
import { useCart } from "./CartContext";

export function ProductCard({ produto }: { produto: Produto }) {
  const { adicionar } = useCart();
  const imagem = imagensPorProduto[produto.id];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative h-1.5 w-full bg-gradient-brand" />
      {imagem && (
        <div className="flex items-center justify-center bg-gradient-soft p-4">
          <img
            src={imagem}
            alt={produto.nome}
            loading="lazy"
            width={180}
            height={240}
            className="h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
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
        <button
          type="button"
          onClick={() => adicionar(produto)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          Adicionar ao pedido
        </button>

      </div>
    </article>
  );
}
