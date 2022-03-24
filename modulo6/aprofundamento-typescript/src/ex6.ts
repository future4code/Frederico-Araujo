type consultas = {
  nome: string;
  idade: number;
  dataDaConsulta: string;
};

const agenda: consultas[] = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
  { nome: "Márcio", idade: 45, dataDaConsulta: "04/05/2021" },
];

const ordenaAgenda = agenda.sort((a: consultas, b: consultas) => {
  if (a.nome < b.nome) {
    return -1;
  } else {
    return 1;
  }
});

// console.log(ordenaAgenda);
