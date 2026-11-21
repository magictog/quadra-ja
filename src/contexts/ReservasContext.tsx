// Estado compartilhado das reservas (mesma ideia do TarefasContext da aula).
// Guarda a lista de reservas, o rascunho da reserva em andamento e as operações.
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  alterarReserva,
  criarReserva,
  listarReservas,
} from "../services/reservaService";
import type { NovaReserva, RascunhoReserva, Reserva } from "../types/Reserva";

type ReservasContextType = {
  reservas: Reserva[];
  carregando: boolean;
  erro: string;
  rascunho: RascunhoReserva | null;
  guardarRascunho: (rascunho: RascunhoReserva) => void;
  adicionarReserva: (reserva: NovaReserva) => Promise<Reserva>;
  cancelarReserva: (reserva: Reserva) => Promise<void>;
  remarcarReserva: (reserva: Reserva, data: string, horario: string) => Promise<void>;
};

const ReservasContext = createContext<ReservasContextType | null>(null);

type ReservasProviderProps = {
  children: ReactNode;
};

export function ReservasProvider({ children }: Readonly<ReservasProviderProps>) {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [rascunho, setRascunho] = useState<RascunhoReserva | null>(null);

  // Carrega as reservas do CrudCrud uma vez, quando o site abre.
  useEffect(() => {
    async function carregarReservas() {
      try {
        setErro("");
        const dados = await listarReservas();
        setReservas(dados);
      } catch {
        setErro("Não foi possível carregar as reservas.");
      } finally {
        setCarregando(false);
      }
    }

    carregarReservas();
  }, []);

  function guardarRascunho(novoRascunho: RascunhoReserva) {
    setRascunho(novoRascunho);
  }

  async function adicionarReserva(novaReserva: NovaReserva) {
    const reservaCriada = await criarReserva(novaReserva);
    // Imutabilidade: um array novo com a reserva criada na frente.
    setReservas((reservasAtuais) => [reservaCriada, ...reservasAtuais]);
    setRascunho(null);
    return reservaCriada;
  }

  // Troca no array só a reserva alterada (mesmo map da aula de edição).
  async function salvarAlteracao(reserva: Reserva) {
    const { _id, ...dados } = reserva;
    const reservaAtualizada = await alterarReserva(_id, dados);
    setReservas((reservasAtuais) =>
      reservasAtuais.map((atual) =>
        atual._id === reservaAtualizada._id ? reservaAtualizada : atual,
      ),
    );
  }

  // Cancelar não apaga: muda o status (como concluir uma tarefa na aula).
  async function cancelarReserva(reserva: Reserva) {
    await salvarAlteracao({ ...reserva, status: "cancelada" });
  }

  async function remarcarReserva(reserva: Reserva, data: string, horario: string) {
    await salvarAlteracao({ ...reserva, data, horario });
  }

  return (
    <ReservasContext.Provider
      value={{
        reservas,
        carregando,
        erro,
        rascunho,
        guardarRascunho,
        adicionarReserva,
        cancelarReserva,
        remarcarReserva,
      }}
    >
      {children}
    </ReservasContext.Provider>
  );
}

export function useReservas() {
  const contexto = useContext(ReservasContext);

  if (!contexto) {
    throw new Error("useReservas deve ser usado dentro de ReservasProvider.");
  }

  return contexto;
}
