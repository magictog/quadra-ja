// Instância do axios usada por todos os services (igual ao tarefaService da aula).
// O endereço do CrudCrud fica no arquivo .env, na variável VITE_API_URL.
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
