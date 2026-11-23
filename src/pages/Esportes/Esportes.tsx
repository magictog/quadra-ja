// Tela 2 · Esportes: um card por esporte, com quantas quadras existem de cada um.
import { Link } from "react-router-dom";
import { esportes } from "../../data/esportes";
import { quadrasIniciais } from "../../data/quadrasIniciais";
import "./Esportes.css";

export function Esportes() {
  return (
    <div className="pagina">
      <h1>Esportes</h1>
      <p className="pagina__subtitulo">Escolha um esporte para ver as quadras.</p>

      <div className="esportes__grade">
        {esportes.map((esporte) => {
          // Conta as quadras que têm este esporte (filter + length)
          const total = quadrasIniciais.filter((quadra) =>
            quadra.esportes.includes(esporte.id),
          ).length;

          return (
            <Link className="esporte-card" key={esporte.id} to={`/quadras?esporte=${esporte.id}`}>
              <h3 className="esporte-card__nome">{esporte.nome}</h3>
              <p className="esporte-card__descricao">{esporte.descricao}</p>
              <span className="esporte-card__total">
                {total} {total === 1 ? "quadra" : "quadras"}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
