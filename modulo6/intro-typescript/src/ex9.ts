const estudaNaLabenu = (
  idade: number,
  ensinoMedio: boolean,
  horasDisponiveis: number,
  integralOuNoturno: string
): boolean => {
  if (idade >= 18 && ensinoMedio === true) {
    if (integralOuNoturno === "integral") {
      if (horasDisponiveis >= 40) {
        return true;
      } else {
        return false;
      }
    } else {
      if (horasDisponiveis >= 20) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

// console.log(estudaNaLabenu(18, true, 20, "noturno"));
