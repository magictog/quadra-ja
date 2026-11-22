// Tela 7 · Pagamento (simulado): escolhe Pix ou cartão e cria a reserva no CrudCrud.
import { CreditCard, QrCode } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useReservas } from "../../contexts/ReservasContext";
import { useUsuario } from "../../contexts/UsuarioContext";
import { nomeDoEsporte } from "../../data/esportes";
import { buscarQuadra } from "../../data/quadrasIniciais";
import type { FormaPagamento } from "../../types/Reserva";
import { formatarPreco } from "../../utils/formatos";
import "./Pagamento.css";

export function Pagamento() {
  const { rascunho, adicionarReserva } = useReservas();
  const { usuario } = useUsuario();
  const navegar = useNavigate();
  const [forma, setForma] = useState<FormaPagamento>("pix");
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");

  const quadra = rascunho ? buscarQuadra(rascunho.quadraId) : undefined;
  if (!rascunho || !quadra || !usuario) {
    return (
      <div className="pagina">
        <p className="pagina__aviso">Comece a reserva pela busca. <Link to="/quadras">Buscar quadras</Link></p>
      </div>
    );
  }

  async function pagar(evento: FormEvent) {
    evento.preventDefault();
    if (!rascunho || !quadra || !usuario) return;

    try {
      setEnviando(true);
      setErro("");
      const reserva = await adicionarReserva({
        usuarioId: usuario._id,
        quadraId: quadra.id,
        quadraNome: quadra.nome,
        esporte: nomeDoEsporte(rascunho.esporte),
        data: rascunho.data,
        horario: rascunho.horario,
        valor: quadra.preco,
        pagamento: forma,
        status: "confirmada",
      });
      navegar(`/reserva/confirmada/${reserva._id}`);
    } catch {
      setErro("Não foi possível concluir a reserva. Tente de novo.");
      setEnviando(false);
    }
  }

  return (
    <div className="pagina">
      <h1>Pagamento</h1>
      <p className="pagina__subtitulo">Total: <strong>{formatarPreco(quadra.preco)}</strong> · pagamento simulado</p>

      <form className="formulario" onSubmit={pagar}>
        <div className="pagamento__opcoes" role="radiogroup" aria-label="Forma de pagamento">
          <button type="button" className={forma === "pix" ? "pagamento__opcao pagamento__opcao--ativa" : "pagamento__opcao"}
            onClick={() => setForma("pix")}>
            <QrCode /> Pix
          </button>
          <button type="button" className={forma === "cartao" ? "pagamento__opcao pagamento__opcao--ativa" : "pagamento__opcao"}
            onClick={() => setForma("cartao")}>
            <CreditCard /> Cartão
          </button>
        </div>

        {/* Renderização condicional: cada forma mostra campos diferentes */}
        {forma === "pix" ? (
          <p className="pagamento__pix">Ao confirmar, mostramos o código Pix. Neste trabalho o pagamento é aprovado na hora.</p>
        ) : (
          <>
            <label className="formulario__campo">
              Nome no cartão
              <input className="formulario__entrada" required />
            </label>
            <label className="formulario__campo">
              Número do cartão
              <input className="formulario__entrada" inputMode="numeric" placeholder="0000 0000 0000 0000" required />
            </label>
          </>
        )}

        {erro && <p className="formulario__erro">{erro}</p>}

        <button className="botao botao--primario" type="submit" disabled={enviando}>
          {enviando ? "Confirmando..." : "Confirmar reserva"}
        </button>
      </form>
    </div>
  );
}
