// Card de uma quadra. Aparece no Início (destaques) e na Busca.
// Variações BEM: quadra-card--gratis (quadra pública) e quadra-card--compacto.
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { nomeDoEsporte } from "../../data/esportes";
import type { Quadra } from "../../types/Quadra";
import { formatarPreco } from "../../utils/formatos";
import { Estrelas } from "../Estrelas/Estrelas";
import "./QuadraCard.css";

type QuadraCardProps = {
  quadra: Quadra;
  compacto?: boolean;
};

export function QuadraCard({ quadra, compacto = false }: Readonly<QuadraCardProps>) {
  const gratis = quadra.preco === 0;

  // Junta o bloco com os modificadores que valem para esta quadra
  let classes = "quadra-card";
  if (gratis) classes += " quadra-card--gratis";
  if (compacto) classes += " quadra-card--compacto";

  return (
    <Link className={classes} to={`/quadras/${quadra.id}`}>
      <img
        className="quadra-card__foto"
        src={`/fotos/${quadra.fotos[0]}`}
        alt={`Foto da ${quadra.nome}`}
        loading="lazy"
      />

      <div className="quadra-card__conteudo">
        <div className="quadra-card__esportes">
          {quadra.esportes.map((esporte) => (
            <span className="selo" key={esporte}>{nomeDoEsporte(esporte)}</span>
          ))}
        </div>

        <h3 className="quadra-card__titulo">{quadra.nome}</h3>

        <p className="quadra-card__local">
          <MapPin size={14} /> {quadra.bairro} · Zona {quadra.zona}
        </p>

        <div className="quadra-card__rodape">
          <Estrelas nota={quadra.nota} total={compacto ? undefined : quadra.totalAvaliacoes} />
          {gratis ? (
            <span className="selo selo--gratis">Grátis</span>
          ) : (
            <span className="quadra-card__preco">{formatarPreco(quadra.preco)}/h</span>
          )}
        </div>
      </div>
    </Link>
  );
}
