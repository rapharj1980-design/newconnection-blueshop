export const EMPRESA = "NewConnection";
export const ENDERECO = "Rua Buenos Aires, 112 — Centro, Rio de Janeiro";
export const WHATSAPP_EXIBICAO = "(21) 99088-0131";
export const WHATSAPP_NUMERO = "5521990880131";

export function waLink(mensagem: string) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}
