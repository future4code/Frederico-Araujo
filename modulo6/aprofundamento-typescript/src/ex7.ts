enum idadeHistorica {
  AC = "AC",
  DC = "DC",
}

type anos = {
  ano: number;
  idade?: idadeHistorica;
};

const retornaAno = (anoDigitado: number, idade?: idadeHistorica): string => {
  if (!idade) {
    return `${anoDigitado} DC`;
  } else if (idade === idadeHistorica.DC) {
    return `${anoDigitado} ${idade}`;
  } else {
    return `${anoDigitado} ${idade}`;
  }
};

// console.log(retornaAno(1995));
