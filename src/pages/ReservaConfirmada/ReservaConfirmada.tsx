// Tela 8 · Reserva confirmada: procura a reserva pelo _id que veio no endereço.
import { CircleCheckBig } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useReservas } from "../../contexts/ReservasContext";
import { formatarData, formatarPreco } from "../../utils/formatos";
import "./ReservaConfirmada.css";

export function ReservaConfirmada() {
  const { id } = useParams();
  const { reservas } = useReservas();
  const reserva = reservas.find((item) => item._id === id);

  if (!reserva) {
    return <div className="pagina"><p className="pagina__aviso">Reserva não encontrada.</p></div>;
  }

  return (
    <div className="pagina confirmada">
      <CircleCheckBig className="confirmada__icone" size={64} />
      <h1>Reserva confirmada!</h1>
      <p>
        {reserva.quadraNome} · {formatarData(reserva.data)} às {reserva.horario}
      </p>
      <p>Valor pago: <strong>{formatarPreco(reserva.valor)}</strong></p>

      {/* O código é o fim do _id criado pelo CrudCrud */}
      <p className="confirmada__codigo">Código: {reserva._id.slice(-6).toUpperCase()}</p>

      <div className="confirmada__acoes">
        <Link className="botao botao--primario" to="/minhas-reservas">Ver minhas reservas</Link>
        <Link className="botao botao--secundario" to="/">Voltar ao início</Link>
      </div>
    </div>
  );
}
