type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

//Para transpilar esse arquivo, deve-se utilizar o comando tsc no terminal e configurar a saída no tsconfig.json

//Caso o arquivo estivesse em alguma pasta específica, a mudança seria na configuração do tsconfig.json e package.json

// Utilizar o comando tsc transpila todos os arquivos.
