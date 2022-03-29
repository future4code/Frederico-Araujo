type post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type usuario = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
};
//Preferi criar o array de posts separado, para facilitar o acesso à essa informação.

export const users: usuario[] = [
  {
    id: 1,
    name: "Fred",
    phone: 34263325,
    email: "fred95@gmail.com",
    website: "google.com",
  },
  {
    id: 2,
    name: "Camila",
    phone: 34263325,
    email: "camila@gmail.com",
    website: "google.com",
  },
  {
    id: 3,
    name: "Beatriz",
    phone: 34263325,
    email: "bia@gmail.com",
    website: "google.com",
  },
];

export const posts: post[] = [
  {
    id: 1,
    title: "Meu time",
    body: "Galo",
    userId: 1,
  },
  {
    id: 2,
    title: "Comida favorita",
    body: "Tropeiro",
    userId: 1,
  },
  {
    id: 3,
    title: "Cor favorita",
    body: "Azul",
    userId: 2,
  },
  {
    id: 4,
    title: "Atividade favorita",
    body: "Desenhar",
    userId: 3,
  },
  {
    id: 5,
    title: "Comida favorita",
    body: "Pizza",
    userId: 3,
  },
];
