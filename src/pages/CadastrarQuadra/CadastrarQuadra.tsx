// Tela 13 · Cadastrar minha quadra: o dono preenche os dados e o anúncio vai para o CrudCrud.
import { useState } from "react";
import type { FormEvent } from "react";
import { esportes } from "../../data/esportes";
import { enviarAnuncio } from "../../services/anuncioService";
import type { Anuncio } from "../../services/anuncioService";

const VAZIO: Anuncio = {
  nomeQuadra: "",
  esporte: "society",
  bairro: "",
  endereco: "",
  precoHora: 0,
  contato: "",
};

export function CadastrarQuadra() {
  const [anuncio, setAnuncio] = useState<Anuncio>(VAZIO);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  // Copia o anúncio e troca só o campo que mudou (imutabilidade com spread)
  function mudar(campo: keyof Anuncio, valor: string | number) {
    setAnuncio({ ...anuncio, [campo]: valor });
  }

  async function enviar(evento: FormEvent) {
    evento.preventDefault();
    try {
      setErro("");
      await enviarAnuncio(anuncio);
      setEnviado(true);
    } catch {
      setErro("Não foi possível enviar o anúncio. Tente de novo.");
    }
  }

  if (enviado) {
    return (
      <div className="pagina">
        <h1>Recebemos o seu anúncio!</h1>
        <p className="pagina__aviso">
          A {anuncio.nomeQuadra} vai para análise. Entramos em contato pelo {anuncio.contato}.
        </p>
      </div>
    );
  }

  return (
    <div className="pagina">
      <h1>Anuncie a sua quadra</h1>
      <p className="pagina__subtitulo">Mostre preço e horários para quem procura onde jogar.</p>

      <form className="formulario" onSubmit={enviar}>
        <label className="formulario__campo">
          Nome da quadra
          <input className="formulario__entrada" required value={anuncio.nomeQuadra}
            onChange={(e) => mudar("nomeQuadra", e.target.value)} />
        </label>
        <label className="formulario__campo">
          Esporte principal
          <select className="formulario__entrada" value={anuncio.esporte}
            onChange={(e) => mudar("esporte", e.target.value)}>
            {esportes.map((item) => (
              <option key={item.id} value={item.id}>{item.nome}</option>
            ))}
          </select>
        </label>
        <label className="formulario__campo">
          Bairro
          <input className="formulario__entrada" required value={anuncio.bairro}
            onChange={(e) => mudar("bairro", e.target.value)} />
        </label>
        <label className="formulario__campo">
          Endereço
          <input className="formulario__entrada" required value={anuncio.endereco}
            onChange={(e) => mudar("endereco", e.target.value)} />
        </label>
        <label className="formulario__campo">
          Preço por hora (R$)
          <input className="formulario__entrada" type="number" min={0} required value={anuncio.precoHora}
            onChange={(e) => mudar("precoHora", Number(e.target.value))} />
        </label>
        <label className="formulario__campo">
          E-mail ou WhatsApp para contato
          <input className="formulario__entrada" required value={anuncio.contato}
            onChange={(e) => mudar("contato", e.target.value)} />
        </label>

        {erro && <p className="formulario__erro">{erro}</p>}

        <button className="botao botao--primario" type="submit">Enviar anúncio</button>
      </form>
    </div>
  );
}
