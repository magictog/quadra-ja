// Tela 12 · Perfil: mostra os dados e deixa editar com o mesmo FormularioUsuario do Cadastro.
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormularioUsuario } from "../../components/FormularioUsuario/FormularioUsuario";
import { useReservas } from "../../contexts/ReservasContext";
import { useUsuario } from "../../contexts/UsuarioContext";
import type { NovoUsuario } from "../../types/Usuario";
import "./Perfil.css";

export function Perfil() {
  const { usuario, atualizarPerfil, sair } = useUsuario();
  const { reservas } = useReservas();
  const navegar = useNavigate();
  const [editando, setEditando] = useState(false);

  if (!usuario) {
    return (
      <div className="pagina">
        <p className="pagina__aviso">Você não está logado. <Link to="/entrar">Entrar</Link></p>
      </div>
    );
  }

  const totalReservas = reservas.filter((reserva) => reserva.usuarioId === usuario._id).length;

  async function salvar(dados: NovoUsuario) {
    await atualizarPerfil(dados);
    setEditando(false);
  }

  function sairDaConta() {
    sair();
    navegar("/");
  }

  // Tira o _id: o formulário trabalha só com os campos editáveis
  const { _id, ...dadosAtuais } = usuario;

  return (
    <div className="pagina">
      <h1>Meu perfil</h1>

      {editando ? (
        <FormularioUsuario valoresIniciais={dadosAtuais} textoBotao="Salvar alterações" aoSalvar={salvar} />
      ) : (
        <div className="perfil__cartao">
          <p className="perfil__nome">{usuario.nome}</p>
          <p>{usuario.email}</p>
          <p>{usuario.telefone || "Telefone não informado"}</p>
          <p className="perfil__total">{totalReservas} reservas feitas</p>

          <div className="perfil__acoes">
            <button className="botao botao--primario" type="button" onClick={() => setEditando(true)}>
              Editar dados
            </button>
            <Link className="botao botao--secundario" to="/minhas-reservas">Minhas reservas</Link>
            <button className="botao botao--perigo" type="button" onClick={sairDaConta}>Sair</button>
          </div>
        </div>
      )}
    </div>
  );
}
