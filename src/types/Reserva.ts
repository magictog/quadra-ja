// Uma reserva salva no CrudCrud. O _id é criado pelo próprio CrudCrud.

export type FormaPagamento = "pix" | "cartao";

export type StatusReserva = "confirmada" | "cancelada";

export type Reserva = {
  _id: string;
  usuarioId: string;
  quadraId: number;
  quadraNome: string;
  esporte: string;
  data: string; // AAAA-MM-DD, igual ao input type="date"
  horario: string; // ex.: "19:00"
  valor: number;
  pagamento: FormaPagamento;
  status: StatusReserva;
};

// Na criação ainda não existe _id (igual ao NovaTarefa da aula).
export type NovaReserva = Omit<Reserva, "_id">;

// O que a pessoa escolhe antes de pagar: guardado no ReservasContext.
export type RascunhoReserva = {
  quadraId: number;
  esporte: string;
  data: string;
  horario: string;
};
