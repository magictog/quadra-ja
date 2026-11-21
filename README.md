# QuadraJá · aluguel de quadras em São Paulo

Trabalho da UC de Usabilidade, desenvolvimento web, mobile e jogos.

## Integrantes

| Pessoa | Nome | Telas |
|---|---|---|
| 1 | Gabriel Fornicola Amorim | Início · Como funciona · Ajuda e contato |
| 2 | Felipe Oliveira Soares | Esportes · Buscar quadras · Detalhe da quadra |
| 3 | Matheus Tognon Siqueira | Escolher horário · Resumo da reserva · Pagamento |
| 4 | Thiago Ferreira Lima Gonçalves | Reserva confirmada · Minhas reservas · Cadastrar minha quadra |
| 5 | Gabriel de Almeida do Carmo | Login · Cadastro · Perfil |

## A aplicação

Um site para achar e reservar quadras esportivas (society, futsal, tênis, beach tennis, vôlei, basquete e handebol). As 25 quadras são reais, de São Paulo, pesquisadas no Google Maps e nos sites oficiais. As reservas e os preços de exemplo são fictícios: só a SilverGold publica o preço (R$ 175/h).

**O problema que o site resolve.** Na pesquisa, 24 das 25 quadras não mostram o preço e nenhuma tem agenda online: tudo é pelo WhatsApp. Por isso o site mostra o preço no card, os horários livres na hora de reservar e a regra de cancelamento antes do pagamento.

## Como rodar

```bash
npm install
cp .env.example .env    # e troque SEU_ENDPOINT pelo seu endereço do crudcrud.com
npm run dev
```

O CrudCrud guarda as reservas, os usuários e os anúncios (recursos `/reservas`, `/usuarios` e `/anuncios`). O endereço gratuito vale por 24 horas: depois, gere outro em crudcrud.com e troque no `.env`.

## As 15 telas

| # | Tela | Rota |
|---|---|---|
| 1 | Início | `/` |
| 2 | Esportes | `/esportes` |
| 3 | Buscar quadras | `/quadras` |
| 4 | Detalhe da quadra | `/quadras/:id` |
| 5 | Escolher horário | `/quadras/:id/horario` |
| 6 | Resumo da reserva | `/reserva/resumo` |
| 7 | Pagamento (simulado) | `/reserva/pagamento` |
| 8 | Reserva confirmada | `/reserva/confirmada/:id` |
| 9 | Login | `/entrar` |
| 10 | Cadastro | `/cadastro` |
| 11 | Minhas reservas | `/minhas-reservas` |
| 12 | Perfil | `/perfil` |
| 13 | Cadastrar minha quadra | `/anunciar` |
| 14 | Como funciona | `/como-funciona` |
| 15 | Ajuda e contato | `/ajuda` |

Wireframes das telas mobile (baixa fidelidade, 360 px): pasta [`/wireframes`](./wireframes), um arquivo por tela (`tela_01.png` a `tela_15.png`).

## Componentes e variações

| Componente | Onde aparece | Variações |
|---|---|---|
| `QuadraCard` | Início, Buscar quadras | padrão, `--compacto` (destaques do Início), `--gratis` (quadra pública) |
| `ReservaCard` | Minhas reservas | padrão, `--cancelada` |
| `SeletorHorario` | Escolher horário, modal Remarcar | horário livre, `--escolhido`, ocupado ou já passou (desativado) |
| `RemarcarModal` | Minhas reservas | — |
| `FormularioUsuario` | Cadastro, Perfil | vazio (cadastro) ou preenchido (edição) |
| `Estrelas` | cards, detalhe, avaliações | com total de avaliações ou só a nota |
| `Header` | todas as telas | menu fechado ou `--aberto` (celular) |
| `Rodape` | todas as telas | — |
| botão (`.botao`) | todas as telas | `--primario`, `--secundario`, `--perigo`, `--largo`, desativado |
| selo (`.selo`) | cards, detalhe | padrão, `--gratis`, `--cancelada` |
| formulário (`.formulario`) | Login, Cadastro, Perfil, Pagamento, Anunciar, Ajuda | — |

## Organização dos arquivos

```
src/
  App.tsx            rotas + Providers
  main.tsx           carrega os estilos globais
  components/        uma pasta por componente: Nome.tsx + Nome.css (BEM)
  pages/             uma pasta por tela: Nome.tsx + Nome.css
  contexts/          ReservasContext (reservas) e UsuarioContext (login)
  services/          api.ts (axios) e um service por recurso do CrudCrud
  types/             Quadra, Reserva, Usuario
  data/              quadrasIniciais.ts (as 25 quadras) e esportes.ts
  utils/             formatos.ts (datas e preço)
  styles/            variables.css, global.css, botao.css, formulario.css
public/fotos/        fotos das quadras
```

## Conceitos da disciplina usados

- **Separação de responsabilidades:** só os services falam com a API; os contexts guardam o estado; as telas mostram.
- **Context + hook próprio:** `useReservas()` e `useUsuario()`.
- **Estado derivado com `filter`:** a busca, os horários ocupados e as abas de Minhas reservas saem da mesma lista, sem cópias.
- **POST × PUT:** criar reserva é POST; remarcar e cancelar são PUT (cancelar não apaga, muda o `status`).
- **Imutabilidade:** spread (`{ ...reserva, status: "cancelada" }`) e `map` para trocar só o item alterado.
- **Componente reaproveitado:** `SeletorHorario` (tela e modal) e `FormularioUsuario` (cadastro e perfil).
- **Modal que bloqueia o fundo:** `position: fixed; inset: 0`, como o TaskModal.

## Créditos

- Fotos: sites oficiais das quadras ou perfil de cada uma no Google Maps. O crédito aparece embaixo da foto, na tela de detalhe.
- Avaliações: resumidas com outras palavras a partir do Google Maps, com o autor identificado só pelo primeiro nome e a inicial.
- Ícones: [Lucide](https://lucide.dev).
