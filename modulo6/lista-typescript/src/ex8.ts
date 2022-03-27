type dadosPessoais = {
  nascimento: string;
  emissao: string;
};

const retornaRenovacao = (dados: dadosPessoais) => {
  const data: Date = new Date();
  const dataMs: number = data.getTime();

  const nascimento: Date = new Date(dados.nascimento);
  const nascimentoMs: number = nascimento.getTime();

  const emissao: Date = new Date(dados.emissao);
  const emissaoMs: number = emissao.getTime();

  const idade: number = (dataMs - nascimentoMs) / 31536000000;

  const tempoEmissao: number = (dataMs - emissaoMs) / 31536000000;

  if (idade <= 20) {
    if (tempoEmissao >= 5) {
      return "Deve renovar";
    } else {
      return "Não deve renovar";
    }
  } else if (idade > 20 && idade <= 50) {
    if (tempoEmissao >= 10) {
      return "Deve renovar";
    } else {
      return "Não deve renovar";
    }
  } else if (idade > 50) {
    if (tempoEmissao >= 15) {
      return "Deve renovar";
    } else {
      return "Não deve renovar";
    }
  }
};

// console.log(
//   retornaRenovacao({
//     nascimento: "1995-05-30",
//     emissao: "2009-05-30",
//   })
// );
