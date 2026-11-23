// Tela 4 · Detalhe da quadra: fotos com crédito, preço, estrutura, horário e avaliações.
// O id vem do endereço (/quadras/8) pelo useParams.
import { Car, Clock, House, MapPin, ShowerHead } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Estrelas } from "../../components/Estrelas/Estrelas";
import { nomeDoEsporte } from "../../data/esportes";
import { buscarQuadra, linkDoMaps } from "../../data/quadrasIniciais";
import { formatarPreco } from "../../utils/formatos";
import "./DetalheQuadra.css";

// true vira "Sim", false vira "Não" e null vira "Não informado"
function simOuNao(valor: boolean | null) {
  if (valor === null) return "Não informado";
  return valor ? "Sim" : "Não";
}

export function DetalheQuadra() {
  const { id } = useParams();
  const quadra = buscarQuadra(Number(id));

  if (!quadra) {
    return (
      <div className="pagina">
        <p className="pagina__aviso">Quadra não encontrada. <Link to="/quadras">Voltar para a busca</Link></p>
      </div>
    );
  }

  const gratis = quadra.preco === 0;

  return (
    <div className="pagina detalhe">
      <div className="detalhe__fotos">
        {quadra.fotos.map((foto) => (
          <img className="detalhe__foto" key={foto} src={`/fotos/${foto}`} alt={`Foto da ${quadra.nome}`} />
        ))}
      </div>
      <p className="detalhe__credito">{quadra.creditoFoto}</p>

      <div className="detalhe__cabecalho">
        <div>
          <h1>{quadra.nome}</h1>
          <Estrelas nota={quadra.nota} total={quadra.totalAvaliacoes} />
          <div className="detalhe__esportes">
            {quadra.esportes.map((esporte) => (
              <span className="selo" key={esporte}>{nomeDoEsporte(esporte)}</span>
            ))}
          </div>
        </div>

        <div className="detalhe__reserva">
          {gratis ? (
            <>
              <span className="selo selo--gratis">Grátis</span>
              <p>Quadra pública: não precisa reservar.</p>
            </>
          ) : (
            <>
              <p className="detalhe__preco">{formatarPreco(quadra.preco)} <small>por hora</small></p>
              {!quadra.precoReal && <p className="detalhe__aviso-preco">Preço de exemplo</p>}
              <Link className="botao botao--primario botao--largo" to={`/quadras/${quadra.id}/horario`}>
                Ver horários livres
              </Link>
            </>
          )}
        </div>
      </div>

      <h2>Estrutura</h2>
      <ul className="detalhe__lista">
        <li><MapPin size={18} /><span>{quadra.endereco} · Zona {quadra.zona} · <a href={linkDoMaps(quadra)} target="_blank" rel="noreferrer">Ver no mapa</a></span></li>
        <li><Clock size={18} /><span>{quadra.horario}</span></li>
        <li><House size={18} /><span>Coberta: {simOuNao(quadra.coberta)} · Piso: {quadra.piso}</span></li>
        <li><ShowerHead size={18} /><span>Vestiário: {simOuNao(quadra.vestiario)}</span></li>
        <li><Car size={18} /><span>Estacionamento: {simOuNao(quadra.estacionamento)}</span></li>
      </ul>

      <h2>O que dizem no Google</h2>
      {quadra.avaliacoes.length === 0 && <p>Ainda não há avaliações resumidas desta quadra.</p>}
      <div className="detalhe__avaliacoes">
        {quadra.avaliacoes.map((avaliacao) => (
          <blockquote className="detalhe__avaliacao" key={avaliacao.autor}>
            <Estrelas nota={avaliacao.estrelas} />
            <p>{avaliacao.texto}</p>
            <footer>{avaliacao.autor} · {avaliacao.data}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
