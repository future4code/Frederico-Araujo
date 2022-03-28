type contas = {
  cliente: string;
  saldoTotal: number;
  debitos?: number[];
};

const contasDosClientes: contas[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

const retornaDevedores = (contas: contas[]): contas[] => {
  const devedores = contas.filter((conta) => {
    const somaDebitos: number | undefined = conta.debitos?.reduce(
      (a, b) => a + b,
      0
    );

    if (somaDebitos) {
      return conta.saldoTotal - somaDebitos < 0;
    }
  });
  return devedores;
};

// console.log(retornaDevedores(contasDosClientes));
