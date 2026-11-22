// Funções pequenas de data e dinheiro, usadas em várias telas.

// Data de hoje no formato AAAA-MM-DD (mesma função da aula do TaskFlow).
export function obterDataAtual() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  return `${ano}-${mes}-${dia}`;
}

// "2026-11-25" vira "25/11/2026".
export function formatarData(data: string) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

// 175 vira "R$ 175,00".
export function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
