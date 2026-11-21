// Card de uma reserva na tela Minhas reservas.
// Ele só mostra a reserva e avisa as ações; quem altera os dados é o ReservasContext.
import { CalendarDays, Clock } from "lucide-react";
import type { Reserva } from "../../types/Reserva";
import { formatarData, formatarPreco } from "../../utils/formatos";
import "./ReservaCard.css";

type ReservaCardProps = {
  reserva: Reserva;
  podeAlterar: boolean; // false nas reservas passadas e canceladas
  aoCancelar: (reserva: Reserva) => void;
  aoRemarcar: (reserva: Reserva) => void;
};

export function ReservaCard({
  reserva,
  podeAlterar,
  aoCancelar,
  aoRemarcar,
}: Readonly<ReservaCardProps>) {
  const cancelada = reserva.status === "cancelada";

  return (
    <article className={cancelada ? "reserva-card reserva-card--cancelada" : "reserva-card"}>
      <div className="reserva-card__topo">
        <h3 className="reserva-card__titulo">{reserva.quadraNome}</h3>
        {cancelada && <span className="selo selo--cancelada">Cancelada</span>}
      </div>

      <p className="reserva-card__info">
        <CalendarDays size={16} /> {formatarData(reserva.data)}
        <Clock size={16} /> {reserva.horario}
      </p>
      <p className="reserva-card__info">
        {reserva.esporte} · {formatarPreco(reserva.valor)} · {reserva.pagamento === "pix" ? "Pix" : "Cartão"}
      </p>

      {podeAlterar && (
        <div className="reserva-card__acoes">
          <button className="botao botao--secundario" type="button" onClick={() => aoRemarcar(reserva)}>
            Remarcar
          </button>
          <button className="botao botao--perigo" type="button" onClick={() => aoCancelar(reserva)}>
            Cancelar
          </button>
        </div>
      )}
    </article>
  );
}
