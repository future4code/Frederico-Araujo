// const minhaString: string = 3; Mensagem de erro

// const meuNumero: number | string = 29; Utilizando pipe

enum coresFavoritas {
  AMARELO = "Amarelo",
  VERMELHO = "Vermelho",
  AZUL = "Azul",
}

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: coresFavoritas;
};

const pessoa1: pessoa = {
  nome: "Fred",
  idade: 26,
  corFavorita: coresFavoritas.AMARELO,
};

const pessoa2: pessoa = {
  nome: "Camila",
  idade: 30,
  corFavorita: coresFavoritas.AZUL,
};

const pessoa3: pessoa = {
  nome: "Beatriz",
  idade: 9,
  corFavorita: coresFavoritas.VERMELHO,
};
