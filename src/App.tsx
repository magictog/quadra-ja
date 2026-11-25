// Rotas do site. Os Providers ficam em volta de tudo para que qualquer tela
// consiga usar useUsuario() e useReservas().
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ReservasProvider } from "./contexts/ReservasContext";
import { UsuarioProvider } from "./contexts/UsuarioContext";
import { Ajuda } from "./pages/Ajuda/Ajuda";
import { BuscarQuadras } from "./pages/BuscarQuadras/BuscarQuadras";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { CadastrarQuadra } from "./pages/CadastrarQuadra/CadastrarQuadra";
import { ComoFunciona } from "./pages/ComoFunciona/ComoFunciona";
import { DetalheQuadra } from "./pages/DetalheQuadra/DetalheQuadra";
import { EscolherHorario } from "./pages/EscolherHorario/EscolherHorario";
import { Esportes } from "./pages/Esportes/Esportes";
import { Inicio } from "./pages/Inicio/Inicio";
import { Login } from "./pages/Login/Login";
import { MinhasReservas } from "./pages/MinhasReservas/MinhasReservas";
import { Pagamento } from "./pages/Pagamento/Pagamento";
import { Perfil } from "./pages/Perfil/Perfil";
import { ReservaConfirmada } from "./pages/ReservaConfirmada/ReservaConfirmada";
import { ResumoReserva } from "./pages/ResumoReserva/ResumoReserva";

export default function App() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <ReservasProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Inicio />} />
              <Route path="/esportes" element={<Esportes />} />
              <Route path="/quadras" element={<BuscarQuadras />} />
              <Route path="/quadras/:id" element={<DetalheQuadra />} />
              <Route path="/quadras/:id/horario" element={<EscolherHorario />} />
              <Route path="/reserva/resumo" element={<ResumoReserva />} />
              <Route path="/reserva/pagamento" element={<Pagamento />} />
              <Route path="/reserva/confirmada/:id" element={<ReservaConfirmada />} />
              <Route path="/entrar" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/minhas-reservas" element={<MinhasReservas />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/anunciar" element={<CadastrarQuadra />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/ajuda" element={<Ajuda />} />
            </Route>
          </Routes>
        </ReservasProvider>
      </UsuarioProvider>
    </BrowserRouter>
  );
}
