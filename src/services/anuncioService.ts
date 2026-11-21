// Camada de serviço dos anúncios: o dono de uma quadra pede para entrar no site.
import { api } from "./api";

export type Anuncio = {
  nomeQuadra: string;
  esporte: string;
  bairro: string;
  endereco: string;
  precoHora: number;
  contato: string;
};

export async function enviarAnuncio(anuncio: Anuncio) {
  await api.post("/anuncios", anuncio);
}
