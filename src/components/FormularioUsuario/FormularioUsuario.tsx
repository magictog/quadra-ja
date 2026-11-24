// Formulário de dados do usuário. O mesmo componente serve para o Cadastro
// e para editar o Perfil: o que muda vem pelas props (componente parametrizado).
import { useState } from "react";
import type { FormEvent } from "react";
import type { NovoUsuario } from "../../types/Usuario";

type FormularioUsuarioProps = {
  valoresIniciais?: NovoUsuario;
  textoBotao: string;
  aoSalvar: (dados: NovoUsuario) => Promise<void>;
};

const VAZIO: NovoUsuario = { nome: "", email: "", senha: "", telefone: "" };

export function FormularioUsuario({
  valoresIniciais = VAZIO,
  textoBotao,
  aoSalvar,
}: Readonly<FormularioUsuarioProps>) {
  const [dados, setDados] = useState(valoresIniciais);
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  // Uma função para todos os campos: copia os dados (spread) e troca só o campo digitado.
  function mudarCampo(campo: keyof NovoUsuario, valor: string) {
    setDados({ ...dados, [campo]: valor });
  }

  async function enviar(evento: FormEvent) {
    evento.preventDefault();

    if (dados.senha.length < 6) {
      setErro("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    try {
      setErro("");
      setEnviando(true);
      await aoSalvar(dados);
    } catch {
      setErro("Não foi possível salvar. Tente de novo.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <label className="formulario__campo">
        Nome completo
        <input className="formulario__entrada" required value={dados.nome}
          onChange={(e) => mudarCampo("nome", e.target.value)} />
      </label>
      <label className="formulario__campo">
        E-mail
        <input className="formulario__entrada" type="email" required value={dados.email}
          onChange={(e) => mudarCampo("email", e.target.value)} />
      </label>
      <label className="formulario__campo">
        Telefone (WhatsApp)
        <input className="formulario__entrada" type="tel" placeholder="(11) 90000-0000" value={dados.telefone}
          onChange={(e) => mudarCampo("telefone", e.target.value)} />
      </label>
      <label className="formulario__campo">
        Senha
        <input className="formulario__entrada" type="password" required value={dados.senha}
          onChange={(e) => mudarCampo("senha", e.target.value)} />
      </label>

      {erro && <p className="formulario__erro">{erro}</p>}

      <button className="botao botao--primario" type="submit" disabled={enviando}>
        {enviando ? "Salvando..." : textoBotao}
      </button>
    </form>
  );
}
