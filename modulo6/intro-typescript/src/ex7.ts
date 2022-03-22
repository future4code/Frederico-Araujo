const transcreveRNA = (DNA: string): string => {
  const separetadDNA: string[] = DNA.split("");
  const separetadRNA: string[] = separetadDNA.map((item) => {
    if (item === "A") {
      return "U";
    } else if (item === "T") {
      return "A";
    } else if (item === "C") {
      return "G";
    } else {
      return "C";
    }
  });

  const rna = separetadRNA.join("");
  return rna;
};

// console.log(transcreveRNA("ATTGCTGCGCATTAACGACGCGTA"));
