export type transactions = {
  balance: number;
  extract: number[];
};

export type user = {
  name: string;
  cpf: string;
  birthDate: string;
  transactions: transactions;
};

export let users: user[] = [
  {
    name: "Fred",
    cpf: "111.111.111-11",
    birthDate: "30/05/1995",
    transactions: {
      balance: 10,
      extract: [-5, 3, 12],
    },
  },

  {
    name: "Camila",
    cpf: "111.111.111-12",
    birthDate: "28/06/1991",
    transactions: {
      balance: 16,
      extract: [4, 12],
    },
  },

  {
    name: "Bia",
    cpf: "111.111.111-13",
    birthDate: "25/01/2013",
    transactions: {
      balance: 18,
      extract: [-2, 8, 12],
    },
  },
];
