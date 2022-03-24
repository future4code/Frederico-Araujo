const operacoesMatematicas = (num1: number, num2: number): string => {
  const sum: number = num1 + num2;
  const sub: number = num1 - num2;
  const mult: number = num1 * num2;

  let maior: number;

  if (num1 >= num2) {
    maior = num1;
  } else {
    maior = num2;
  }

  return `A soma de ${num1} e ${num2} é ${sum}.
  ${num1} subtraído por ${num2} é igual a ${sub}.
  ${num1} multiplicado por ${num2} é igual a ${mult}.
  O maior número entre ${num1} e ${num2} é ${maior}
    `;
};

// console.log(operacoesMatematicas(4, 8));
