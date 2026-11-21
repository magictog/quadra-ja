// Tela 11 · Minhas reservas: três abas (próximas, passadas e canceladas).
// As três listas saem do mesmo array de reservas, cada uma com um filter diferente
// (estado derivado, igual às páginas Hoje, Próximas e Concluídas do TaskFlow).
import { useState } from "react";
import { Link } from "react-router-dom";
import { RemarcarModal } from "../../components/RemarcarModal/RemarcarModal";
import { ReservaCard } from "../../components/ReservaCard/ReservaCard";
import { useReservas } from "../../contexts/ReservasContext";
import { useUsuario } from "../../contexts/UsuarioContext";
import type { Reserva } from "../../types/Reserva";
import { obterDataAtual } from "../../utils/formatos";
import "./MinhasReservas.css";

// Tipo união: a aba só pode ser um destes três valores
type Visao = "proximas" | "passadas" | "canceladas";

const nomesDasAbas: Record<Visao, string> = {
  proximas: "Próximas",
  passadas: "Passadas",
  canceladas: "Canceladas",
};

export function MinhasReservas() {
  const { usuario } = useUsuario();
  const { reservas, carregando, erro, cancelarReserva } = useReservas();
  const [visao, setVisao] = useState<Visao>("proximas");
  // Reserva que está sendo remarcada. null = modal fechado.
  const [emRemarcacao, setEmRemarcacao] = useState<Reserva | null>(null);

  if (!usuario) {
    return (
      <div className="pagina">
        <p className="pagina__aviso">Entre na sua conta para ver as reservas. <Link to="/entrar">Entrar</Link></p>
      </div>
    );
  }

  const hoje = obterDataAtual();
  const minhas = reservas.filter((reserva) => reserva.usuarioId === usuario._id);

  // Os critérios de cada aba (as datas AAAA-MM-DD podem ser comparadas como texto)
  const criterios: Record<Visao, (reserva: Reserva) => boolean> = {
    proximas: (reserva) => reserva.status === "confirmada" && reserva.data >= hoje,
    passadas: (reserva) => reserva.status === "confirmada" && reserva.data < hoje,
    canceladas: (reserva) => reserva.status === "cancelada",
  };
  const lista = minhas.filter(criterios[visao]);

  return (
    <div className="pagina">
      <h1>Minhas reservas</h1>

      <div className="minhas-reservas__abas" role="tablist">
        {(Object.keys(nomesDasAbas) as Visao[]).map((aba) => (
          <button
            key={aba}
            type="button"
            role="tab"
            aria-selected={visao === aba}
            className={visao === aba ? "minhas-reservas__aba minhas-reservas__aba--ativa" : "minhas-reservas__aba"}
            onClick={() => setVisao(aba)}
          >
            {nomesDasAbas[aba]} ({minhas.filter(criterios[aba]).length})
          </button>
        ))}
      </div>

      {erro && <p className="pagina__aviso pagina__aviso--erro">{erro}</p>}
      {carregando && <p>Carregando reservas...</p>}
      {!carregando && lista.length === 0 && (
        <p className="pagina__aviso">Nada por aqui. <Link to="/quadras">Reservar uma quadra</Link></p>
      )}

      <div className="minhas-reservas__lista">
        {lista.map((reserva) => (
          <ReservaCard
            key={reserva._id}
            reserva={reserva}
            podeAlterar={visao === "proximas"}
            aoCancelar={cancelarReserva}
            aoRemarcar={setEmRemarcacao}
          />
        ))}
      </div>

      {emRemarcacao && (
        <RemarcarModal reserva={emRemarcacao} aoFechar={() => setEmRemarcacao(null)} />
      )}
    </div>
  );
}
