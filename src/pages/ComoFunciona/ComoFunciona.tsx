// Tela 14 · Como funciona: o passo a passo da reserva.
// Os passos ficam numa lista e o map desenha um card para cada um.
import { CalendarDays, CircleCheckBig, CreditCard, Search } from "lucide-react";
import { Link } from "react-router-dom";
import "./ComoFunciona.css";

const passos = [
  { icone: <Search />, titulo: "Busque", texto: "Escolha o esporte e a zona. O preço já aparece no card." },
  { icone: <CalendarDays />, titulo: "Escolha o horário", texto: "Veja os horários livres. Os ocupados ficam riscados." },
  { icone: <CreditCard />, titulo: "Pague", texto: "Pix ou cartão. Você vê o total e a regra de cancelamento antes." },
  { icone: <CircleCheckBig />, titulo: "Jogue", texto: "Receba o código da reserva e acompanhe em Minhas reservas." },
];

export function ComoFunciona() {
  return (
    <div className="pagina">
      <h1>Como funciona</h1>
      <p className="pagina__subtitulo">Reservar uma quadra leva quatro passos.</p>

      <ol className="como-funciona__lista">
        {passos.map((passo, indice) => (
          <li className="como-funciona__passo" key={passo.titulo}>
            <span className="como-funciona__icone">{passo.icone}</span>
            <h3>{indice + 1}. {passo.titulo}</h3>
            <p>{passo.texto}</p>
          </li>
        ))}
      </ol>

      <Link className="botao botao--primario" to="/quadras">Começar agora</Link>
    </div>
  );
}
