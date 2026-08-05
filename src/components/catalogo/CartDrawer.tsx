import { Minus, Plus, ShoppingCart, Trash2, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart, formatarBRL, precoNumero } from "./CartContext";
import { waLink } from "@/data/contato";
import { imagensPorProduto } from "@/data/imagens";
import { playSound } from "@/lib/ui-sound";

export function CartDrawer() {
  const { itens, aberto, setAberto, alterarQtd, remover, limpar, total, totalItens } = useCart();

  const mensagem = () => {
    const linhas = itens.map(
      (i) => `• ${i.qtd}x ${i.produto.nome} — ${formatarBRL(precoNumero(i.produto.preco) * i.qtd)}`,
    );
    return [
      "Olá NewConnection! Quero finalizar este pedido:",
      "",
      ...linhas,
      "",
      `Total: ${formatarBRL(total)}`,
    ].join("\n");
  };

  return (
    <Sheet open={aberto} onOpenChange={setAberto}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border p-5">
          <SheetTitle className="flex items-center gap-2 font-display">
            <ShoppingCart className="h-5 w-5 text-primary" aria-hidden="true" />
            Seu pedido {totalItens > 0 && <span className="text-muted-foreground">({totalItens})</span>}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-5">
          {itens.length === 0 ? (
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Seu pedido está vazio. Adicione produtos do catálogo.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {itens.map(({ produto, qtd }) => (
                <li key={produto.id} className="flex gap-3 rounded-xl border border-border bg-card p-3">
                  {imagensPorProduto[produto.id] && (
                    <img
                      src={imagensPorProduto[produto.id]}
                      alt={produto.nome}
                      loading="lazy"
                      className="h-16 w-16 shrink-0 rounded-lg bg-gradient-soft object-contain p-1"
                    />
                  )}
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <p className="line-clamp-2 text-sm font-semibold text-foreground">{produto.nome}</p>
                    <div className="flex items-center justify-between gap-2">
                      <div className="inline-flex items-center rounded-lg border border-border">
                        <button
                          type="button"
                          aria-label={`Diminuir quantidade de ${produto.nome}`}
                          onClick={() => {
                            playSound("tap");
                            alterarQtd(produto.id, -1);
                          }}
                          className="px-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{qtd}</span>
                        <button
                          type="button"
                          aria-label={`Aumentar quantidade de ${produto.nome}`}
                          onClick={() => {
                            playSound("pop");
                            alterarQtd(produto.id, 1);
                          }}
                          className="px-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>

                      <span className="text-sm font-bold text-gradient-brand">
                        {formatarBRL(precoNumero(produto.preco) * qtd)}
                      </span>
                      <button
                        type="button"
                        aria-label={`Remover ${produto.nome} do pedido`}
                        onClick={() => {
                          playSound("tap");
                          remover(produto.id);
                        }}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="font-display text-2xl font-bold text-gradient-brand">{formatarBRL(total)}</span>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={itens.length ? waLink(mensagem()) : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={itens.length === 0}
              onClick={(e) => {
                if (itens.length === 0) {
                  e.preventDefault();
                  return;
                }
                playSound("chime");
              }}
              className={`inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3.5 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90 ${
                itens.length === 0 ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Finalizar pedido no WhatsApp
            </a>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  playSound("tap");
                  setAberto(false);
                }}
                className="flex-1 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Continuar comprando
              </button>
              {itens.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    playSound("tap");
                    limpar();
                  }}
                  className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-destructive"
                >
                  Limpar
                </button>
              )}
            </div>

          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
