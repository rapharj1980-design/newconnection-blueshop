import produto1 from "@/assets/produto-1.jpg.asset.json";
import produto2 from "@/assets/produto-2.jpg.asset.json";
import produto3 from "@/assets/produto-3.jpg.asset.json";

/** Imagens dos produtos, por id do catálogo. */
export const imagensPorProduto: Record<number, string> = {
  1: produto1.url,
  2: produto2.url,
  3: produto3.url,
};
