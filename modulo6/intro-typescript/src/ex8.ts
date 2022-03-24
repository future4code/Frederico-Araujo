const reverteString = (palavra: string): string => {
  const novaString: string = palavra.split("").reverse().join("");

  return novaString;
};

// console.log(reverteString("Fred"));
