const retornaCPF = (cpf: string): string => {
  const arrCpf: string[] = cpf.split("");

  const arrCpfSemDigitos: string[] = arrCpf
    .filter((item) => {
      return item !== ".";
    })
    .filter((item) => {
      return item !== "-";
    });

  let somaPenultimoDigito: number = 0;
  let penultimoDigito: number = 0;

  let somaUltimoDigito: number = 0;
  let ultimoDigito: number = 0;

  for (let i = 0; i < arrCpfSemDigitos.length - 2; i++) {
    let multiplo: number = 10;
    somaPenultimoDigito += Number(arrCpfSemDigitos[i]) * (multiplo - i);
  }

  let dvPenultimoDigito: number = somaPenultimoDigito % 11;

  if (11 - dvPenultimoDigito < 10) {
    let resultado: number = 11 - dvPenultimoDigito;
    penultimoDigito = Math.round(resultado);
  } else {
    penultimoDigito = 0;
  }

  for (let i = 0; i < arrCpfSemDigitos.length - 1; i++) {
    let multiplo: number = 11;
    somaUltimoDigito += Number(arrCpfSemDigitos[i]) * (multiplo - i);
  }

  let dvUltimoDigito: number = somaUltimoDigito % 11;

  if (11 - dvUltimoDigito < 10) {
    let resultado: number = 11 - dvUltimoDigito;
    ultimoDigito = Math.round(resultado);
  } else {
    ultimoDigito = 0;
  }

  if (
    penultimoDigito === Number(arrCpfSemDigitos[9]) &&
    ultimoDigito === Number(arrCpfSemDigitos[10])
  ) {
    return "CPF Válido";
  } else {
    return "CPF Inválido";
  }
};

// console.log(retornaCPF("066.506.626-07"));
