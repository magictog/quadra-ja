// Um usuário salvo no CrudCrud.

export type Usuario = {
  _id: string;
  nome: string;
  email: string;
  senha: string; // só para o trabalho: num site real a senha nunca fica salva assim
  telefone: string;
};

export type NovoUsuario = Omit<Usuario, "_id">;
