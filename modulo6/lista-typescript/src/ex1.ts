const recebeString = (nome: string, data: string): string => {
  const dataSeparada = data.split("/");

  return `Olá, me chamo ${nome}, nasci no dia ${dataSeparada[0]}, do mês ${dataSeparada[1]}, no ano de ${dataSeparada[2]}.`;
};

// console.log(recebeString("Fred", "30/05/1995"));
