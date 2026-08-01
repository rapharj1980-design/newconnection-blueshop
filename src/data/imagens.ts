import produto1 from "@/assets/produto-1.jpg.asset.json";
import produto2 from "@/assets/produto-2.jpg.asset.json";
import produto3 from "@/assets/produto-3.jpg.asset.json";
import fone1 from "@/assets/fone-1.jpg.asset.json";
import fone2 from "@/assets/fone-2.jpg.asset.json";
import fone3 from "@/assets/fone-3.jpg.asset.json";
import fone4 from "@/assets/fone-4.jpg.asset.json";
import fone5 from "@/assets/fone-5.jpg.asset.json";
import fone6 from "@/assets/fone-6.jpg.asset.json";
import fone7 from "@/assets/fone-7.jpg.asset.json";

/** Imagens dos produtos, por id do catálogo. */
export const imagensPorProduto: Record<number, string> = {
  1: produto1.url,
  2: produto2.url,
  3: produto3.url,
  7: fone1.url,
  8: fone2.url,
  9: fone3.url,
  94: fone4.url,
  95: fone5.url,
  96: fone6.url,
  97: fone7.url,
};
