// Tela 5 · Escolher horário: a pessoa escolhe o esporte, o dia e a hora.
// A escolha vai para o rascunho do ReservasContext e segue para o Resumo.
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SeletorHorario } from "../../components/SeletorHorario/SeletorHorario";
import { useReservas } from "../../contexts/ReservasContext";
import { nomeDoEsporte } from "../../data/esportes";
import { buscarQuadra } from "../../data/quadrasIniciais";
import { obterDataAtual } from "../../utils/formatos";
import "./EscolherHorario.css";

export function EscolherHorario() {
  const { id } = useParams();
  const quadra = buscarQuadra(Number(id));
  const { guardarRascunho } = useReservas();
  const navegar = useNavigate();

  const [esporte, setEsporte] = useState(quadra ? quadra.esportes[0] : "");
  const [data, setData] = useState(obterDataAtual());
  const [horario, setHorario] = useState("");

  if (!quadra) {
    return <div className="pagina"><p className="pagina__aviso">Quadra não encontrada.</p></div>;
  }

  function continuar() {
    if (!quadra) return;
    guardarRascunho({ quadraId: quadra.id, esporte, data, horario });
    navegar("/reserva/resumo");
  }

  return (
    <div className="pagina escolher-horario">
      <Link to={`/quadras/${quadra.id}`}>← {quadra.nome}</Link>
      <h1>Escolha o horário</h1>

      {/* Só mostra a escolha de esporte quando a quadra tem mais de um */}
      {quadra.esportes.length > 1 && (
        <label className="formulario__campo">
          Esporte
          <select className="formulario__entrada" value={esporte} onChange={(e) => setEsporte(e.target.value as typeof esporte)}>
            {quadra.esportes.map((item) => (
              <option key={item} value={item}>{nomeDoEsporte(item)}</option>
            ))}
          </select>
        </label>
      )}

      <SeletorHorario
        quadraId={quadra.id}
        data={data}
        horario={horario}
        aoMudarData={setData}
        aoMudarHorario={setHorario}
      />

      {/* O botão só libera depois que um horário for escolhido */}
      <button className="botao botao--primario botao--largo" type="button" disabled={!horario} onClick={continuar}>
        {horario ? `Continuar com ${horario}` : "Escolha um horário"}
      </button>
    </div>
  );
}
