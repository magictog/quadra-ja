// Rodapé com links de ajuda e o aviso de que é um trabalho acadêmico.
import { Link } from "react-router-dom";
import "./Rodape.css";

export function Rodape() {
  return (
    <footer className="rodape">
      <nav className="rodape__links">
        <Link to="/como-funciona">Como funciona</Link>
        <Link to="/ajuda">Ajuda e contato</Link>
        <Link to="/anunciar">Anunciar minha quadra</Link>
      </nav>
      <p className="rodape__aviso">
        Trabalho acadêmico da UC de Usabilidade, desenvolvimento web, mobile e jogos.
        As quadras são reais, mas as reservas e os preços de exemplo são fictícios.
      </p>
    </footer>
  );
}
