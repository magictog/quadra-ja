// Tela 10 · Cadastro: usa o FormularioUsuario vazio. O Perfil usa o mesmo formulário preenchido.
import { Link, useNavigate } from "react-router-dom";
import { FormularioUsuario } from "../../components/FormularioUsuario/FormularioUsuario";
import { useReservas } from "../../contexts/ReservasContext";
import { useUsuario } from "../../contexts/UsuarioContext";
import type { NovoUsuario } from "../../types/Usuario";

export function Cadastro() {
  const { fazerCadastro } = useUsuario();
  const { rascunho } = useReservas();
  const navegar = useNavigate();

  async function cadastrar(dados: NovoUsuario) {
    await fazerCadastro(dados);
    navegar(rascunho ? "/reserva/resumo" : "/quadras");
  }

  return (
    <div className="pagina">
      <h1>Criar conta</h1>
      <p className="pagina__subtitulo">
        Leva menos de um minuto. Já tem conta? <Link to="/entrar">Entrar</Link>
      </p>
      <FormularioUsuario textoBotao="Criar conta" aoSalvar={cadastrar} />
    </div>
  );
}
