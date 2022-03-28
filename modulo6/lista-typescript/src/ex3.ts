enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type filme = {
  nome: string;
  ano: number;
  genero: GENERO;
  pontuacao?: number;
};

const retornaFilme = (dados: filme): filme => {
  return dados;
};

// console.log(
//   retornaFilme({
//     nome: "Hulk",
//     ano: 1994,
//     genero: GENERO.ACAO,
//     pontuacao: 100,
//   })
// );
