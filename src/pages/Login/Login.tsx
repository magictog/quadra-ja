// Tela 9 · Login: confere e-mail e senha e, se der certo, volta para onde a pessoa estava.
import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useReservas } from "../../contexts/ReservasContext";
import { useUsuario } from "../../contexts/UsuarioContext";

export function Login() {
  const { fazerLogin } = useUsuario();
  const { rascunho } = useReservas();
  const navegar = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function entrar(evento: FormEvent) {
    evento.preventDefault();
    try {
      const deuCerto = await fazerLogin(email, senha);
      if (!deuCerto) {
        setErro("E-mail ou senha incorretos.");
        return;
      }
      // Se a pessoa estava no meio de uma reserva, volta para o resumo
      navegar(rascunho ? "/reserva/resumo" : "/minhas-reservas");
    } catch {
      setErro("Não foi possível entrar agora. Tente de novo.");
    }
  }

  return (
    <div className="pagina">
      <h1>Entrar</h1>
      <p className="pagina__subtitulo">Acesse para reservar e ver as suas reservas.</p>

      <form className="formulario" onSubmit={entrar}>
        <label className="formulario__campo">
          E-mail
          <input className="formulario__entrada" type="email" required value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="formulario__campo">
          Senha
          <input className="formulario__entrada" type="password" required value={senha}
            onChange={(e) => setSenha(e.target.value)} />
        </label>

        {erro && <p className="formulario__erro">{erro}</p>}

        <button className="botao botao--primario" type="submit">Entrar</button>
        <p className="formulario__rodape">
          Ainda não tem conta? <Link to="/cadastro">Criar conta</Link>
        </p>
      </form>
    </div>
  );
}
