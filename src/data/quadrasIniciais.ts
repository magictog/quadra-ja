// As 25 quadras do site. São quadras reais de São Paulo, pesquisadas no Google Maps
// e nos sites oficiais em 21/11/2026. As avaliações foram resumidas com outras palavras.
// Preço: só a SilverGold publica o valor. Nas outras usamos um preço de exemplo
// (precoReal: false) e a tela avisa isso.
import type { Quadra } from "../types/Quadra";

const siteOficial = (nome: string) => `Foto: site oficial da ${nome}`;
const googleMaps = (nome: string) => `Foto: perfil da ${nome} no Google Maps`;

export const quadrasIniciais: Quadra[] = [
  {
    id: 1, nome: "Rolley Ball", esportes: ["society"],
    bairro: "Santo Amaro", zona: "Sul", endereco: "R. Galeno de Castro, 479 - Santo Amaro",
    nota: 4.5, totalAvaliacoes: 1060, coberta: null, piso: "Grama sintética",
    vestiario: true, estacionamento: null, preco: 160, precoReal: false,
    horario: "Seg. a sex. 09h–23h · Sáb. 09h–18h · Dom. 08h–16h",
    fotos: ["1-rolley-ball-1.jpg"], creditoFoto: googleMaps("Rolley Ball"),
    avaliacoes: [
      { autor: "Douglas S.", estrelas: 5, data: "nov/2026", texto: "Gostou muito das aulas e da didática do professor." },
      { autor: "Tiago N.", estrelas: 5, data: "mai/2026", texto: "O filho está há quase um ano na escolinha e evoluiu bastante." },
    ],
  },
  {
    id: 2, nome: "Arena Soccer Grass", esportes: ["society"],
    bairro: "Santo Amaro", zona: "Sul", endereco: "Av. Guido Caloi, 701 - Santo Amaro",
    nota: 4.4, totalAvaliacoes: 1536, coberta: null, piso: "Grama sintética",
    vestiario: true, estacionamento: true, preco: 180, precoReal: false,
    horario: "Consulte a quadra (sáb. até 18h)",
    fotos: ["2-arena-soccer-grass-1.jpg"], creditoFoto: siteOficial("Arena Soccer Grass"),
    avaliacoes: [
      { autor: "João R.", estrelas: 5, data: "out/2026", texto: "Quadras e estrutura de primeira." },
      { autor: "Paulo S.", estrelas: 1, data: "out/2026", texto: "As quadras são boas, mas a lanchonete deixa a desejar." },
    ],
  },
  {
    id: 3, nome: "Playball Pompeia", esportes: ["society"],
    bairro: "Pompeia", zona: "Oeste", endereco: "Av. Nicolas Boer, 66 - Pompeia",
    nota: 4.4, totalAvaliacoes: 1247, coberta: null, piso: "Grama sintética",
    vestiario: null, estacionamento: null, preco: 170, precoReal: false,
    horario: "Seg. a sex. 08h–01h · Sáb. 08h–00h · Dom. 08h–19h",
    fotos: ["3-playball-pompeia-1.jpg"], creditoFoto: googleMaps("Playball Pompeia"),
    avaliacoes: [
      { autor: "Rafael R.", estrelas: 3, data: "nov/2026", texto: "Bem localizado e com bom atendimento, mas precisa de manutenção." },
      { autor: "Anderson S.", estrelas: 2, data: "nov/2026", texto: "Pegou uma quadra com a grade furada pela segunda vez." },
    ],
  },
  {
    id: 4, nome: "Arena Flash Ball Society", esportes: ["society"],
    bairro: "Vila Guilherme", zona: "Norte", endereco: "R. Amazonas da Silva, 23 - Vila Guilherme",
    nota: 4.5, totalAvaliacoes: 640, coberta: null, piso: "Grama sintética",
    vestiario: null, estacionamento: true, preco: 150, precoReal: false,
    horario: "Seg. a sex. 16h–02h · Sáb. 07h–21h30 · Dom. 07h–15h",
    fotos: ["4-arena-flash-ball-society-1.jpg"], creditoFoto: googleMaps("Arena Flash Ball Society"),
    avaliacoes: [
      { autor: "Anderson N.", estrelas: 5, data: "mai/2026", texto: "Campos bem cuidados, grama boa e ambiente familiar." },
      { autor: "Fábio S.", estrelas: 4, data: "jul/2026", texto: "Lugar bom, só o estacionamento que é pago." },
    ],
  },
  {
    id: 5, nome: "BR Arena Pinheiros", esportes: ["society"],
    bairro: "Pinheiros", zona: "Oeste", endereco: "R. Artur de Azevedo, 01 - Pinheiros",
    nota: 4.4, totalAvaliacoes: 348, coberta: null, piso: "Grama sintética",
    vestiario: null, estacionamento: null, preco: 190, precoReal: false,
    horario: "Seg. a sex. 09h–00h · Sáb. e dom. 07h–17h",
    fotos: ["5-br-arena-pinheiros-1.jpg"], creditoFoto: googleMaps("BR Arena Pinheiros"),
    avaliacoes: [
      { autor: "Carlos O.", estrelas: 5, data: "ago/2026", texto: "Trabalha com arbitragem e foi muito bem recebido." },
    ],
  },
  {
    id: 6, nome: "Penha Futebol Society", esportes: ["society"],
    bairro: "Vila Beatriz (Penha)", zona: "Leste", endereco: "R. Alvinópolis, 453 - Vila Beatriz",
    nota: 4.4, totalAvaliacoes: 621, coberta: false, piso: "Grama sintética",
    vestiario: null, estacionamento: null, preco: 140, precoReal: false,
    horario: "Seg. a sex. 08h–00h · Sáb. 07h–22h · Dom. 07h–14h",
    fotos: ["6-penha-futebol-society-1.jpg"], creditoFoto: googleMaps("Penha Futebol Society"),
    avaliacoes: [
      { autor: "Gui A.", estrelas: 5, data: "2022", texto: "Campo grande que não alagou nem com chuva forte." },
      { autor: "Robson G.", estrelas: 5, data: "2024", texto: "Tem dois bares e escolinha com professor atencioso." },
    ],
  },
  {
    id: 7, nome: "Power Sports", esportes: ["society", "tenis", "volei"],
    bairro: "Vila Moreira (Tatuapé)", zona: "Leste", endereco: "Av. Talma de Oliveira, 77 - Vila Moreira",
    nota: 4.5, totalAvaliacoes: 652, coberta: true, piso: "Grama sintética",
    vestiario: true, estacionamento: true, preco: 170, precoReal: false,
    horario: "Seg. a sex. 09h–00h · Sáb. 08h–19h · Dom. 08h–14h",
    fotos: ["7-power-sports-1.jpg", "7-power-sports-2.jpg"], creditoFoto: siteOficial("Power Sports"),
    avaliacoes: [
      { autor: "Marcio", estrelas: 5, data: "jun/2026", texto: "Joga lá há 8 anos: quadras ótimas e vestiário grande." },
      { autor: "Luca A.", estrelas: 5, data: "ago/2026", texto: "Muitas quadras e espaço para comer depois." },
    ],
  },
  {
    id: 8, nome: "SilverGold Academia de Esportes", esportes: ["futsal", "volei"],
    bairro: "Vila Maria Alta", zona: "Norte", endereco: "Praça Yedo, 136 - Vila Maria Alta",
    nota: 4.5, totalAvaliacoes: 661, coberta: true, piso: "Taco de madeira",
    vestiario: true, estacionamento: null, preco: 175, precoReal: true,
    horario: "Seg. a sex. 16h–23h · Sáb. 09h–21h · Dom. 07h–16h",
    fotos: ["8-silvergold-academia-de-esportes-1.jpg", "8-silvergold-academia-de-esportes-2.jpg"],
    creditoFoto: siteOficial("SilverGold Academia de Esportes"),
    avaliacoes: [
      { autor: "Lauro M.", estrelas: 5, data: "jun/2026", texto: "A quadra de futsal foi reformada e ficou ótima." },
      { autor: "Alan E.", estrelas: 5, data: "abr/2026", texto: "Ambiente familiar e duas quadras boas." },
    ],
  },
  {
    id: 9, nome: "Quadras Cobertas de Futsal e Vôlei", esportes: ["futsal", "volei"],
    bairro: "Vila Pirajussara", zona: "Oeste", endereco: "R. Martinho Vaz de Barros, 248 - Vila Pirajussara",
    nota: 4.6, totalAvaliacoes: 198, coberta: true, piso: "Não informado",
    vestiario: true, estacionamento: null, preco: 150, precoReal: false,
    horario: "Ter., qua., sex. e sáb. 08h–23h · Dom. 08h–20h",
    fotos: ["9-quadras-cobertas-futsal-e-volei-1.jpg"], creditoFoto: googleMaps("Quadras Cobertas de Futsal e Vôlei"),
    avaliacoes: [
      { autor: "Wesley A.", estrelas: 5, data: "2019", texto: "Lugar completo, com 2 quadras, lanchonete e vestiários." },
      { autor: "Luciano F.", estrelas: 3, data: "2024", texto: "Quadra excelente, mas o teto vaza quando chove." },
    ],
  },
  {
    id: 10, nome: "Arena Futsal e Voley", esportes: ["futsal", "volei"],
    bairro: "Belenzinho", zona: "Leste", endereco: "R. Toledo Barbosa, 542 - Belenzinho",
    nota: 4.4, totalAvaliacoes: 136, coberta: true, piso: "Não informado",
    vestiario: null, estacionamento: null, preco: 140, precoReal: false,
    horario: "Consulte a quadra",
    fotos: ["10-arena-futsal-e-voley-1.jpg"], creditoFoto: googleMaps("Arena Futsal e Voley"),
    avaliacoes: [
      { autor: "Bruno N.", estrelas: 5, data: "2024", texto: "Atendimento ótimo, mas a quadra precisa de limpeza." },
      { autor: "Kayque A.", estrelas: 3, data: "2024", texto: "Quadra pequena e a iluminação podia ser melhor." },
    ],
  },
  {
    id: 11, nome: "Quadra Kalala", esportes: ["futsal"],
    bairro: "Vila Paulistânia", zona: "Leste", endereco: "Rua Alberto Williams, 6 - Vila Paulistânia",
    nota: 4.1, totalAvaliacoes: 308, coberta: null, piso: "Não informado",
    vestiario: null, estacionamento: null, preco: 120, precoReal: false,
    horario: "Todos os dias 08h–00h",
    fotos: ["11-quadra-kalala-1.jpg"], creditoFoto: googleMaps("Quadra Kalala"),
    avaliacoes: [
      { autor: "Rudah P.", estrelas: 5, data: "2023", texto: "Quadra grande e boa estrutura, só um pouco escura." },
      { autor: "Rosana A.", estrelas: 5, data: "2024", texto: "Bom para jogar bola e encontrar os amigos." },
    ],
  },
  {
    id: 12, nome: "Tennis Lounge Moema", esportes: ["tenis"],
    bairro: "Moema", zona: "Sul", endereco: "Alameda dos Maracatins, 1681 - Moema",
    nota: 4.7, totalAvaliacoes: 102, coberta: null, piso: "Saibro ou rápida",
    vestiario: true, estacionamento: null, preco: 130, precoReal: false,
    horario: "Seg. a sex. 06h–00h · Sáb. e dom. 07h–22h",
    fotos: ["12-tennis-lounge-moema-1.jpg"], creditoFoto: googleMaps("Tennis Lounge Moema"),
    avaliacoes: [
      { autor: "Liliane S.", estrelas: 1, data: "set/2026", texto: "O professor é excelente, a recepção nem tanto." },
    ],
  },
  {
    id: 13, nome: "Top One Tennis", esportes: ["tenis"],
    bairro: "Indianópolis", zona: "Sul", endereco: "Av. Indianópolis, 647 - Indianópolis",
    nota: 4.7, totalAvaliacoes: 61, coberta: null, piso: "Saibro",
    vestiario: true, estacionamento: null, preco: 120, precoReal: false,
    horario: "Seg. a sex. 06h–22h · Sáb. 07h–17h · Dom. 07h–14h",
    fotos: ["13-top-one-tennis-1.jpg"], creditoFoto: siteOficial("Top One Tennis"),
    avaliacoes: [
      { autor: "Victor C.", estrelas: 5, data: "2018", texto: "Quadras de saibro perfeitas no meio de Moema." },
      { autor: "Eduardo I.", estrelas: 4, data: "2024", texto: "Três quadras boas; a quadra 1 tem pouco espaço no fundo." },
    ],
  },
  {
    id: 14, nome: "PlayTennis Santana", esportes: ["tenis"],
    bairro: "Santana", zona: "Norte", endereco: "R. Bento de Alvarenga, 15 - Santana",
    nota: 4.4, totalAvaliacoes: 218, coberta: true, piso: "Saibro",
    vestiario: null, estacionamento: null, preco: 110, precoReal: false,
    horario: "Seg. a sex. 07h–22h · Sáb. 08h–20h · Dom. 08h–18h",
    fotos: ["14-playtennis-santana-1.jpg"], creditoFoto: siteOficial("PlayTennis (unidade Santana)"),
    avaliacoes: [
      { autor: "Isabella M.", estrelas: 5, data: "out/2026", texto: "Boa equipe, bons professores e quadras bem cuidadas." },
      { autor: "Fernando L.", estrelas: 1, data: "nov/2026", texto: "Acha que as regras mudam toda hora e falta clareza." },
    ],
  },
  {
    id: 15, nome: "PlayTennis Nova Ipiranga", esportes: ["tenis"],
    bairro: "Ipiranga", zona: "Sul", endereco: "Rua Costa Aguiar, 490 - Ipiranga",
    nota: 4.8, totalAvaliacoes: 69, coberta: true, piso: "Saibro",
    vestiario: null, estacionamento: null, preco: 110, precoReal: false,
    horario: "Seg. a sex. 06h30–23h · Sáb. 08h–20h · Dom. 08h–18h",
    fotos: ["15-playtennis-nova-ipiranga-1.jpg"], creditoFoto: siteOficial("PlayTennis (unidade Nova Ipiranga)"),
    avaliacoes: [
      { autor: "Marcelo O.", estrelas: 5, data: "nov/2026", texto: "Clima acolhedor, parece uma comunidade de amigos." },
      { autor: "José V.", estrelas: 5, data: "out/2026", texto: "Unidade organizada; a recepção ajuda nos agendamentos." },
    ],
  },
  {
    id: 16, nome: "Saúde Beach Arena", esportes: ["beach-tennis", "volei"],
    bairro: "Vila Gumercindo (Saúde)", zona: "Sul", endereco: "Rua Dom Pero Sardinha, 45 - Vila Gumercindo",
    nota: 4.6, totalAvaliacoes: 244, coberta: null, piso: "Areia",
    vestiario: null, estacionamento: null, preco: 130, precoReal: false,
    horario: "Consulte a quadra (sáb. até 22h)",
    fotos: ["16-saude-beach-arena-1.jpg"], creditoFoto: googleMaps("Saúde Beach Arena"),
    avaliacoes: [
      { autor: "Larissa I.", estrelas: 5, data: "jun/2026", texto: "Comemorou os 30 anos lá e foi muito bem atendida." },
    ],
  },
  {
    id: 17, nome: "Klabin Beach Sports", esportes: ["beach-tennis", "volei"],
    bairro: "Ipiranga", zona: "Sul", endereco: "R. Agostinho Gomes, 2356 - Ipiranga",
    nota: 4.3, totalAvaliacoes: 381, coberta: null, piso: "Areia",
    vestiario: null, estacionamento: null, preco: 140, precoReal: false,
    horario: "Seg. a sex. 07h–23h · Sáb. 08h–22h · Dom. 09h–20h",
    fotos: ["17-klabin-beach-sports-1.jpg"], creditoFoto: googleMaps("Klabin Beach Sports"),
    avaliacoes: [
      { autor: "Karina T.", estrelas: 5, data: "2025", texto: "Quadras grandes, bem cuidadas e com areia boa." },
      { autor: "Valeria V.", estrelas: 4, data: "dez/2025", texto: "Lugar excelente, mas o pedido do lanche foi confuso." },
    ],
  },
  {
    id: 18, nome: "Bora Bora Beach Sports", esportes: ["beach-tennis"],
    bairro: "Vila Madalena", zona: "Oeste", endereco: "R. Girassol, 77 - Vila Madalena",
    nota: 4.3, totalAvaliacoes: 24, coberta: false, piso: "Areia",
    vestiario: true, estacionamento: null, preco: 150, precoReal: false,
    horario: "Seg. a sex. 07h–23h · Sáb. 07h–21h · Dom. 07h–18h",
    fotos: ["18-bora-bora-beach-sports-1.jpg"], creditoFoto: googleMaps("Bora Bora Beach Sports"),
    avaliacoes: [
      { autor: "Ruan C.", estrelas: 5, data: "2022", texto: "Duas quadras, bar, vestiário simples e aluguel avulso." },
      { autor: "José T.", estrelas: 4, data: "out/2026", texto: "Gostou das aulas de beach tennis." },
    ],
  },
  {
    id: 19, nome: "Villa Beach Sports", esportes: ["beach-tennis"],
    bairro: "Vila Mariana", zona: "Sul", endereco: "Travessa Luiz Puglisi, 56 - Vila Mariana",
    nota: 4.3, totalAvaliacoes: 118, coberta: null, piso: "Areia",
    vestiario: null, estacionamento: null, preco: 130, precoReal: false,
    horario: "Todos os dias 09h–22h",
    fotos: ["19-villa-beach-sports-1.jpg"], creditoFoto: googleMaps("Villa Beach Sports"),
    avaliacoes: [
      { autor: "Camila", estrelas: 5, data: "2024", texto: "Equipe acolhedora e boas aulas." },
      { autor: "Laia R.", estrelas: 4, data: "2025", texto: "Foi num aniversário: pagode ao vivo e hambúrguer bom." },
    ],
  },
  {
    id: 20, nome: "Arena Tatuapraia", esportes: ["beach-tennis"],
    bairro: "Parque São Jorge", zona: "Leste", endereco: "R. São Felipe, 597 - Parque São Jorge",
    nota: 4.0, totalAvaliacoes: 544, coberta: null, piso: "Areia",
    vestiario: null, estacionamento: null, preco: 120, precoReal: false,
    horario: "Consulte a quadra (sáb. até 20h)",
    fotos: ["20-arena-tatuapraia-1.jpg"], creditoFoto: googleMaps("Arena Tatuapraia"),
    avaliacoes: [
      { autor: "Sabrina F.", estrelas: 1, data: "jul/2026", texto: "Achou os preços do bar muito altos." },
    ],
  },
  {
    id: 21, nome: "Esporte Conviver", esportes: ["basquete", "futsal", "volei"],
    bairro: "Penha de França", zona: "Leste", endereco: "R. Padre Benedito de Camargo, 573 - Penha de França",
    nota: 4.8, totalAvaliacoes: 424, coberta: null, piso: "Não informado",
    vestiario: null, estacionamento: true, preco: 130, precoReal: false,
    horario: "Seg. a sex. a partir das 08h ou 13h · Sáb. 07h30–13h30 · Dom. fechado",
    fotos: ["21-esporte-conviver-1.jpg"], creditoFoto: googleMaps("Esporte Conviver"),
    avaliacoes: [
      { autor: "Robson M.", estrelas: 4, data: "2025", texto: "Alugam a quadra para eventos; tudo limpo e com estacionamento." },
      { autor: "Marilda B.", estrelas: 5, data: "mai/2026", texto: "Bons profissionais e estacionamento grátis." },
    ],
  },
  {
    id: 22, nome: "CDC Vila Clementino", esportes: ["basquete", "volei", "futsal"],
    bairro: "Vila Clementino", zona: "Sul", endereco: "R. Dr. Diogo de Faria, 1084 - Vila Clementino",
    nota: 4.0, totalAvaliacoes: 96, coberta: true, piso: "Não informado",
    vestiario: null, estacionamento: true, preco: 100, precoReal: false,
    horario: "Todos os dias 08h–22h",
    fotos: ["22-cdc-vila-clementino-1.jpg"], creditoFoto: googleMaps("CDC Vila Clementino"),
    avaliacoes: [
      { autor: "Márcio P.", estrelas: 5, data: "2023", texto: "Ambiente tranquilo e fácil de chegar pelo metrô." },
      { autor: "Sandra L.", estrelas: 1, data: "2025", texto: "A quadra é boa, mas fica escorregadia quando chove." },
    ],
  },
  {
    id: 23, nome: "Baska na Tancredo", esportes: ["basquete"],
    bairro: "Vila da Saúde", zona: "Sul", endereco: "R. Abagiba, 30 - Vila da Saúde",
    nota: 4.5, totalAvaliacoes: 232, coberta: false, piso: "Não informado",
    vestiario: false, estacionamento: true, preco: 0, precoReal: true,
    horario: "Quadra pública",
    fotos: ["23-baska-na-tancredo-1.jpg"], creditoFoto: googleMaps("Baska na Tancredo"),
    avaliacoes: [
      { autor: "Renato C.", estrelas: 5, data: "2025", texto: "Aro firme e banheiro na casa de cultura ao lado." },
      { autor: "Bianno W.", estrelas: 5, data: "2024", texto: "Tem estacionamento, playground e espaço para a família." },
    ],
  },
  {
    id: 24, nome: "Quadra Basquete Tiquatira", esportes: ["basquete"],
    bairro: "Penha (Parque Tiquatira)", zona: "Leste", endereco: "Av. Gov. Carvalho Pinto, 879 - Penha",
    nota: 4.0, totalAvaliacoes: 58, coberta: false, piso: "Não informado",
    vestiario: false, estacionamento: null, preco: 0, precoReal: true,
    horario: "Aberta 24 horas (quadra pública)",
    fotos: ["24-quadra-basquete-tiquatira-1.jpg"], creditoFoto: googleMaps("Quadra Basquete Tiquatira"),
    avaliacoes: [],
  },
  {
    id: 25, nome: "Quadra Esportiva R7", esportes: ["handebol", "volei", "futsal"],
    bairro: "Parque Mandaqui", zona: "Norte", endereco: "R. Srg. João Joaquim Dias, 76 - Parque Mandaqui",
    nota: 4.8, totalAvaliacoes: 10, coberta: null, piso: "Vinílico",
    vestiario: true, estacionamento: null, preco: 150, precoReal: false,
    horario: "Consulte a quadra (sáb. até 23h)",
    fotos: ["25-quadra-esportiva-r7-1.jpg"], creditoFoto: googleMaps("Quadra Esportiva R7"),
    avaliacoes: [
      { autor: "Edson F.", estrelas: 5, data: "jan/2026", texto: "Piso vinílico, bom vestiário, churrasqueira e bar." },
      { autor: "Lene R.", estrelas: 5, data: "2025", texto: "Ambiente familiar e comida caseira gostosa." },
    ],
  },
];

// Procura uma quadra pelo id (usado nas telas de detalhe e reserva).
export function buscarQuadra(id: number) {
  return quadrasIniciais.find((quadra) => quadra.id === id);
}

// Link do Google Maps montado com o nome e o endereço.
export function linkDoMaps(quadra: Quadra) {
  const busca = encodeURIComponent(`${quadra.nome} ${quadra.endereco} São Paulo`);
  return `https://www.google.com/maps/search/?api=1&query=${busca}`;
}
