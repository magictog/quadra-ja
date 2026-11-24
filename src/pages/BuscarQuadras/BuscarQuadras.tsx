// Tela 3 · Buscar quadras: filtros por nome, esporte, zona, cobertura e preço.
// A lista mostrada é um estado derivado: sai de quadrasIniciais com filter, sem guardar uma cópia.
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QuadraCard } from "../../components/QuadraCard/QuadraCard";
import { esportes } from "../../data/esportes";
import { quadrasIniciais } from "../../data/quadrasIniciais";
import "./BuscarQuadras.css";

export function BuscarQuadras() {
  // Se veio de /quadras?esporte=tenis, o filtro já começa em "tenis"
  const [parametros] = useSearchParams();
  const [esporte, setEsporte] = useState(parametros.get("esporte") ?? "");
  const [zona, setZona] = useState("");
  const [texto, setTexto] = useState("");
  const [soCobertas, setSoCobertas] = useState(false);
  const [soGratis, setSoGratis] = useState(false);

  const quadras = quadrasIniciais.filter((quadra) => {
    if (esporte && !quadra.esportes.some((item) => item === esporte)) return false;
    if (zona && quadra.zona !== zona) return false;
    if (soCobertas && quadra.coberta !== true) return false;
    if (soGratis && quadra.preco !== 0) return false;
    const busca = texto.toLowerCase();
    return quadra.nome.toLowerCase().includes(busca) || quadra.bairro.toLowerCase().includes(busca);
  });

  return (
    <div className="pagina">
      <h1>Buscar quadras</h1>

      <div className="busca__filtros">
        <input
          className="formulario__entrada busca__texto"
          type="search"
          placeholder="Nome da quadra ou bairro"
          aria-label="Buscar por nome ou bairro"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
        />

        <select className="formulario__entrada" aria-label="Esporte" value={esporte}
          onChange={(evento) => setEsporte(evento.target.value)}>
          <option value="">Todos os esportes</option>
          {esportes.map((item) => (
            <option key={item.id} value={item.id}>{item.nome}</option>
          ))}
        </select>

        <select className="formulario__entrada" aria-label="Zona" value={zona}
          onChange={(evento) => setZona(evento.target.value)}>
          <option value="">Todas as zonas</option>
          <option value="Norte">Zona Norte</option>
          <option value="Sul">Zona Sul</option>
          <option value="Leste">Zona Leste</option>
          <option value="Oeste">Zona Oeste</option>
        </select>

        <label className="busca__opcao">
          <input type="checkbox" checked={soCobertas} onChange={() => setSoCobertas(!soCobertas)} />
          Só cobertas
        </label>
        <label className="busca__opcao">
          <input type="checkbox" checked={soGratis} onChange={() => setSoGratis(!soGratis)} />
          Só grátis
        </label>
      </div>

      <p className="busca__resultado">{quadras.length} quadras encontradas</p>

      {quadras.length === 0 ? (
        <p className="pagina__aviso">Nenhuma quadra com esses filtros. Tente tirar algum.</p>
      ) : (
        <div className="busca__lista">
          {quadras.map((quadra) => (
            <QuadraCard key={quadra.id} quadra={quadra} />
          ))}
        </div>
      )}
    </div>
  );
}
