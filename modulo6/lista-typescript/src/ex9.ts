const retornaAnagramas = (palavra: string): number => {
  const letras: string[] = palavra.split("");
  const letrasNaoRepetidas: string[] = letras.filter((item, index) => {
    return letras.indexOf(item) === index;
  });

  const quantidadeAnagramas: number = letrasNaoRepetidas.length;
  return quantidadeAnagramas;
};

// console.log(retornaAnagramas("frederico"));
