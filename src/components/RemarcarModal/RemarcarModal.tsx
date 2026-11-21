// Janela para trocar o dia e o horário de uma reserva.
// Reaproveita o SeletorHorario da tela Escolher horário.
import { X } from "lucide-react";
import { useState } from "react";
import { useReservas } from "../../contexts/ReservasContext";
import type { Reserva } from "../../types/Reserva";
import { SeletorHorario } from "../SeletorHorario/SeletorHorario";
import "./RemarcarModal.css";

type RemarcarModalProps = {
  reserva: Reserva;
  aoFechar: () => void;
};

export function RemarcarModal({ reserva, aoFechar }: Readonly<RemarcarModalProps>) {
  const { remarcarReserva } = useReservas();
  // O formulário começa com os dados atuais da reserva (como a edição no TaskModal).
  const [data, setData] = useState(reserva.data);
  const [horario, setHorario] = useState(reserva.horario);
  const [erro, setErro] = useState("");

  async function confirmar() {
    try {
      await remarcarReserva(reserva, data, horario);
      aoFechar(); // só fecha se deu certo
    } catch {
      setErro("Não foi possível remarcar. Tente de novo.");
    }
  }

  return (
    // O fundo escuro cobre a tela toda e bloqueia os cliques atrás da janela
    <div className="remarcar-modal">
      <div className="remarcar-modal__janela" role="dialog" aria-modal="true" aria-label="Remarcar reserva">
        <button className="remarcar-modal__fechar" type="button" aria-label="Fechar" onClick={aoFechar}>
          <X size={20} />
        </button>

        <h2>Remarcar</h2>
        <p className="pagina__subtitulo">{reserva.quadraNome}</p>

        <SeletorHorario
          quadraId={reserva.quadraId}
          data={data}
          horario={horario}
          aoMudarData={setData}
          aoMudarHorario={setHorario}
          reservaIgnorada={reserva._id}
        />

        {erro && <p className="formulario__erro">{erro}</p>}

        <div className="remarcar-modal__acoes">
          <button className="botao botao--secundario" type="button" onClick={aoFechar}>Voltar</button>
          <button className="botao botao--primario" type="button" onClick={confirmar}>Salvar novo horário</button>
        </div>
      </div>
    </div>
  );
}
