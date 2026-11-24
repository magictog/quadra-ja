// Estado compartilhado do usuário logado.
// O Header, o Login, o Perfil e as reservas precisam saber quem está usando o site.
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import {
  alterarUsuario,
  cadastrarUsuario,
  entrar,
} from "../services/usuarioService";
import type { NovoUsuario, Usuario } from "../types/Usuario";

type UsuarioContextType = {
  usuario: Usuario | null;
  fazerLogin: (email: string, senha: string) => Promise<boolean>;
  fazerCadastro: (dados: NovoUsuario) => Promise<void>;
  atualizarPerfil: (dados: NovoUsuario) => Promise<void>;
  sair: () => void;
};

const UsuarioContext = createContext<UsuarioContextType | null>(null);

const CHAVE = "usuarioLogado";

// Lê o usuário salvo no navegador, para não perder o login ao recarregar a página.
function lerUsuarioSalvo() {
  const salvo = localStorage.getItem(CHAVE);
  return salvo ? (JSON.parse(salvo) as Usuario) : null;
}

type UsuarioProviderProps = {
  children: ReactNode;
};

export function UsuarioProvider({ children }: Readonly<UsuarioProviderProps>) {
  const [usuario, setUsuario] = useState<Usuario | null>(lerUsuarioSalvo);

  function guardarUsuario(novoUsuario: Usuario | null) {
    setUsuario(novoUsuario);
    if (novoUsuario) {
      localStorage.setItem(CHAVE, JSON.stringify(novoUsuario));
    } else {
      localStorage.removeItem(CHAVE);
    }
  }

  async function fazerLogin(email: string, senha: string) {
    const encontrado = await entrar(email, senha);
    guardarUsuario(encontrado);
    return encontrado !== null;
  }

  async function fazerCadastro(dados: NovoUsuario) {
    const criado = await cadastrarUsuario(dados);
    guardarUsuario(criado);
  }

  async function atualizarPerfil(dados: NovoUsuario) {
    if (!usuario) return;
    const atualizado = await alterarUsuario(usuario._id, dados);
    guardarUsuario(atualizado);
  }

  function sair() {
    guardarUsuario(null);
  }

  return (
    <UsuarioContext.Provider
      value={{ usuario, fazerLogin, fazerCadastro, atualizarPerfil, sair }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}

export function useUsuario() {
  const contexto = useContext(UsuarioContext);

  if (!contexto) {
    throw new Error("useUsuario deve ser usado dentro de UsuarioProvider.");
  }

  return contexto;
}
