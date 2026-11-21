// Camada de serviço das reservas: só este arquivo conversa com a API.
// Os componentes usam estas funções sem saber nada de HTTP.
import type { NovaReserva, Reserva } from "../types/Reserva";
import { api } from "./api";

const RECURSO = "/reservas";

export async function listarReservas() {
  const resposta = await api.get<Reserva[]>(RECURSO);
  return resposta.data;
}

// POST cria um registro novo. O CrudCrud devolve a reserva já com o _id.
export async function criarReserva(reserva: NovaReserva) {
  const resposta = await api.post<Reserva>(RECURSO, reserva);
  return resposta.data;
}

// PUT altera um registro que já existe. O _id vai no endereço, não nos dados.
export async function alterarReserva(id: string, reserva: NovaReserva) {
  await api.put(`${RECURSO}/${id}`, reserva);
  return { ...reserva, _id: id };
}
