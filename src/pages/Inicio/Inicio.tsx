// Tela 1 · Início: chamada principal, atalhos de esporte e quadras mais bem avaliadas.
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { QuadraCard } from "../../components/QuadraCard/QuadraCard";
import { esportes } from "../../data/esportes";
import { quadrasIniciais } from "../../data/quadrasIniciais";
import "./Inicio.css";

export function Inicio() {
  // As 4 com nota mais alta. O [...] faz uma cópia para não mudar a lista original.
  const destaques = [...quadrasIniciais].sort((a, b) => b.nota - a.nota).slice(0, 4);

  return (
    <>
      <section className="inicio-banner">
        <h1 className="inicio-banner__titulo">Ache uma quadra e reserve em minutos</h1>
        <p className="inicio-banner__texto">
          Futebol, tênis, beach tennis, vôlei e basquete em São Paulo, com preço e horário à vista.
        </p>
        <Link className="botao botao--primario" to="/quadras">
          <Search size={18} /> Buscar quadras
        </Link>
      </section>

      <div className="pagina">
        <h2>Qual é o seu esporte?</h2>
        <div className="inicio__esportes">
          {esportes.map((esporte) => (
            <Link className="inicio__esporte" key={esporte.id} to={`/quadras?esporte=${esporte.id}`}>
              {esporte.nome}
            </Link>
          ))}
        </div>

        <h2>Mais bem avaliadas</h2>
        <div className="inicio__destaques">
          {destaques.map((quadra) => (
            <QuadraCard key={quadra.id} quadra={quadra} compacto />
          ))}
        </div>
      </div>
    </>
  );
}
