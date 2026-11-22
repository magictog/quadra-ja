// Escolha de dia e horário. Usado na tela Escolher horário e no modal de remarcar
// (o mesmo componente em dois lugares, como o TaskForm da aula).
import { useReservas } from "../../contexts/ReservasContext";
import { obterDataAtual } from "../../utils/formatos";
import "./SeletorHorario.css";

const HORARIOS = [
  "08:00", "09:00", "10:00", "11:00", "14:00", "15:00",
  "16:00", "17:00", "18:00", "19:00", "20:00", "21:00",
];

type SeletorHorarioProps = {
  quadraId: number;
  data: string;
  horario: string;
  aoMudarData: (data: string) => void;
  aoMudarHorario: (horario: string) => void;
  reservaIgnorada?: string; // ao remarcar, o horário da própria reserva não conta como ocupado
};

export function SeletorHorario({
  quadraId,
  data,
  horario,
  aoMudarData,
  aoMudarHorario,
  reservaIgnorada,
}: Readonly<SeletorHorarioProps>) {
  const { reservas } = useReservas();

  // Estado derivado: os horários ocupados saem da lista de reservas, com filter + map.
  const ocupados = reservas
    .filter(
      (reserva) =>
        reserva.quadraId === quadraId &&
        reserva.data === data &&
        reserva.status === "confirmada" &&
        reserva._id !== reservaIgnorada,
    )
    .map((reserva) => reserva.horario);

  // Se o dia escolhido é hoje, as horas que já passaram também ficam bloqueadas
  const horaAgora = new Date().getHours();
  const ehHoje = data === obterDataAtual();

  return (
    <div className="seletor-horario">
      <label className="formulario__campo">
        Dia
        <input
          className="formulario__entrada"
          type="date"
          min={obterDataAtual()}
          value={data}
          onChange={(evento) => aoMudarData(evento.target.value)}
        />
      </label>

      <p className="seletor-horario__titulo">Horários (1 hora cada)</p>
      <div className="seletor-horario__grade">
        {HORARIOS.map((hora) => {
          const ocupado = ocupados.includes(hora);
          const passou = ehHoje && Number(hora.slice(0, 2)) <= horaAgora;
          let classes = "seletor-horario__opcao";
          if (hora === horario) classes += " seletor-horario__opcao--escolhido";

          return (
            <button
              key={hora}
              type="button"
              className={classes}
              disabled={ocupado || passou}
              onClick={() => aoMudarHorario(hora)}
            >
              {hora}
              {ocupado && <small> ocupado</small>}
              {passou && !ocupado && <small> já passou</small>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
