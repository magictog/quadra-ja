// Cabeçalho com o logo e o menu. No celular o menu abre e fecha pelo botão.
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useUsuario } from "../../contexts/UsuarioContext";
import "./Header.css";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { usuario } = useUsuario();

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="header">
      <Link className="header__logo" to="/" onClick={fecharMenu}>
        Quadra<span className="header__logo-destaque">Já</span>
      </Link>

      <button
        className="header__botao-menu"
        type="button"
        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* O modificador --aberto mostra o menu no celular */}
      <nav className={menuAberto ? "header__menu header__menu--aberto" : "header__menu"}>
        <NavLink className="header__link" to="/esportes" onClick={fecharMenu}>Esportes</NavLink>
        <NavLink className="header__link" to="/quadras" onClick={fecharMenu}>Buscar quadras</NavLink>
        <NavLink className="header__link" to="/minhas-reservas" onClick={fecharMenu}>Minhas reservas</NavLink>
        <NavLink className="header__link" to="/anunciar" onClick={fecharMenu}>Anunciar quadra</NavLink>
        {usuario ? (
          <NavLink className="header__link header__link--conta" to="/perfil" onClick={fecharMenu}>
            Olá, {usuario.nome.split(" ")[0]}
          </NavLink>
        ) : (
          <NavLink className="header__link header__link--conta" to="/entrar" onClick={fecharMenu}>
            Entrar
          </NavLink>
        )}
      </nav>
    </header>
  );
}
