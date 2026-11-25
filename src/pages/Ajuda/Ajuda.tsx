// Tela 15 · Ajuda e contato: perguntas frequentes que abrem e fecham, e um formulário.
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import "./Ajuda.css";

const perguntas = [
  { pergunta: "Posso cancelar uma reserva?", resposta: "Sim. Em Minhas reservas, cancele até 24 horas antes e receba o valor de volta." },
  { pergunta: "Posso trocar o dia ou o horário?", resposta: "Sim. Use o botão Remarcar em Minhas reservas e escolha um horário livre." },
  { pergunta: "O preço é por pessoa?", resposta: "Não. O preço é da quadra inteira, por hora." },
  { pergunta: "As quadras públicas precisam de reserva?", resposta: "Não. Elas são grátis e quem chega primeiro usa." },
  { pergunta: "Tenho uma quadra. Como anuncio?", resposta: "Vá em Anunciar quadra e preencha o formulário. Nossa equipe entra em contato." },
];

export function Ajuda() {
  // Guarda qual pergunta está aberta. null = todas fechadas.
  const [aberta, setAberta] = useState<number | null>(null);
  const [enviado, setEnviado] = useState(false);

  function alternarPergunta(indice: number) {
    setAberta(aberta === indice ? null : indice);
  }

  function enviarMensagem(evento: FormEvent) {
    evento.preventDefault();
    setEnviado(true); // só para o trabalho: a mensagem não vai para lugar nenhum
  }

  return (
    <div className="pagina">
      <h1>Ajuda e contato</h1>
      <p className="pagina__subtitulo">Perguntas que mais recebemos.</p>

      <div className="ajuda__perguntas">
        {perguntas.map((item, indice) => (
          <div className="ajuda__item" key={item.pergunta}>
            <button
              className="ajuda__pergunta"
              type="button"
              aria-expanded={aberta === indice}
              onClick={() => alternarPergunta(indice)}
            >
              {item.pergunta}
              <ChevronDown className={aberta === indice ? "ajuda__seta ajuda__seta--aberta" : "ajuda__seta"} />
            </button>
            {aberta === indice && <p className="ajuda__resposta">{item.resposta}</p>}
          </div>
        ))}
      </div>

      <h2>Não achou a resposta?</h2>
      {enviado ? (
        <p className="pagina__aviso">Mensagem enviada! Respondemos em até 1 dia útil.</p>
      ) : (
        <form className="formulario" onSubmit={enviarMensagem}>
          <label className="formulario__campo">
            E-mail
            <input className="formulario__entrada" type="email" required />
          </label>
          <label className="formulario__campo">
            Mensagem
            <textarea className="formulario__entrada" rows={4} required />
          </label>
          <button className="botao botao--primario" type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}
