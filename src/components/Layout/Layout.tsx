// Estrutura fixa de todas as telas: Header em cima, conteúdo no meio, Rodapé embaixo.
// O <Outlet /> é o lugar onde a tela da rota atual aparece.
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Rodape } from "../Rodape/Rodape";
import "./Layout.css";

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout__conteudo">
        <Outlet />
      </main>
      <Rodape />
    </div>
  );
}
