// Mostra a nota com uma estrela. Ex.: ★ 4,5 (1.060 avaliações)
import { Star } from "lucide-react";
import "./Estrelas.css";

type EstrelasProps = {
  nota: number;
  total?: number; // opcional: nas avaliações individuais não mostramos o total
};

export function Estrelas({ nota, total }: Readonly<EstrelasProps>) {
  return (
    <span className="estrelas" aria-label={`Nota ${nota} de 5`}>
      <Star className="estrelas__icone" size={16} />
      {nota.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}
      {total !== undefined && (
        <span className="estrelas__total">({total.toLocaleString("pt-BR")} avaliações)</span>
      )}
    </span>
  );
}
