// Tipos que descrevem uma quadra. Os dados ficam em src/data/quadrasIniciais.ts.

// Tipo união: o esporte só pode ser um destes valores.
export type Esporte =
  | "society"
  | "futsal"
  | "tenis"
  | "beach-tennis"
  | "volei"
  | "basquete"
  | "handebol";

export type Zona = "Norte" | "Sul" | "Leste" | "Oeste";

export type Avaliacao = {
  autor: string;
  estrelas: number;
  data: string;
  texto: string;
};

export type Quadra = {
  id: number;
  nome: string;
  esportes: Esporte[];
  bairro: string;
  zona: Zona;
  endereco: string;
  nota: number;
  totalAvaliacoes: number;
  // null = a quadra não informa (não inventamos o dado)
  coberta: boolean | null;
  piso: string;
  vestiario: boolean | null;
  estacionamento: boolean | null;
  preco: number; // por hora. 0 = quadra pública (grátis)
  precoReal: boolean; // true só quando o preço foi publicado pela quadra
  horario: string;
  fotos: string[];
  creditoFoto: string;
  avaliacoes: Avaliacao[];
};
