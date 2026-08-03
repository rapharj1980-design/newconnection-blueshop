import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Produto } from "@/data/products";

export type ItemCarrinho = { produto: Produto; qtd: number };

type CartContextValue = {
  itens: ItemCarrinho[];
  aberto: boolean;
  setAberto: (v: boolean) => void;
  adicionar: (produto: Produto) => void;
  remover: (id: number) => void;
  alterarQtd: (id: number, delta: number) => void;
  limpar: () => void;
  totalItens: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function precoNumero(preco: string) {
  const limpo = preco.replace(/[^0-9,.]/g, "").replace(/\./g, "").replace(",", ".");
  const n = Number.parseFloat(limpo);
  return Number.isFinite(n) ? n : 0;
}

export function formatarBRL(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [aberto, setAberto] = useState(false);

  const value = useMemo<CartContextValue>(() => {
    const adicionar = (produto: Produto) => {
      setItens((prev) => {
        const existente = prev.find((i) => i.produto.id === produto.id);
        if (existente) {
          return prev.map((i) => (i.produto.id === produto.id ? { ...i, qtd: i.qtd + 1 } : i));
        }
        return [...prev, { produto, qtd: 1 }];
      });
      setAberto(true);
    };

    return {
      itens,
      aberto,
      setAberto,
      adicionar,
      remover: (id) => setItens((prev) => prev.filter((i) => i.produto.id !== id)),
      alterarQtd: (id, delta) =>
        setItens((prev) =>
          prev
            .map((i) => (i.produto.id === id ? { ...i, qtd: i.qtd + delta } : i))
            .filter((i) => i.qtd > 0),
        ),
      limpar: () => setItens([]),
      totalItens: itens.reduce((acc, i) => acc + i.qtd, 0),
      total: itens.reduce((acc, i) => acc + precoNumero(i.produto.preco) * i.qtd, 0),
    };
  }, [itens, aberto]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
}
