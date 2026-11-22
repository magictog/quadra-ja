// Tela 6 · Resumo da reserva: mostra tudo antes de pagar, com a regra de cancelamento.
// Se a pessoa não estiver logada, pede para entrar antes de seguir.
import { Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useReservas } from "../../contexts/ReservasContext";
import { useUsuario } from "../../contexts/UsuarioContext";
import { nomeDoEsporte } from "../../data/esportes";
import { buscarQuadra } from "../../data/quadrasIniciais";
import { formatarData, formatarPreco } from "../../utils/formatos";
import "./ResumoReserva.css";

export function ResumoReserva() {
  const { rascunho } = useReservas();
  const { usuario } = useUsuario();

  // Sem rascunho (ex.: abriu o endereço direto), não há o que resumir
  const quadra = rascunho ? buscarQuadra(rascunho.quadraId) : undefined;
  if (!rascunho || !quadra) {
    return (
      <div className="pagina">
        <p className="pagina__aviso">Nenhuma reserva em andamento. <Link to="/quadras">Buscar quadras</Link></p>
      </div>
    );
  }

  return (
    <div className="pagina resumo">
      <h1>Resumo da reserva</h1>

      <dl className="resumo__dados">
        <dt>Quadra</dt><dd>{quadra.nome}</dd>
        <dt>Endereço</dt><dd>{quadra.endereco}</dd>
        <dt>Esporte</dt><dd>{nomeDoEsporte(rascunho.esporte)}</dd>
        <dt>Dia</dt><dd>{formatarData(rascunho.data)}</dd>
        <dt>Horário</dt><dd>{rascunho.horario} (1 hora)</dd>
        <dt>Total</dt><dd className="resumo__total">{formatarPreco(quadra.preco)}</dd>
      </dl>

      <p className="resumo__regra">
        <Info size={18} /> Cancelamento grátis até 24 horas antes. Depois disso, o valor não é devolvido.
      </p>

      {usuario ? (
        <Link className="botao botao--primario botao--largo" to="/reserva/pagamento">Ir para o pagamento</Link>
      ) : (
        <div className="resumo__login">
          <p>Para reservar, entre na sua conta.</p>
          <Link className="botao botao--primario" to="/entrar">Entrar</Link>
          <Link className="botao botao--secundario" to="/cadastro">Criar conta</Link>
        </div>
      )}
    </div>
  );
}
