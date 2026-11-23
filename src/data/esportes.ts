// Lista dos esportes do site. A tela Esportes e os filtros usam esta lista.
import type { Esporte } from "../types/Quadra";

export type InfoEsporte = {
  id: Esporte;
  nome: string;
  descricao: string;
};

export const esportes: InfoEsporte[] = [
  { id: "society", nome: "Futebol society", descricao: "Campo de grama sintética, 7 contra 7." },
  { id: "futsal", nome: "Futsal", descricao: "Quadra coberta, piso de madeira ou vinílico." },
  { id: "tenis", nome: "Tênis", descricao: "Quadras de saibro ou rápida, simples ou duplas." },
  { id: "beach-tennis", nome: "Beach tennis", descricao: "Quadras de areia, ótimo para iniciantes." },
  { id: "volei", nome: "Vôlei", descricao: "Quadra ou areia, para jogar com a galera." },
  { id: "basquete", nome: "Basquete", descricao: "Quadras alugadas e quadras públicas grátis." },
  { id: "handebol", nome: "Handebol", descricao: "Quadra poliesportiva com gol e marcação." },
];

// Devolve o nome do esporte a partir do id (ex.: "tenis" vira "Tênis").
export function nomeDoEsporte(id: string) {
  const esporte = esportes.find((item) => item.id === id);
  return esporte ? esporte.nome : id;
}
