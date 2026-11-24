// Camada de serviço dos usuários (cadastro, login e edição do perfil).
import type { NovoUsuario, Usuario } from "../types/Usuario";
import { api } from "./api";

const RECURSO = "/usuarios";

export async function cadastrarUsuario(usuario: NovoUsuario) {
  const resposta = await api.post<Usuario>(RECURSO, usuario);
  return resposta.data;
}

// O CrudCrud não tem login. Para o trabalho, buscamos todos e procuramos o e-mail.
// Num site real, quem confere a senha é o servidor.
export async function entrar(email: string, senha: string) {
  const resposta = await api.get<Usuario[]>(RECURSO);
  const usuario = resposta.data.find(
    (item) => item.email === email && item.senha === senha,
  );
  return usuario ?? null;
}

export async function alterarUsuario(id: string, usuario: NovoUsuario) {
  await api.put(`${RECURSO}/${id}`, usuario);
  return { ...usuario, _id: id };
}
